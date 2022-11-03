import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Menu {
  name: string;
  to: string;
}

const menu = createSlice({
  name: "menu",
  initialState: " ",
  reducers: {
    increment: (state, action: PayloadAction<number>) => state + action.payload,
  },
});

export default configureStore({
  reducer: { menu: menu.reducer },
});
