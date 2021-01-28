import React from 'react';
import ReactDOM from 'react-dom';

const address ="https://picsum.photos/200?grayscale"

const customestyle={
  color:"",
}
const date = new Date();
const current =date.getHours();

let greeting;
if(current<12){
    greeting="Good morning"
    customestyle.color="red"
}else if(current<18){
  greeting="goodafternoon"
  customestyle.color="Green"
}else{
  greeting="Good night"
  customestyle.color="blue"
}

ReactDOM.render(
 <h1 style={customestyle}>{greeting}</h1>,
  document.getElementById('root')
);
//its working

