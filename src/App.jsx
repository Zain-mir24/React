import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const custom = {
  marginTop: "150px",
};
function App() {
  return (
    <Router>
      {" "}
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <h1 style={custom}>CheckOut</h1>
          </Route>
          <Route path="/Login">
            <Header />

            <h1 style={custom}>Login</h1>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
