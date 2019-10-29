import {createStackNavigator} from 'react-navigation-stack';

import defaultOptions from '../defaultOptions';
import AuthScreen from '../../screens/AuthScreen';

const AuthNavigator = createStackNavigator(
  {
    Auth: AuthScreen,
  },
  {
    defaultNavigationOptions: defaultOptions,
  },
);

export default AuthNavigator;
