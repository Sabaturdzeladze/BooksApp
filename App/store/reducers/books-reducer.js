import {
  GET_BOOKS,
  TOGGLE_FAVORITES,
  FILTER_BOOKS,
} from '../actions/books-actions';

const initialState = {
  booksList: [],
  favoriteBooks: [],
  filteredBooks: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return {
        ...state,
        booksList: action.books,
      };

    case TOGGLE_FAVORITES:
      const {bookId} = action;
      const bookIndex = state.favoriteBooks.findIndex(
        book => book.id === bookId,
      );
      let updatedFavorites = [...state.favoriteBooks];
      if (bookIndex >= 0) {
        updatedFavorites.splice(bookIndex, 1);
      } else {
        const foundBook = state.booksList.find(book => book.id === bookId);
        updatedFavorites.push(foundBook);
      }
      return {
        ...state,
        favoriteBooks: updatedFavorites,
      };

    case FILTER_BOOKS:
      const filteredBooks = [...state.booksList].filter(book => {
        if (action.query === '') return false;
        return book.volumeInfo.title
          .toLowerCase()
          .includes(action.query.toLowerCase());
      });
      return {
        ...state,
        filteredBooks,
      };
  }
  return state;
};
