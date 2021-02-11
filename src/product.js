import React from "react";
import { useStateValue } from "./StateProvider";
const productmain = {
  display: "flex",
  flexDirection: "column",
  backgroundColor: "white",
  maxHeight: "400px",
  minWidth: "100px",
  zIndex: "1",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: "20px",
  margin: "10px",
  width: "100%",
};
const productprice = { marginTop: "5px" };
const productrating = {
  display: "flex",
};
const productInfo = {
  height: "100px",
  marginBottom: "15px",
};
const buttonstyle = {
  backgroundColor: "#f0c14b",
  borde: "1px solid",
  borderColor: "#a88734 #9c7e31 #846a29",
};

const Product = ({ id, title, price, rating, image }) => {
  const [{basket},dispatch] = useStateValue();
  const addtobasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div style={productmain}>
      <div style={productInfo}>
        <p>{title}</p>
        <p style={productprice}>
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
      </div>
      <img
        style={{
          width: "100%",
          maxHeight: "200px",
          objectFit: "contain",
          marginBottom: "15px",
        }}
        src={image}
      />
      <button onClick={addtobasket} style={buttonstyle}>
        add to basket{" "}
      </button>
    </div>
  );
};
export default Product;
