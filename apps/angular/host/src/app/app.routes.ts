import { Route } from '@angular/router';
import { HomeComponent } from './core/pages/home/home.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'vet-dashboard',
    loadChildren: () => import('vetdashboard/Routes')
      .then(m => m.remoteRoutes)
  }
];
