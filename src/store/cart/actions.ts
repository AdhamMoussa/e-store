import { Product } from '../../models/product';
import {
  AddToCartAction,
  RemoveFromCartAction,
  ADD_TO_CART,
  REMOVE_FROM_CART
} from './types';

export const addToCart = (product: Product): AddToCartAction => ({
  type: ADD_TO_CART,
  payload: product
});

export const removeFromCart = (id: string): RemoveFromCartAction => ({
  type: REMOVE_FROM_CART,
  payload: id
});
