import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { AppDrawerNavigator } from './AppDrawerNavigator';
import { AuthNavigator } from './AuthNavigator';
import SplashScreen from '../screens/SplashScreen';

const MainNavigator = createSwitchNavigator({
  Splash: {
    screen: SplashScreen
  },
  Auth: {
    screen: AuthNavigator
  },
  App: {
    screen: AppDrawerNavigator
  }
});

export default createAppContainer(MainNavigator);
