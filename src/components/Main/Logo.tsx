import React from "react";
import styled from "styled-components";

const LogoContainer = styled.div`
  text-align: center;
  height: 100vh;
  position: relative;
  
  @media only screen and (max-width: 1200px) and (orientation: landscape) {
    height: 100vw;
  }
  `;
  
  const LogoImg = styled.img`
  opacity: 1;
  margin-left: auto;
  margin-right: auto;

  width: 600px;
  @media only screen and (max-width: 1350px) {
    width: 500px;
  }
  @media only screen and (max-width: 1000px) {
    width: 400px;
  }

  @media only screen and (max-width: 768px) {
    width: 300px;
  }

  @media only screen and (max-width: 450px) {
    width: 300px;
  }

  @media only screen and (max-width: 300px) {
    width: 200px;
  }
`;

const LogoHeader = styled.h1`

  margin: 10px;
  color: var(--ika-purple);
  text-align: center;

  font: normal normal bold 84px/102px Montserrat;
  letter-spacing: 4.2px;

  @media only screen and (max-width: 1000px) {
    font: normal normal bold 50px/60px Montserrat;
    letter-spacing: 2.25px;
  }

  @media only screen and (max-width: 768px) {
    font: normal normal bold 35px/43px Montserrat;
    letter-spacing: 1.75px;
  }

  @media only screen and (max-width: 300px) {
    font: normal normal bold 25px/33px Montserrat;
    letter-spacing: 1.75px;
  }

  text-transform: uppercase;
  opacity: 1;
  position: relative;
`;

const ScrollIndicator = styled.div`
  position: absolute;
  width:100%;
  left: 50%;
  bottom: -5px;
  transform: translateX(-50%);
  color: #584F69;
`;

const CenterContainer = styled.div`
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  position: absolute;
`;

const Logo = (): JSX.Element => {
  return (
    <LogoContainer>
      <CenterContainer>
        <LogoImg alt="ina-logo" src={`${process.env.PUBLIC_URL}/InaLogo.png`} />
        <LogoHeader>ANNIVERSARY FAN PROJECT</LogoHeader>
      </CenterContainer>
      <ScrollIndicator>
        <h3>
          <i className="fa fa-chevron-down"></i> Scroll down for more <i className="fa fa-chevron-down"></i>
        </h3>
      </ScrollIndicator>
    </LogoContainer>
  );
};

export default Logo;
