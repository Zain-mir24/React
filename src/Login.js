import React from "react";
import { Link, useHistory } from "react-router-dom";
const Logincontainer = {
  marginTop: "50px",
};
const login={
    marginTop: "50px",
    objectFit: "contain",
    width:"100px"
}
const Login = () => {
  return (
    <div style={login}>
      <Link to="/">
        <img 
         src="https://tse4.mm.bing.net/th?id=OIP.9l7oS9LpgfDzE-jh5Kkl5QHaDa&pid=Api&P=0&w=345&h=160"
        />
      </Link>

      <div style={Logincontainer}>
      <h1>Sigin</h1>
      </div>
    </div>
  );
};

export default Login;
