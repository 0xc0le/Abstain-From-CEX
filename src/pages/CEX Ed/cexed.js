import React, { Component } from "react";
import Accordion from "react-bootstrap/Accordion";
import "./cexed.css";

export default class cexed extends Component {
  render() {
    return (
      <div>
        <h1 className="header">
          Self-custody can be dauting, but it doesn't have to be. By learning a
          few basic topics and best practices, you can be well on your way to
          becoming independent of centralized intermediaries
        </h1>
        <Accordion className="accordian">
          <Accordion.Item eventKey="0">
            <Accordion.Header>What is a wallet?</Accordion.Header>
            <Accordion.Body>
              A wallet is an account on the blockchain. This account is
              identified by a "public key" and protected by a "private key".
              These keys act sort of like a username and password for the wallet
              and are generated using a type of math called cryptography. It is
              important to remember that funds are not actually stored "in" the
              wallet. Keep in mind that the blockchain is a ledger. This ledger
              keeps a tally of the balance of every wallet address. The wallet
              is an application that shows the user data about a specific wallet
              address. The wallet application also stores the private key for a
              wallet address and is used to interact with other applications.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              What is the difference between a hot wallet and a cold wallet?
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>What is a seed phrase?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Blah blah blah?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    );
  }
}
