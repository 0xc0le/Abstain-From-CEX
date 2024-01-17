import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './alternatives.css';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import animationData from '../../components/images/SelfCustodyVid.json';

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
                  Don't trust a third party with your funds! Explore the
                  alternatives to CEXs, such as cold storage and decentralized
                  exchanges, and learn how to keep your private keys secure and
                  your assets safe.
                  <br />
                  <br />
                </div>
              </Col>
              <Col>
                <Player
                  autoplay
                  loop
                  src={animationData}
                  style={{ height: '300px', width: '300px' }}
                >
                  <Controls buttons={['play', 'repeat', 'frame', 'debug']} />
                </Player>
              </Col>
            </Row>
          </Container>
        </div>
        <Container className="alternatives-content-section">
          <div>
            <div className="alternatives-content-title">Hardware Wallets</div>
            <div className="alternatives-content">
              Hardware wallets, also known as cold storage wallets, offer a
              safer way to store your crypto assets than leaving them on an
              exchange. These wallets use a physical device, such as a USB
              drive, to securely store your private keys. This isolates your
              keys from potentially vulnerable online devices, such as computers
              or smartphones. Some common hardware wallets include: <br />
              <br />
              <list className="alternatives-list">
                <li>
                  <a
                    href="https://www.ledger.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="alternatives-links"
                  >
                    Ledger
                  </a>
                </li>
                <li>
                  <a
                    href="https://trezor.io/"
                    target="_blank"
                    rel="noreferrer"
                    className="alternatives-links"
                  >
                    Trezor
                  </a>
                </li>
                <li>
                  <a
                    href="https://gridplus.io/"
                    target="_blank"
                    rel="noreferrer"
                    className="alternatives-links"
                  >
                    Gridplus
                  </a>
                </li>
              </list>
              <br />
              By using a hardware wallet, you can protect your assets from
              hacking and other online threats. It is generally considered a
              best practice to store your private keys offline, using a hardware
              wallet or another type of cold storage solution.
            </div>
          </div>

          <div>
            <div className="alternatives-content-title">Software wallets</div>
            <div className="alternatives-content">
              Software wallets, also known as hot wallets, offer a convenient
              way to store your crypto assets. Unlike hardware wallets, which
              use a physical device to store your private keys, software wallets
              are apps or programs that you can install on your computer or
              smartphone. These wallets allow you to access your assets from any
              device with an internet connection, making them more flexible than
              hardware wallets. Some popular software wallet options include:
              <br />
              <br />
              <list className="alternatives-list">
                <li>
                  <a
                    href="https://rainbow.me/"
                    target="_blank"
                    rel="noreferrer"
                    className="alternatives-links"
                  >
                    Rainbow
                  </a>
                </li>
                <li>
                  <a
                    href="https://tallyho.org/"
                    target="_blank"
                    rel="noreferrer"
                    className="alternatives-links"
                  >
                    Tally
                  </a>
                </li>
                <li>
                  <a
                    href="https://metamask.io/"
                    target="_blank"
                    rel="noreferrer"
                    className="alternatives-links"
                  >
                    Metamask
                  </a>
                </li>
              </list>
              <br />
              While software wallets are more convenient than hardware wallets,
              they are also more vulnerable to online threats, such as hacking
              and malware. It is generally considered a best practice to use a
              combination of hot and cold storage solutions for your crypto
              assets, with the bulk of your funds stored in a hardware wallet
              for added security.
            </div>
          </div>
          <div>
            <div className="alternatives-content-title">
              Decentralized Exchanges
            </div>
            <div className="alternatives-content">
              A decentralized exchange (DEX) is a platform for trading crypto
              assets that does not rely on a central authority. Unlike
              traditional exchanges, which hold users' funds and execute trades
              on their behalf, a DEX allows users to trade directly with each
              other, using smart contracts on a blockchain network. This
              decentralized approach offers several advantages over centralized
              exchanges, such as increased security, anonymity, and control over
              your funds. Some popular decentralized exchange options include:
              <br />
              <br />
              <list className="alternatives-list">
                <li>
                  <a
                    href="https://app.uniswap.org/#/swap"
                    target="_blank"
                    rel="noreferrer"
                    className="alternatives-links"
                  >
                    UniSwap
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.sushi.com/swap"
                    target="_blank"
                    rel="noreferrer"
                    className="alternatives-links"
                  >
                    SushiSwap
                  </a>
                </li>
                <li>
                  <a
                    href="https://curve.fi/#/ethereum/swap"
                    target="_blank"
                    rel="noreferrer"
                    className="alternatives-links"
                  >
                    Curve
                  </a>
                </li>
              </list>
              <br />
              By using a decentralized exchange, you can trade your digital
              assets without having to trust a third party with your funds.
              Decentralized exchanges offer the ability to trade directly from
              your wallet and often use AMMs, rather than an order book, to set
              prices and match orders. However, DEXs can also be more complex
              and less user-friendly than centralized exchanges, so it is
              important to carefully research and compare different DEXs before
              interacting with one.
            </div>
          </div>
        </Container>
        <br />
      </div>
    );
  }
}
