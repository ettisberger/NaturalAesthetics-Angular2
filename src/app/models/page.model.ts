export class Page {
    id: number;
    date: string;
    dateGmt: string;
    modified: string;
    modifiedGmt: string;
    slug: string;
    type: string;
    link: string;
    title: string;
    content: string;
    pagedata: PageData;

    constructor(json: any) {
        this.id = json.id;
        this.date = json.date;
        this.dateGmt = json.date_gmt;
        this.modifiedGmt = json.modified_gmt;
        this.slug = json.slug;
        this.type = json.type;
        this.link = json.link;
        this.title = json.title.rendered;
        this.content = json.content.rendered;

        this.pagedata = {} as PageData;

        this.pagedata.title = json.acf.title;
        this.pagedata.slogan = json.acf.slogan;
        this.pagedata.imageUrl = json.acf.image;
    }
}

class PageData {
    title: string;
    slogan: string;
    imageUrl: string;
}
