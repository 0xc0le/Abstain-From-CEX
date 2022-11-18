import React, { Component } from "react";
import "./headerfooter.css";
import selfcustody from "./images/selfcustody.png";
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
                The total estimate value of customer deposits on CEXs:
              </div>
              <CexStats className="cex-tvl" />
            </Col>
          </Row>
          <div>
            {" "}
            Some CEXs have not disclosed the wallet addresses where they keep
            customer deposits (looking at you Coinbase) so this number is likely
            much bigger. This is a scary reality.
          </div>
        </Container>
      </div>
    );
  }
}
