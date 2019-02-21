// import { createStore, applyMiddleware } from 'redux';
import { createStore } from 'redux';

// import thunkMiddleware from 'redux-thunk';
// import { createLogger } from 'redux-logger';

import reducer from './modules/reducer';

// const middlewares = [thunkMiddleware, createLogger()];

export default function configureStore() {
  // const store = createStore(reducer, applyMiddleware(...middlewares));
  const store = createStore(reducer);
  return store;
}
