export class Footer {

    columnLeft: ColumnLeft;
    columnCenter: ColumnCenter;
    columnRight: ColumnRight;

    constructor (json: any) {

        this.columnLeft = { } as ColumnLeft;
        this.columnLeft.title = json.column_left_title;
        this.columnLeft.pageIds = json.column_left_navigation_general;
        this.columnLeft.pages = [];

        this.columnCenter = {} as ColumnCenter;
        this.columnCenter.title = json.column_center_title;
        this.columnCenter.contact = json.column_center_contact;

        this.columnRight = {} as ColumnRight;
        this.columnRight.title = json.column_right_title;
        this.columnRight.description = json.column_right_description;
        this.columnRight.imageUrl = json.column_right_image;
    }
}

interface ColumnLeft {
    title: string;
    pageIds: any;
    pages: any;
}

interface ColumnCenter {
    title: string;
    contact: string;
}

interface ColumnRight {
    title: string;
    description: string;
    imageUrl: string;
}
