import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice';
//reducers change the state to a new state 
export const store = configureStore({
    reducer: {
        counter: counterReducer,
    }
})
