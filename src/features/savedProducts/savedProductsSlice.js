import { createSlice } from "@reduxjs/toolkit";

export const savedProductsSlice = createSlice({
  name: "savedProducts",
  reducers: {
    saveProduct: (state, item) => {}
  }
});

export const savedProductsState = state => state;

export default savedProductsSlice.reducer;
