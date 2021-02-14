import React from "react";
import { useStateValue } from "./StateProvider";
import Checkoutproduct from "./Checkoutproduct"
import Subtotal from "./Subtotal"
//styling the checkout page here
const checkout = {
  display: "flex",
  padding:"20px",
  backgroundColor:"white",
  height:"max-content",
  
};
const checkoutad = {
  width: "100%",

  marginBottom: "25px;",
};
const checkouttitle = {
  marginRight: "10px",
  padding:"20px",
  borderBottom:"1px solid lightgray",
};
const checkoutleft={
  width:"80%"
}
const checkoutright={marginTop:"90px"}
const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div style={checkout}>
      <div style={checkoutleft}>
      <img
        style={checkoutad}
        src="https://www.lemonlight.com/app/uploads/2018/10/Your-Complete-Guide-to-Amazon-Advertising.png"
      />

      {basket?.length === 0 ? (
        <div>
          <h1> your shopping basket is empty</h1>
          <p>
            you have no item in your shopping basket,buy one or more items by
            clicking the add to basket button in home page
          </p>
        </div>
      ) : (
        <div>
          <h1 style={checkouttitle}>your shopping basket</h1>

          {/* List of all the components in the check out page*/}
          {basket.map((item) => (
            <Checkoutproduct
             id={item.id}
             title={item.title}
             price={item.price}
             rating={item.rating}
             image={item.image} 
            />
          ))}
        </div>
      )}
      </div>
      {basket.length > 0 &&(
        <div style={checkoutright}>
         <h1>Subtotal</h1>
         <Subtotal />
        </div>
      )}
    </div>
  );
};

export default Checkout;
