import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Authentication from "../../utils/Authentication";
import JwtManager from "../../utils/JwtManager";

export default function Login({ setLoggedIn }) {
  const [user, setUser] = useState({
    username: "",
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

    Authentication.login(user)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        JwtManager.setToken(data.token, data.expiration);
        setLoggedIn(true);
      })
      .catch(console.error);
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicUsername">
        <FloatingLabel
          controlId="floatingInput"
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
      <Form.Group className="mb-3" controlId="formBasicPassword">
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
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember Me" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Log in
      </Button>
    </Form>
  );
}
