// import React from 'react'
// const customestyle={
//     background: '#fff',
//     borderRadius: '7px',
//    boxShadow: '0 2px 5px #ccc',
//     Padding: '10px',
//     width: '240px',
//     margin: '16px',
//     float: 'left',
// }
// const h1style={
   
//         fontSize: '1.1em',
//         marginBottom: '6px',
      
// }
// const pstyle={
//     fontSize:' 1.1em',
//   marginBottom: '10px',
//   whiteSpace: 'pre-wrap',
//   wordWrap: 'break-word',
// }
// function Note(){
// return (
//     <div style ={customestyle}>
//         <h1 style={h1style}>
//             My note
//         </h1>
//         <p style={pstyle}>
//             Hi my name is zain
//         </p>
//     </div>
// )
// }
// export {Note};
import React from "react";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Note;
