import React from "react";

const checkoutproduct = {
  display: "flex",
};
const checkoutinfo = {
  padding: "20px",
};
const productrating = {
  display: "flex",
};
const checkoutproductimage = {
  objectFit: "contain",
  width: "180px",
  height: "180px",
};
const checkouttitle = {};
const buttonstyle = {
  backgroundColor: "#f0c14b",
  borde: "1px solid",
  borderColor: "#a88734 #9c7e31 #846a29",
};
const Checkoutproduct = ({ id, title, price, rating, image }) => {
  return (
    <div style={checkoutproduct}>
      <img style={checkoutproductimage} src={image} alt="" />

      <div style={checkoutinfo}>
        <p style={checkouttitle}>{title}</p>
        <p>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div style={productrating}>
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
        <button style={buttonstyle}>Remove from basket</button>
      </div>
    </div>
  );
};

export default Checkoutproduct;
