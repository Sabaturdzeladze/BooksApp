import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import Card from './UI/Card';
import NoPreview from './UI/NoPreview';
import AuthorsList from './AuthorsList';

const {width, height} = Dimensions.get('window');

const BookItem = props => {
  onPressHandler = () => {
    props.navigation.navigate('BookDetails', {
      id: props.id,
      title: props.title,
    });
  };

  return (
    <TouchableOpacity onPress={props.navigateToDetails}>
      <Card style={styles.container}>
        <View style={styles.preview}>
          {props.imageUrl ? (
            <Image source={{uri: props.imageUrl}} style={styles.image} />
          ) : (
            <NoPreview />
          )}
        </View>
        <View style={styles.details}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{props.title}</Text>
          </View>

          <Text>Language: {props.language}</Text>
          <AuthorsList authors={props.authors} />
          <Text>Pages: {props.pages}</Text>
          <Text>Publish Date: {props.dateOfPublish}</Text>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    marginVertical: 5,
    marginHorizontal: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    flexDirection: 'row',
  },
  title: {
    fontSize: 16,
  },
  preview: {
    width: 100,
  },
  image: {
    width: 100,
    height: '90%',
  },
  details: {
    width: width / 2,
  },
  titleContainer: {
    paddingBottom: 2,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
});

export default BookItem;
