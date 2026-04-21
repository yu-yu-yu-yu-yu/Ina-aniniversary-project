import React from "react";
import styled from "styled-components";

const LogoContainer = styled.div`
  text-align: center;
  height: 100vh;
  position: relative;
  z-index: 3;
  
  @media only screen and (max-width: 1200px) and (orientation: landscape) {
    height: 100vw;
  }
  `;
  
  const LogoImg = styled.img`
  opacity: 1;
  margin-left: auto;
  margin-right: auto;

  width: 600px;
  filter: var(--logo-filter); 
  @media only screen and (min-width: 1200px) and (max-height: 800px){
    width: 70vh !important; 
  }

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

const TitleHeader = styled.h2`

  margin: 8px;
  color: var(--ika-purple);
  text-align: center;

  font: normal normal bold 48px/56px Montserrat;  
  letter-spacing: 2.2px;

  @media only screen and (min-width: 1200px) and (max-height: 800px){
    font: normal normal bold 38px/46px Montserrat; !important; 

  }


  @media only screen and (max-width: 1000px) {
    font: normal normal bold 32px/40px Montserrat;
    letter-spacing: 1.25px;
  }

  @media only screen and (max-width: 768px) {
    font: normal normal bold 24px/30px Montserrat;
    letter-spacing: 1px;
  }

  @media only screen and (max-width: 300px) {
    font: normal normal bold 18px/24px Montserrat;
    letter-spacing: 0.75px;
  }

  text-transform: uppercase;
  opacity: 1;
  position: relative;
`;

const LogoHeader = styled.h1`

  margin: 8px;
  color: var(--ika-purple);
  text-align: center;

  font: normal normal bold 60px/72px Montserrat;  
  letter-spacing: 3px;                          

  @media only screen and (min-width: 1200px) and (max-height: 800px){
    font: normal normal bold 48px/60px Montserrat !important;
  }


  @media only screen and (max-width: 1000px) {
    font: normal normal bold 38px/46px Montserrat;
    letter-spacing: 1.5px;
  }

  @media only screen and (max-width: 768px) {
    font: normal normal bold 28px/34px Montserrat;
    letter-spacing: 1px;
  }

  @media only screen and (max-width: 300px) {
    font: normal normal bold 20px/26px Montserrat;
    letter-spacing: 0.75px;
  }

  text-transform: uppercase;
  opacity: 1;
  position: relative;
`;

const CenterContainer = styled.div`
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -60%);
  position: absolute;
  z-index: 1;
`;

const ScrollIndicator = styled.div`
  position: absolute;
  width:100%;
  left: 50%;
  bottom: 40px;
  transform: translateX(-50%);
  color: var(--ika-purple);
  z-index: 1;

  @media only screen and (max-width: 800px) {
    bottom: 10vh;
  }
`;

const Logo = (): JSX.Element => {
  return (
    <LogoContainer>
      <CenterContainer>
        <TitleHeader>Tentacult Temple Fan Site</TitleHeader>
        <LogoImg alt="ina-logo" src={`${process.env.PUBLIC_URL}/InaLogo.png`} />
        <LogoHeader>INA&apos;S 6TH BIRTHDAY CELEBRATION</LogoHeader>
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
