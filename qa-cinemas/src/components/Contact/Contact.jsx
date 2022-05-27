import React, { useRef, useState } from "react";
import "./contact.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import emailjs from "@emailjs/browser";
import Button from "react-bootstrap/Button";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_7gqqrsd",
        "template_1el71fn",
        formRef.current,
        "user_BulIIbyjXDpBWZj55aT9D"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Container styles={{display: "flex"}}>
      <Row>
        <Col className="text-center">
          <h1>Contact Page</h1>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col></Col>
        <Col>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="Form.ControlInput1">
              <Form.Label>
                <h4>Your full name</h4>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name here"
                name="user_name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Form.ControlInput2">
              <Form.Label>
                <h4>Email address</h4>
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email address here"
                name="user_email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Form.ControlTextarea1">
              <Form.Label>
                <h4>Subject</h4>
              </Form.Label>
              <Form.Control
                placeholder="Please provide a subject"
                name="user_subject"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Form.ControlTextarea1">
              <Form.Label>
                <h4>Your message/inquiry</h4>
              </Form.Label>
              <Form.Control
                placeholder="Please provide as many details as possible..."
                as="textarea"
                rows={3}
                name="message"
              />
            </Form.Group>
            <Button type="submit" className="my-auto" variant="dark" size="lg">
              Send
            </Button>
            {done && "Thanks for contacting us!"}
          </Form>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Contact;
