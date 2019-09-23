import { StyleSheet } from 'react-native';

import { defaultTheme } from '../../utils/themes';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: defaultTheme.colors.gray,
    margin: 15,
    elevation: 3
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: defaultTheme.colors.dark
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: defaultTheme.colors.main
  },
  image: {
    width: '100%',
    height: 200
  },
  footer: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  },
  footerInfo: {
    flexGrow: 0,
    flexShrink: 1,
    marginRight: 10
  },
  footerBtn: {
    flexShrink: 0
  }
});
