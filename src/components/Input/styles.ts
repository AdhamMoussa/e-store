import { StyleSheet } from 'react-native';

import { defaultTheme } from '../../utils/themes';

export const styles = StyleSheet.create({
  inputWrapper: {
    borderBottomColor: defaultTheme.colors.main,
    borderBottomWidth: 2
  },
  input: {
    width: '100%'
  }
});
