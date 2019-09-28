import {
  IProductsState,
  IProductsAction,
  ADD_PRODUCT,
  EDIT_PRODUCT
} from './types';

import PRODUCTS from '../../utils/data';
import { Product } from '../../models/product';

const initialState: IProductsState = {
  productList: PRODUCTS,
  userProducts: [PRODUCTS[0]]
};

const switchProduct = (arr: Product[], updatedProduct: Product): Product[] => {
  return arr.map(product => {
    if (product.id === updatedProduct.id) {
      return updatedProduct;
    }

    return product;
  });
};

export default (
  state: IProductsState = initialState,
  action: IProductsAction
): IProductsState => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        productList: state.productList.concat([action.product]),
        userProducts: state.userProducts.concat([action.product])
      };

    case EDIT_PRODUCT:
      return {
        productList: switchProduct(state.productList, action.product),
        userProducts: switchProduct(state.userProducts, action.product)
      };

    default:
      return state;
  }
};
