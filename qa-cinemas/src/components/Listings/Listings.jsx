import React from 'react'
import './listings.css'
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const Listings = () => {
  return (
    <Container>
    <Row>
      <Col>1 of 4</Col>
      <Col>2 of 4</Col>
      <Col>3 of 4</Col>
      <Col>4 of 4</Col>
    </Row>
    <Row>
      <Col>1 of 3</Col>
      <Col>2 of 3</Col>
      <Col>3 of 3</Col>
    </Row>
  </Container>
  )
}

export default Listings