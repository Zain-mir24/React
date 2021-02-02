import React from "react";
import Entry from "./entry"
import emojipedia from "../contacts";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
         
    {emojipedia.map(emojiTerm => (
  
    <Entry
      id={emojiTerm.id}
      key={emojiTerm.id}
      name={emojiTerm.name}
      emoji={emojiTerm.emoji}
      meaning={emojiTerm.meaning}
    />
 
     )) }
  
       
      </dl>
    </div>
  );
}

export default App;
