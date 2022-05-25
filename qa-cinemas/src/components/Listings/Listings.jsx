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
  const API_URL = "http://localhost:3000/movie";

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Did not receive expected data");
        const listMovies = await response.json();
        console.log(listMovies);
        setMovies(listMovies);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      }
    };

    (async () => await fetchMovies())();
  }, []);

  const [movies, setMovies] = useState([]);
  const [newMovie, setNewMovie] = useState("");
  const [search, setSearch] = useState("");
  const [fetchError, setFetchError] = useState(null);

  return (
    <Container style={{ minHeight: "100vh" }}>
      <Row>
        <h1>Take a look at what's on!</h1>
      </Row>
      <Row>
        <Col>
          <NavLink to="/Bookings" className="Strange">
            <Image className="Strange" src={Strange} alt="" />
          </NavLink>
          <p>Content</p>
        </Col>
        <Col>
          <NavLink to="/Bookings" className="Six">
            <Image className="Six" src={Six} alt="" />
          </NavLink>
          <p>Content</p>
        </Col>
        <Col>
          <NavLink to="/Bookings" className="Fantastic">
            <Image className="Fantastic" src={Fantastic} alt="" />
          </NavLink>
          <ul>
          {movies.map(movies => <div>{movies.title}</div>)}
          </ul>
        </Col>
        <Col>
          <NavLink to="/Bookings" className="Jumanji">
            <Image className="Jumanji" src={Jumanji} alt="" />
          </NavLink>
          <p>Content</p>
        </Col>
        <Col>
          <NavLink to="/Bookings" className="ThorLT">
            <Image className="ThorLT" src={ThorLT} alt="" />
          </NavLink>
          <p>Content</p>
        </Col>
        <Col>
          <NavLink to="/Bookings" className="Belle">
            <Image className="Belle" src={Belle} alt="" />
          </NavLink>
          <p>Content</p>
        </Col>
      </Row>
      <Row>
        <Col></Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
  );
};

export default Listings;
