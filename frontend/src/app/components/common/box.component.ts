import {Component, Input} from '@angular/core';
import {Box} from '../../models';

@Component({
    selector: 'boxes',
    template: `
        <div>Boxes</div>
  `
})
export class BoxComponent {
    @Input() boxes: Box[];
}
