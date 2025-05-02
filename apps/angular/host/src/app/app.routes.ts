import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';
import { loadRemote } from '@module-federation/enhanced/runtime';

export const appRoutes: Route[] = [
  {
    path: 'ownerdashboard',
    loadChildren: () =>
      loadRemote<typeof import('ownerdashboard/Routes')>(
        'ownerdashboard/Routes'
      ).then((m) => m!.remoteRoutes),
  },
  {
    path: 'vetdashboard',
    loadChildren: () =>
      loadRemote<typeof import('vetdashboard/Routes')>(
        'vetdashboard/Routes'
      ).then((m) => m!.remoteRoutes),
  },
  {
    path: 'dashboards',
    loadChildren: () =>
      loadRemote<typeof import('dashboards/Routes')>('dashboards/Routes').then(
        (m) => m!.remoteRoutes
      ),
  },
  {
    path: 'appointment',
    loadChildren: () =>
      loadRemote<typeof import('appointment/Routes')>(
        'appointment/Routes'
      ).then((m) => m!.remoteRoutes),
  },
  {
    path: 'petprofile',
    loadChildren: () =>
      loadRemote<typeof import('petprofile/Routes')>('petprofile/Routes').then(
        (m) => m!.remoteRoutes
      ),
  },
  {
    path: 'iaconsultant',
    loadChildren: () =>
      loadRemote<typeof import('iaconsultant/Routes')>(
        'iaconsultant/Routes'
      ).then((m) => m!.remoteRoutes),
  },
  {
    path: 'landing',
    loadChildren: () =>
      loadRemote<typeof import('landing/Routes')>('landing/Routes').then(
        (m) => m!.remoteRoutes
      ),
  },
  {
    path: 'features',
    loadChildren: () =>
      loadRemote<typeof import('features/Routes')>('features/Routes').then(
        (m) => m!.remoteRoutes
      ),
  },
  {
    path: 'hero',
    loadChildren: () =>
      loadRemote<typeof import('hero/Routes')>('hero/Routes').then(
        (m) => m!.remoteRoutes
      ),
  },
  {
    path: 'navbar',
    loadChildren: () =>
      loadRemote<typeof import('navbar/Routes')>('navbar/Routes').then(
        (m) => m!.remoteRoutes
      ),
  },
  {
    path: 'footer',
    loadChildren: () =>
      loadRemote<typeof import('footer/Routes')>('footer/Routes').then(
        (m) => m!.remoteRoutes
      ),
  },
  {
    path: 'header',
    loadChildren: () =>
      loadRemote<typeof import('header/Routes')>('header/Routes').then(
        (m) => m!.remoteRoutes
      ),
  },
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
