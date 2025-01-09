import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import userReducer from "../features/userSlice";
import themeReducer from "../features/ThemeSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    theme: themeReducer,
  },
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("auth", JSON.stringify(state.auth));
  localStorage.setItem("user", JSON.stringify(state.user));
  localStorage.setItem("theme", JSON.stringify(state.theme));
});

export default store;
