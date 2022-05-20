import React from "react";
import Logo from "../../Assets/qa-logo.jpg";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "../Modal/Modal";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import './navbar.css'

export default function NavbarComponent() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Navbar className="navbar" bg="dark" variant="dark" sticky="true" expand="lg" collapseOnSelect>
      <Navbar.Brand>
        <img
          id="logo"
          src={Logo}
          width="75"
          height="75"
          className="d-inline-block align-top"
          alt="QA Cinemas Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="container-fluid">
          <NavDropdown title="Explore">
            <NavDropdown.Item href="explore/about">About Us</NavDropdown.Item>
            <NavDropdown.Item href="contact">Contact</NavDropdown.Item>
            <NavDropdown.Item href="directions">Directions</NavDropdown.Item>
            <NavDropdown.Item href="opening-hours">
              Opening Hours
            </NavDropdown.Item>
            <NavDropdown.Item href="classifications">
              Classifications
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="new">What's New?</Nav.Link>
          <Nav.Link href="listings">Listings</Nav.Link>
          <Nav.Link href="bookings">Bookings</Nav.Link>
          <Nav.Item className ="ms-auto">
            <Form className="d-flex">
              <FormControl
                id="search"
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-secondary">Search</Button>
            </Form>
          </Nav.Item>
          <Nav.Item className="ms-auto">
            <Button bg="dark" variant="dark" onClick={() => setModalShow(true)}>
              Sign in/Register
            </Button>
            <Modal show={modalShow} onHide={() => setModalShow(false)} />
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
