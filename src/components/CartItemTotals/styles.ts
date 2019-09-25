import { StyleSheet } from 'react-native';

import { defaultTheme } from '../../utils/themes';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 15,
    justifyContent: 'space-evenly',
    height: '100%'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: defaultTheme.colors.light
  },
  amount: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: defaultTheme.colors.secondary,
    marginBottom: 15
  },
  btn: {
    width: '70%'
  }
});
