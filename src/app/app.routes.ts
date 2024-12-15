import { Routes } from '@angular/router';
import { MotorcycleListComponent } from './motorcycle-list/motorcycle-list.component';
import { MotorcycleDetailComponent } from './motorcycle-detail/motorcycle-detail.component';

export const routes: Routes = [
  { path: '', component: MotorcycleListComponent },
  { path: 'details/:id', component: MotorcycleDetailComponent },
];
