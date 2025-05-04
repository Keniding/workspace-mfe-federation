import { Component, Type } from '@angular/core';

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
      path?: string;
      component?: Type<Component>;
    }
  };
}

export interface Plugin {
  manifest: PluginManifest;
  initialize(): Promise<void>;
  destroy?(): Promise<void>;
}
