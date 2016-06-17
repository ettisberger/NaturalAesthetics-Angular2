import {Component, OnInit}          from '@angular/core';
import {HTTP_PROVIDERS}             from '@angular/http';
import {ROUTER_DIRECTIVES}          from '@angular/router';
import {WordpressService}           from '../shared';
import {Footer}                     from './../models/footer.model';
import {MenuItem}                   from './../models/menuitem.model';

@Component({
    selector: 'footer',
    template: require('./footer.component.html'),
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
