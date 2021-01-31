

import React from 'react';
import ReactDOM from 'react-dom';

function Card(){
    return <div>
     <h2>Beyonce</h2>
      <img src="https://tse1.mm.bing.net/th?id=OIP.N5ZpVu44yJ2UctbNl988zwHaE7&pid=Api&P=0&w=283&h=189"
      alt="avatar_img"
       />
       <p>+123 456 789</p>
       <p>Eminem@.com</p>
    </div>
}
ReactDOM.render(
  <div>
      <h1>eminem</h1>
      <Card />
  </div>    
,document.getElementById("root")
)
