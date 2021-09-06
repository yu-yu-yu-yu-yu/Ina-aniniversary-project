import React from "react";
import styled from "styled-components";

const LogoContainer = styled.div`
  text-align: center;
  height: 100vh;

  @media only screen and max-width:1200px  and (orientation: landscape){
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
    margin-top: 10%;
    width: 400px;
  }

  @media only screen and (max-width: 768px) {
    margin-top: 20%;
    width: 300px;
  }

  @media only screen and (max-width: 450px) {
    margin-top: 30%;
    width: 300px;
  }

  @media only screen and (max-width: 300px) {
    margin-top: 30%;
    width: 200px;
  }
`;

const LogoHeader = styled.h1`
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
