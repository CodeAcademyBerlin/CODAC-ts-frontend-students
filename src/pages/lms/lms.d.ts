export interface LinkSingle {
  path: string;
  page: string[];
  title: string;
  children: Links;
  index: string;
  parent?: string;
}
export type Links = LinkSingle[];

export interface PageData {
  access: string;
  contentHtml: MDXRemoteSerializeResult;
  navTitle: string;
  order: number;
  page: string;
  title: string;
  metaTitle?: string;
  next?: string;
  prev?: string;
}
