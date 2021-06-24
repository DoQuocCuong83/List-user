import { combineReducers } from 'redux';
import reducerRegistry from './reducer-registry';

export default combineReducers(reducerRegistry.getReducers());
