import { createStackNavigator } from 'react-navigation-stack';

import UserProductsScreen from '../screens/UserProductsScreen';

import { defaultStackNavigationOptions } from './defaultConfig';

export const MyProductsNavigator = createStackNavigator(
  {
    UserProducts: {
      screen: UserProductsScreen
    }
  },
  {
    defaultNavigationOptions: defaultStackNavigationOptions
  }
);
