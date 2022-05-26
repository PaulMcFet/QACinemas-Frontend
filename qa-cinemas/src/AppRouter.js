import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import New from "./components/What's New/New";
import Bookings from "./components/Bookings/Bookings";
import Success from "./components/Bookings/Success";
import Cancel from "./components/Bookings/Cancel";
import Contact from "./components/Contact/Contact";
import Directions from "./components/Directions/Directions";
import Opening from "./components/Opening/Opening";
import Classifications from "./components/Classifications/Classifications";
import Profile from "./components/Profile/Profile";
import SecuredRoute from "./components/SecuredRoute";
import Listings from "./components/Listings/Listings";
import About from "./components/About/About";
import App from "./App";

function AppRouter() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<App loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}>
        <Route index path="/" element={<Home />}></Route>
        <Route path="/new" element={<New />}></Route>
        <Route path="/listings" element={<Listings />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Directions" element={<Directions />} />
        <Route path="/opening" element={<Opening />} />
        <Route path="/classifications" element={<Classifications />} />
        <Route
          path="/profile"
          element={
            <SecuredRoute loggedIn={loggedIn}>
              <Profile />
            </SecuredRoute>
          }
         />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
