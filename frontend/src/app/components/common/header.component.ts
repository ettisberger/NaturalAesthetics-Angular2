import {Component}      from '@angular/core';
import {NavigationComponent} from './navigation.component';

@Component({
    selector: 'header',
    template: require('./header.component.html'),
    directives: [NavigationComponent]
})
export class HeaderComponent {
    constructor () {}
}
