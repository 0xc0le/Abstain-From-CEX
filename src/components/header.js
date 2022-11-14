import React, { Component } from "react";
import "./headerfooter.css";
import Card from "react-bootstrap/Card";

export default class header extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <Card className="header-card">
            <Card.Body className="header-text">
              <h2>
                Since the dawn of man, centralized intermediaries have lied to,
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
