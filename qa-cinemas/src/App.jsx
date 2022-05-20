import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Nav/Navbar";
import React from "react";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import New from "./components/What's New/New";
import Bookings from "./components/Bookings/Bookings";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Listings from "./components/Listings/Listings";
import About from "./components/About/About";
import "@stripe/stripe-js";
import Success from "./components/Bookings/Success"
import Cancel from "./components/Bookings/Cancel"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
