import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import Input from '../components/UI/Input';
import BookList from '../components/BookList';
import * as bookActions from '../store/actions/books-actions';

const SearchBooksScreen = props => {
  const [query, setQuery] = useState('');
  const changeTextHandler = value => {
    setQuery(value);
  };

  const filteredBooks = useSelector(state => state.books.filteredBooks);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bookActions.filterBooks(query));
  }, [dispatch, query]);

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Input value={query} onChangeText={changeTextHandler} />
      </View>

      <BookList bookList={filteredBooks} navigation={props.navigation} />
    </View>
  );
};

SearchBooksScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Search For Books',
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  header: {
    width: '100%',
    paddingHorizontal: 5,
  },
});

export default SearchBooksScreen;
