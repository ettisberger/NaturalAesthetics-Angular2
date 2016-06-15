import {Component, Input, OnInit, ComponentResolver, ViewContainerRef, ViewChild}   from '@angular/core';
import {Section} from '../models/section.model';
import {SectionCode} from '../models/section.model';
import {FilterUtil} from '../utils/filter.util';
import {LinkComponent} from './link.component';
import {ProductsComponent} from './products.component';
import {ComponentService} from '../shared/component.service';
import {SectionItem} from '../models/sectionitem.model';
import {TextComponent} from './text.component';
import {TeamComponent} from './team.component';

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
        this.section.getChildren().forEach(function(sectionItem: SectionItem) {
            if (sectionItem.code === SectionCode.TEXT.code) {
              this.compiler.resolveComponent(TextComponent).then((factory) => {
                let compRef = this.target.createComponent(factory);
                compRef.instance.content = sectionItem.content;
              });
            } else if (sectionItem.code === SectionCode.PRODUCT.code) {
              this.compiler.resolveComponent(ProductsComponent).then((factory) => {
                let compRef = this.target.createComponent(factory);
                    compRef.instance.ids = this.filter.parseIds(sectionItem.content);
              });
            } else if (sectionItem.code === SectionCode.TEAM.code) {
              this.compiler.resolveComponent(TeamComponent).then((factory) => {
                let compRef = this.target.createComponent(factory);
                compRef.instance.ids = this.filter.parseIds(sectionItem.content);
              });
            } else if (sectionItem.code === SectionCode.LINK.code) {
              this.compiler.resolveComponent(LinkComponent).then((factory) => {
                this.target.createComponent(factory, null, this.target.injector);
              });
            }
        }, this);
    }
}

