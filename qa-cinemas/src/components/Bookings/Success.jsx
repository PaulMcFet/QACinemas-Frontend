import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import "./success.css";
import Badge from "react-bootstrap/Badge";

const Success = () => {
  return (
    <Container className="success" styles={{ display: "flex" }}>
      <Row>
        <Col>
          <h1>
            <Badge bg="success">Awesome! Your payment has been processed</Badge>
          </h1>
        </Col>
      </Row>
      <Row>
        <Col>Feel free to keep browsing our collection</Col>
      </Row>
    </Container>
  );
};

export default Success;
