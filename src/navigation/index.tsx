import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import { ShopNavigator } from './ShopNavigator';
import { OrdersNavigator } from './OrdersNavigator';
import { MyProductsNavigator } from './MyProductsNavigator';

import { defaultTheme } from '../utils/themes';

const MainNavigator = createDrawerNavigator(
  {
    Shop: {
      screen: ShopNavigator,
      navigationOptions: {
        drawerLabel: 'Shop'
      }
    },

    Orders: {
      screen: OrdersNavigator,
      navigationOptions: {
        drawerLabel: 'My Orders'
      }
    },

    MyProducts: {
      screen: MyProductsNavigator,
      navigationOptions: {
        drawerLabel: 'My Products'
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
