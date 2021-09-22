import React, {useContext, useState} from 'react';
import {
  IBookDetailsAboutBookSection,
  IBookDetailsAuthor,
  IBookDetailsPrimaryInfo,
} from '../domain/Book';

const StoreContext = React.createContext<any>({});
export const useStore = () => useContext(StoreContext);

export const Provider: React.FC = ({children}) => {
  // ...Части стора для других сущностей.
  const [searchedBooks, setSearchedBooks] = useState([]);
  const [booksForYou, setBooksForYou] = useState([]);
  const [selectedBookDetails, setSelectedBookDetails] = useState<
    IBookDetailsPrimaryInfo | IBookDetailsAboutBookSection | IBookDetailsAuthor
  >();
  const value = {
    // ...
    booksForYou: booksForYou,
    updateBooksForYou: setBooksForYou,
    searchedBooks: searchedBooks,
    updateSearchedBooks: setSearchedBooks,
    bookDetails: selectedBookDetails,
    updateBookDetails: setSelectedBookDetails,
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
