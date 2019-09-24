import { StyleSheet } from 'react-native';

import { defaultTheme } from '../../utils/themes';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: defaultTheme.colors.gray,
    margin: 15,
    elevation: 3,
    flexDirection: 'row'
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
  quantity: {},
  total: {},
  imageContainer: {
    width: 60,
    height: 60,
    flexGrow: 0,
    flexShrink: 0
  },
  image: {
    width: '100%',
    height: '100%'
  },
  cardDetails: {
    flexGrow: 1,
    flexShrink: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },
  info: {
    marginRight: 15,
    flexGrow: 1,
    flexShrink: 1
  },
  removeBtn: {
    flexShrink: 0,
    flexGrow: 0
  }
});
