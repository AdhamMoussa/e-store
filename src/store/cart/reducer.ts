import { CartState, CartAction, ADD_TO_CART, REMOVE_FROM_CART } from './types';

const initialState: CartState = {
  cartList: []
};

export default (
  state: CartState = initialState,
  action: CartAction
): CartState => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        cartList: state.cartList.concat([action.payload])
      };

    case REMOVE_FROM_CART:
      return {
        cartList: state.cartList.filter(
          product => product.id !== action.payload
        )
      };

    default:
      return state;
  }
};
