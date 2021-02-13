import React from "react";
import Curencyformat from "react-currency-format";
import { useStateValue } from "./StateProvider";

const subtotal = {};
const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div style={subtotal}>

      <Curencyformat
      renderText={(value)=>(
        <>
        <p>
          subtotal({basket.length} items):<strong></strong>
        </p>
        <small>
          <input type="checkbox" /> this order contains a gift
        </small>

        </>
      )}
        decimalScale={2}
        value={0}
        displayType={"Text"}
        thousandsSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to checkout</button>
    </div>
  );
};

export default Subtotal;
