import axios from 'axios';

import { ThunkActionType } from '..';

import { getUser } from './actions';

import { ILoginData, ILogoutAction, LOGOUT_USER, ISignupData } from './types';
import { AsyncStorage } from 'react-native';

const API_KEY = 'AIzaSyDmu3a-F1V84B1lTO_ncaZUzVEaFfI54gQ';

export const apiLogin = ({
  email,
  password
}: ILoginData): ThunkActionType => async dispatch => {
  const { data } = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
    {
      email,
      password,
      returnSecureToken: true
    }
  );

  console.log(data);

  dispatch(
    getUser({
      username: data.displayName,
      userId: data.localId,
      email: data.email
    })
  );

  await AsyncStorage.setItem('auth_token', data.idToken);
};

export const apiSignup = ({
  email,
  password
}: ISignupData): ThunkActionType => async dispatch => {
  const { data } = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
    {
      email,
      password,
      returnSecureToken: true
    }
  );

  console.log(data);

  dispatch(
    getUser({
      username: data.displayName,
      userId: data.localId,
      email: data.email
    })
  );

  await AsyncStorage.setItem('auth_token', data.idToken);
};

export const logout = (): ILogoutAction => {
  AsyncStorage.removeItem('auth_token');

  return {
    type: LOGOUT_USER
  };
};

export const apiGetUser = (
  token: string
): ThunkActionType => async dispatch => {
  const { data } = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${API_KEY}`,
    { idToken: token }
  );

  console.log(data);

  const userData = data.users[0];

  dispatch(
    getUser({
      username: userData.displayName,
      userId: userData.localId,
      email: userData.email
    })
  );
};
