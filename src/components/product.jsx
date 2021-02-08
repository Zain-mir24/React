import React from 'react'
import {Image} from "react-bootstrap"
 const styling={
 border: '1px solid black'
 }

const product = () => {
    return (
        <div>
           <Image style={styling}  src="https://tse3.mm.bing.net/th?id=OIP.OH66fh87a7_KhisDTtNd5QHaHa&pid=Api&P=0&w=300&h=300" fluid />
       
         <span>My mobile phone</span>
         <p>This mobile phone is the best one out there.Iphone will never be outta stock</p> 
         </div>
        
    )
}

export default product
//creating  a separate component for product list