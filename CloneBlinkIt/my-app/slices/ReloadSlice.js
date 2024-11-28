import { createSlice } from "@reduxjs/toolkit";

// Corrected initial state definition
const initialState = false;

export const reloadSlice = createSlice({
  name: "reloadState",
  initialState, // Change inital to initial
  reducers: {
    handleReload: (state) => !state
  },
});

export const { handleReload } = reloadSlice.actions;
export default reloadSlice.reducer;
