import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './navbar.css';
import Container from 'react-bootstrap/Container';

export default class navbar extends Component {
  render() {
    return (
      <Navbar expand="lg" variant="dark" className="site-navbar">
        <Container>
          <Navbar.Brand as={Link} to="/" href="#home">
            ABSTAIN FROM CEX
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                as={NavLink}
                to="/cexed"
                href="#cexed"
                className="NavLinks"
              >
                CEX ED
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/alternatives"
                href="#alternatives"
                className="NavLinks"
              >
                SAFE CEX ALTERNATIVES
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/defi-tvl"
                href="#defi-tvl"
                className="NavLinks"
              >
                DEFI TVL DASHBOARD
              </Nav.Link>
              {/* <Nav.Link
                as={Link}
                to="/merch"
                href="#merch"
                className="NavLinks"
              >
                Protection (Merch)
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
