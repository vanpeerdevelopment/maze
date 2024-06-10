import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/overview', pathMatch: 'full' },
  { path: 'overview', loadComponent: () => import('./page/maze-overview.page') },
  { path: 'detail/:id', loadComponent: () => import('./page/maze-detail.page') },
  { path: '**', loadComponent: () => import('./page/maze-overview.page') },
];
