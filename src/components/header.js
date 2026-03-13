import React, { Component } from 'react';
import './headerfooter.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CexStats from './CexStats';

export default class header extends Component {
  render() {
    return (
      <div className="header">
        <Container>
          <Row className="header-row g-4 g-lg-5">
            <Col lg={6} className="header-columns hero-primary">
              <div className="header-title">ABSTAIN FROM CEX</div>
            </Col>
            <Col lg={6} className="header-columns hero-secondary">
              <div className="cex-tvl-title">
                The total estimated value of crypto assets held with centralized
                exchanges:
              </div>
              <CexStats className="cex-tvl" />
            </Col>
          </Row>
          <Row>
            <Col lg={10} xl={9} className="header-columns hero-copy-wrap">
              <div className="hero-copy">
                Throughout history, financial intermediaries have lied to,
                cheated, and stolen from their customers. Yet, for some reason,
                people continue to put their trust in these entities. Although
                crypto provides a mechanism for self-custody, beginners continue
                to make the same mistakes by trusting intermediaries with their
                assets. Let the below timeline serve as a stark reminder: Not
                your keys, not your crypto.
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
