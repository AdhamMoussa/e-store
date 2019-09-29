import {
  IProductsState,
  IProductsAction,
  ADD_PRODUCT,
  EDIT_PRODUCT,
  DELETE_PRODUCT,
  GET_PRODUCTS
} from './types';

import { Product } from '../../models/product';

const initialState: IProductsState = {
  productList: [],
  userProducts: []
};

const switchProduct = (arr: Product[], updatedProduct: Product): Product[] => {
  return arr.map(product => {
    if (product.id === updatedProduct.id) {
      return updatedProduct;
    }

    return product;
  });
};
const removeProduct = (arr: Product[], productId: Product['id']): Product[] => {
  return arr.filter(product => product.id !== productId);
};

export default (
  state: IProductsState = initialState,
  action: IProductsAction
): IProductsState => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        productList: action.productList,
        userProducts: action.productList.filter(
          product => product.userId === 'u1'
        )
      };

    case ADD_PRODUCT:
      return {
        ...state,
        productList: state.productList.concat([action.product]),
        userProducts: state.userProducts.concat([action.product])
      };

    case EDIT_PRODUCT:
      return {
        ...state,
        productList: switchProduct(state.productList, action.product),
        userProducts: switchProduct(state.userProducts, action.product)
      };

    case DELETE_PRODUCT:
      return {
        ...state,
        productList: removeProduct(state.productList, action.productId),
        userProducts: removeProduct(state.userProducts, action.productId)
      };

    default:
      return state;
  }
};
