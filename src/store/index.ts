import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import products from './products/reducer';
import cart from './cart/reducer';
import orders from './orders/reducer';
import { IProductsAction } from './products/types';
import { CartAction } from './cart/types';
import { IOrdersAction } from './orders/types';

const rootReducer = combineReducers({
  products,
  cart,
  orders
});

export type AppState = ReturnType<typeof rootReducer>;

export type ActionsType = IProductsAction | CartAction | IOrdersAction;

export type ThunkActionType = ThunkAction<
  Promise<void>,
  AppState,
  null,
  ActionsType
>;

export type ThunkDispatchType = ThunkDispatch<AppState, any, ActionsType>;

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
