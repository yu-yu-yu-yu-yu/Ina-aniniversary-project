import React, { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LogoContainer = styled.div`
  // background: transparent linear-gradient(180deg, #F29A31 0%, #F29C35EF 5%, #F6B76C00 86%, #FFFFFF0A 100%) 0% 0% no-repeat padding-box;
  text-align: center;
  height: 100vh;
`;
const Logo = styled.img`
  opacity: 1;
  width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const LogoHeader = styled.h1`
  color: var(--ika-purple);
  text-align: center;
  font: normal normal bold 84px/102px Montserrat;
  letter-spacing: 4.2px;
  color: #564f68;
  text-transform: uppercase;
  opacity: 1;
  position: relative;
`;

const QuoteContainer = styled.div`
  background: transparent linear-gradient(180deg, #c4bdd2 0%, #d3cce1 100%) 0% 0% no-repeat padding-box;
  text-align: center;
  padding: 40px 20px;
`;

const QuoteInaImg = styled.img`
  display: inline-block;
  width: 300px;
`;

const Quote = styled.div`
  text-align: left;
  font: normal normal normal 40px/51px Roboto;
  letter-spacing: 2.5px;
  color: #ffffff;
  display: inline-block;
  margin-left: 40px;
`;

const LoreContainer = styled.div`
  text-align: center;
  margin-bottom: -10px;
`;

const LoreTextContainer = styled.div`
  z-index: 1;
  position: absolute;
  left: 190px;

  .lore-text {
    padding: 2px 25px;
    margin-top: 60px;
    width: 600px;
    background: #564f68 0% 0% no-repeat padding-box;
    border-radius: 32px;
    opacity: 1;

    color: var(--unnamed-color-f3edff);
    text-align: left;
    font: normal normal 300 28px/37px Mulish;
    letter-spacing: 0px;
    color: #f3edff;
  }

  .bio-button {
    background: var(--inai-purple) 0% 0% no-repeat padding-box;
    background: #a198b3 0% 0% no-repeat padding-box;
    border: 0px;
    border-radius: 32px;
    opacity: 1;
    text-align: left;
    font: normal normal bold 35px/51px Roboto;
    letter-spacing: 2.5px;
    color: #ffffff;
    opacity: 1;

    padding: 20px 40px;
    margin: 10px;
  }
`;

const LoreTextPolygon = styled.video`  
  z-index: 1;
  position: absolute;
  left: 100%;
  top: 40%;
  width: 0; 
  height: 0; 
  border-top: 40px solid transparent;
  border-bottom: 40px solid transparent;
  border-left: 40px solid var(--ika-purple);
`;

const InaVideo = styled.video`
  width: 100%;
  height: 100%;
  margin-left: 35%;
`;

const InaVideoContainer = styled.div`
  display: inline-block;
  overflow: hidden;
`;

export const Footer = styled.footer`
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
`;

const HomeContent = (): JSX.Element => {
  // useLayoutEffect(() => {
  //     window.scrollTo(0, 0)
  // });

  return (
    <div>
      <LogoContainer>
        <Logo alt="ina-logo" src={`${process.env.PUBLIC_URL}/InaLogo.png`} />
        <LogoHeader>ANNIVERSARY FAN PROJECT</LogoHeader>
      </LogoContainer>
      <QuoteContainer>
        <QuoteInaImg src={`${process.env.PUBLIC_URL}/InaInaIna.png`} />
        <Quote>
          <img
            alt="WAH"
            src={`${process.env.PUBLIC_URL}/WAH.png`}
            style={{
              borderBottom: "solid 4px",
              paddingBottom: "40px",
              width: "300px",
            }}
          />
          <br />
          Ninomae Ina&apos;nis
          <br />
          2020·09·13
        </Quote>
      </QuoteContainer>
      <LoreContainer>
        <LoreTextContainer>
          <LoreTextPolygon />
          <div className="lore-text">
            <p>
              One day, Ina&apos;nis picked up a strange book and then started to
              gain the power of controlling tentacles. To her, tentacles are
              just a part in her ordinary life; it has never been a big deal for
              her. However, her girly mind does want to get them dressed up and
              stay pretty.
            </p>
            <p>
              After gaining power, she started hearing Ancient Whispers and
              Revelations. Hence, she began her VTuber activities to deliver
              random sanity checks on humanity, as an ordinary girl.
            </p>
          </div>
          <div style={{ marginTop: "50px" }}>
            <Link to="/messages" role="button" className="bio-button">
              Messages
            </Link>
            <Link to="/timeline" role="button" className="bio-button">
              Timeline
            </Link>
          </div>
        </LoreTextContainer>

        <InaVideoContainer>
          <InaVideo
            autoPlay
            loop
            muted
            poster={`${process.env.PUBLIC_URL}/InaHoodie.png`}
          >
            <source
              src={`${process.env.PUBLIC_URL}/InaHoodie.webm`}
              type="video/webm"
            />
          </InaVideo>
        </InaVideoContainer>
      </LoreContainer>
      <Footer>
        <AoLogo>
          <img
              alt="Ao-chan Logo"
              src={`${process.env.PUBLIC_URL}/AOPatternFilledIn.png`}
              style={{
                width: "120px",
              }}
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
    </div>
  );
};

export default HomeContent;
