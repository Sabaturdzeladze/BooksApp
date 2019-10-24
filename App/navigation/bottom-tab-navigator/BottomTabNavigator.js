import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import BooksNavigator from '../books-navigator/BooksNavigator';
import SearchBooksScreen from '../../screens/SearchBooksScreen';
import FavoritesNavigator from '../favorites-navigator/FavoritesNavigator';
import Colors from '../../constants/Colors';
import defaultOptions from '../defaultOptions';

const customTabBarOpts = {
  activeTintColor: Colors.primary,
  inactiveTintColor: Colors.secondary,
};

const SearchBooksNavigator = createStackNavigator(
  {
    SearchBooks: SearchBooksScreen,
  },
  {
    defaultNavigationOptions: defaultOptions,
  },
);

const BottomTabNavigator = createBottomTabNavigator(
  {
    Books: {
      screen: BooksNavigator,
      navigationOptions: () => ({
        tabBarIcon: ({focused, tintColor}) => (
          <Icon
            name="book"
            size={20}
            color={focused ? Colors.primary : Colors.secondary}
          />
        ),
      }),
    },
    SearchBooks: {
      screen: SearchBooksNavigator,
      navigationOptions: () => ({
        tabBarIcon: ({focused, tintColor}) => (
          <Icon
            name="search"
            size={20}
            color={focused ? Colors.primary : Colors.secondary}
          />
        ),
        title: 'Search Books',
      }),
    },
    Favorites: {
      screen: FavoritesNavigator,
      navigationOptions: () => ({
        tabBarIcon: ({focused, tintColor}) => (
          <Icon
            name="star-o"
            size={20}
            color={focused ? Colors.primary : Colors.secondary}
          />
        ),
      }),
    },
  },
  {
    tabBarOptions: customTabBarOpts,
  },
);

export default BottomTabNavigator;
