import { IProductsState, IProductsAction } from './types';

import PRODUCTS from '../../utils/data';

const initialState: IProductsState = {
  productList: PRODUCTS
};

export default (
  state: IProductsState = initialState,
  action: IProductsAction
): IProductsState => {
  return state;
};
