import { createStackNavigator } from 'react-navigation-stack';

import AddProductScreen from '../screens/AddProductScreen';
import EditProductScreen from '../screens/EditProductScreen';
import UserProductsScreen from '../screens/UserProductsScreen';

import { defaultStackNavigationOptions } from './defaultConfig';

export const MyProductsNavigator = createStackNavigator(
  {
    UserProducts: {
      screen: UserProductsScreen
    },
    AddProduct: {
      screen: AddProductScreen
    },
    EditProduct: {
      screen: EditProductScreen
    }
  },
  {
    defaultNavigationOptions: defaultStackNavigationOptions
  }
);
