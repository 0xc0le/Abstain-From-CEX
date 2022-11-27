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
            {' '}
            Some CEXs have not disclosed the wallet addresses where they keep
            customer deposits (looking at you Coinbase) so the above number is
            likely MUCH larger. This is a scary reality. Time and time again,
            centralized custodians have lied to, cheated, and stolen from their
            users. Yet, for some reason, people continue to put their trust in
            these entities. Take a look below at some of the trusted custodians
            of the past.
          </div>
        </Container>
      </div>
    );
  }
}
