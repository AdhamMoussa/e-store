export const LOGOUT_USER = 'LOGOUT_USER';
export const GET_USER_DATA = 'GET_USER_DATA';

export interface IUser {
  userId: string;
  username: string;
  email: string;
}

export type IUserState = IUser | null;

export interface ILoginData {
  email: string;
  password: string;
}

export interface ISignupData {
  email: string;
  password: string;
}

export interface IGetUserAction {
  type: typeof GET_USER_DATA;
  user: IUser;
}

export interface ILogoutAction {
  type: typeof LOGOUT_USER;
}

export type IUserAction = IGetUserAction | ILogoutAction;
