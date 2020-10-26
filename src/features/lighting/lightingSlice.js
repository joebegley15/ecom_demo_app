import { createSlice } from "@reduxjs/toolkit";
import products from "./products";
import { loadState } from "../../localStorage";

const getInitialState = () => {
  const initialState = loadState();
  if (initialState) {
    return initialState.lighting;
  }
  return { products, savedProducts: [] };
};

export const lightingSlice = createSlice({
  name: "lighting",
  initialState: getInitialState(),
  reducers: {
    saveProduct: (state, item) => {
      const contains = state.savedProducts.find(element => {
        return element.id === item.payload.id;
      });
      if (!contains) {
        state.savedProducts.push(item.payload);
      }
    },
    removeProduct: (state, item) => {
      let index;
      state.savedProducts.find((element, i) => {
        if (element.id === item.payload.id) {
          index = i;
          return true;
        }
      });
      if (index !== undefined) {
        state.savedProducts.splice(index, 1);
      }
    }
  }
});

export const lightingState = state => state.lighting.products;
export const savedProductState = state => state.lighting.savedProducts;

export default lightingSlice.reducer;

export const { saveProduct, removeProduct } = lightingSlice.actions;
