import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { savedProductsState } from "./savedProductsSlice";
import { Product } from "../lighting/Product";

export function SavedProducts() {
  const dispatch = useDispatch();
  const savedProducts = useSelector(savedProductsState);
  console.log(savedProducts);

  const renderElements = () => {
    return <div />;
  };

  return (
    <div>
      <div>Saved Product Component</div>
      <div class="row">{renderElements()}</div>
    </div>
  );
}
