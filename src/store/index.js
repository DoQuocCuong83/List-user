import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './root-reducer';
import reducerRegistry from './reducer-registry';
import { combineReducers } from 'redux';

export const store = configureStore({
  reducer: rootReducer,
});

reducerRegistry.setEventListener((reducers) => {
  store.replaceReducer(combineReducers(reducers));
});
