import { StyleSheet } from 'react-native';

import { defaultTheme } from '../../utils/themes';

export const styles = StyleSheet.create({
  container: {},
  cartList: {
    height: '75%'
  },
  cartTotals: {
    height: '25%',
    backgroundColor: defaultTheme.colors.gray
  }
});
