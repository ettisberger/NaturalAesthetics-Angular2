import {Injectable}     from '@angular/core';
import {Http, Response} from '@angular/http';
import {Product}        from './../models/product.model';
import {Page}           from './../models/page.model';
import {MenuItem}       from './../models/menuitem.model';
import {Footer}         from './../models/footer.model';
import {Observable}     from 'rxjs/Observable';
import {Link}           from '../models/link.model';

@Injectable()
export class WordpressService {

    private baseUrl = 'http://localhost:8090/wp-json';
    private menuUrl = '/wp-api-menus/v2/menu-locations';
    private acfUrl = '/acf/v2';
    private wpUrl = '/wp/v2';

    constructor (private http: Http) {}


    getMenu() {
        return this.http.get(this.baseUrl + this.menuUrl + '/primary')
            .map(res => <Array<MenuItem>> res.json())
            .catch(this.handleError);
    }

    getProducts() {
        return this.http.get(this.baseUrl + this.acfUrl + '/options/products')
            .map(res => <Array<Product>> res.json().products)
            .catch(this.handleError);
    }

    getLinks() {
        return this.http.get(this.baseUrl + this.acfUrl + '/options/links')
            .map(res => res.json().links)
            .map(json => {

                let links = [];

                json.forEach(function(link){
                    links.push(new Link(link));
                });

                return links;
            })
            .catch(this.handleError);
    }

    getPages() {
        return this.http.get(this.baseUrl + this.wpUrl + '/pages')
            .map(res => res.json())
            .map(json => {

                let pages = [];

                json.forEach(function(page){
                    pages.push(new Page(page));
                });

                return pages;
            })
            .catch(this.handleError);
    }

    getPage(id: string) {
        return this.http.get(this.baseUrl + this.wpUrl + '/pages?filter[name]=' + id)
            .map(res => res.json())
            .map(json => new Page(json[0]))
            .catch(this.handleError);
    }

    getFooter() {
        return this.http.get(this.baseUrl + this.acfUrl + '/options/footer')
            .map(res => res.json().footer[0])
            .map(json => {
                return new Footer(json);
            })
            .catch(this.handleError);
    }

    private handleError (error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
