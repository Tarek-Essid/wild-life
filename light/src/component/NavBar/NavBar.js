import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavBar.css";
import logoWildLife from "../assets/logoWildLife.png";

const NavBar = () => {
  return (
    <div className="my-navbar">
      <Navbar>
        <Container>
          <Navbar.Brand href="/">
            <img src={logoWildLife} alt="Img" width={100} height={70} />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/" className="nav">
              Home
            </Nav.Link>
            <Nav.Link href="/products" className="nav">
              Product
            </Nav.Link>
            <Nav.Link href="/add" className="nav">
              Add
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
