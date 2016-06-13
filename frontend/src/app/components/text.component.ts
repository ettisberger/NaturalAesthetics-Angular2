import {Component, Input}  from '@angular/core';

@Component({
    selector: 'text',
    template: require('./text.component.html')
})
export class TextComponent {
  @Input() content: String;

    constructor () {}
}

