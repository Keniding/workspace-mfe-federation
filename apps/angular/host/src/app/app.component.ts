import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgComponentOutlet, NgIf } from '@angular/common';
import { PluginRegistryService } from '@workspace-mfe-federation/core/plugin-registry/plugin-registry.service';
import { HeaderPlugin } from '../../../plugins/layout/header/src/app/header-plugin';

@Component({
  imports: [RouterModule, NgIf, NgComponentOutlet],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'host';
  headerComponent: any;
  navbarComponent: any;
  footerComponent: any;

  constructor(private readonly pluginRegistry: PluginRegistryService) {}

  async ngOnInit() {
    // Registrar plugins core
    await this.registerCorePlugins();

    // Cargar componentes
    this.headerComponent = await this.pluginRegistry.getPluginComponent(
      'petcare.layout.header',
      'header'
    );
    this.navbarComponent = await this.pluginRegistry.getPluginComponent(
      'petcare.layout.navbar',
      'navbar'
    );
    this.footerComponent = await this.pluginRegistry.getPluginComponent(
      'petcare.layout.footer',
      'footer'
    );
  }

  private async registerCorePlugins() {
    await this.pluginRegistry.registerPlugin(new HeaderPlugin());
    // await this.pluginRegistry.registerPlugin(new FooterPlugin());
    // await this.pluginRegistry.registerPlugin(new NavbarPlugin());
    // Registrar otros plugins core
  }
}
