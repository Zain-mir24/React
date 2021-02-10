import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {StateProvider} from "./StateProvider";

ReactDOM.render(
  <StateProvider initialState={} reducer={}>
    <App />
  </StateProvider>,
  document.getElementById("root")
);
// var number=[1,2,3,4,6];

//  var y =number.filter((x)=>x<=2)
//  console.log(y)
//  console.log(number)
