import { createStackNavigator } from 'react-navigation-stack';

import ShopScreen from '../screens/ShopScreen';
import ProductScreen from '../screens/ProductScreen';

import { defaultStackNavigationOptions } from './defaultConfig';

export const ShopNavigator = createStackNavigator(
  {
    Shop: {
      screen: ShopScreen
    },
    Product: {
      screen: ProductScreen
    }
  },
  {
    defaultNavigationOptions: defaultStackNavigationOptions
  }
);
