import { PluginManifest, Plugin } from '@workspace-mfe-federation/domain/interfaces/plugin/plugin.interface';
import { HeaderComponent, MobileHeaderComponent } from '@workspace-mfe-federation/molecules';

export class HeaderPlugin implements Plugin {
  manifest: PluginManifest = {
    id: 'petcare.layout.header',
    name: 'Header Plugin',
    version: '1.0.0',
    description: 'Provides the main header component for PetCare Connect',
    exposedComponents: {
      'header': {
        type: 'component',
        component: HeaderComponent
      },
      'mobile-header': {
        type: 'component',
        component: MobileHeaderComponent
      }
    }
  };

  async initialize(): Promise<void> {
    console.log('Header plugin initialized');
    // Registrar eventos, servicios, etc.
  }

  async destroy(): Promise<void> {
    console.log('Header plugin destroyed');
    // Limpiar recursos
  }
}
