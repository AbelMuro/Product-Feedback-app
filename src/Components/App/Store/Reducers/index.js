import {FilterReducer} from './Reducers.js';
import { combineReducers } from 'redux';

const RootReducer = combineReducers({
    filter: FilterReducer,
})

export default RootReducer;