import {Component, OnInit}          from '@angular/core';
import {HTTP_PROVIDERS}             from '@angular/http';
import {ROUTER_DIRECTIVES}          from '@angular/router-deprecated';
import {WordpressService}           from '../shared';
import {Footer}                     from './../models/footer.model';
import {MenuItem}                   from './../models/menuitem.model';

@Component({
    selector: 'footer',
    template: `
        <div class="na-inlay">
            <div class="na-row na-row-large-vspace">
                <div class="na-column-3">
                    <div class="na-footer-box">
                        <div class="na-footer-box-title">{{ footer?.columnLeft?.title }}</div>
                        <div class="na-footer-box-content">
                            <ul>
                                <li *ngFor="let page of footer?.columnLeft?.pages">
                                      <a [routerLink]="['/Page', {id: page?.title | lowercase}]">{{ page?.title }}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="na-column-3">
                    <div class="na-footer-box">
                        <div class="na-footer-box-title">{{ footer?.columnCenter?.title }}</div>
                        <div class="na-footer-box-content" [innerHTML]="footer?.columnCenter?.contact"></div>
                    </div>
                </div>
                <div class="na-column-6">
                    <div class="na-footer-box">
                        <div class="na-footer-box-title">{{ footer?.columnRight?.title }}</div>
                        <div class="na-footer-box-content" [innerHTML]="footer?.columnRight?.description">
                        </div>
                    </div>
                </div>
            </div>
        </div>
  `,
    directives: [ROUTER_DIRECTIVES],
    providers: [WordpressService, HTTP_PROVIDERS]
})
export class FooterComponent implements OnInit {
  errorMessage: string;
  footer: Footer;

  constructor (private wordpressService: WordpressService) {}

  ngOnInit() {
      this.getFooter();
  }

  private getFooter() {
      this.wordpressService.getFooter()
          .subscribe(
              footer => {
                  this.footer = footer;

                  this.wordpressService.getMenu()
                      .subscribe(
                          menuItems => {
                             this.mapPageIds(footer, menuItems);
                          }
                          , error =>  this.errorMessage = <any>error
                      );
              }
                  , error =>  this.errorMessage = <any>error
              );
  }

  private mapPageIds(footer: Footer, menuItems: MenuItem[]) {
      menuItems.forEach(function(menuItem) {
          footer.columnLeft.pageIds.forEach(function(pageId) {
              if (pageId === menuItem.object_id) {
                  footer.columnLeft.pages.push(menuItem);
              }
          });
      });

      footer.columnLeft.pages.sort(function(a, b) {
          return a.order - b.order;
      });
  }
}
