import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import Productlist from "./productlist"


function App() {
  
  return(
    <div>
      <Header />
      <Productlist />
      <Productlist />
      <Footer />
    </div>
  )
}

export default App;
