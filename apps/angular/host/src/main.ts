import { init } from '@module-federation/enhanced/runtime';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

interface RemoteConfig {
  name: string;
  entry: string;
}

async function loadManifest(): Promise<RemoteConfig[]> {
  try {
    const res = await fetch('/module-federation.manifest.json');
    if (!res.ok) {
      console.warn('No se pudo cargar el manifiesto. Usando configuración vacía.');
      return [];
    }
    const remotes: Record<string, string> = await res.json();
    return Object.entries(remotes).map(([name, entry]) => ({
      name,
      entry: String(entry)
    }));
  } catch (error) {
    console.error('Error cargando el manifiesto:', error);
    return [];
  }
}

loadManifest()
  .then((remotes) => init({ name: 'host', remotes }))
  .then(() => import('./bootstrap').catch((err) => console.error('Error al iniciar la aplicación:', err)));
