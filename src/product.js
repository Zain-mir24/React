import React from "react";
const product = {};
const productprice = {};
const productrating = {
  display: "flex",
};
const productInfo = {
  display: "flex",
  flexDirection: "column",
  height: "100px",
  marginBottom: "15px",
};
const buttonstyle={
    backgroundColor:"#f0c14b",
    borde:"1px solid",
    borderColor:"#a88734 #9c7e31"
}
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
        <img
          style={{
            width: "100%",
            maxHeight: "200px",
            objectFit: "contain",
            marginBottom: "15px",
          }}
          src={props.image}
        />
        <button style={buttonstyle}>add to basket </button>
      </div>
    </div>
  );
};
export default Product;
