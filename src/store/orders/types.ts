import { ICartItem } from '../cart/types';

export const GET_ORDERS = 'GET_ORDERS';
export const ADD_ORDER = 'ADD_ORDER';

export interface IOrder {
  id: string;
  items: ICartItem[];
  totalPrice: number;
  date: number;
}

export interface IPartialOrder {
  items: IOrder['items'];
  totalPrice: IOrder['totalPrice'];
  date: IOrder['date'];
}

export interface IOrdersState {
  orderList: IOrder[];
}

export interface IGetOrdersAction {
  type: typeof GET_ORDERS;
  orderList: IOrder[];
}

export interface IAddOrderAction {
  type: typeof ADD_ORDER;
  order: IOrder;
}

export type IOrdersAction = IGetOrdersAction | IAddOrderAction;
