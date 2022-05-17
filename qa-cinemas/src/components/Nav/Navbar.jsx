import React from 'react'
import Logo from "../../Assets/qa-logo.jpg"
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

export default function NavbarComponent() {
  return (
    <Navbar bg="dark" variant="dark" sticky="true" expand="lg" collapseOnSelect>
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
          <Nav>
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
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="new">What's New?</Nav.Link>
            <Nav.Link href="listings">Listings</Nav.Link>
            <Nav.Link href="bookings">Bookings</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  )
}