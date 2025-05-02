import { PluginManifest, Plugin } from '@workspace-mfe-federation/domain/interfaces/plugin/plugin.interface';

export class HeaderPlugin implements Plugin {
  manifest: PluginManifest = {
    id: 'petcare.layout.header',
    name: 'Header Plugin',
    version: '1.0.0',
    description: 'Provides the main header component for PetCare Connect',
    exposedComponents: {
      'header': {
        type: 'component',
        path: './components/header.component'
      },
      'mobile-header': {
        type: 'component',
        path: './components/mobile-header.component'
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
