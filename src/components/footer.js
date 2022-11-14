import React, { Component } from "react";
import "./headerfooter.css";
import Card from "react-bootstrap/Card";

export default class footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer">
          <Card className="footer-card">
            <Card.Body className="footer-text">
              <h2>
                If we do not learn from history, we are doomed to repeat it.
              </h2>
            </Card.Body>
          </Card>
        </footer>
      </div>
    );
  }
}
