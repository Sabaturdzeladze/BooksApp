import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';

import Colors from '../../constants/Colors';

const LoadingBar = props => {
  return (
    <View style={{...styles.loadingBar, ...props.style}}>
      <ActivityIndicator size={props.size} color={Colors.primary} />
    </View>
  );
};

const styles = StyleSheet.create({
  loadingBar: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoadingBar;
