import React from 'react';
import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';
import './headerfooter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export default function App() {
  return (
    <MDBFooter className="text-center" color="white">
      <MDBContainer className="p-4">
        <div className="footer-text">
          Made with <FontAwesomeIcon icon={faHeart} color="#9C7506" /> and
          caffeine by{' '}
          <a
            href="https://twitter.com/0xc0le"
            target="_blank"
            rel="noreferrer"
            className="alternatives-links"
          >
            0xc0le.ETH
          </a>
        </div>
        <div>
          <a
            href="https://github.com/0xc0le/Abstain-From-CEX"
            target="_blank"
            rel="noreferrer"
            className="alternatives-links"
          >
            Github
          </a>
        </div>
      </MDBContainer>
    </MDBFooter>
  );
}
