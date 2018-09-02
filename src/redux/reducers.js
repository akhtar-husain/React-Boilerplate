import { combineReducers } from "redux";
import { persistReducer, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import storage from 'localforage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import AuthReducer from './auth/reducer';

const rootPersistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2,
  debug: true
};

/* const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, AuthReducer)
  // rest of the reducers
}); 
export default const combinedReducer = persistCombineReducers(rootPersistConfig, {
  AuthReducer
})*/
export default persistCombineReducers(rootPersistConfig, {
  auth: AuthReducer
});

// export default persistReducer(rootPersistConfig, combinedReducer);