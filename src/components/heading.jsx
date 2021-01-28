import React from 'react';

function Heading(){
  const date =new Date();
const currentDate = date.getHours();
let greeting;
const customestyle={
  color:""
}
if(currentDate<12){
  greeting="morning time  working";
  customestyle.color="Blue";
}else{
  greeting="evening time working";
  customestyle.color="Red";
}
    return (<h1 style={customestyle}>{greeting}</h1>
      );  }
  export default Heading;