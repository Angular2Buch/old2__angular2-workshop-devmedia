import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { BookDetailsComponent } from './book-details/book-details.component';
//import { NotFoundComponent } from './notfound/not-found.component';

const APP_ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  { path: 'dashboard',  component: DashboardComponent},
  { path: 'book/:isbn', component: BookDetailsComponent },
  //{ path: '**',         component: NotFoundComponent }
];

export const appRouting = RouterModule.forRoot(APP_ROUTES);
