import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Seats from "../../Assets/seats-hd.jpg";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Bookings = () => {
  return (
    <Container style={{minHeight: "100vh"}} fluid className="align-content-center">
      <Row className="text-center">
        <Col>
          <h1>Bookings</h1>
        </Col>
      </Row>
      <Row>
        <Col
          style={{ display: "flex" }}
          className="align-items-center justify-content-center ms-4 ps-4"
        >
          <Image fluid roundedCircle src={Seats} />
        </Col>
        <Col
          style={{ display: "flex" }}
          className="text-center align-items-center justify-content-center"
        >
          <Card style={{ width: "24rem" }}>
            <Card.Body>
              <Card.Title className="text-center">Basket:</Card.Title>
              <Card.Subtitle className="mb-3 mt-3 text-center">
                <Dropdown className="d-inline mx-2">
                  <Dropdown.Toggle
                    className="bg-dark"
                    id="dropdown-autoclose-true"
                  >
                    Select a movie
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#">Movie title</Dropdown.Item>
                    <Dropdown.Item href="#">Movie title</Dropdown.Item>
                    <Dropdown.Item href="#">Movie title</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Card.Subtitle>
              <Card.Text>
                <ListGroup>
                  <ListGroup.Item action variant="dark">
                    Listing time: 12-2pm
                  </ListGroup.Item>
                  <ListGroup.Item action variant="dark">
                    Listing time: 12-2pm
                  </ListGroup.Item>
                  <ListGroup.Item action variant="dark">
                    Listing time: 12-2pm
                  </ListGroup.Item>
                  <ListGroup.Item action variant="dark">
                    Listing time: 12-2pm
                  </ListGroup.Item>
                  <ListGroup.Item action variant="dark">
                    Listing time: 12-2pm
                  </ListGroup.Item>
                </ListGroup>
              </Card.Text>
              <Button variant="dark">Add</Button>{" "}
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <h1>Payment</h1>
          <Row>
            <Col>
              <Form>
                <Form.Group className="mb-3" controlId="formAccountNumber">
                  <Form.Label>Account:</Form.Label>
                  <Form.Control
                    type="account"
                    placeholder="Enter account number"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formSortNumber">
                  <Form.Label>Sort:</Form.Label>
                  <Form.Control type="sort" placeholder="Enter sort number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formAccountNumber">
                  <Form.Label>Phone Number:</Form.Label>
                  <Form.Control type="phone" placeholder="Enter phone number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formAccountNumber">
                  <Form.Label>Email Address:</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email address"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formAccountNumber">
                  <Form.Label>Full Name:</Form.Label>
                  <Form.Control type="name" placeholder="Enter full name" />
                </Form.Group>
                <Button variant="dark" type="submit">
                  Purchase
                </Button>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Bookings;
