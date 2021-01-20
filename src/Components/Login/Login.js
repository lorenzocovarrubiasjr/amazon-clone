import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    console.log("Signing In");
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => history.push("/"))
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    console.log("About to register");

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login-logo"
          src="https://www.1min30.com/logo/wp-content/uploads/2017/12/logo-amazon.png"
          alt="amazon logo"
        />
      </Link>

      <div className="login-container">
        <h1>Sign In</h1>
        <form>
          <h5>Email</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="login-sign-in-button"
            onClick={signIn}
          >
            Sign In
          </button>
        </form>
      </div>
      <p>New to Amazon?</p>
      <button className="login-register-button" onClick={register}>
        Create Your Amazon Account
      </button>
    </div>
  );
}

export default Login;
