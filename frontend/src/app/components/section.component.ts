import {Component, Input, OnInit, ComponentResolver, ViewContainerRef, ViewChild}   from '@angular/core';
import {Section} from '../models/section.model';
import {SectionCode} from '../models/section.model';
import {FilterUtil} from '../utils/filter.util';
import {LinkComponent} from './link.component';
import {ProductsComponent} from './products.component';
import {ComponentService} from '../shared/component.service';

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
    @ViewChild('target', {read: ViewContainerRef}) target;

    constructor (private componentService: ComponentService, private compiler: ComponentResolver, private filter: FilterUtil) {

    }

    ngOnInit() {
        this.section.getChildren().forEach(function(value, key) {
            if (key === SectionCode.TEXT.code) {
                this.sectionContent = value;
            } else if (key === SectionCode.PRODUCT.code) {
              this.compiler.resolveComponent(ProductsComponent).then((factory) => {
                let compRef = this.target.createComponent(factory, null, this.target.injector);
                    compRef.instance.ids = this.filter.parseIds(value);
              });
            } else if (key === SectionCode.LINK.code) {
              this.compiler.resolveComponent(LinkComponent).then((factory) => {
                this.target.createComponent(factory, null, this.target.injector);
              });
            }
        }, this);
    }
}

