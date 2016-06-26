import {Component}  from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {HeaderComponent, FooterComponent} from './components';

@Component({
    selector: 'na-app',
    template: require('./app.component.html'),
    directives: [HeaderComponent, FooterComponent, ROUTER_DIRECTIVES]
})

export class AppComponent {

}
