import React from "react";
import Product from "./product"
import { Button, cart,Image,Col,Row,Container } from "react-bootstrap";
const customestyle={

 border:"1px solid black",
 padding:"5%",
 width:"50%"

 
} 

const productlist = () => {
  return (
    // <cart className="container" >
    //   <cart className="row">
    //     <cart className="col-lg-4" style={customestyle}>
    //        <Product />
    //     </cart>
    //     <cart className="col-lg-4" style={customestyle}>
    //       <Product />
    //     </cart>
       
    //   </cart>
    // </cart>
    <Container>
  <Row >
    <Col xs={6} md={6} style={customestyle} >
     <Product />
    </Col>
   
  </Row>
</Container>
  );
};

export default productlist;
