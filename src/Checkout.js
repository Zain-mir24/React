import React from "react";
import { useStateValue } from "./StateProvider";
import Checkoutproduct from "./Checkoutproduct"
//styling the checkout page here
const checkout = {
  marginTop: "100px",
};
const checkoutad = {
  width: "100%",
  height: "400px",
  marginBottom: "25px;",
};
const checkouttitle = {};
const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div style={checkout}>
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
             item={item.id}
             title={item.title}
             price={item.price}
             rating={item.rating}
             image={item.image}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Checkout;
