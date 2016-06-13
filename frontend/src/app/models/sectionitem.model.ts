import {SectionCode} from './section.model';

export class SectionItem {
  code: SectionCode;
  content: String;

  constructor(code: SectionCode, content: String) {
    this.code = code;
    this.content = content;
  }
}
