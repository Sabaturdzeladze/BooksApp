import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const NoPreview = props => {
  return (
    <View style={{...styles.noImage, ...props.style}}>
      <Icon size={23} name="image" />
      <Text style={styles.noImageText}>No Preview Available</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  noImage: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 2,
    padding: 5,
  },
  noImageText: {
    textAlign: 'center',
    marginTop: 5,
  },
});

export default NoPreview;
