import {
  GET_ORDERS,
  ADD_ORDER,
  IGetOrdersAction,
  IAddOrderAction,
  IOrder
} from './types';

export const getOrders = (orderList: IOrder[]): IGetOrdersAction => ({
  type: GET_ORDERS,
  orderList
});

export const addOrder = (order: IOrder): IAddOrderAction => ({
  type: ADD_ORDER,
  order
});
