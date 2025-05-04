import { Component, OnInit, Type } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AsyncPipe, NgComponentOutlet, NgIf } from '@angular/common';
import { PluginRegistryService } from '@workspace-mfe-federation/core/plugin-registry/plugin-registry.service';
import { HeaderPlugin } from '@workspace-mfe-federation/plugins/layout/header/src/app/header-plugin';
import { FooterPlugin } from '@workspace-mfe-federation/plugins/layout/footer/src/app/footer-plugin';
import { NavbarPlugin } from '@workspace-mfe-federation/plugins/layout/navbar/src/app/navbar-plugin';
import { BehaviorSubject } from 'rxjs';

@Component({
  standalone: true,
  imports: [RouterModule, NgIf, NgComponentOutlet, AsyncPipe],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'host';
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
