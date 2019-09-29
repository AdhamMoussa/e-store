import { Product } from '../../models/product';

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const EDIT_PRODUCT = 'EDIT_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';

export interface IProductsState {
  productList: Product[];
  userProducts: Product[];
}

export interface IProductUserInput {
  title: string;
  description: string;
  price: number;
  imageUrl: string;
}

// ACTION types
export interface IGetProductsAction {
  type: typeof GET_PRODUCTS;
  productList: Product[];
}

export interface IAddProductAction {
  type: typeof ADD_PRODUCT;
  product: Product;
}

export interface IEditProductAction {
  type: typeof EDIT_PRODUCT;
  product: Product;
}

export interface IDeleteProductAction {
  type: typeof DELETE_PRODUCT;
  productId: Product['id'];
}

export type IProductsAction =
  | IGetProductsAction
  | IAddProductAction
  | IEditProductAction
  | IDeleteProductAction;
