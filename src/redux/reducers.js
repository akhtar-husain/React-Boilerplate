import { persistCombineReducers } from 'redux-persist';
import localForage from 'localforage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import AuthReducer from './auth/reducer';

const rootPersistConfig = {
  key: 'root',
  storage: localForage,
  stateReconciler: autoMergeLevel2,
  debug: true
};

export default persistCombineReducers(rootPersistConfig, {
  auth: AuthReducer,
  // rest of the reducers.
});