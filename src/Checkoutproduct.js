import React from "react";
import { useStateValue } from "./StateProvider";
const checkoutproduct = {
  display: "flex",
  marginBottom:"20px",
  marginTop:"20px"
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
const checkouttitle = {
  fontSize: "17px",
  fontWeight: "800",
};
const buttonstyle = {
  backgroundColor: "#f0c14b",
  borde: "1px solid",
  borderColor: "#a88734 #9c7e31 #846a29",
};
const Checkoutproduct = ({ id, title, price, rating, image }) => {
  const [{basket},dispatch] = useStateValue();
  const removefrombasket=() =>{
   dispatch({
     type:"REMOVE_FROM_BASKET",
     id:id
   })

  }
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
        <button  onClick={removefrombasket}  style={buttonstyle}>Remove from basket</button>
      </div>
    </div>
  );
};

export default Checkoutproduct;
