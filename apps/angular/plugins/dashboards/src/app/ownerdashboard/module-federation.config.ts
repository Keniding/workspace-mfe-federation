import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'ownerdashboard',
  exposes: {
    './Routes':
      'apps/angular/plugins/dashboards/src/app/ownerdashboard/src/app/remote-entry/entry.routes.ts',
  },
};

/**
 * Nx requires a default export of the config to allow correct resolution of the module federation graph.
 **/
export default config;
