import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image"
import HQ from "../../Assets/hq-location.png"

const Opening = () => {
  return (
    <Container fluid>
      <Row>
        <Col><h1>Opening hours</h1></Col>
      </Row>
      <Row>
        <Col>List of hours?</Col>
        <Col>
          <Image src={HQ} />
        </Col>
      </Row>
    </Container>
  );
};

export default Opening;
