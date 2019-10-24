import {createStackNavigator} from 'react-navigation-stack';

import BookListScreen from '../../screens/BookListScreen';
import BookDetailsScreen from '../../screens/BookDetailsScreen';
import defaultOptions from '../defaultOptions';

const BooksNavigator = createStackNavigator(
  {
    BookList: BookListScreen,
    BookDetails: BookDetailsScreen,
  },
  {
    defaultNavigationOptions: defaultOptions,
  },
);

export default BooksNavigator;
