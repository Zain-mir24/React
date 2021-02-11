import React from "react";
import Product from "./product";
const custom = {
  marginTop: "100px",
  maxWidth: "1500px",
  marginRight: "auto",
  marginLeft: "auto",
};
const imgcustom = {
  width: "100%",
  height: "400px",
  maskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
  zIndex:"-1",
  marginBottom: "-5px"
};
const customrow={
  display: "flex",
  zIndex: "1",
  marginLeft:"5px",
  marginRight:"5px",
  marginTop:"-25px",
  marginBottom:"20px",
  
  

}
const Home = () => {
  return (
    <div style={custom}>
      <img
        style={imgcustom}
        src="http://wgefund.org/wp-content/uploads/2016/11/AmazonSmilebanner.jpg"
      />
      {/*  */}
      <div style={customrow}>
      <Product
        id={1234}
        title="The lean hair brush,It will not damage the hair.The color is red and it is a really smooth comb"
        price={11.96}
        rating={5}
        image="https://tse2.mm.bing.net/th?id=OIP.YmNbbFHsb9SPGsb51nWU9QHaGf&pid=Api&P=0&w=193&h=170"
      />
       <Product
        id={1234}
        title="The ez shoes,A shoe that will change your life. Makes you run alot faster"
        price={11.96}
        rating={3}
        image="https://tse4.mm.bing.net/th?id=OIP.3jmjs80shtZqwgD7AvFLbgHaFj&pid=Api&P=0&w=213&h=161"
      />
       
      </div>
      <div style={customrow}>
      <Product
        id={1234}
        title="These gloves are leather made.They are made for handling tough situations"
        price={11.96}
        rating={4}
        image="https://tse1.mm.bing.net/th?id=OIP.ZGiBfsqOcl-QbdSVn3sAAAHaHa&pid=Api&P=0&w=300&h=300"
      />
       <Product
        id={1234}
        title="The lean hair brush,It will not damage the hair.The color is red and it is a really smooth comb"
        price={11.96}
        rating={5}
        image="https://tse2.mm.bing.net/th?id=OIP.YmNbbFHsb9SPGsb51nWU9QHaGf&pid=Api&P=0&w=193&h=170"
      />
        <Product
        id={1234}
        title="The lean hair brush,It will not damage the hair.The color is red and it is a really smooth comb"
        price={11.96}
        rating={5}
        image="https://tse2.mm.bing.net/th?id=OIP.YmNbbFHsb9SPGsb51nWU9QHaGf&pid=Api&P=0&w=193&h=170"
      />
       
      </div>
      <div style={customrow}>
      <Product
        id={1234}
        title="The lean hair brush,It will not damage the hair.The color is red and it is a really smooth comb"
        price={11.96}
        rating={5}
        image="https://tse3.mm.bing.net/th?id=OIP.Qkps31xYhwfWCQ0gxgplbAHaEK&pid=Api&P=0&w=297&h=168"
      /></div>
      
    </div>
  );
};

export default Home;
