import React from "react";
import { Link, useHistory } from "react-router-dom";
const Logincontainer = {

  width: "300px",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  padding: "20px",
  border: "1px solid lightgray",
  height: "fit-content",


};
const login={
    display: "flex",
    flexDirection: "column",
    backgroundColor:"white",
    height:"100vh",
    alignItems: "center"
}
const h5={
  marginBottom:"5px"
}
const h1={
  fontWeight:"500",
  marginBottom:"20px"
}
const inputstyle={
  height:"30px",
  marginBottom:"10px",
  backgroundColor:"white",
  width:"98%"
}
const buttonstyle = {
  backgroundColor: "#f0c14b",
  borde: "1px solid",
  borderColor: "#a88734 #9c7e31 #846a29",
};
const Login = () => {
  const login=event=>{
      event.preventDefault();
  }
  const Register=event=>{
    event.preventDefault();
}
  return (
    <div style={login}>
      <Link to="/">
        <img 
         src="https://tse4.mm.bing.net/th?id=OIP.9l7oS9LpgfDzE-jh5Kkl5QHaDa&pid=Api&P=0&w=345&h=160"
        />
      </Link>

      <div style={Logincontainer}>
      <h1 style={h1}>Sigin</h1>
      <form>
        <h5 style={h5}>E-mail</h5>
        <input style={inputstyle} type="text" />
        <h5 style={h5}>password</h5>
        <input style={inputstyle} type="password" />
        <button onClick={login} style={buttonstyle}>Signin</button>
      </form>
      <p>By signing in you agree to amazon privacy policy</p>
      <button onclick={register}>Create your amazon account</button>
      </div>
    </div>
  );
};

export default Login;
