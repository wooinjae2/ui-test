import authSlice from './auth';
import counterSlice from './counter';
import { configureStore } from '@reduxjs/toolkit';


const store = configureStore({
    reducer: { counter: counterSlice.reducer, auth: authSlice.reducer }, //리듀서 여러개도 가능한가 ?
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;

