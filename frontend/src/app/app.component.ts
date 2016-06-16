import {Component}  from '@angular/core';
import {HeaderComponent, PageComponent, FooterComponent} from './components';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

@Component({
    selector: 'na-app',
    template: require('./app.component.html'),
    directives: [HeaderComponent, FooterComponent, ROUTER_DIRECTIVES]
})
@RouteConfig([
  // { path: '/page/startseite', name: 'Page', component: PageComponent, useAsDefault: true },
  { path: '/page/:id', name: 'Page', component: PageComponent }
])
export class AppComponent { }
