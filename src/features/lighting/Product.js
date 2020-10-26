import React from "react";
import { useDispatch } from "react-redux";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import styles from "./Product.module.css";
import { saveProduct, removeProduct } from "./lightingSlice";

export const Product = props => {
  const dispatch = useDispatch();
  return (
    <Card key={props.id}>
      <CardImg top src={props.images[0].href} alt="Card image cap" />
      <CardBody className={styles.productName}>
        <CardTitle>{props.name}</CardTitle>
        <CardSubtitle>Card subtitle</CardSubtitle>
        <CardText className={styles.description}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </CardText>
        <Button
          onClick={() => {
            console.log(props.saved);
            if (props.saved) {
              dispatch(removeProduct({ ...props, saved: false }));
            } else {
              dispatch(saveProduct({ ...props, saved: true }));
            }
          }}
        >
          Button
        </Button>
      </CardBody>
    </Card>
  );
};
