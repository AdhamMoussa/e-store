import { IAddOrder, ADD_ORDER, IOrder } from './types';

export const addOrder = (order: IOrder): IAddOrder => ({
  type: ADD_ORDER,
  order
});
