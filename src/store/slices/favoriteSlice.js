import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalAmount: 0,
};

const favoriteSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const exisitingItem = state.items.find((item) => item.id === action.payload.id);
      
      // 중복 방지
      if(!exisitingItem) {
        state.items.push(action.payload);
        state.totalAmount += action.payload.price;
      }
    },
    removeFavorite: (state, action) => {
      state.items = state.items.filter((v) => v.id !== action.payload.id);
      state.totalAmount -= action.payload.price;
    },
    clearFavorite: (state) => {
      state = initialState;
    }
  },
});

export const { addFavorite, removeFavorite, clearFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;