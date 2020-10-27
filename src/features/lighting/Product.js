import React from "react";
import { useDispatch } from "react-redux";
import { Card, CardText, CardBody, CardTitle, Button } from "reactstrap";
import { CarouselContainer } from "./Carousel";
import styles from "./Product.module.css";
import { saveProduct, removeProduct } from "./lightingSlice";

const lowPrice = props => {
  if (props.price) {
    return props.price.low || props.price.selling;
  }
  if (props.priceRange && props.priceRange.regular) {
    return props.priceRange.regular.low;
  }
};
const highPrice = props => {
  if (props.price) {
    return props.price.regular;
  }
  if (props.priceRange && props.priceRange.selling) {
    return props.priceRange.selling.high;
  }
};

const priceTransform = n => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  });
  return formatter.format(n);
};

export const Product = props => {
  const dispatch = useDispatch();
  return (
    <Card key={props.id} className={styles.card}>
      <a>
        <CarouselContainer images={props.images} />
      </a>
      <CardBody className={styles.productBody}>
        <CardTitle>{props.name}</CardTitle>
        <CardText className={styles.price}>
          <p className={styles.high}>{priceTransform(highPrice(props))}</p>
          <p className={styles.low}>{priceTransform(lowPrice(props))}</p>
        </CardText>
        <Button
          className={styles.button}
          onClick={() => {
            if (props.saved) {
              dispatch(removeProduct({ ...props, saved: false }));
            } else {
              dispatch(saveProduct({ ...props, saved: true }));
            }
          }}
        >
          {props.saved ? "Remove" : "Save"}
        </Button>
      </CardBody>
    </Card>
  );
};
