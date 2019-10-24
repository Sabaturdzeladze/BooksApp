import {createStackNavigator} from 'react-navigation-stack';
import defaultOptions from '../defaultOptions';
import BookDetailsScreen from '../../screens/BookDetailsScreen';
import FavoritesScreen from '../../screens/FavoritesScreen';

const FavoritesNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    BookDetails: BookDetailsScreen,
  },
  {
    defaultNavigationOptions: defaultOptions,
  },
);

export default FavoritesNavigator;
