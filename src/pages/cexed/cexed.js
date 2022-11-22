import React, { Component } from "react";
import "./cexed.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class cexed extends Component {
  render() {
    return (
      <div className="cexed-page">
        <div className="cexed-header">
          <Container>
            <Row className="cexed-header-row">
              <Col className="cexed-header-columns">
                <div className="cexed-header-title">CEX ED</div>
                <div className="cexed-header-subtitle">
                  Self-custody can seem overwhelming, but by learning a few
                  basic topics and best practices, you can be well on your way
                  to becoming independent of centralized intermediaries
                </div>
              </Col>
              <Col></Col>
            </Row>
          </Container>
        </div>
        <Container className="educational-content-section">
          <Row>
            <div className="educational-headers">
              What is a Centralized Exchange?
            </div>
            <div className="educational-content">
              A CEX, or Centralized Exchange is a...
              <div>
                Examples of centralized exchanges include: Coinbase, Gemini,
                Binance, and Bybit.
              </div>
            </div>
          </Row>
          <Row>
            <div className="educational-headers">
              What is a Self-Custody Wallet?
            </div>
            <div className="educational-content">
              A wallet is an account on the blockchain. This account is
              identified by a "public key" and protected by a "private key".
              These keys act like a username and password for the wallet and are
              generated using a type of math called cryptography.
            </div>
          </Row>
          <Row>
            <div className="educational-headers">
              What is a Decentralized Exchange?
            </div>
            <div className="educational-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              elementum, purus non lacinia fermentum, metus mauris pulvinar
              massa, at rhoncus purus purus at orci. Vestibulum eget mi ut nisi
              fringilla feugiat vel id leo. Suspendisse sagittis lobortis orci a
              tempor. Maecenas id fringilla diam. Suspendisse non vulputate
              ipsum. Nulla dignissim justo vitae urna cursus ultricies. Nunc
              quis bibendum sapien. Phasellus porttitor gravida elit, a mollis
              purus placerat nec. Donec nec tortor et ante aliquet fringilla eu
              lacinia quam. Phasellus eleifend nunc in pharetra porttitor.
            </div>
          </Row>
          <Row>
            <div className="educational-headers">Lorum Ipsum</div>
            <div className="educational-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              elementum, purus non lacinia fermentum, metus mauris pulvinar
              massa, at rhoncus purus purus at orci. Vestibulum eget mi ut nisi
              fringilla feugiat vel id leo. Suspendisse sagittis lobortis orci a
              tempor. Maecenas id fringilla diam. Suspendisse non vulputate
              ipsum. Nulla dignissim justo vitae urna cursus ultricies. Nunc
              quis bibendum sapien. Phasellus porttitor gravida elit, a mollis
              purus placerat nec. Donec nec tortor et ante aliquet fringilla eu
              lacinia quam. Phasellus eleifend nunc in pharetra porttitor.
            </div>
          </Row>
          <Row>
            <div className="educational-headers">Lorum Ipsum</div>
            <div className="educational-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              elementum, purus non lacinia fermentum, metus mauris pulvinar
              massa, at rhoncus purus purus at orci. Vestibulum eget mi ut nisi
              fringilla feugiat vel id leo. Suspendisse sagittis lobortis orci a
              tempor. Maecenas id fringilla diam. Suspendisse non vulputate
              ipsum. Nulla dignissim justo vitae urna cursus ultricies. Nunc
              quis bibendum sapien. Phasellus porttitor gravida elit, a mollis
              purus placerat nec. Donec nec tortor et ante aliquet fringilla eu
              lacinia quam. Phasellus eleifend nunc in pharetra porttitor.
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}
