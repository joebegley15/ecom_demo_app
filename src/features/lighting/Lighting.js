import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Product.module.css";

import { lightingState } from "./lightingSlice";
import { Product } from "./Product";

export function Lighting() {
  const dispatch = useDispatch();
  const lighting = useSelector(lightingState);

  const renderElements = () => {
    return lighting.groups.map(group => {
      return (
        <div className={styles.product + " col"}>
          <Product {...group} />
        </div>
      );
    });
  };

  console.log(lighting);

  return (
    <div>
      <div>Lighting Component</div>
      <div class="row">{renderElements()}</div>
    </div>
  );
}
