import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Nav/Navbar";
import React from "react";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import New from "./components/What's New/New";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
