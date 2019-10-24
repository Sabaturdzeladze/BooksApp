import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Rating = ({averageRating}) => {
  const rating = [];
  const avgRating = Math.round(averageRating);
  for (let i = 1; i <= 5; i++) {
    rating.push(i <= avgRating ? '#feb220' : '#ebebeb');
  }
  return (
    <View style={styles.container}>
      {rating.map((color, index) => (
        <Icon key={index} size={20} name="star" color={color} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  }
})

export default Rating;
