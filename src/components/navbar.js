import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import "./navbar.css";
import Cexed from "../pages/cexed/cexed";
import Alternatives from "../pages/alternatives/alternatives";
import Merch from "../pages/merch/merch";
import Home from "../pages/home/home";

export default class navbar extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar className="nav">
            <Navbar.Brand
              as={Link}
              to={"/"}
              className="navbar-brand"
              href="#home"
            >
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
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cexed" element={<Cexed />} />
          <Route path="/alternatives" element={<Alternatives />} />
          <Route path="/merch" element={<Merch />} />
          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
      </Router>
    );
  }
}
