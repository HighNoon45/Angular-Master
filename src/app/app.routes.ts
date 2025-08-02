import { Routes } from '@angular/router';
import { ApiViewComponent } from './api-view/api-view.component';
import { LandingpageComponent } from './landingpage/landingpage.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingpageComponent,
    title: 'Bootstrap App',
  },
  {
    path: 'api-view',
    component: ApiViewComponent,
    title: 'Angularized',
  },
];
