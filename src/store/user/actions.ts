import { Product } from '../../models/product';
import {
  GET_USER_DATA,
  LOGOUT_USER,
  IGetUserAction,
  ILogoutAction,
  IUser
} from './types';

export const getUser = (user: IUser): IGetUserAction => ({
  type: GET_USER_DATA,
  user
});

export const logoutUser = (): ILogoutAction => ({
  type: LOGOUT_USER
});
