import React, {useCallback, useEffect} from 'react';
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import {useSelector} from 'react-redux';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {useDispatch} from 'react-redux';

import Card from '../components/UI/Card';
import NoPreview from '../components/UI/NoPreview';
import AuthorsList from '../components/AuthorsList';
import Colors from '../constants/Colors';
import Rating from '../components/UI/Rating';
import HeaderButton from '../components/UI/HeaderButton';
import * as booksActions from '../store/actions/books-actions';

const BookDetailsScreen = props => {
  const bookId = props.navigation.getParam('id');
  const book = useSelector(state =>
    state.books.booksList.find(book => book.id === bookId),
  );
  const bookIsFav = useSelector(
    state =>
      state.books.favoriteBooks.findIndex(book => book.id === bookId) >= 0,
  );

  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(booksActions.toggleFavorites(bookId));
  }, [dispatch, bookId]);

  useEffect(() => {
    props.navigation.setParams({toggleFav: toggleFavoriteHandler});
  }, [toggleFavoriteHandler]);

  useEffect(() => {
    props.navigation.setParams({isFav: bookIsFav});
  }, [bookIsFav]);

  const {
    title,
    subtitle,
    authors,
    publisher,
    publishedDate,
    pageCount,
    averageRating,
    imageLinks,
  } = book.volumeInfo;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {subtitle && <Text style={styles.subTitle}>{subtitle}</Text>}
      </View>
      <View style={styles.preview}>
        {imageLinks ? (
          <Image source={{uri: imageLinks.thumbnail}} style={styles.image} />
        ) : (
          <NoPreview style={styles.image} />
        )}
      </View>
      <Card style={styles.details}>
        <Text>Pages: {pageCount}</Text>
        <Text>Publish Date: {publishedDate}</Text>
        <Text>Publisher: {publisher}</Text>
        <AuthorsList authors={authors} style={styles.authorsList} />
        {averageRating ? (
          <Rating averageRating={averageRating} />
        ) : (
          <Text>Not Rated Yet.</Text>
        )}
      </Card>
    </ScrollView>
  );
};

BookDetailsScreen.navigationOptions = navData => {
  const title = navData.navigation.getParam('title');
  const isFav = navData.navigation.getParam('isFav');
  const toggleFav = navData.navigation.getParam('toggleFav');

  return {
    headerTitle: title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName={isFav ? 'star' : 'star-o'}
          onPress={toggleFav}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
  },
  header: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginBottom: 10,
    marginHorizontal: 20,
  },
  title: {
    color: Colors.primary,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  subTitle: {
    color: Colors.primary,
    fontSize: 16,
    textAlign: 'center',
  },
  preview: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 130,
    height: 195,
  },
  details: {
    margin: 10,
    padding: 10,
  },
  authorsList: {
    marginBottom: 10,
  },
});

export default BookDetailsScreen;
