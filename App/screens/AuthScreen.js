import React, {useState, useEffect} from 'react';
import {Image, Linking, StyleSheet, Platform, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SafariView from 'react-native-safari-view';

const AuthScreen = props => {
  const [user, setUser] = useState();

  useEffect(() => {
    Linking.addEventListener('url', openURLHandler);

    Linking.getInitialURL().then(url => {
      if (url) openURLHandler({url});
    });

    return () => {
      Linking.removeEventListener('url', openURLHandler);
    };
  }, []);

  const openURLHandler = ({url}) => {
    const [, user_string] = url.match(/user=([^#]+)/);

    // Decode the user string and parse it into JSON
    setUser(JSON.parse(decodeURI(user_string)));

    if (Platform.OS === 'ios') {
      SafariView.dismiss();
    }
  };

  loginWithFacebook = () => openURL('http://10.20.0.239:3000/auth/facebook');

  // Handle Login with Google button tap
  loginWithGoogle = () => openURL('http://10.20.0.239:3000/auth/google');

  // Open URL in a browser
  openURL = url => {
    // Use SafariView on iOS
    if (Platform.OS === 'ios') {
      SafariView.show({
        url: url,
        fromBottom: true,
      });
    }
    // Or Linking.openURL on Android
    else {
      Linking.openURL(url);
    }
  };

  return (
    <View style={styles.container}>
      {user ? (
        // Show user info if already logged in
        <View style={styles.content}>
          <Text style={styles.header}>Welcome {user.name}!</Text>
          <View style={styles.avatar}>
            <Image source={{uri: user.avatar}} style={styles.avatarImage} />
          </View>
        </View>
      ) : (
        // Show Please log in message if not
        <View style={styles.content}>
          <Text style={styles.header}>Welcome Stranger!</Text>
          <View style={styles.avatar}>
            <Icon name="user-circle" size={100} color="rgba(0,0,0,.09)" />
          </View>
          <Text style={styles.text}>
            Please log in to continue {'\n'}
            to the awesomness
          </Text>
        </View>
      )}
      {/* Login buttons */}
      <View style={styles.buttons}>
        <Icon.Button
          name="facebook"
          backgroundColor="#3b5998"
          onPress={loginWithFacebook}
          {...iconStyles}>
          Login with Facebook
        </Icon.Button>
        <Icon.Button
          name="google"
          backgroundColor="#DD4B39"
          onPress={loginWithGoogle}
          {...iconStyles}>
          Or with Google
        </Icon.Button>
      </View>
    </View>
  );
};

const iconStyles = {
  borderRadius: 10,
  iconStyle: {paddingVertical: 5},
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    margin: 20,
  },
  avatarImage: {
    borderRadius: 50,
    height: 100,
    width: 100,
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  text: {
    textAlign: 'center',
    color: '#333',
    marginBottom: 5,
  },
  buttons: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 20,
    marginBottom: 30,
  },
});

export default AuthScreen;
