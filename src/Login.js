import React from "react";
import { Link, useHistory } from "react-router-dom";
import { db, auth } from "./firebase";
const Logincontainer = {
  width: "300px",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  padding: "20px",
  border: "1px solid lightgray",
  height: "fit-content",
};
const loginstyle = {
  display: "flex",
  flexDirection: "column",
  backgroundColor: "white",
  height: "100vh",
  alignItems: "center",
};
const head5 = {
  marginBottom: "5px",
};
const head1 = {
  fontWeight: "500",
  marginBottom: "20px",
};
const inputstyle = {
  height: "30px",
  marginBottom: "10px",
  backgroundColor: "white",
  width: "98%",
};
const buttonstyle = {
  backgroundColor: "#f0c14b",
  borde: "1px solid",
  borderColor: "#a88734 #9c7e31 #846a29",
};
const Login = () => {
  const history = useHistory();
  const [email, setemail] = React.useState("");
  const [password, setpassword] = React.useState("");
  const login = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };
  const register = (event) => {
    event.preventDefault();
    auth.createUserWithEmailAndPassword(email, password).then((auth) => {
      // it successfully created a new user with email and password
      if (auth) {
        history.push("/");
      }
    });
  };
  return (
    <div style={loginstyle}>
      <Link to="/">
        <img src="https://tse4.mm.bing.net/th?id=OIP.9l7oS9LpgfDzE-jh5Kkl5QHaDa&pid=Api&P=0&w=345&h=160" />
      </Link>

      <div style={Logincontainer}>
        <h1 style={head1}>Sigin</h1>
        <form>
          <h5 style={head5}>E-mail</h5>
          <input style={inputstyle} onChange={e => setemail(e.target.value)} type="text" />
          <h5 style={head5}>password</h5>
          <input style={inputstyle} onChange={e => setpassword(e.target.value)} type="password" />
          <button onClick={login}   style={buttonstyle}>
            Signin
          </button>
        </form>
        <p>By signing in you agree to amazon privacy policy</p>
        <button onclick={register}>Create your amazon account</button>
      </div>
    </div>
  );
};

export default Login;
