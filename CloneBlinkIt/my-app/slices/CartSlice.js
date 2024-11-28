import { createSlice } from "@reduxjs/toolkit";

// Corrected initial state definition
const initialState = [];

export const cartSlice = createSlice({
  name: "Cart State",
  initialState, // Change inital to initial
  reducers: {
    fetchCartFromLocalStorage: (state) => {
      if (typeof window !== "undefined") {
        state = JSON.parse(window.localStorage.getItem("cart"));
      }
    },
    handleCartAdd: (state, action) => {
      state = [...state, action.payload];
    },
  },
});

export const { handleCartAdd, fetchCartFromLocalStorage } = cartSlice.actions;
export default cartSlice.reducer;
