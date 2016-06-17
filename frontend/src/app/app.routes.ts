import {provideRouter, RouterConfig} from '@angular/router';
import {PageComponent} from './components/page.component';

export const routes: RouterConfig = [
  { path: '/page/:id', component: PageComponent },
  { path: '/page/startseite', component: PageComponent, index: true }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
