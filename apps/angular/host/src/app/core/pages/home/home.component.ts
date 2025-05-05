import { Component, OnInit, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { PluginRegistryService } from '@workspace-mfe-federation/core/plugin-registry/plugin-registry.service';
import { HeaderPlugin } from '@workspace-mfe-federation/plugins/layout/header/src/app/header-plugin';
import { FooterPlugin } from '@workspace-mfe-federation/plugins/layout/footer/src/app/footer-plugin';
import { NavbarPlugin } from '@workspace-mfe-federation/plugins/layout/navbar/src/app/navbar-plugin';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  headerComponent$ = new BehaviorSubject<Type<Component> | null>(null);
  navbarComponent$ = new BehaviorSubject<Type<Component> | null>(null);
  footerComponent$ = new BehaviorSubject<Type<Component> | null>(null);

  constructor(private readonly pluginRegistry: PluginRegistryService) {}

  ngOnInit() {
    this.initializePlugins();
  }

  private initializePlugins(): void {
    this.registerCorePlugins()
      .then(() => this.loadComponents())
      .catch((error) => this.handlePluginError(error));
  }

  private async loadComponents(): Promise<void> {
    try {
      const header = await this.pluginRegistry.getPluginComponent<Component>(
        'petcare.layout.header',
        'header'
      );
      this.headerComponent$.next(header);

      const navbar = await this.pluginRegistry.getPluginComponent<Component>(
        'petcare.layout.navbar',
        'navbar'
      );
      this.navbarComponent$.next(navbar);

      const footer = await this.pluginRegistry.getPluginComponent<Component>(
        'petcare.layout.footer',
        'footer'
      );
      this.footerComponent$.next(footer);
    } catch (error) {
      console.error('Error cargando componentes:', error);
      throw error;
    }
  }

  private handlePluginError(error: unknown): void {
    console.error('Error en la inicialización de plugins:', error);

    if (error instanceof Error) {
      console.error('Mensaje:', error.message);
      console.error('Stack:', error.stack);
    }
  }

  private async registerCorePlugins() {
    await this.pluginRegistry.registerPlugin(new HeaderPlugin());
    await this.pluginRegistry.registerPlugin(new FooterPlugin());
    await this.pluginRegistry.registerPlugin(new NavbarPlugin());
  }
}
