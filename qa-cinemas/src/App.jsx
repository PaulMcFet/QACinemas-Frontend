import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Nav/Navbar";
import React, { useState } from "react";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import New from "./components/What's New/New";
import Bookings from "./components/Bookings/Bookings";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Listings from "./components/Listings/Listings";
import About from "./components/About/About";
import "@stripe/stripe-js";
import Success from "./components/Bookings/Success";
import Cancel from "./components/Bookings/Cancel";
import Contact from "./components/Contact/Contact";
import Directions from "./components/Directions/Directions";
import Opening from "./components/Opening/Opening";
import Classifications from "./components/Classifications/Classifications";
import Profile from "./components/Profile/Profile";
import SecuredRoute from "./components/SecuredRoute";

function App(props) {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            index
            path="/"
            element={
              <>
                <Navbar
                  loggedIn={props.loggedIn}
                  setLoggedIn={props.setLoggedIn}
                />
                <Home />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/new"
            element={
              <>
                <Navbar />
                <New />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/listings"
            element={
              <>
                <Navbar />
                <Listings />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/bookings"
            element={
              <>
                <Navbar />
                <Bookings />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/success"
            element={
              <>
                <Navbar />
                <Success />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/cancel"
            element={
              <>
                <Navbar />
                <Cancel />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/about"
            element={
              <>
                <Navbar />
                <About />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/contact"
            element={
              <>
                <Navbar />
                <Contact />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/Directions"
            element={
              <>
                <Navbar />
                <Directions />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/opening"
            element={
              <>
                <Navbar />
                <Opening />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/classifications"
            element={
              <>
                <Navbar />
                <Classifications />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/profile"
            element={
              <SecuredRoute loggedIn={loggedIn}>
                <>
                  <Navbar />
                  <Profile />
                  <Footer />
                </>
              </SecuredRoute>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
