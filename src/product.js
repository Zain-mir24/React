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

function Product({ id, title, image, price, rating }) {
  const [{ }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
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
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}
export default Product;
