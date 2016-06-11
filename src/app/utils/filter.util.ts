import {Injectable}     from '@angular/core';
import {Product} from '../models/product.model';

@Injectable()
export class FilterUtil {

    constructor() {
    }

    public parseIds(values: string): string[] {
        return this.parseAttribute(values, 'ids');
    }

    public filterProductsByIds(products: Product[], ids: string []) {
        if (ids.length === 0 || ids[0] === '') {
            return products;
        }

        return products.filter(function(product) {
            return ids.indexOf(product.id + '') !== -1;
        });
    }

    private parseAttribute(values: string, attribute: string): string[] {
        let regExp: RegExp = new RegExp(attribute + '=([\\d,]*)');
        let match = regExp.exec(values);

        if (match !== null) {
            return match[1].split(',');
        }

        return [];
    }
}
