import {IBookDetails, IBookDetailsAuthor, IBookPreview} from '../domain/Book';

export interface IBooksForYouStorageService {
  booksForYou: IBookPreview[];
  updateBooksForYou(booksForYou: IBookPreview[]): void;
}

export interface IBookDetailsStorageService {
  bookDetails: IBookDetails;
  updateBookDetails(
    bookDetalis: IBookPreview | IBookDetailsAuthor | IBookDetails,
  ): void;
}

export interface ISearchedBooksStorageService {
  searchedBooks: IBookPreview[];
  updateSearchedBooks(booksForYou: IBookPreview[]): void;
}
