import {Component, Input} from '@angular/core';
import {Page} from './../models/page.model';

@Component({
    selector: 'pageheader',
    template: `
        <div class="na-page-header">
            <div class="na-page-image" [ngStyle]="{'background-image':'url(' + page?.pagedata?.imageUrl +')'}"></div>
        </div>
  `
})
export class PageHeaderComponent {
    @Input() page: Page;
}
