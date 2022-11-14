import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./history.css";

export default class history extends Component {
  render() {
    return (
      <Container>
        <h1 className="history-header">A quick history lesson</h1>
        <Row className="row">
          <Col>
            <p className="exchange-name">Mt. Gox</p> <p>March 2014</p>
          </Col>
          <Col xs={6}>
            <list className="list">
              <li>
                By 2013, just 3 years after launching, Mt. Gox was processing
                70% of all Bitcoin trades.
              </li>
              <li>
                On Feb 7th, 2014, Mt. Gox suspended Bitcoin withdrawals due to
                “technical problems”.
              </li>
              <li>
                On Feb 24th, 2014, Mt. Gox suspended all trading and the
                exchange’s website went offline. That same week, a document was
                leaked revealing that 744,408 BTC was stolen from customers due
                to poor security measures and another 100,000 BTC was also
                missing.
              </li>
              <li>On February 24th, 2014, Mt. Gox filed for bankruptcy.</li>
              <li>
                On March 15th, 2019, Mt. Gox CEO, Mark Karpeles was found guilty
                of falsifying data to inflate holdings of the exchange.
              </li>
            </list>
          </Col>
        </Row>
        <Row className="row">
          <Col>
            <p>Celcius</p> <p>June 2022</p>
          </Col>
          <Col xs={6}>
            <list className="list">
              <li>
                By May of 2022, Celcius had close to $12 billion in assets under
                management.{" "}
              </li>
              <li>
                Celsius had been using the crypto custodian Prime Trust to store
                some customer assets since March 2020. This relationship ended
                in June 2021, when Prime Trust's risk team expressed concern
                about Celsius's strategy of "endlessly re-hypothecating assets
                ... lending the same assets over and over and over again to
                juice yields".{" "}
              </li>
              <li>
                On June 11th, 2022, Celcius CEO Alex Mashinsky replied to a user
                on Twitter stating that the user’s claims of frozen withdrawals
                were “FUD and misinformation.”
              </li>
              <li>
                Two days later, Celcius announced that it had suspended all
                withdrawals, swaps, and account transfers due to “extreme market
                conditions”.
              </li>
              <li>
                On July 14th, 2022, Celcius filed for bankruptcy. In the
                filling, it was discovered that the company had $5.5 billion in
                liabilities and only $4.31 billion in assets.
              </li>
            </list>
          </Col>
        </Row>
        <Row className="row">
          <Col>
            <p>Voyager Digital</p>
            <p>June 2022</p>{" "}
          </Col>
          <Col xs={6}>
            <list className="list">
              <li>
                On June 17th, hedge fund Three Arrows Capital announced it had
                suffered heavy losses due to the collapse of the Terra
                ecosystem.
              </li>
              <li>
                On June 22nd, 2022, Voyager disclosed that it had exposure to
                Three Arrows Capital to the tune of $370 million worth of BTC
                and $350 million worth of USDC.{" "}
              </li>
              <li>
                On July 1st, 2022, Voyager froze all deposits, withdrawals, and
                loyalty rewards due to “market conditions”.
              </li>
              <li>
                On July 7th, 2022, Voyager Digital filed for bankruptcy. In the
                filing, Voyager estimated that it had more than 100,000
                creditors and somewhere between $1 billion and $10 billion in
                assets, and liabilities worth the same value.
              </li>
            </list>
          </Col>
        </Row>
        <Row className="row">
          <Col>
            <p>FTX</p> <p>November 2022</p>
          </Col>
          <Col xs={6}>
            <list className="list">
              <li>In Progress...</li>
            </list>
          </Col>
        </Row>
      </Container>
    );
  }
}
