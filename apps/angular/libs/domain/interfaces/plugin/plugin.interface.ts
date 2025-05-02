export interface PluginManifest {
  id: string;
  name: string;
  version: string;
  description?: string;
  dependencies?: string[];
  extensionPoints?: string[];
  exposedComponents: {
    [key: string]: {
      type: 'component' | 'route' | 'service';
      path: string;
    }
  };
}

export interface Plugin {
  manifest: PluginManifest;
  initialize(): Promise<void>;
  destroy?(): Promise<void>;
}
