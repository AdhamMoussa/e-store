import React from 'react';
import { TextInput, TextInputProps, View } from 'react-native';
import { styles } from './styles';

const Input: React.FC<TextInputProps> = props => {
  const { value, onChange, ...restProps } = props;
  return (
    <View style={styles.inputWrapper}>
      <TextInput style={styles.input} {...restProps} />
    </View>
  );
};

export default Input;
