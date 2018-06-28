import {createStore, compose, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import { persistReducer, persistStore } from "redux-persist";
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import rootReducer from "./reducers";

const persistConfig = {
    key: 'react',
    storage
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
let middlewares = [ReduxThunk];
/* 
 * NODE_ENV is defined in webpack config file.
 * for development -> webpack.config.js
 * for production -> webpack.prod.config.js
 */
if (NODE_ENV !== 'production') {
    middlewares.push(logger);
}

export const store = createStore(
    persistedReducer,
    compose(applyMiddleware(...middlewares))
);
export const persistor = persistStore(store);

