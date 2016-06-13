import {Injectable}     from '@angular/core';
import {Section}        from './../models/section.model';
import {SectionCode}    from '../models/section.model';
import {SectionItem} from '../models/sectionitem.model';

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

    getChildren(section: string): any {

      let list = [];

      if (section.search(SectionCode.PRODUCT.regex) > 0) {
        list = this.splitBySectionCode(section, SectionCode.PRODUCT);
      } else if (section.search(SectionCode.LINK.regex) > 0) {
        list = this.splitBySectionCode(section, SectionCode.LINK);
      } else {
        list.push(new SectionItem(SectionCode.TEXT.code, section));
      }

      return list;
    }

    splitBySectionCode(section: string, code: any): any {
      let list = [];

      let sections = section.split(code.regex);

      list.push(new SectionItem(SectionCode.TEXT.code, sections[0]));
      list.push(new SectionItem(code.code, sections[1]));
      list.push(new SectionItem(SectionCode.TEXT.code, sections[2]));

      return list;
    };
}
