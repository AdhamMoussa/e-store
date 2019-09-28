import { Product } from '../../models/product';
import {
  ADD_PRODUCT,
  EDIT_PRODUCT,
  IAddProductAction,
  IEditProductAction
} from './types';

export const addProduct = (product: Product): IAddProductAction => ({
  type: ADD_PRODUCT,
  product
});

export const editProduct = (product: Product): IEditProductAction => ({
  type: EDIT_PRODUCT,
  product
});
