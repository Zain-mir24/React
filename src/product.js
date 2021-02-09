import React from "react";
const product = {
    display: "flex",
    flexDirection:"column",
};
const productprice = {};
const productrating = {
  display: "flex",
};
const productInfo = {};
const Product = (props) => {
  return (
    <div style={product}>
      <div style={productInfo}>
        <p>{props.title}</p>
        <p style={productprice}>
          <small>$</small>
          <strong>{props.price}</strong>
        </p>
        <div style={productrating}>
          {Array(props.rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
        <img src={props.image} />
        <button>add to basket </button>
      </div>
    </div>
  );
};
export default Product;
