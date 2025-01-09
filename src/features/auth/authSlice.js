import { createSlice } from "@reduxjs/toolkit";

// cek data auth dari lokalstorage
const initialState = JSON.parse(localStorage.getItem("auth")) || false;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn: () => {
      return true;
    },
    signOut: () => {
      return false;
    },
  },
});

export const { signIn, signOut } = authSlice.actions;
export default authSlice.reducer;
