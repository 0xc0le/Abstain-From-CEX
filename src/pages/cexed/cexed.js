import React, { Component } from "react";
import Accordion from "react-bootstrap/Accordion";
import "./cexed.css";

export default class cexed extends Component {
  render() {
    return (
      <div className="page">
        <div className="cexed-header">CEX Ed</div>
        <div className="cexed-header">
          Self-custody can be dauting, but it doesn't have to be. By learning a
          few basic topics and best practices, you can be well on your way to
          becoming independent of centralized intermediaries
        </div>
        <Accordion className="accordian" defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>What is a CEX?</Accordion.Header>
            <Accordion.Body>
              A CEX, or Centralized Exchange, is... A CEX has full control of
              your digital assets.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              Where does a CEX keep your funds?
            </Accordion.Header>
            <Accordion.Body>
              Some CEXs do not share where they keep client funds. Some lend
              them out (ahem FTX)...
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="0">
            <Accordion.Header>What is a wallet?</Accordion.Header>
            <Accordion.Body>
              A wallet is an account on the blockchain. This account is
              identified by a "public key" and protected by a "private key".
              These keys act like a username and password for the wallet and are
              generated using a type of math called cryptography.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="0">
            <Accordion.Header>What does "self-custody" mean?</Accordion.Header>
            <Accordion.Body>
              Self-custody means owning your own funds. "Not your keys, not your
              coins"
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Are wallets secure?</Accordion.Header>
            <Accordion.Body>Yes, unless you own a Bored Ape</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="0">
            <Accordion.Header>What is a seed phrase?</Accordion.Header>
            <Accordion.Body>
              A seed phrase is a 12 or 24 word blah blah blah...
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Blah blah blah?</Accordion.Header>
            <Accordion.Body>Lorum Ipsum</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    );
  }
}
