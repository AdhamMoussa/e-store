import { Product } from '../../models/product';

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export interface ICartItem {
  product: Product;
  qty: number;
}

export interface ICartState {
  cartList: ICartItem[];
}

export interface IAddToCartAction {
  type: typeof ADD_TO_CART;
  product: Product;
}

export interface IRemoveFromCartAction {
  type: typeof REMOVE_FROM_CART;
  id: string;
}

export type CartAction = IAddToCartAction | IRemoveFromCartAction;
