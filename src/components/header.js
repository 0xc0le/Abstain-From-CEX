import React, { Component } from "react";
import "./headerfooter.css";
import Card from "react-bootstrap/Card";
import selfcustody from "./images/selfcustody.png";

export default class header extends Component {
  render() {
    return (
      <div>
        <header className="welcome">
          <Card className="welcome-card">
            <Card.Body className="header-text">
              <div className="welcome-title">Welcome to ABSTAIN FROM CEX</div>
              <div className="welcome-subtitle">
                ABSTAIN FROM CEX is an educational website dedicated to teaching
                people about self-custody
              </div>
            </Card.Body>
          </Card>
        </header>
        <img src={selfcustody} className="selfcustodyimage" />
        <header className="header">
          <Card className="header-card">
            <Card.Body className="header-text">
              <h2>
                Throughout history, centralized intermediaries have lied to,
                cheated, and stolen from their users.
              </h2>
              <h2>Centralized crypto exchanges are no different.</h2>
            </Card.Body>
          </Card>
        </header>
      </div>
    );
  }
}
