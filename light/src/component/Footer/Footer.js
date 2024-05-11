import React from "react";
import "./Footer.css";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

const Footer = () => {
  return (
    <div className="my-footer">
      <h1 className="my-camper">
        Welcome to our website <span className="CAMPER">CAMPER</span>
      </h1>
      <Container className="nav-this">
        <Nav>
          <h5>Site map:</h5>
          <Nav.Link href="/" className="nav-link">
            Home
          </Nav.Link>
          <Nav.Link href="/products" className="nav-link">
            Product
          </Nav.Link>
          <Nav.Link href="/about" className="nav-link">
            About us
          </Nav.Link>
        </Nav>
      </Container>
      <footer>&copy; Copyright 2024</footer>
    </div>
  );
};

export default Footer;
