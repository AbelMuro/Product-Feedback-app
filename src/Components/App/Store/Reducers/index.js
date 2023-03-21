import {FilterReducer, SortReducer} from './Reducers.js';
import { combineReducers } from 'redux';

const RootReducer = combineReducers({
    filter: FilterReducer,
    sort: SortReducer
})

export default RootReducer;