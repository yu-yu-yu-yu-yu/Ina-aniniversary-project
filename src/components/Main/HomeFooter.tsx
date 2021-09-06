import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  background: #fba147 0% 0% no-repeat padding-box;
  opacity: 1;
  overflow: hidden;

  .footer-social-container{
    display: inline-block;
    margin-left: 120px;
    margin-top, margin-bottom: 20px;
  }

  p{
      text-align: left;
      font: normal normal normal 35px/43px Montserrat;
      letter-spacing: 0px;
      color: #4F415C;
  }

  .fa {
    margin-right: auto;
    margin-top: auto;
  }

  .footer-img-container{
    display: inline-block;
    float: right;
    margin-right: 80px;
    margin-top, margin-bottom: 20px;
  }

  .footer-img {
    margin: 20px;
    width: 300px;
  }
`;

const AoLogo = styled.div`
  z-index: 1;
  position: absolute;
  left: 50%;
  margin-top: -90px;

  img{
    width: 120px;
  }
`;


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
                <a href="https://twitter.com/ninomaeinanis">
                    <p>
                        <i className="fa fa-twitter" style={{ fontSize: "48px", color: "#4F415C" }}></i> @ninomaeinanis
                    </p>
                </a>
                <a rel="stylesheet" href="https://www.youtube.com/channel/UCMwGHR0BTZuLsmjY_NT5Pwg">
                    <p>
                        <i className="fa fa-youtube-play" style={{ fontSize: "48px", color: "#4F415C" }}></i> Ninomae Ina&apos;nis Ch.
                    </p>
                </a>
            </div>
            <div className="footer-img-container">
                <img
                    alt="mini-ina"
                    className="footer-img"
                    src={`${process.env.PUBLIC_URL}/MiniIna.png`}
                />
            </div>
        </Footer>
    );
};


export default HomeFooter;