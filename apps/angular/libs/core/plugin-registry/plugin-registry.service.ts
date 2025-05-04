import { Injectable, Injector, Type } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Plugin } from '../../domain/interfaces/plugin/plugin.interface';

@Injectable({
  providedIn: 'root'
})
export class PluginRegistryService {
  private plugins = new Map<string, Plugin>();
  private pluginsSubject = new BehaviorSubject<Plugin[]>([]);

  constructor(private injector: Injector) {}

  get plugins$(): Observable<Plugin[]> {
    return this.pluginsSubject.asObservable();
  }

  async registerPlugin(plugin: Plugin): Promise<void> {
    if (this.plugins.has(plugin.manifest.id)) {
      console.warn(`Plugin ${plugin.manifest.id} already registered. Skipping.`);
      return;
    }

    // Verificar dependencias
    if (plugin.manifest.dependencies?.length) {
      for (const depId of plugin.manifest.dependencies) {
        if (!this.plugins.has(depId)) {
          throw new Error(`Dependency ${depId} not found for plugin ${plugin.manifest.id}`);
        }
      }
    }

    // Inicializar plugin
    await plugin.initialize();

    // Registrar plugin
    this.plugins.set(plugin.manifest.id, plugin);
    this.pluginsSubject.next(Array.from(this.plugins.values()));
  }

  async unregisterPlugin(pluginId: string): Promise<void> {
    const plugin = this.plugins.get(pluginId);
    if (!plugin) return;

    // Verificar si otros plugins dependen de este
    this.plugins.forEach((p, id) => {
      if (p.manifest.dependencies?.includes(pluginId)) {
        throw new Error(`Cannot unregister plugin ${pluginId} because ${id} depends on it`);
      }
    });

    // Destruir plugin
    if (plugin.destroy) {
      await plugin.destroy();
    }

    // Eliminar plugin
    this.plugins.delete(pluginId);
    this.pluginsSubject.next(Array.from(this.plugins.values()));
  }

  getPlugin(pluginId: string): Plugin | undefined {
    return this.plugins.get(pluginId);
  }

  async getPluginComponent<T>(pluginId: string, componentKey: string): Promise<Type<T> | null> {
    const plugin = this.getPlugin(pluginId);
    if (!plugin) return null;

    const componentInfo = plugin.manifest.exposedComponents[componentKey];
    if (!componentInfo || componentInfo.type !== 'component') return null;

    // Si ya tienes el componente directamente, devuélvelo
    if (componentInfo.component) {
      return componentInfo.component as Type<T>;
    }

    // Si solo tienes path, mantén la lógica de carga dinámica
    if (componentInfo.path) {
      try {
        const module = await import(componentInfo.path);
        return module.default;
      } catch (err) {
        console.error(`Error loading component ${componentKey} from plugin ${pluginId}:`, err);
        return null;
      }
    }

    return null;
  }
}
