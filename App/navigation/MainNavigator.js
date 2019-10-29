import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import BottomTabNavigator from './bottom-tab-navigator/BottomTabNavigator';
import AuthNavigator from './auth-navigator/AuthNavigator';

const MainNavigator = createSwitchNavigator({
  Auth: AuthNavigator,
  Books: BottomTabNavigator
});

export default createAppContainer(MainNavigator);
