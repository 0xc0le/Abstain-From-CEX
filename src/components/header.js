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
                The total estimated value of crypto assets held with centralized
                exchanges:
              </div>
              <CexStats className="cex-tvl" />
            </Col>
          </Row>
          <div>
            Throughout history, financial intermediaries have lied to, cheated,
            and stolen from their customers. Yet, for some reason, people
            continue to put their trust in these entities. Although crypto
            provides a mechanism for self-custody, beginners continue to make
            the same mistakes by trusting intermediaries with their assets. Let
            the below timeline serve as a stark reminder: Not your keys, not
            your crypto.
          </div>
        </Container>
      </div>
    );
  }
}
