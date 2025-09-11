import { Routes } from '@angular/router';
import { ViewQbanks } from './components/view-qbanks/view-qbanks';
import { Dashboard } from './components/dashboard/dashboard';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Dashboard },
  { path: 'view-qbanks', component: ViewQbanks },
  { path: '**', redirectTo: '/dashboard' }
];
