import React from "react";

export const Product = props => {
  return (
    <div key={props.id}>
      <img src={props.images[0].href} />
      <h3>{props.name}</h3>
    </div>
  );
};
