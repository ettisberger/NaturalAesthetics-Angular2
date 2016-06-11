import {Component, Input, OnInit, DynamicComponentLoader, ElementRef}   from '@angular/core';
import {Section} from '../models/section.model';
import {SectionCode} from '../models/section.model';
import {LinkComponent} from './link.component';
import {FilterUtil} from '../utils/filter.util';

@Component({
    selector: 'section',
    host: {
        'class': 'na-section'
    },
    template: require('./section.component.html'),
    providers: [FilterUtil]
})
export class SectionComponent implements OnInit {
    @Input() section: Section;
    sectionContent: string;

    constructor (private dcl: DynamicComponentLoader, private elementRef: ElementRef, private filter: FilterUtil) {

    }

    ngOnInit() {
        this.section.getChildren().forEach(function(value, key) {
            if (key === SectionCode.TEXT.code) {
                this.sectionContent = value;
            } else if (key === SectionCode.PRODUCT.code) {
                // this.dcl.loadIntoLocation(ProductsComponent, this.elementRef, 'childs').then((compRef:ComponentRef) => {
                //     compRef.instance.ids = this.filter.parseIds(value);
                // });
            } else if (key === SectionCode.LINK.code) {
                this.dcl.loadIntoLocation(LinkComponent, this.elementRef, 'childs');
            }
        }, this);
    }
}

