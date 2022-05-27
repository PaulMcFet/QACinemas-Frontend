import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import HQ from "../../Assets/hq-location.png";
import "./Opening.css";
import { ListGroup } from "react-bootstrap";




const Opening = () => {
  return (
    <Container fluid>
      <Row>
        <Col><h1>Opening hours</h1></Col>
      </Row>
      <Row>
        <Col><ListGroup>
        <ListGroup.Item>Monday:10AM - 9PM</ListGroup.Item>
        <ListGroup.Item>Tuesday:10AM - 9PM</ListGroup.Item>
        <ListGroup.Item> Wednesday:10AM - 9PM</ListGroup.Item>
        <ListGroup.Item>Thursday:10AM - 9PM</ListGroup.Item>
        <ListGroup.Item>Friday:10AM - 9PM</ListGroup.Item>
        <ListGroup.Item>Saturday:10AM - 9PM</ListGroup.Item>
        <ListGroup.Item>Sunday:9AM - 6PM</ListGroup.Item>
        <ListGroup.Item>Closed on Bank holidays</ListGroup.Item>
        </ListGroup>
        </Col>
        <Col>
         <img className= "HQ" src={HQ} alt=""/>
        </Col>
        </Row>
    </Container>
  );
};

export default Opening;
