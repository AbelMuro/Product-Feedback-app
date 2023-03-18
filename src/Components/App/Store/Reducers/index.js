import {FilterReducer, TotalCommentsReducer} from './Reducers.js';
import { combineReducers } from 'redux';

const RootReducer = combineReducers({
    filter: FilterReducer,
    totalComments: TotalCommentsReducer
})

export default RootReducer;