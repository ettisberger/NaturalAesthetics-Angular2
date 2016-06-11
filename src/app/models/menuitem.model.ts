export interface MenuItem {
    id: number,
    order: number;
    title: string,
    parent: number,
    url: string,
    type_label: string,
    object_id: number,
    children: MenuItem;
}