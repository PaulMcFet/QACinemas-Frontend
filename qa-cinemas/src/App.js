import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Nav/Navbar";
import React from "react";
import Footer from "./components/Footer/Footer";
import "@stripe/stripe-js";

import { Outlet } from "react-router-dom";

function App(props) {

  return (
    <div className="App">
      <Navbar loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
