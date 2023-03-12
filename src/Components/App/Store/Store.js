import {configureStore} from '@reduxjs/toolkit';
import RootReducer from './Reducers';

const store = configureStore({                      //this will create the store with a reducer
    reducer: RootReducer
})

export default store;