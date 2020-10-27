import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Product.module.css";

import { lightingState } from "./lightingSlice";
import { Product } from "./Product";

import { Col, Row } from "reactstrap";

export function Lighting() {
  const dispatch = useDispatch();
  const lighting = useSelector(lightingState);

  const renderElements = () => {
    return lighting.groups.map(group => {
      return (
        <Col className={styles.product}>
          <Product {...group} />
        </Col>
      );
    });
  };

  return (
    <div>
      <div className={styles.sectionTitle}>
        <h4>Available Products</h4>
      </div>
      <Row>{renderElements()}</Row>
    </div>
  );
}
