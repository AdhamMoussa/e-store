import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';

import { defaultStackNavigationOptions } from './defaultConfig';

export const AuthNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginScreen
    },
    Signup: {
      screen: SignupScreen
    }
  },
  {
    defaultNavigationOptions: defaultStackNavigationOptions
  }
);
