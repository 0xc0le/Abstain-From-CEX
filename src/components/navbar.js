import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./navbar.css";

export default class navbar extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">Abstain From CEX</Navbar.Brand>
              <Nav className="NavLinks">
                <Nav.Link as={Link} to={"/home"} href="#home">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to={"/education"} href="#education">
                  Education
                </Nav.Link>
                <Nav.Link as={Link} to={"/merch"} href="#merch">
                  Merch
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </div>
      </Router>
    );
  }
}
