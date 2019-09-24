import { StyleSheet } from 'react-native';

import { defaultTheme } from '../../utils/themes';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 25,
    justifyContent: 'space-evenly',
    height: '100%'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: defaultTheme.colors.dark
  },
  amount: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: defaultTheme.colors.main
  },
  btn: {
    width: '70%'
  }
});
