import {useSearchedBooks} from '../services/storeAdapters';
import * as Api from '../services/api';

export function useGetSearchedBooks() {
  const {updateSearchedBooks, searchedBooks} = useSearchedBooks();
  async function getAndSaveSearchedBooks(query: string) {
    const response = await Api.default.getSearchedBooks('', {data: {query}});
    updateSearchedBooks(response.data);
    return searchedBooks ? true : false;
  }
  return {
    getAndSaveSearchedBooks,
  };
}
