import {Component, OnInit}         from '@angular/core';
import {HTTP_PROVIDERS}            from '@angular/http';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';
import {WordpressService}          from '../shared';
import {MenuItem}                  from './../models/menuitem.model';

@Component({
    selector: 'navigation',
    template: require('./navigation.component.html'),
    directives: [ROUTER_DIRECTIVES],
    providers: [WordpressService, HTTP_PROVIDERS]
})
export class NavigationComponent implements OnInit {
    errorMessage: string;
    menuItems: MenuItem[];

    constructor (private router: Router, private wordpressService: WordpressService) {}

    ngOnInit() {
        this.getMenu();
    }

    getMenu() {
        this.wordpressService.getMenu()
            .subscribe(
                menuItems => {
                    this.menuItems = menuItems;

                    this.router.navigate(['/page', this.menuItems[0].title.toLowerCase()]);
                },
                error =>  this.errorMessage = <any>error);
    }
}
