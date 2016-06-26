import {Component, Input} from '@angular/core';
import {Page} from '../../models';

@Component({
    selector: 'na-pageheader',
    template: require('./pageheader.component.html')
})
export class PageHeaderComponent {
    @Input() page: Page;
}
