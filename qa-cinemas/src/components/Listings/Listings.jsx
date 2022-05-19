import React from "react";
import "./listings.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Strange from "../../Assets/strange.jpg";
import Six from "../../Assets/6.jpg";
import Fantastic from "../../Assets/fantastic-beasts.jpg";
import Jumanji from "../../Assets/jumanji.jpg";
import { useEffect } from "react";

const Listings = () => {
  function loadMovies() {}

  return (
    <Container style={{minHeight: "100vh"}}>
      <Row>
        <h1>Take a look at what's on!</h1>
      </Row>
      <Row>
        <Col>
          <Image fluid rounded src={Strange}></Image>
          <p>Content</p>
        </Col>
        <Col>
          <Image fluid rounded src={Six}></Image>
          <p>Content</p>
        </Col>
        <Col>
          <Image fluid rounded src={Fantastic}></Image>
          <p>Content</p>
        </Col>
        <Col>
          <Image fluid rounded src={Jumanji}></Image>
          <p>Content</p>
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
