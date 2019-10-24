import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import {useSelector} from 'react-redux';

import BookList from '../components/BookList';

const FavoritesScreen = props => {
  const favorites = useSelector(state => state.books.favoriteBooks);

  if (!favorites.length) {
    return (
      <View style={styles.screen}>
        <Text>No Favorites Selected.</Text>
        <Button
          title="Browse Books"
          onPress={() => props.navigation.navigate('BookList')}
        />
      </View>
    );
  }

  return <BookList isFromFavorites bookList={favorites} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions = {
  headerTitle: 'Favorites',
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default FavoritesScreen;
