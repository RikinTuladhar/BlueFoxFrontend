import { createSlice } from "@reduxjs/toolkit";

// Corrected initial state definition
const initialState  = {  // Change inital to initial
  email: "",
  gender: "",
  location: "",
};

export const userSlice = createSlice({
  name: "User State",
  initialState , // Change inital to initial
  reducers: {
    handleUsersLocation: (state, action) => {
      state.location = action.payload;
    },
  },
});

export const { handleUsersLocation } = userSlice.actions;
export default userSlice.reducer;
