import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons';

import { ShopNavigator } from './ShopNavigator';
import { OrdersNavigator } from './OrdersNavigator';
import { MyProductsNavigator } from './MyProductsNavigator';

import SideDrawer from '../components/SideDrawer';

import { defaultTheme } from '../utils/themes';

export const AppDrawerNavigator = createDrawerNavigator(
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
    contentComponent: SideDrawer,
    drawerBackgroundColor: defaultTheme.colors.dark,
    contentOptions: {
      activeTintColor: defaultTheme.colors.main,
      inactiveTintColor: defaultTheme.colors.light
    }
  }
);
