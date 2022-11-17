import React, { Component } from "react";
import "./headerfooter.css";
import Card from "react-bootstrap/Card";
import selfcustody from "./images/selfcustody.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class header extends Component {
  render() {
    return (
      <div className="header">
        <Container>
          <Row className="header-row">
            <Col>
              <div className="header-title">ABSTAIN FROM CEX</div>
              <div className="header-subtitle">
                ABSTAIN FROM CEX is an educational resource designed to teach
                people about the dangerous of centralized custodians and the
                benefits of self-custody
              </div>
            </Col>
            <Col>
              <img src={selfcustody} className="selfcustodyimage" />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
