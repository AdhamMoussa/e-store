import { ICartState, CartAction, ADD_TO_CART, REMOVE_FROM_CART } from './types';

const initialState: ICartState = {
  cartList: []
};

export default (
  state: ICartState = initialState,
  action: CartAction
): ICartState => {
  switch (action.type) {
    case ADD_TO_CART: {
      let currentItem = state.cartList.find(
        item => item.product.id === action.product.id
      );

      if (currentItem) {
        return {
          cartList: state.cartList.map(item => {
            if (item.product.id === action.product.id) {
              item.qty++;
            }

            return item;
          })
        };
      }

      currentItem = {
        product: action.product,
        qty: 1
      };

      return {
        cartList: state.cartList.concat([currentItem])
      };
    }

    case REMOVE_FROM_CART:
      return {
        cartList: state.cartList.filter(item => item.product.id !== action.id)
      };

    default:
      return state;
  }
};
