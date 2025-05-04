import { Component, Type } from '@angular/core';
import { PluginManifest, Plugin } from '@workspace-mfe-federation/domain/interfaces/plugin/plugin.interface';
import { MobileNavbarComponent, NavbarComponent } from '@workspace-mfe-federation/molecules';

export class NavbarPlugin implements Plugin {
  manifest: PluginManifest = {
    id: 'petcare.layout.navbar',
    name: 'Navbar Plugin',
    version: '1.0.0',
    description: 'Provides the main navbar component for PetCare Connect',
    exposedComponents: {
      'navbar': {
        type: 'component',
        component: NavbarComponent as Type<Component>
      },
      'mobile-navbar': {
        type: 'component',
        component: MobileNavbarComponent as Type<Component>
      }
    }
  };

  async initialize(): Promise<void> {
    console.log('Navbar plugin initialized');
    // Registrar eventos, servicios, etc.
  }

  async destroy(): Promise<void> {
    console.log('Navbar plugin destroyed');
    // Limpiar recursos
  }
}
