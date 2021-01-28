import React from 'react';
import Heading from "./heading";
import {add,multiply,subtract,divide} from "./methods"
import List from "./list";

function App() {
    return (<div>

    <ul>
      <li>
        {add(1,2)}
      </li>
      <li>
        {multiply(2,3)}
      </li>
      <li>
        {subtract(3,4)}
      </li>
      <li>
        {divide(6,6)}
      </li>

      
    </ul>
    
  </div>
    );
}

export default App;
