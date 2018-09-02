import { createStore, compose, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore } from "redux-persist";
import persistedReducers from "./reducers";

let middlewares = [ReduxThunk];
/* 
 * NODE_ENV is defined in webpack config file.
 * for development -> webpack.config.js
 * for production -> webpack.prod.config.js
 */

console.log('NODE_ENV', process.env.NODE_ENV);
if (NODE_ENV !== 'production') {
  middlewares.push(logger);
}

const store = createStore(
  persistedReducers,
  {},
  compose(applyMiddleware(...middlewares))
);

const persistor = persistStore(store, { timeout: false }, (err) => {
  if (err) {
    console.warn('Error:', err);
  }
});
export {
  store,
  persistor
}

