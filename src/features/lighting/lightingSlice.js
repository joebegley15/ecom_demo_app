import { createSlice } from "@reduxjs/toolkit";
import products from "./products";

export const lightingSlice = createSlice({
  name: "lighting",
  initialState: { products, savedProducts: [] },
  reducers: {
    saveProduct: (state, item) => {
      const contains = state.savedProducts.find(element => {
        return element.id === item.payload.id;
      });
      if (!contains) {
        state.savedProducts.push(item.payload);
      }
    }
  }
});

export const lightingState = state => state.lighting.products;
export const savedProductState = state => state.lighting.savedProducts;

export default lightingSlice.reducer;

export const { saveProduct } = lightingSlice.actions;
