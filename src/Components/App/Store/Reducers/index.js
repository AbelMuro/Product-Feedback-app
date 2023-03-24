import {FilterReducer, SortReducer, StatusReducer} from './Reducers.js';
import { combineReducers } from 'redux';

const RootReducer = combineReducers({
    filter: FilterReducer,
    sort: SortReducer,
    status: StatusReducer,
})

export default RootReducer;