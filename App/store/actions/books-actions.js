import env from '../../../environment/Environments';

export const GET_BOOKS = 'GET_BOOKS';
export const TOGGLE_FAVORITES = 'TOGGLE_FAVORITES';
export const FILTER_BOOKS = 'FILTER_BOOKS';

export const fetchBooks = () => {
  return async dispatch => {
    try {
      const response = await fetch(
        'https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=' +
          env.googleApiKey,
      );

      const books = (await response.json()).items;
      dispatch({
        type: GET_BOOKS,
        books,
      });
    } catch (error) {
      throw error;
    }
  };
};

export const filterBooks = query => {
  return {
    type: FILTER_BOOKS,
    query,
  };
};

export const toggleFavorites = id => {
  return {type: TOGGLE_FAVORITES, bookId: id};
};
