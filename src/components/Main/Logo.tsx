import React from "react";
import styled from "styled-components";

const LogoContainer = styled.div`
  text-align: center;
  height: 100vh;
`;

const LogoImg = styled.img`
  opacity: 1;
  margin-left: auto;
  margin-right: auto;

  width: 600px;
  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`;

const LogoHeader = styled.h1`
  color: var(--ika-purple);
  text-align: center;
  
  font: normal normal bold 84px/102px Montserrat;
  letter-spacing: 4.2px;
  @media only screen and (max-width: 768px) {
    font: normal normal bold 35px/43px Montserrat;
    letter-spacing: 1.75px;
  }

  
  color: #564f68;
  text-transform: uppercase;
  opacity: 1;
  position: relative;
`;

const Logo = (): JSX.Element => {
  return (
    <LogoContainer>
      <LogoImg alt="ina-logo" src={`${process.env.PUBLIC_URL}/InaLogo.png`} />
      <LogoHeader>ANNIVERSARY FAN PROJECT</LogoHeader>
    </LogoContainer>
  );
};


export default Logo;
