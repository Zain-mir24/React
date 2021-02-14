import React from "react";
import Curencyformat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import {getbaskettotal} from "./Reducer"

const subtotal = {
display: "flex",
flexDirection: "column",
width: "300px",
height: "100px",
paddin:"20px",
backgroundColor:"#f3f3f3",
border:"1px solid #dddddd",
borderRadius: "3px"

};
const subtotalgift={
  display: "flex",  
  alignItems: "center",
}
const inputstyle={
  marginRight:"5px"
}
const buttonstyle = {
  backgroundColor: "#f0c14b",
  borde: "1px solid",
  borderColor: "#a88734 #9c7e31 #846a29",
};
const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div style={subtotal}>
      <Curencyformat
        renderText={(value) => (
          <>
            <p>
              subtotal({basket.length} items):<strong></strong>
            </p>
            <small style={subtotalgift}>
              <input style={inputstyle}type="checkbox" /> this order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getbaskettotal(basket)}
        displayType={"Text"}
        thousandsSeparator={true}
        prefix={"$"}
      />
      <button style={buttonstyle}>Proceed to checkout</button>
    </div>
  );
};

export default Subtotal;
