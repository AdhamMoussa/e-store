import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import products from './products/reducer';
import cart from './cart/reducer';
import orders from './orders/reducer';

const rootReducer = combineReducers({
  products,
  cart,
  orders
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, composeWithDevTools());
