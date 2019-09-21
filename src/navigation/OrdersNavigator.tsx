import { createStackNavigator } from 'react-navigation-stack';

import OrdersScreen from '../screens/OrdersScreen';

import { defaultStackNavigationOptions } from './defaultConfig';

export const OrdersNavigator = createStackNavigator(
  {
    Orders: {
      screen: OrdersScreen
    }
  },
  {
    defaultNavigationOptions: defaultStackNavigationOptions
  }
);
