import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';
import { loadRemote } from '@module-federation/enhanced/runtime';

export const appRoutes: Route[] = [
  {
    path: 'layout',
    loadChildren: () =>
      loadRemote<typeof import('layout/Routes')>('layout/Routes').then(
        (m) => m!.remoteRoutes
      ),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
