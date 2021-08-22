import { createSlice } from '@reduxjs/toolkit';


const uiSlice  = createSlice({
    name: 'ui',
    initialState: {cartIsVisible: false, notification: null},
    reducers : {
        toggle(state){
            console.log(state.cartIsVisible);
            state.cartIsVisible =  !state.cartIsVisible;
        },
        showNotification(state, action){
            state.notification = { status: action.payload.status, title: action.payload.title, message: action.payload.message};
        }
    }
})

export const uiActions = uiSlice.actions;

export default uiSlice;