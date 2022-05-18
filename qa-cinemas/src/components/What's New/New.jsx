import React from "react";
import "./new.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import BTTF from "../../Assets/BTTF.jpg";
import Image from "react-bootstrap/Image";

const New = () => {
  return (
    <Container>
      <Row>
        <Col className="poster">
          <Image fluid src={BTTF}></Image>
        </Col>
        <Col xs={5}>2 of 3 (wider)</Col>
        <Col className="poster">
          <Image fluid src={BTTF}></Image>
        </Col>
      </Row>
      <Row>
        <Col className="poster">
          <Image fluid src={BTTF}></Image>
        </Col>
        <Col xs={5}>2 of 3 (wider)</Col>
        <Col className="poster">
          <Image fluid src={BTTF}></Image>
        </Col>
      </Row>
    </Container>
  );
};

export default New;
