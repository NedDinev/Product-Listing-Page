import React from "react";
import { Container, Nav } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="bg-dark text-light mt-4">
      <Container>
        <Nav className="justify-content-center">
          <Nav.Item>
            <Nav.Link href="#">T&C</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#">Privacy Policy</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#">Contact Us</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </footer>
  );
}
