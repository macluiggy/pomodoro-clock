import reducer from './reducer.js';
import { combineReducers } from 'redux';

export default combineReducers({
	stateReducer: reducer,
})