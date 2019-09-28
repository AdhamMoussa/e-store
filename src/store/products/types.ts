import { Product } from '../../models/product';

export const ADD_PRODUCT = 'ADD_PRODUCT';
export const EDIT_PRODUCT = 'EDIT_PRODUCT';

export interface IProductsState {
  productList: Product[];
  userProducts: Product[];
}

export interface IAddProductAction {
  type: typeof ADD_PRODUCT;
  product: Product;
}

export interface IEditProductAction {
  type: typeof EDIT_PRODUCT;
  product: Product;
}

export type IProductsAction = IAddProductAction | IEditProductAction;
