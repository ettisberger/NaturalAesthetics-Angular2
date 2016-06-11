export class Link {
    name: string;
    url: string;
    imageUrl: string;

    constructor(json: any) {
        this.name = json.link_name;
        this.url = json.link_url;
        this.imageUrl = json.link_image;
    }
}
