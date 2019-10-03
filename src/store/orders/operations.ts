import { IPartialOrder, IOrder } from './types';
import { ThunkActionType } from '..';
import { api } from '../../utils/axiosInstance';
import { addOrder, getOrders } from './actions';

interface IAPIOrders {
  [key: string]: IPartialOrder;
}

export const apiGetOrders = (): ThunkActionType => async dispatch => {
  const { data } = await api().get<IAPIOrders>('/orders/u1.json');

  const orderList: IOrder[] = [];

  for (const key in data) {
    orderList.push({
      id: key,
      ...data[key]
    });
  }

  dispatch(getOrders(orderList));
};

export const apiAddOrder = (
  order: IPartialOrder
): ThunkActionType => async dispatch => {
  const { data } = await api().post<{ name: string }>('/orders/u1.json', {
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
