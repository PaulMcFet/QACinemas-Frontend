import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Authentication from "../../utils/Authentication";

const Register = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (event) =>
    setUser((previousState) => {
      return Object.assign(
        { ...previousState },
        { [event.target.name]: event.target.value }
      );
    });

  const handleSubmit = (event) => {
    event.preventDefault();

    Authentication.register(user)
      .then((response) => {
        console.log(response);
        window.location = "/";
      })
      .catch((err) => {
        console.log(err.stack);
      });
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicForename">
        <FloatingLabel
          controlId="floatingFirstName"
          label="Forename"
          className="mb-3"
        >
          <Form.Control
            type="forename"
            placeholder="Forename"
            name="firstName"
            defaultValue={user.firstName}
            required
            onChange={handleChange}
          />
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicSurname">
        <FloatingLabel
          controlId="floatingLastName"
          label="Surname"
          className="mb-3"
        >
          <Form.Control
            type="surname"
            placeholder="Surname"
            name="lastName"
            defaultValue={user.lastName}
            required
            onChange={handleChange}
          />
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicUsername">
        <FloatingLabel
          controlId="floatingUsername"
          label="Username"
          className="mb-3"
        >
          <Form.Control
            type="username"
            placeholder="Username"
            name="username"
            defaultValue={user.username}
            required
            onChange={handleChange}
          />
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <FloatingLabel
          controlId="floatingEmail"
          label="Email address"
          className="mb-3"
        >
          <Form.Control
            type="email"
            placeholder="name@example.com"
            name="email"
            defaultValue={user.email}
            required
            onChange={handleChange}
          />
        </FloatingLabel>
      </Form.Group>

      <Form.Group
        className="mb-3"
        controlId="formBasicPassword"
      >
        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            defaultValue={user.password}
            required
            onChange={handleChange}
          />
        </FloatingLabel>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Register
      </Button>
    </Form>
  );
};

export default Register;
