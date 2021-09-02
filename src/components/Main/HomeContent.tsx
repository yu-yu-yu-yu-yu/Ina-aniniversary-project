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

const Pattern = styled.div`
  height: 100%;
  opacity: 0.6;
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
  background: transparent linear-gradient(180deg, #c4bdd2 0%, #d3cce1 100%) 0%
    0% no-repeat padding-box;
  text-align: center;
`;

const QuoteInaImg = styled.img`
  margin: 20px 20px 20px 20px;
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
    font: normal normal bold 40px/61px Roboto;
    letter-spacing: 2.5px;
    color: #ffffff;
    opacity: 1;

    padding: 10px 40px;
    margin: 10px;
  }
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

  .footer-img {
    margin: auto;
  }
`;

const HomeContent = (): JSX.Element => {
  // useLayoutEffect(() => {
  //     window.scrollTo(0, 0)
  // });

  return (
    <div>
      <LogoContainer>
        <Logo alt="ina-logo" src={`${process.env.PUBLIC_URL}/InaLogo.png`} />
        {/* <Pattern/> */}
        <LogoHeader>ANNIVERSARY FAN PROJECT</LogoHeader>
      </LogoContainer>
      <QuoteContainer>
        <QuoteInaImg src={`${process.env.PUBLIC_URL}/InaInaIna.png`} />
        <Quote>
          <img
            alt="WAH"
            src={`${process.env.PUBLIC_URL}/WAH.png`}
            style={{
              borderBottom: "solid 3px",
              paddingBottom: "40px",
              width: "300px",
            }}
          />
          <br />
          Ninomae Ina&apos;nis
          <br />
          2020 09 13
        </Quote>
      </QuoteContainer>
      <LoreContainer>
        <LoreTextContainer>
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
        <img
          alt="mini-ina"
          className="footer-img"
          src={`${process.env.PUBLIC_URL}/MiniIna.png`}
        />
      </Footer>
    </div>
  );
};

export default HomeContent;
