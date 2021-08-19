import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {counter: 0, showCounter: true};
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducer:{
        increament(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state, action){
            state.counter = state.counter+ action.payload;
        },
        toggleCounter(state){
            state.showCounter = !state.showCounter;
        }
    }
});



const store = configureStore({
    reducer: { counter: counterSlice.reducer } //리듀서 여러개도 가능한가 ?
});

export const counterActions = counterSlice.actions;

export default store;

