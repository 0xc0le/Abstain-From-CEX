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
            <div className="educational-headers">What is a Wallet?</div>
            <div className="educational-content">
              A wallet is an account on the blockchain. This account is
              identified by a "public key" and protected by a "private key".
              These keys act like a username and password for the wallet and are
              generated using a type of math called cryptography (This is where
              the name "crypto" comes from).
            </div>
          </Row>
          <Row>
            <div className="educational-headers">What is Cryptography?</div>
            <div className="educational-content">
              Cryptography is the study of encryption, a method by which
              information is converted into secret code that hides the
              information's true meaning. Although crypto is a relatively new
              technology (Bitcoin was created in 2008), cryptography has been
              around for decades. In fact, the earliest known use of
              cryptography is from the year 1900 BC!
              <br /> <br /> Even Julius Ceaser used cryptography! Ceaser used
              encryption to send secret messages to his generals on the war
              front. This ensured that only the intended reciever of the message
              could read it and protected secrets from being revealed if the
              message was intercepted.
              <br /> <br />
              Cryptography is what makes crypto possible. With wallets, only the
              person who knows the private key of a wallet can move the funds
              associated with that wallet.
            </div>
          </Row>
          <Row>
            <div className="educational-headers">
              What is a Centralized Exchange?
            </div>
            <div className="educational-content">
              A CEX, or Centralized Exchange, is a type of cryptocurrency
              exchange that accepts fiat or crypto from a user and facilitates
              trades on behalf of the user. CEXs have full control of users'
              funds and have the ability to spend, invest, or lend out those
              funds without the user's consent. This can be problematic because
              CEXs may lose customer funds in speculative investments or
              reckless spending. CEXs could also not have enough funds on hand
              to cover customer withdrawls. These situations typically all end
              the same, with the company declaring bankruptcy. When a CEX
              declares bankruptcy, customers are treated as creditors and
              generally recieve pennies on the dollar after years of bankruptcy
              proceedings. This is why the phrase, "not your keys, not your
              coins" is so popular!
              <br /> <br />
              Examples of centralized exchanges include: Coinbase, Gemini,
              Binance, OKX, and Bybit.
            </div>
          </Row>
          <Row>
            <div className="educational-headers">What is Self-Custody?</div>
            <div className="educational-content">
              Self-custody refers to a user being able to truly own their funds
              without having to rely on or trust any third-party custodian or
              intermediary. When a person wants to self-custody their funds,
              they can do so by creating a wallet and not sharing the private
              key with anyone. It is important to remember that whoever has
              access to the private keys for a wallet, can move the funds from
              that wallet. Because of this, it is EXTREMELY important to follow
              best practices of key management. If you are interested in
              learning more about best practices, you can do so here.
            </div>
          </Row>
          <Row>
            <div className="educational-headers">
              What is a Decentralized Exchange?
            </div>
            <div className="educational-content">
              A DEX, or decentralized exchange, is a type of cryptocurrency
              exchange that allows users to trade tokens in a peer-to-peer
              manner. This type of exchange is made possible by smart contracts
              and is permissionless, meaning anyone can trade their assets
              without needing permission from an intermediary.
              <br /> <br /> Examples of decentralized exchanges include:
              UniSwap, SushiSwap, and Curve.
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
