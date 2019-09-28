import { Product } from '../../models/product';
import {
  ADD_PRODUCT,
  EDIT_PRODUCT,
  DELETE_PRODUCT,
  IAddProductAction,
  IEditProductAction,
  IDeleteProductAction
} from './types';

export const addProduct = (product: Product): IAddProductAction => ({
  type: ADD_PRODUCT,
  product
});

export const editProduct = (product: Product): IEditProductAction => ({
  type: EDIT_PRODUCT,
  product
});

export const deleteProduct = (
  productId: Product['id']
): IDeleteProductAction => ({
  type: DELETE_PRODUCT,
  productId
});
