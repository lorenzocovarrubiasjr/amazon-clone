import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./Data-Access/StateProvider";

import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Checkout from "./Components/Checkout/Checkout";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The User is --> ", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
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
