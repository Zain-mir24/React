import React from "react";
import Entry from "./entry"
import emojipedia from "../contacts";

function CreateCard(emojiTerm) {
  return (
    <Entry
      id={emojiTerm.id}
      key={emojiTerm.id}
      name={emojiTerm.name}
      emoji={emojiTerm.emoji}
      meaning={emojiTerm.meaning}
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
         
    {emojipedia.map(CreateCard)}

       
      </dl>
    </div>
  );
}

export default App;
