import {Component, OnInit}   from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {WordpressService, ComponentService} from '../../shared';
import {PageHeaderComponent} from './pageheader.component';
import {Page}                from '../../models/page.model';
import {Link}                from '../../models/link.model';
import {SectionComponent}    from './../section.component';
import {Section}            from '../../models/section.model';
import {ViewContainerRef, ComponentResolver, ViewChild} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
    selector: 'page',
    template: require('./page.component.html'),
    providers: [WordpressService, ComponentService, HTTP_PROVIDERS],
    directives: [PageHeaderComponent, SectionComponent]
})

export class PageComponent implements OnInit {
    page: Page;
    links: Link[];
    errorMessage: string;
    @ViewChild('target', {read: ViewContainerRef}) target;


  constructor (private router: Router, private route: ActivatedRoute, private wordpressService: WordpressService,
        private componentService: ComponentService, private compiler: ComponentResolver
    ) {
    }

  ngOnInit() {
      let id = this.route.snapshot.params['id'];

      if (id) {
        this.getPage(id);
      }
  }

  getPage(id: string) {
      this.wordpressService.getPage(id)
          .subscribe(
              page => {
                  this.page = page;

                  let sections = this.componentService.getSections(page.content);

                  this.loadSectionTemplates(sections);
              },
              error =>  this.errorMessage = <any>error);
  }

  private loadSectionTemplates(sections) {
      sections.forEach(function (section: Section, counter: number) {
        this.compiler.resolveComponent(SectionComponent).then((factory) => {
          let compRef = this.target.createComponent(factory);
          compRef.instance.section = section;
          section.setIsEven(counter % 2 === 0);
        });
      }, this);
  };
}
