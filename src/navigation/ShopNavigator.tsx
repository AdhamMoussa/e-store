import { createStackNavigator } from 'react-navigation-stack';

import ShopScreen from '../screens/ShopScreen';
import ProductScreen from '../screens/ProductScreen';
import CartScreen from '../screens/CartScreen';

import { defaultStackNavigationOptions } from './defaultConfig';

export const ShopNavigator = createStackNavigator(
  {
    Shop: {
      screen: ShopScreen
    },
    Product: {
      screen: ProductScreen
    },
    Cart: {
      screen: CartScreen
    }
  },
  {
    defaultNavigationOptions: defaultStackNavigationOptions
  }
);
