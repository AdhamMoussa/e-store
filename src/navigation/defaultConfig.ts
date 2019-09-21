import { NavigationStackOptions } from 'react-navigation-stack';

import { defaultTheme } from '../utils/themes';

export const defaultStackNavigationOptions: NavigationStackOptions = {
  headerStyle: {
    backgroundColor: defaultTheme.colors.dark
  },
  headerTintColor: defaultTheme.colors.light
};
