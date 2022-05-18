import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Nav/Navbar";
import React from 'react';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
