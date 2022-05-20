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
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
  }
  return stripePromise;
};

const Bookings = () => {
  const [stripeError, setStripeError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const item = {
    price: "price_1L1R8fHlqn4NU7FiMzAuqhme",
    quantity: 1,
  };

  const checkoutOptions = {
    lineItems: [item],
    mode: "payment",
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}/cancel`,
  };

  const redirectToCheckout = async () => {
    setLoading(true);
    console.log("redirectToCheckout");
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptions);
    console.log("Stripe checkout error", error);

    if (error) setStripeError(error.message);
    setLoading(false);
  };

  if (stripeError) {
    alert(stripeError);
  }

  return (
    <Container
      style={{ minHeight: "100vh" }}
      fluid
      className="align-content-center"
    >
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
              <Button
                className="checkout-button"
                variant="dark"
                onClick={redirectToCheckout}
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : "Checkout"}
              </Button>{" "}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Bookings;
