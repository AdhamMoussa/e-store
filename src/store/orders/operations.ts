import { ThunkAction } from 'redux-thunk';

import { IPartialOrder } from './types';
import { AppState, ActionsType } from '..';
import { api } from '../../utils/axiosInstance';
import { addOrder } from './actions';

export const apiAddOrder = (
  order: IPartialOrder
): ThunkAction<
  Promise<void>,
  AppState,
  null,
  ActionsType
> => async dispatch => {
  const { data } = await api().post<{ name: string }>('/orders.json', {
    ...order
  });

  const orderId = data.name;

  dispatch(
    addOrder({
      id: orderId,
      ...order
    })
  );
};
