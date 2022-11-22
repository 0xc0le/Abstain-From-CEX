import React, { Component } from "react";
import "./alternatives";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class alternatives extends Component {
  render() {
    return (
      <div className="page">
        <div className="cexed-header">
          <Container>
            <Row className="cexed-header-row">
              <Col className="cexed-header-columns">
                <div className="cexed-header-title">SAFE CEX ALTERNATIVES</div>
                <div className="cexed-header-subtitle">Lorum Ipsum</div>
              </Col>
              <Col></Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
