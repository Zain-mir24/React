import React from "react";

function App(props) {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
             {props.emoji}
            </span>
            <span>{props.name}</span>
          </dt>
          <dd>
            {props.meaning}
          </dd>
        </div>
     
       
      </dl>
    </div>
  );
}

export default App;
