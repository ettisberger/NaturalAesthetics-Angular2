import {Injectable}     from '@angular/core';
import {Section}        from './../models/section.model';
import {SectionCode}    from '../models/section.model';

@Injectable()
export class ComponentService {

    constructor() {
    }

    getSections(content: string): Section[] {
        let enrichedSections: Section[] = [];

        let sections = content.split(SectionCode.SECTION.code);

        sections.forEach(function (section) {

            let tmpSection: Section = new Section();

            tmpSection.setChildren(this.getChildren(section));

            enrichedSections.push(tmpSection);
        }, this);


        return enrichedSections;
    }

    getChildren(section: string): Map<string, string> {

      let map = new Map<string, string>();

      if (section.search(SectionCode.PRODUCT.regex) > 0) {
          map = this.splitBySectionCode(section, SectionCode.PRODUCT);
      } else if (section.search(SectionCode.LINK.regex) > 0) {
          map = this.splitBySectionCode(section, SectionCode.LINK);
      } else {
          map.set(SectionCode.TEXT.code, section);
      }

      return map;
    }

    splitBySectionCode(section: string, code: any): Map<string, string> {
      let map = new Map<string, string>();

      let sections = section.split(code.regex);

      map.set(SectionCode.TEXT.code, sections[0]);
      map.set(code.code, sections[1]);
      map.set(SectionCode.TEXT.code, sections[2]);

      return map;
    };
}
