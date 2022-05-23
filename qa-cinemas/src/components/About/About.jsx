import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HQ from "../../Assets/qa-hq.jpg";
import Image from "react-bootstrap/Image";
import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import "./about.css"

const About = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container style={{minHeight: "100vh"}}>
      <Row>
        <h1 className="text-center">About Us!</h1>
        <Col className="mb-5 mt-5">
          <Accordion variant="dark">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Who are QA?</Accordion.Header>
              <Accordion.Body>
                We are a premium supplier of Cinematic experiences, focussing 
                heavily on customer service, food that sells itself, and comfortable
                seating for customers to enjoy the next biggest blockbusters. 
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>How can we help?</Accordion.Header>
              <Accordion.Body>
                Whether it's a quick visit for a movie, or rental for an entire 
                screen for a party or gaming night! You can reach out via our 
                Contact page above and we can discuss your requirements. 
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Want to join us?</Accordion.Header>
              <Accordion.Body>
                We are currently hiring for (0) positions. 
                Please check back regularly if there's not a 
                position that suits you at the moment.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2> Credits/Inspirations </h2>
          <p>
          Filler Text
          </p>
        </Col>
        <Col>
          <Image fluid rounded src={HQ}></Image>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
