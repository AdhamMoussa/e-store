import { StyleSheet } from 'react-native';

import { defaultTheme } from '../../utils/themes';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 25
  },

  inputWrapper: {
    marginBottom: 25,
    borderBottomColor: defaultTheme.colors.main,
    borderBottomWidth: 2,
    width: '80%'
  },

  inputLabel: {
    fontWeight: 'bold',
    marginBottom: 5
  },

  input: {
    width: '100%'
  },

  submitBtn: {
    width: '80%'
  }
});
