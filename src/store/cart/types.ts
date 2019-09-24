import { Product } from '../../models/product';

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export interface CartState {
  cartList: Product[];
}

export interface AddToCartAction {
  type: typeof ADD_TO_CART;
  payload: Product;
}

export interface RemoveFromCartAction {
  type: typeof REMOVE_FROM_CART;
  payload: string;
}

export type CartAction = AddToCartAction | RemoveFromCartAction;
