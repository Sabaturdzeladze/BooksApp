import {createStackNavigator} from 'react-navigation-stack';

import defaultOptions from '../defaultOptions';

const AuthNavigator = createStackNavigator(
  {
    Auth: AuthScreen,
  },
  {
    defaultNavigationOptions: defaultOptions,
  },
);

export default AuthNavigator;
