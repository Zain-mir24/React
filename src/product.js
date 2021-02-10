import React from "react";
const productmain = {
  display: "flex",
  flexDirection: "column",
  backgroundColor: "white",
  maxHeight: "400px",
  minWidth: "100px",
  zIndex: "1",
  alignItems: "center",
  justifyContent: "flex-end"
};
const productprice = {};
const productrating = {
  display: "flex",
};
const productInfo = {
  height: "100px",
  marginBottom: "15px",
  display: "flex",
  flexDirection: "column"
};
const buttonstyle = {
  backgroundColor: "#f0c14b",
  borde: "1px solid",
  borderColor: "#a88734 #9c7e31 #846a29",
};
const Product = (props) => {
  return (
    <div style={productmain}>
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