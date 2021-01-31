import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Contacts from "./contacts"
import  Avatar from "./components/avatar"

ReactDOM.render(
  <div>
     <Avatar 
     img="https://tse1.mm.bing.net/th?id=OIP.yjbO1XwtVYZ5d7ERv_1P0QHaKe&pid=Api&rs=1&c=1&qlt=95&w=80&h=113"
     />
    <App
      name={Contacts[0].name}
      imgURL="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      phone="+987 654 321"
      email="jack@nowhere.com"
    />
    <App
      name={Contacts[1].name}
      imgURL="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
      phone="+987 654 321"
      email="Chuck@nowhere.com"
    />
  </div>,
  document.getElementById("root")
);
