import React, {useEffect, useState, useCallback} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import LoadingBar from '../components/UI/LoadingBar';
import * as booksActions from '../store/actions/books-actions';
import BookList from '../components/BookList';

const BookListScreen = props => {
  const [isLoading, setIsLoading] = useState(false);
  const bookList = useSelector(state => state.books.booksList);

  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    const loadBooks = async () => {
      try {
        await dispatch(booksActions.fetchBooks());
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    loadBooks();
  }, [dispatch, setIsLoading]);

  if (isLoading) {
    return (
      <View style={styles.screen}>
        <LoadingBar size="large" />
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <BookList bookList={bookList} navigation={props.navigation} />
    </View>
  );
};

BookListScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Books',
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default BookListScreen;
