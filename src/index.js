import React from 'react';
import ReactDOM from 'react-dom';


const address ="https://picsum.photos/200?grayscale"
const customestyle={
  color:"red",
  fontSize:"20px",
  borderColor:"black"
}
customestyle.color="green"
ReactDOM.render(
  <div>
  <h1 style={customestyle}>My heading</h1>
   
  </div>,
  document.getElementById('root')
);
//its working

