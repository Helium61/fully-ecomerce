// cartSlice.js

import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addProductToCart: (state, action) => {
      const { id, name, price, quantity } = action.payload;
      const existingItemIndex = state.items.findIndex(item => item.name === name);
      
      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].quantity += quantity;
      } else {
        state.items.push({ id, name, price, quantity });
      }
    },
    removeProductFromCart: (state, action) => {
      const name = action.payload;
      const existingItemIndex = state.items.findIndex(item => item.name === name);
      
      if (existingItemIndex !== -1) {
        state.items.splice(existingItemIndex, 1);
      }
    },
    // Add other reducers as needed
  },
});

export const { addProductToCart, removeProductFromCart } = cartSlice.actions;

export default cartSlice.reducer;
