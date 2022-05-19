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
    <Container fluid>
      <Row className="text-center">
        <Col>
          <h1>Bookings</h1>
        </Col>
      </Row>
      <Row md={4}>
        <Col>
          <Image fluid src={Seats} />
        </Col>
        <Col xs={6} className="text-center">
          <Card style={{ width: "18rem" }}>
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
              <Card.Link
                className="bg-dark"
                style={{ color: "white" }}
                href="#"
              >
                Card Link
              </Card.Link>
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
                  <Form.Label>Account Number</Form.Label>
                  <Form.Control type="account" placeholder="Enter account number" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
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
