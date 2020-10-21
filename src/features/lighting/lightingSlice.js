import { createSlice } from "@reduxjs/toolkit";
import products from "./products";

export const lightingSlice = createSlice({
  name: "lighting",
  initialState: products,
  reducers: {}
});

export const lightingState = state => state.lighting;

export default lightingSlice.reducer;
