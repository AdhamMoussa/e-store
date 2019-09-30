import { ICartItem } from '../cart/types';

export const ADD_ORDER = 'ADD_ORDER';

export interface IOrder {
  id: string;
  items: ICartItem[];
  totalPrice: number;
  date: Date;
}

export interface IPartialOrder {
  items: ICartItem[];
  totalPrice: number;
  date: Date;
}

export interface IOrdersState {
  orderList: IOrder[];
}

export interface IAddOrder {
  type: typeof ADD_ORDER;
  order: IOrder;
}

export type IOrdersAction = IAddOrder;
