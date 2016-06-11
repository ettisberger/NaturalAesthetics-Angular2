export class Section {
    private sectionMap: Map<string, string>;

    constructor() {
    }

    getChildren(): Map<string, string> {
        return this.sectionMap;
    }

    setChildren(map: Map<string, string>) {
        this.sectionMap = map;
    }
}

export class SectionCode {
    public static SECTION = {code: '[abschnitt]', regex: new RegExp('(\\[abschnitt.*\\])')};
    public static TEXT = {code: '[text]', regex: new RegExp('(\\[text.*\\])')};
    public static PRODUCT = {code: '[produkte]', regex: new RegExp('(\\[produkte.*\\])')};
    public static LINK = {code: '[links]', regex: new RegExp('(\\[links.*\\])')};
}
