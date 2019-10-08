import React, { useState } from 'react';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { ScrollView, View, Button, Alert, Text } from 'react-native';
import { useDispatch } from 'react-redux';

import Input from '../../components/Input';
import LoadingSpinner from '../../components/LoadingSpinner';

import { ThunkDispatchType } from '../../store';
import { ISignupData } from '../../store/user/types';
import { apiSignup } from '../../store/user/operations';

import { defaultTheme } from '../../utils/themes';

import { styles } from './styles';

const SignupScreen: NavigationStackScreenComponent = ({ navigation }) => {
  const [isLoading, setLoading] = useState(false);

  const [formState, setFormState] = useState<ISignupData>({
    email: '',
    password: ''
  });

  const dispatch = useDispatch<ThunkDispatchType>();

  const inputChangeHandler = (type: keyof ISignupData, value: string) => {
    setFormState(prevState => ({
      ...prevState,
      [type]: value.trim()
    }));
  };

  const formSubmitHandler = () => {
    setLoading(true);

    dispatch(apiSignup(formState))
      .then(() => {
        navigation.navigate({ routeName: 'App' });
      })
      .catch(() => {
        setLoading(false);

        Alert.alert('Error', 'Could not sign up, try again');
      });
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.inputWrapper}>
        <Input
          value={formState.email}
          placeholder="Email"
          onChangeText={(text: string) => {
            if (text.trim()) {
              inputChangeHandler('email', text);
            }
          }}
        />
      </View>

      <View style={styles.inputWrapper}>
        <Input
          value={formState.password}
          placeholder="Password"
          onChangeText={(text: string) => {
            if (text.trim()) {
              inputChangeHandler('password', text);
            }
          }}
        />
      </View>

      <View style={styles.submitBtn}>
        <Button
          title="Sign Up"
          color={defaultTheme.colors.dark}
          onPress={formSubmitHandler}
        />
      </View>

      <View>
        <Text>Already have an account?</Text>
        <Button
          title="Login"
          onPress={() => {
            navigation.navigate({ routeName: 'Login' });
          }}
        />
      </View>
    </ScrollView>
  );
};

SignupScreen.navigationOptions = {
  headerTitle: 'Sign Up'
};

export default SignupScreen;
