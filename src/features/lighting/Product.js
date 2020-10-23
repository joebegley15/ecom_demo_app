import React from "react";
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

export const Product = props => {
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
        <Button>Button</Button>
      </CardBody>
    </Card>
  );
};
