// import React from 'react';

// const footers={
//     color: '#ccc',
//     position: 'absolute',
//     textAlign: 'center',
//     bottom: '0',
//     width: '100%',
//     height: '2.5rem',
// }
// const date= new Date();
// const currentyear =date.getFullYear();
// function Footer(){
//     return (
//         <div> 
//       <p style={footers} >
//        copyright {currentyear}
//       </p>
//             </div>
//     )
// }
// export {Footer}
import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
