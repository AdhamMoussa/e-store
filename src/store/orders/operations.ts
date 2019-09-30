import { IPartialOrder } from './types';
import { ThunkActionType } from '..';
import { api } from '../../utils/axiosInstance';
import { addOrder } from './actions';

export const apiAddOrder = (
  order: IPartialOrder
): ThunkActionType => async dispatch => {
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
