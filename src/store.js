import { createStore } from 'redux';
import rootReducer from './reducers/';
//import rootReducer from './reducers/reducer.js'

export default createStore(rootReducer);