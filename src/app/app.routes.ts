import { Routes } from '@angular/router';
import { ViewQbanks, Dashboard, TakeTestComponent } from 'quiz-components';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Dashboard },
  { path: 'view-qbanks', component: ViewQbanks },
  { path: 'take-test/:qbankId', component: TakeTestComponent },
  { path: '**', redirectTo: '/dashboard' }
];
