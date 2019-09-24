import { Product } from '../../models/product';

export interface IProductsState {
  productList: Product[];
}

export interface IProductsAction {
  type: string;
}
