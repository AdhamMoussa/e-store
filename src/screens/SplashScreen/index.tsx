import React from 'react';
import { View, Text, ActivityIndicator, AsyncStorage } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { useDispatch } from 'react-redux';

import { ThunkDispatchType } from '../../store';

import { styles } from './styles';

import { defaultTheme } from '../../utils/themes';
import { apiGetUser } from '../../store/user/operations';

const SplashScreen: React.FC<NavigationScreenProps> = ({ navigation }) => {
  const dispatch = useDispatch<ThunkDispatchType>();

  AsyncStorage.getItem('auth_token').then(token => {
    console.log(token);

    if (!token) {
      navigation.navigate({
        routeName: 'Auth'
      });
    } else {
      dispatch(apiGetUser(token))
        .then(() => {
          navigation.navigate({
            routeName: 'App'
          });
        })

        .catch(() => {
          AsyncStorage.removeItem('auth_token').then(() => {
            navigation.navigate({
              routeName: 'Auth'
            });
          });
        });
    }
  });

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>E Store</Text>

      <ActivityIndicator color={defaultTheme.colors.secondary} />
    </View>
  );
};

export default SplashScreen;
