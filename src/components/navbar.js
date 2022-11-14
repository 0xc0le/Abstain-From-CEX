import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./navbar.css";
import CexEd from "../pages/cexed/cexed.js";
import Alternatives from "../pages/alternatives/alternatives.js";
import Merch from "../pages/merch/merch.js";

export default class navbar extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">Abstain From CEX</Navbar.Brand>
              <Nav className="NavLinks">
                <Nav.Link as={Link} to={"/cexed"} href="#cexed">
                  CEX Ed
                </Nav.Link>
                <Nav.Link as={Link} to={"/alternatives"} href="#alternatives">
                  Safe CEX Alternatives
                </Nav.Link>
                <Nav.Link as={Link} to={"/merch"} href="#merch">
                  Protection (Merch)
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          {/* <Routes>
            <Route path="/cexed">
              <CexEd />
            </Route>
            <Route path="/alternatives">
              <Alternatives />
            </Route>
            <Route path="/merch">
              <Merch />
            </Route>
          </Routes> */}
        </div>
      </Router>
    );
  }
}
