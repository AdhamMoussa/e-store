import { Product } from '../../models/product';

export interface ProductsState {
  productList: Product[];
}

export interface ProductsAction {
  type: string;
}
