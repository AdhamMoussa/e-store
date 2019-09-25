import { StyleSheet } from 'react-native';

import { defaultTheme } from '../../utils/themes';

export const styles = StyleSheet.create({
  card: {
    margin: 10,
    elevation: 3,
    padding: 25,
    shadowColor: '#eee',
    borderBottomWidth: 5,
    borderBottomColor: defaultTheme.colors.secondary
  },
  cardInner: {},
  date: {
    fontSize: 14,
    color: defaultTheme.colors.darkGray
  },
  id: {
    color: defaultTheme.colors.dark,
    marginBottom: 15
  },
  viewBtn: {
    padding: 5
  },
  viewBtnText: {
    fontSize: 14,
    color: defaultTheme.colors.secondary,
    textDecorationLine: 'underline'
  },
  detailsContainer: {},
  cartItem: {
    backgroundColor: '#fff',
    padding: 10,
    borderBottomColor: defaultTheme.colors.secondary,
    borderBottomWidth: 1
  },
  cartItemTitle: {
    fontWeight: 'bold'
  },
  cartItemPrice: {
    color: defaultTheme.colors.secondary
  },
  total: {
    color: defaultTheme.colors.main,
    fontWeight: 'bold',
    paddingVertical: 15
  }
});
