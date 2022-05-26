import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import Login from "./Login";
import Register from "./Register";

const MyModal = (props) => {

  const [login, setLogin] = useState(true);
  const [register, setRegister] = useState(false);

  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <ToggleButtonGroup size="lg" type="checkbox">
              <ToggleButton onClick={() => {setLogin(true); setRegister(false)}} id="tbg-btn-1">Login</ToggleButton>
              <ToggleButton onClick={() => {setLogin(false); setRegister(true)}} id="tbg-btn-2">Register</ToggleButton>
            </ToggleButtonGroup>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {login && <Login />}
          {register && <Register />}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MyModal;
