import {Component}  from '@angular/core';
import {HeaderComponent, FooterComponent} from './components';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
    selector: 'na-app',
    template: require('./app.component.html'),
    directives: [HeaderComponent, FooterComponent, ROUTER_DIRECTIVES]
})

export class AppComponent {

}
