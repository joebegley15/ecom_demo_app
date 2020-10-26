import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { savedProductState } from "../lighting/lightingSlice";
import { Product } from "../lighting/Product";

import styles from "../lighting/Product.module.css";

export function SavedProducts() {
  const dispatch = useDispatch();
  const savedProducts = useSelector(savedProductState);

  const renderElements = () => {
    return savedProducts.map(group => {
      return (
        <div className={styles.product + " col"}>
          <Product {...group} />
        </div>
      );
    });
  };

  if (savedProducts.length) {
    return (
      <div>
        <div>Saved Products</div>
        <div class="row">{renderElements()}</div>
      </div>
    );
  }

  return null;
}
