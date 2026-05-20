import React from "react";
import { Link } from "react-router-dom";
import { Footer, AoLogo } from "./styles/footerStyles";
import pkg from "../../../../package.json";
const { version } = pkg;

const HomeFooter = (): JSX.Element => {
  return (
    <Footer>
      <AoLogo>
        <img
          alt="Ao-chan Logo"
          src={`${process.env.PUBLIC_URL}/AOPatternFilledIn.png`}
        />
      </AoLogo>
      <div className="footer-social-container">
        <div className="social-links">
          <a href="https://twitter.com/ninomaeinanis" target="_blank" rel="noopener noreferrer">
            <p>
              <i className="fa fa-twitter"></i> @ninomaeinanis
            </p>
          </a>
          <br />
          <a
            href="https://www.youtube.com/channel/UCMwGHR0BTZuLsmjY_NT5Pwg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>
              <i className="fa fa-youtube-play"></i> Ninomae Ina&apos;nis Ch.
            </p>
          </a>
        </div>
      </div>
      <div className="footer-img-container">
        <Link to="/credits">
          <img
            alt="mini-ina"
            className="footer-img"
            src={`${process.env.PUBLIC_URL}/MiniIna.png`}
          />
        </Link>
      </div>
      <div className="disclaimer-container">
        <p>
          This is a fan project. We are not affiliated with or endorsed by Cover
          Corporation.
        </p>
        <p style={{ fontSize: "0.75rem", opacity: 0.5, marginTop: "0.25rem" }}>v{version}</p>
      </div>
    </Footer>
  );
};

export default HomeFooter;
