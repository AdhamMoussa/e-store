import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import { ShopNavigator } from './ShopNavigator';
import { OrdersNavigator } from './OrdersNavigator';
import { MyProductsNavigator } from './MyProductsNavigator';

import { defaultTheme } from '../utils/themes';
import { Ionicons } from '@expo/vector-icons';

const MainNavigator = createDrawerNavigator(
  {
    Shop: {
      screen: ShopNavigator,
      navigationOptions: {
        drawerLabel: 'Shop',
        drawerIcon: draweConfig => (
          <Ionicons name="md-cart" size={23} color={draweConfig.tintColor} />
        )
      }
    },

    Orders: {
      screen: OrdersNavigator,
      navigationOptions: {
        drawerLabel: 'My Orders',
        drawerIcon: draweConfig => (
          <Ionicons name="md-list" size={23} color={draweConfig.tintColor} />
        )
      }
    },

    MyProducts: {
      screen: MyProductsNavigator,
      navigationOptions: {
        drawerLabel: 'My Products',
        drawerIcon: draweConfig => (
          <Ionicons
            name="md-business"
            size={23}
            color={draweConfig.tintColor}
          />
        )
      }
    }
  },
  {
    drawerBackgroundColor: defaultTheme.colors.dark,
    contentOptions: {
      activeTintColor: defaultTheme.colors.main,
      inactiveTintColor: defaultTheme.colors.light
    }
  }
);

export default createAppContainer(MainNavigator);
