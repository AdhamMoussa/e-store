import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  View,
  Text,
  TextInput,
  Button
} from 'react-native';
import { defaultTheme } from '../../utils/themes';
import { styles } from './styles';

export interface IFormState {
  title: string;
  description: string;
  price: string;
  imageUrl: string;
}

interface IProps {
  formInitialState?: IFormState;
  submitHandler: (formState: IFormState) => void;
}

const ProductForm: React.FC<IProps> = ({ formInitialState, submitHandler }) => {
  const [formState, setFormState] = useState<IFormState>(
    formInitialState || {
      title: '',
      description: '',
      price: '',
      imageUrl: ''
    }
  );

  const inputChangeHandler = (value: string, type: keyof IFormState): void => {
    setFormState(state => ({
      ...state,
      [type]: value
    }));
  };

  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={100}
      style={{ flex: 1 }}
    >
      <ScrollView
        keyboardShouldPersistTaps="always"
        keyboardDismissMode="on-drag"
      >
        <View style={styles.container}>
          <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>Title</Text>
            <TextInput
              blurOnSubmit
              style={styles.input}
              value={formState.title}
              onChangeText={text => inputChangeHandler(text, 'title')}
            />
          </View>

          <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>Price</Text>
            <TextInput
              blurOnSubmit
              keyboardType="decimal-pad"
              style={styles.input}
              value={formState.price}
              onChangeText={text => inputChangeHandler(text, 'price')}
            />
          </View>

          <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>Description</Text>
            <TextInput
              blurOnSubmit
              style={styles.input}
              value={formState.description}
              onChangeText={text => inputChangeHandler(text, 'description')}
            />
          </View>

          <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>Image URL</Text>
            <TextInput
              blurOnSubmit
              style={styles.input}
              value={formState.imageUrl}
              onChangeText={text => inputChangeHandler(text, 'imageUrl')}
            />
          </View>

          <View style={styles.submitBtn}>
            <Button
              title="Save"
              color={defaultTheme.colors.dark}
              onPress={() => {
                submitHandler(formState);
              }}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ProductForm;
