import React, {useMemo, useEffect, useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import TouchID from 'react-native-touch-id';

const authentication = () => {
  return TouchID.authenticate();
};

const AuthScreen = props => {
  const [biometricType, setBiometricType] = useState(null);

  useEffect(() => {
    TouchID.isSupported()
      .then(biometryType => {
        setBiometricType(biometryType);
      })
      .catch(err => console.log(err.message));
  }, []);

  const authenticate = async () => {
    TouchID.isSupported()
      .then(authentication)
      .catch(error => {
        console.log('Not supported');
      });
  };

  return (
    <View>
      <Text>text</Text>
      <Button title="Authenticate" onPress={authenticate} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default AuthScreen;
