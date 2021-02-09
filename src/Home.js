import React from "react";
const custom = {
  marginTop: "100px",
  maxWidth: "1500px",
  marginRight: "auto",
  marginLeft: "auto",
};
const imgcustom = {
  width: "100%",
  height: "500px",
  maskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
};
const Home = () => {
  return (
    <div style={custom}>
      <img
        style={imgcustom}
        src="http://wgefund.org/wp-content/uploads/2016/11/AmazonSmilebanner.jpg"
      />
      {/*  */}
      <Product
        id={1234}
        title="The lean hair brush"
        price={11.96}
        rating={5}
        image="https://tse2.mm.bing.net/th?id=OIP.YmNbbFHsb9SPGsb51nWU9QHaGf&pid=Api&P=0&w=193&h=170"
      />
    </div>
  );
};

export default Home;
