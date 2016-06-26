import {Component, Input, OnInit, ComponentResolver, ViewContainerRef, ViewChild, HostBinding}   from '@angular/core';
import {Section, SectionCode, SectionItem} from '../models';
import {FilterUtil} from '../utils';
import {LinkComponent} from './link.component';
import {ProductsComponent} from './products.component';
import {TextComponent} from './text.component';
import {TeamComponent} from './team.component';

@Component({
    selector: 'section',
    template: require('./section.component.html'),
    providers: [FilterUtil]
})
export class SectionComponent implements OnInit {
  @Input() section: Section;
  @ViewChild('target', {read: ViewContainerRef}) target;
  @HostBinding('class') classes = 'na-section';
  @HostBinding('class.na-even') get even() { return this.section.isEven(); }
  @HostBinding('class.na-odd') get odd() { return !this.section.isEven(); }

  constructor (private compiler: ComponentResolver, private filter: FilterUtil) {
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

