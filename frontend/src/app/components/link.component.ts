import {Component, Input} from '@angular/core';
import {Link}             from './../models/link.model';

@Component({
    selector: 'links',
    template: `
        <div>Links</div>
        <!--<div>Links {{ links.length }}</div>-->
  `
})
export class LinkComponent {
    @Input() links: Link[];

    constructor() {
    }
}
