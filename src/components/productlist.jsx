import React from "react";
import Product from "./product"
import { Button, cart ,img} from "react-bootstrap";
const customestyle={
 backgroundColor:"#ded9e0",
 
} 

const productlist = () => {
  return (
    <cart className="container" >
      <cart className="row">
        <cart className="col-lg-4" style={customestyle}>
           <Product />
        </cart>
        <cart className="col-lg-4">
          <Button>My Product</Button>
        </cart>
       
      </cart>
    </cart>
  );
};

export default productlist;
