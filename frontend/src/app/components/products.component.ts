import {Component, OnInit}  from '@angular/core';
import {HTTP_PROVIDERS}     from '@angular/http';
import {Product}            from './../models';
import {WordpressService}   from '../shared';
import {FilterUtil}         from '../utils';

@Component({
    selector: 'products',
    template: require('./products.component.html'),
    providers: [WordpressService, HTTP_PROVIDERS, FilterUtil]
})
export class ProductsComponent implements OnInit {
    errorMessage: string;
    products: Product[];
    ids: string [];

    constructor (private wordpressService: WordpressService, private filter: FilterUtil) {}

    ngOnInit() {
        this.loadProducts();
    }

    loadProducts() {
        this.wordpressService.getProducts()
            .subscribe(
                products => {
                    this.products = this.filter.filterProductsByIds(products, this.ids);
                },
                error =>  this.errorMessage = <any>error);
    }
}
