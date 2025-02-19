import { createSlice } from "@reduxjs/toolkit";

const initialState =
  JSON.parse(localStorage.getItem("theme")) || "system";

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      const newTheme = action.payload;
      return state = newTheme;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
