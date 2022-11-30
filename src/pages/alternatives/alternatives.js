import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './alternatives.css';
// import { BrowserRouter as Link } from 'react-router-dom';

export default class alternatives extends Component {
  render() {
    return (
      <div className="page">
        <div className="cexed-header">
          <Container>
            <Row className="cexed-header-row">
              <Col className="cexed-header-columns">
                <div className="cexed-header-title">SAFE CEX ALTERNATIVES</div>
                <div className="cexed-header-subtitle">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas suscipit odio volutpat iaculis congue. In venenatis
                  fringilla venenatis. Vivamus porta odio luctus est
                  consectetur, id feugiat est facilisis. Nulla nec. <br />
                  <br />
                </div>
              </Col>
              <Col />
            </Row>
          </Container>
        </div>
        <Container>
          <div>
            <div className="alternatives-content-title">Hardware Wallets</div>
            <div>
              Hardware wallets, or cold storage wallets, are a much better way
              of custodying assets than storing them on an exchange. A hardware
              wallet is a cryptocurrency wallet that stores the user's private
              keys in a secure hardware device. The main principle behind
              hardware wallets is to provide full isolation between the private
              keys and your easy-to-hack computer or smartphone. Some common
              hardware wallets include:
              <Row className="alternatives-row">
                <Col>
                  <a
                    href="https://www.ledger.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="alternatives-links"
                  >
                    Ledger
                  </a>
                  <div>
                    Ledger features two models: the Nano X ($149) and the Nano S
                    Plus ($79).
                  </div>
                </Col>
                <Col>
                  <a
                    href="https://trezor.io/"
                    target="_blank"
                    rel="noreferrer"
                    className="alternatives-links"
                  >
                    Trezor
                  </a>
                  <div>
                    Trezor features two models: the Model T ($219) and the Model
                    One ($69).
                  </div>
                </Col>
                <Col>
                  <a
                    href="https://gridplus.io/"
                    target="_blank"
                    rel="noreferrer"
                    className="alternatives-links"
                  >
                    Gridplus
                  </a>
                  <div>Gridplus features one model: the Lattice1 ($397).</div>
                </Col>
              </Row>
            </div>
          </div>
          <div>
            <div className="alternatives-content-title">Software wallets</div>
            <div>
              Software wallets, or hot wallets, are the best way to interact
              with Web3 and DeFi applications. A software wallet is a
              cryptocurrency wallet that stores the user's private keys in an
              application on your computer or phone. These wallets are
              accompanied by a browser extension that gives users the ability to
              connect/login to websites with one click and approve/sign
              transactions within the application. Some common software wallets
              include:
              <Row className="alternatives-row">
                <Col>
                  <a
                    href="https://metamask.io/"
                    target="_blank"
                    rel="noreferrer"
                    className="alternatives-links"
                  >
                    Metamask
                  </a>
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas suscipit odio volutpat iaculis congue. In venenatis
                    fringilla venenatis. Vivamus porta odio luctus est
                    consectetur, id feugiat est facilisis. Nulla nec.
                  </div>
                </Col>
                <Col>
                  <a
                    href="https://rainbow.me/"
                    target="_blank"
                    rel="noreferrer"
                    className="alternatives-links"
                  >
                    Rainbow
                  </a>
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas suscipit odio volutpat iaculis congue. In venenatis
                    fringilla venenatis. Vivamus porta odio luctus est
                    consectetur, id feugiat est facilisis. Nulla nec.
                  </div>
                </Col>
                <Col>
                  <a
                    href="https://tallyho.org/"
                    target="_blank"
                    rel="noreferrer"
                    className="alternatives-links"
                  >
                    Tally
                  </a>
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas suscipit odio volutpat iaculis congue. In venenatis
                    fringilla venenatis. Vivamus porta odio luctus est
                    consectetur, id feugiat est facilisis. Nulla nec.
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <div>
            <div className="alternatives-content-title">
              Decentralized Exchanges
            </div>
            <div>
              Decentralized Exchanges, or DEXs, are the best alternative to
              trading on a CEX. Most DEXs utilize the Automated Market Maker
              ("AMM") model rather than an order book like traditional
              exchanges. AMMs allow users to deposit tokens into liquidity
              pools. These liquidity pools are what make trading for other users
              possible! The liquidity provider receives transaction fees and the
              trader receives a fast, efficient, and decentralized way to trade
              their tokens. The exchange rate for tokens in the AMM model relies
              heavily on arbitrage. This is the idea that if there is a
              discrepancy between prices in multiple locations, scalpers will
              trade that discrepancy until the pricing difference no longer
              exists. Some common DEXs include:
              <Row className="alternatives-row">
                <Col>
                  <a
                    href="https://app.uniswap.org/#/swap"
                    target="_blank"
                    rel="noreferrer"
                    className="alternatives-links"
                  >
                    UniSwap
                  </a>
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas suscipit odio volutpat iaculis congue. In venenatis
                    fringilla venenatis. Vivamus porta odio luctus est
                    consectetur, id feugiat est facilisis. Nulla nec.
                  </div>
                </Col>
                <Col>
                  <a
                    href="https://www.sushi.com/swap"
                    target="_blank"
                    rel="noreferrer"
                    className="alternatives-links"
                  >
                    SushiSwap
                  </a>
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas suscipit odio volutpat iaculis congue. In venenatis
                    fringilla venenatis. Vivamus porta odio luctus est
                    consectetur, id feugiat est facilisis. Nulla nec.
                  </div>
                </Col>
                <Col>
                  <a
                    href="https://curve.fi/#/ethereum/swap"
                    target="_blank"
                    rel="noreferrer"
                    className="alternatives-links"
                  >
                    Curve
                  </a>
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas suscipit odio volutpat iaculis congue. In venenatis
                    fringilla venenatis. Vivamus porta odio luctus est
                    consectetur, id feugiat est facilisis. Nulla nec.
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
        <br />
      </div>
    );
  }
}
