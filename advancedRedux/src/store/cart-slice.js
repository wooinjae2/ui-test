import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    changed: false
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      console.log(newItem.id);
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.changed = true;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        }); //일반 redux에서는 push를 하면 immutable하지 않기 때문에 기존 reference type의 객체를 수정하는게 문제가 되지만
        //redux toolkit에서 내부적으로 immutable하게 업데이트 하도록 해서 이번에는 push를 사용하겠다.
      } else {
        existingItem.quantity = existingItem.quantity + 1;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.changed = true;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price; 
      }
    },
    replaceCart(state, action){
        state.items = action.payload.items;
        state.totalQuantity = action.payload.totalQuantity;
    }
  },
});


export const cartActions = cartSlice.actions;
export default cartSlice;
