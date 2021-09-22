export type DateString = string;
export type LinkString = string;
export type Author = string;
export type Authors = string[];

export interface IBookPreview {
  title: string;
  authors: Author[];
  imageLinks: {
    smallThumbnail: LinkString;
    thumbnail: LinkString;
  };
}

export interface IBookDetailsPrimaryInfo {
  title: string;
  authors: Author[];
  rate: string;
}

export interface IBookDetailsAboutBookSection {
  description: string;
}

export interface IBookDetailsAuthor {
  authors: Author[];
}

export interface IBookDetails
  extends IBookDetailsPrimaryInfo,
    IBookDetailsAboutBookSection,
    IBookDetailsAuthor {}
