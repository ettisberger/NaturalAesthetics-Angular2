import {Component}      from '@angular/core';
import {NavigationComponent}    from './navigation.component';

@Component({
    selector: 'header',
    template: `
        <div class="na-row">
            <div class="na-column-6">
                <a href="/"><img class="na-main-header-logo" src="../../assets/images/logo_small.png" /></a>
            </div>
            <div class="na-column-6">
                <navigation class="na-main-navigation"></navigation>
            </div>
        </div>
  `,
    directives: [NavigationComponent]
})
export class HeaderComponent {
    constructor () {}
}
