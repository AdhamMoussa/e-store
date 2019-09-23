import { ProductsState, ProductsAction } from './types';

import PRODUCTS from '../../utils/data';

const initialState: ProductsState = {
  productList: PRODUCTS
};

export default (
  state: ProductsState = initialState,
  action: ProductsAction
): ProductsState => {
  return state;
};
