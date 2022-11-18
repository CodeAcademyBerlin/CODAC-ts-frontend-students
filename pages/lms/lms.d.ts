export interface Link {
    path: string,
    page: string[],
    title: string,
    children: Links
}
export type Links = Link[]

export interface PageData {
    access: string,
    contentHtml: string,
    navTitle: string,
    order: number,
    page: string,
    title: string,
    metaTitle?: string,
    next?: string,
    prev?: string
}