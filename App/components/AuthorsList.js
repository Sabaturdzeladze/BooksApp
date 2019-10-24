import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const AuthorsList = props => {
  return (
    <View style={{...styles.authors, ...props.style}}>
      <Text>Authors: </Text>
      <View style={styles.authorList}>
        {props.authors.map(author => (
          <Text key={author}>{author}</Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  authors: {
    flexDirection: 'row',
  },
});

export default AuthorsList;
