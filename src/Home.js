import React from "react";
const custom = {
  marginTop: "100px",
  maxWidth:"1500px",
  marginRight:"auto",
  marginLeft:"auto"
};
const imgcustom = {
  width: "100%",
  height:"500px",
  maskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
  
};
const Home = () => {
  return (
    <div style={custom}>
      <img
        style={imgcustom}
        src="http://wgefund.org/wp-content/uploads/2016/11/AmazonSmilebanner.jpg"
      ></img>
      {/*  */}
    </div>
  );
};

export default Home;
