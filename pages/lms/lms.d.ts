export interface LMSPage {
    path: string,
    page: string[],
    title: string,
    children: []
}
export type LMSPages = LMSPage[]

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