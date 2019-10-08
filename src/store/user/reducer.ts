import { IUserAction, GET_USER_DATA, LOGOUT_USER, IUserState } from './types';

const initialState: IUserState = null;

export default (
  state: IUserState = initialState,
  action: IUserAction
): IUserState => {
  switch (action.type) {
    case GET_USER_DATA:
      return {
        ...action.user
      };

    case LOGOUT_USER:
      return null;

    default:
      return state;
  }
};
