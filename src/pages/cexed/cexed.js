import React, { Component } from 'react';
import './cexed.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import animationData from '../../components/images/CexEdVid.json';

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
                  Take control of your financial security: learn about the
                  basics of self custody, and discover the best practices for
                  protecting your assets from the risks of centralized
                  intermediaries.
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
        <Container className="educational-content-section">
          <Row>
            <div className="educational-headers">CEXs and DEXs</div>
            <div className="educational-content">
              A centralized exchange (CEX) is a platform for buying and selling
              crypto that is operated by a central authority. CEXs typically
              hold users' funds in their own accounts, and use order books to
              match buyers and sellers. This allows them to offer fast and
              convenient trading services, but it also means that users must
              trust the exchange with their funds. <br />
              <br />
              In contrast, decentralized exchanges (DEXs) allow users to trade
              directly with each other, using smart contracts on a blockchain
              network. This decentralized approach offers increased security and
              control over your funds, but it also requires a decent
              understanding of how to use a crypto wallet to interact with DeFi.
            </div>
          </Row>
          <Row>
            <div className="educational-headers">Wallets and Cryptography</div>
            <div className="educational-content">
              In order to use a DEX, you need a crypto wallet. A wallet is a
              software program that stores your private keys, which are the
              secret codes that allow you to access your crypto assets. Your
              private keys are generated using cryptography, a branch of
              mathematics that uses complex algorithms to encrypt and secure
              information. Cryptography is what makes it possible for you to own
              and control your crypto, without relying on a central authority.{' '}
              <br />
              <br />
              When you use a wallet, you can choose to store your private keys
              on your internet-connected device, such as a computer or a
              smartphone, or on an airgapped device, such as a USB drive. If you
              store your private keys on your phone or computer, this is called
              "hot" storage, because your keys are accessible and potentially
              vulnerable to online threats. If you store your private keys on a
              hardware wallet, this is called "cold" storage, because your keys
              are isolated and offline, making them less vulnerable to hacking
              and other online threats.
            </div>
          </Row>
          <Row>
            <div className="educational-headers">Self-Custody</div>
            <div className="educational-content">
              Self custody means taking control of your own crypto assets, and
              storing them in a secure and private manner. This can involve
              using a cold storage wallet, such as a hardware wallet or a paper
              wallet, to keep your private keys offline and safe from online
              threats. It can also involve using a decentralized exchange (DEX),
              which allows you to trade directly with other users, without
              having to trust a third party with your funds. <br />
              <br />
              Self custody offers several benefits over centralized exchanges
              (CEXs), such as increased security, anonymity, and control over
              your funds. By choosing self custody, you can protect your assets
              from the risks of CEXs, such as hacking, theft, and fraud. You can
              also avoid the limitations and restrictions that CEXs may impose
              on your access and use of your funds. <br />
              <br />
              However, self custody can also be challenging, especially for
              beginners or less experienced crypto users. Cold storage wallets
              can be complex to set up and use, and may not be user-friendly.
              DEXs can also be difficult to use, and may offer fewer features
              and services than CEXs. In addition, self custody requires a
              certain level of knowledge and understanding of cryptography,
              wallets, and blockchain technology.
            </div>
          </Row>
          <Row>
            <div className="educational-headers">Best Practices</div>
            <div className="educational-content">
              When you first set up a crypto wallet, you will generate a
              recovery phrase (also referred to as a “seed phrase”), which is a
              string of 12 or 24 simple words. The seed phrase is the master
              password to your wallet. As long as you have your seed phrase,
              you’ll have access to all of the crypto and NFTs associated with
              the wallet. You can even import your wallet using that same seed
              phrase to access it on multiple devices, such as a smartphone with
              a wallet mobile app, or a computer with a wallet browser
              extension. Keeping your recovery phrase safe is of the utmost
              importance. If you lose your seed phrase, you lose access to your
              assets. If someone else gets your seed phrase, they gain access to
              your assets. For most people, simply writing your seed phrase down
              and keeping copies in more than one safe location is a solid
              approach. <br /> <br />
              Some people even break their seed phrase into 3 or 4 segments and
              write each segment on seperate pieces of paper. These segments are
              then stored in different locations so even if one segment is
              compromised, it is nearly impossible to access the wallet without
              the other segments. <br /> <br />
              Other people choose to store their crypto assets in a multisig
              (mutli-signature) wallet. A multisig wallet requires signatures
              from multiple wallet addresses to move the funds in the multisig.
              This can be beneficial because it ensures that even if one private
              key or seed phrase is compromised, your digital assets are still
              secure and in your control.
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}
