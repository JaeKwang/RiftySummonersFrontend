import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import favoriteSlice from "./slices/favoriteSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    favorite: favoriteSlice,
  },
});

export default store;