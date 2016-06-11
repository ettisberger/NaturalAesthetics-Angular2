import {Component, OnInit}   from '@angular/core';
import {RouteParams} from '@angular/router-deprecated';
import {HTTP_PROVIDERS} from '@angular/http';
import {WordpressService, ComponentService} from '../shared';
import {PageHeaderComponent} from './pageheader.component';
import {Page}                from './../models/page.model';
import {Link}                from '../models/link.model';
import {SectionComponent}    from './section.component';

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

    constructor (
        private routerParams: RouteParams,
        private wordpressService: WordpressService,
        private componentService: ComponentService
        // private dcl: DynamicComponentLoader,
        // private elementRef: ElementRef
    ) {
    }

    ngOnInit() {
        let id = this.routerParams.get('id');

        this.getPage(id);
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
        // sections.forEach(function (section: Section, counter: number) {
        //
        //     // let sectionClass:string = (counter % 2 === 0) ? "na-even" : "na-odd";
        //
        //     // this.dcl.loadIntoLocation(SectionComponent, this.elementRef, 'sections').then((compRef:ComponentRef) => {
        //     //     compRef.instance.section = section;
        //     //     compRef.location.nativeElement.className = compRef.location.nativeElement.className + ' ' + sectionClass;
        //     // });
        //
        // }, this);
    };
}
