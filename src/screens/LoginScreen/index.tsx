import React, { useState } from 'react';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { ScrollView, Text, View, Button, Alert } from 'react-native';
import { useDispatch } from 'react-redux';

import Input from '../../components/Input';
import LoadingSpinner from '../../components/LoadingSpinner';

import { defaultTheme } from '../../utils/themes';

import { ThunkDispatchType } from '../../store';
import { ILoginData } from '../../store/user/types';
import { apiLogin } from '../../store/user/operations';
import { styles } from './styles';

const LoginScreen: NavigationStackScreenComponent = ({ navigation }) => {
  const [isLoading, setLoading] = useState(false);

  const [formState, setFormState] = useState<ILoginData>({
    email: '',
    password: ''
  });

  const dispatch = useDispatch<ThunkDispatchType>();

  const inputChangeHandler = (type: keyof ILoginData, value: string) => {
    setFormState(prevState => ({
      ...prevState,
      [type]: value
    }));
  };

  const formSubmitHandler = () => {
    setLoading(true);

    dispatch(apiLogin(formState))
      .then(() => {
        navigation.navigate({ routeName: 'App' });
      })
      .catch(() => {
        setLoading(false);

        Alert.alert('Error', 'Could not sign in, try again');
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
              inputChangeHandler('email', text.trim());
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
              inputChangeHandler('password', text.trim());
            }
          }}
        />
      </View>

      <View style={styles.submitBtn}>
        <Button
          title="Login"
          color={defaultTheme.colors.dark}
          onPress={formSubmitHandler}
        />
      </View>

      <View>
        <Text>Doesn't have an account?</Text>
        <Button
          title="Sign Up"
          onPress={() => {
            navigation.navigate({ routeName: 'Signup' });
          }}
        />
      </View>
    </ScrollView>
  );
};

LoginScreen.navigationOptions = {
  headerTitle: 'Login'
};

export default LoginScreen;
