import {
  IBookDetailsStorageService,
  IBooksForYouStorageService,
  ISearchedBooksStorageService,
} from '../application/ports';
import {useStore} from './store';

export const useBooksForYou = (): IBooksForYouStorageService => {
  return useStore();
};

export const useSearchedBooks = (): ISearchedBooksStorageService => {
  return useStore();
};

export const useBookDetails = (): IBookDetailsStorageService => {
  return useStore();
};
