export class Section {
  private sections: any;
  private even: boolean;

  constructor() {
  }

  setIsEven(value: boolean) {
    this.even = value;
  }

  isEven(): boolean {
    return this.even;
  }

  getChildren(): any {
      return this.sections;
  }

  setChildren(sections: any) {
      this.sections = sections;
  }
}

export class SectionCode {
    public static SECTION = {code: '[abschnitt]', regex: new RegExp('(\\[abschnitt.*\\])')};
    public static TEXT = {code: '[text]', regex: new RegExp('(\\[text.*\\])')};
    public static PRODUCT = {code: '[produkte]', regex: new RegExp('(\\[produkte.*\\])')};
    public static LINK = {code: '[links]', regex: new RegExp('(\\[links.*\\])')};
    public static TEAM = {code: '[team]', regex: new RegExp('(\\[team.*\\])')};
}
