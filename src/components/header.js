import React, { Component } from "react";
import "./headerfooter.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CexStats from "./CexStats";

export default class header extends Component {
  render() {
    return (
      <div className="header">
        <Container>
          <Row className="header-row">
            <Col className="header-columns">
              <div className="header-title">ABSTAIN FROM CEX</div>
            </Col>
            <Col className="header-columns">
              <div className="cex-tvl-title">
                The total estimated value of customer deposits with centralized
                exchanges:
              </div>
              <CexStats className="cex-tvl" />
            </Col>
          </Row>
          <div>
            {" "}
            Some CEXs have not disclosed the wallet addresses where they keep
            customer deposits (looking at you Coinbase) so this number is likely
            much bigger. This is a scary reality. Take a look below at some of
            the past trusted custodians of cryptocurrencies.
          </div>
        </Container>
      </div>
    );
  }
}
