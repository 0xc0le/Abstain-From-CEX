import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
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
          <Navbar className="nav">
              <Navbar.Brand className="navbar-brand" href="#home">
                ABSTAIN FROM CEX
              </Navbar.Brand>
              <Nav className="NavLinks">
                <Nav.Link
                  as={Link}
                  to={"/cexed"}
                  href="#cexed"
                  className="NavLinks"
                >
                  CEX Ed
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to={"/alternatives"}
                  href="#alternatives"
                  className="NavLinks"
                >
                  Safe CEX Alternatives
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to={"/merch"}
                  href="#merch"
                  className="NavLinks"
                >
                  Protection (Merch)
                </Nav.Link>
              </Nav>
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
