import { IOrdersState, IOrdersAction, ADD_ORDER, GET_ORDERS } from './types';

const initialState: IOrdersState = {
  orderList: []
};

export default (
  state: IOrdersState = initialState,
  action: IOrdersAction
): IOrdersState => {
  switch (action.type) {
    case GET_ORDERS:
      return {
        orderList: action.orderList
      };

    case ADD_ORDER:
      return {
        orderList: state.orderList.concat([action.order])
      };

    default:
      return state;
  }
};
