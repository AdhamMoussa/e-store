import { StyleSheet } from 'react-native';

import { defaultTheme } from '../../utils/themes';

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: defaultTheme.colors.darkGray
  }
});
