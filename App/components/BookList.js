import React from 'react';
import {FlatList, View} from 'react-native';

import BookItem from './BookItem';

const BookList = props => {
  const isFav = props.isFromFavorites;
  return (
    <View style={{ flex: 1, width: '100%' }}>
      <FlatList
        keyExtractor={item => item.id}
        data={props.bookList}
        style={{width: '100%', flex: 1}}
        renderItem={({item}) => (
          <BookItem
            id={item.id}
            title={item.volumeInfo.title}
            authors={item.volumeInfo.authors}
            imageUrl={
              item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail
            }
            language={item.volumeInfo.language}
            pages={item.volumeInfo.pageCount}
            dateOfPublish={item.volumeInfo.publishedDate}
            navigateToDetails={() => {
              const params = {
                id: item.id,
                title: item.volumeInfo.title,
              };
              if (isFav) params.isFav = true;
              props.navigation.navigate('BookDetails', params);
            }}
          />
        )}
      />
    </View>
  );
};

export default BookList;
