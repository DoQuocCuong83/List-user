import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from './root-reducer';
import reducerRegistry from './reducer-registry';
import { combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './root-saga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

reducerRegistry.setEventListener((reducers) => {
  store.replaceReducer(combineReducers(reducers));
});
