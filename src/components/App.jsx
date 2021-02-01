import React from "react";
import Avatar from "./avatar"
import Detail from "./details"

function App(props) {
  return (
    <div>
    
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
            <Avatar   img={props.imgURL} />
        </div>
        <div className="bottom ">
          <Detail detailinfo={props.phone}/>
          <Detail detailinfo={props.email}/>
         
        </div>
      </div>
    </div>
  );
}

export default App;
