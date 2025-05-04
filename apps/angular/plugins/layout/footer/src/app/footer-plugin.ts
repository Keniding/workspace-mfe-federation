import { PluginManifest, Plugin } from '@workspace-mfe-federation/domain/interfaces/plugin/plugin.interface';
import { FooterComponent, MobileFooterComponent } from '@workspace-mfe-federation/molecules';

export class FooterPlugin implements Plugin {
  manifest: PluginManifest = {
    id: 'petcare.layout.footer',
    name: 'Footer Plugin',
    version: '1.0.0',
    description: 'Provides the main footer component for PetCare Connect',
    exposedComponents: {
      'footer': {
        type: 'component',
        component: FooterComponent
      },
      'mobile-footer': {
        type: 'component',
        component: MobileFooterComponent
      }
    }
  };

  async initialize(): Promise<void> {
    console.log('Footer plugin initialized');
    // Registrar eventos, servicios, etc.
  }

  async destroy(): Promise<void> {
    console.log('Footer plugin destroyed');
    // Limpiar recursos
  }
}
