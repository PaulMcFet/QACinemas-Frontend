import React, { useEffect, useState } from "react";
import "./listings.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import Bookings from "../Bookings/Bookings";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Strange from "../../Assets/strange.jpg";
import Six from "../../Assets/6.jpg";
import Fantastic from "../../Assets/fantastic-beasts.jpg";
import Jumanji from "../../Assets/jumanji.jpg";
import Belle from "../../Assets/Belle.jpg";
import ThorLT from "../../Assets/ThorLT.jpg";

const Listings = () => {

  const API_URL = 'http://localhost:3000/movie'

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(API_URL);
        const listMovies = await response.json();
        console.log(listMovies);
        setMovies(listMovies);
      } catch (err) {
        console.log(err.stack);
      }
    }

    (async () => await fetchMovies())();

  }, [])

  const [movies, setMovies] = useState([]);
  const [newMovie, setNewMovie] = useState('');
  const [search, setSearch] = useState('');

  return (
    <Container style={{ minHeight: "100vh" }}>
      <Row>
        <h1>Take a look at what's on!</h1>
      </Row>
      <Row>
        <Col>
          <div className="Strange">
            <NavLink to="/Bookings" className="Strange">
              <a href="" className="Strange">
                <img className="Strange" src={Strange} alt="" />
              </a>
            </NavLink>
            <p>Content</p>
          </div>
        </Col>
        <Col>
          <div className="Six">
            <NavLink to="/Bookings" className="Six">
              <a href="" className="Six">
                <img className="Six" src={Six} alt="" />
              </a>
            </NavLink>
            <p>Content</p>
          </div>
        </Col>
        <Col>
          <div className="Fantastic">
            <NavLink to="/Bookings" className="Fantastic">
              <a href="" className="Fantastic">
                <img className="Fantastic" src={Fantastic} alt="" />
              </a>
            </NavLink>
            <p>Content</p>
          </div>
        </Col>
        <Col>
          <div className="Jumanji">
            <NavLink to="/Bookings" className="Jumanji">
              <a href="" className="Jumanji">
                <img className="Jumanji" src={Jumanji} alt="" />
              </a>
            </NavLink>
            <p>Content</p>
          </div>
        </Col>
        <Col>
          <div className="ThorLT">
            <NavLink to="/Bookings" className="ThorLT">
              <a href="" className="ThorLT">
                <img className="ThorLT" src={ThorLT} alt="" />
              </a>
            </NavLink>
            <p>Content</p>
          </div>
        </Col>
        <Col>
          <div className="Belle">
            <NavLink to="/Bookings" className="Belle">
              <a href="" className="Belle">
                <img className="Belle" src={Belle} alt="" />
              </a>
            </NavLink>
            <p>Content</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
  );
};

export default Listings;
