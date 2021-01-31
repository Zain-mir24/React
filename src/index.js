import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}
ReactDOM.render(
  <div>
    <h1>My contacts</h1>
    <Card
      name="eminem"
      img="https://tse1.mm.bing.net/th?id=OIP.N5ZpVu44yJ2UctbNl988zwHaE7&pid=Api&P=0&w=283&h=189"
      tel="+123 456 789"
      email="eminem@.com"
    />
    <Card
      name="Luffy"
      img="https://tse1.mm.bing.net/th?id=OIP.fPO14Ar2uB4i0panY6Yn2AHaDt&pid=Api&P=0&w=383&h=192"
      tel="987 654 321"
      email="rami@.com"
    />
  </div>,
  document.getElementById("root")
);
