import { StyleSheet } from 'react-native';

import { defaultTheme } from '../../utils/themes';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: 250,
    marginBottom: 10
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'baseline',
    marginBottom: 20
  },
  priceTitle: {
    fontSize: 18,
    color: defaultTheme.colors.dark
  },
  priceAmount: {
    fontSize: 18,
    color: defaultTheme.colors.main
  },
  description: {
    fontSize: 16,
    color: defaultTheme.colors.dark,
    textAlign: 'center',
    width: '70%',
    marginBottom: 10
  }
});
