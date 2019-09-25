import { Product } from '../../models/product';
import {
  IAddToCartAction,
  IRemoveFromCartAction,
  IClearCartAction,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART
} from './types';

export const addToCart = (product: Product): IAddToCartAction => ({
  type: ADD_TO_CART,
  product
});

export const removeFromCart = (id: string): IRemoveFromCartAction => ({
  type: REMOVE_FROM_CART,
  id
});

export const clearCart = (): IClearCartAction => ({
  type: CLEAR_CART
});
