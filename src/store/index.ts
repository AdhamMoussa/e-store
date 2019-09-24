import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import products from './products/reducer';
import cart from './cart/reducer';

const rootReducer = combineReducers({
  products,
  cart
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, composeWithDevTools());
