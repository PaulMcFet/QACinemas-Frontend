import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const Register = () => {

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicForename">
        <FloatingLabel
          controlId="floatingInput"
          label="Forename"
          className="mb-3"
        >
          <Form.Control type="forename" placeholder="Forename" />
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicSurname">
        <FloatingLabel
          controlId="floatingInput"
          label="Surname"
          className="mb-3"
        >
          <Form.Control type="surname" placeholder="Surname" />
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicUsername">
        <FloatingLabel
          controlId="floatingInput"
          label="Username"
          className="mb-3"
        >
          <Form.Control type="username" placeholder="Username" />
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control type="password" placeholder="Password" />
        </FloatingLabel>
      </Form.Group>
      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
  );
};

export default Register;
