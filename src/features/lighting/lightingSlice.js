import { createSlice } from "@reduxjs/toolkit";
import products from "./products";

export const lightingSlice = createSlice({
  name: "lighting",
  initialState: { products, savedProducts: {} },
  reducers: {}
});

export const lightingState = state => state.lighting.products;

export default lightingSlice.reducer;
