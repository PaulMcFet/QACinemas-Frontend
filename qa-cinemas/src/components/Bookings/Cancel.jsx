import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import "./cancel.css";
import Badge from "react-bootstrap/Badge";

const Cancel = () => {
  return (
    <Container className="cancel" styles={{ display: "flex" }}>
      <Row>
        <Col>
          <h1>
            <Badge bg="danger">No worries! Payment Cancelled</Badge>
          </h1>
        </Col>
      </Row>
      <Row>
        <Col>Feel free to keep browsing our collection</Col>
      </Row>
    </Container>
  );
};

export default Cancel;
