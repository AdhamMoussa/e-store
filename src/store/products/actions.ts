import { Product } from '../../models/product';
import {
  GET_PRODUCTS,
  ADD_PRODUCT,
  EDIT_PRODUCT,
  DELETE_PRODUCT,
  IAddProductAction,
  IEditProductAction,
  IDeleteProductAction,
  IGetProductsAction
} from './types';

export const getProducts = (productList: Product[]): IGetProductsAction => ({
  type: GET_PRODUCTS,
  productList
});

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
