import { StyleSheet } from 'react-native';

import { defaultTheme } from '../../utils/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: defaultTheme.colors.main
  }
});
