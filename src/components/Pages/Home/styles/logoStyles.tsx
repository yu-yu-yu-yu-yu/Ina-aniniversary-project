import styled from "styled-components";

const LogoContainer = styled.div`
  min-height: 100vh;
  position: relative;
  z-index: 3;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding-bottom: 20px; 
  box-sizing: border-box;
`;
  
  const LogoImg = styled.img`
  opacity: 1;
  margin-left: auto;
  margin-right: auto;

  width: 45vh;
  filter: var(--logo-filter); 
  @media only screen and (min-width: 1200px) and (max-height: 800px){
    width: 70vh !important; 
  }

  @media only screen and (max-width: 1350px) {
    width: 40vh;
  }
`;

const TitleHeader = styled.h2`

  margin: 8px;
  color: var(--dark-highlight);
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
    font: normal normal bold 22px/28px Montserrat;
    letter-spacing: 1px;
  }

  @media only screen and (max-width: 300px) {
    font: normal normal bold 16px/22px Montserrat;
    letter-spacing: 0.75px;
  }

  text-transform: uppercase;
  opacity: 1;
  position: relative;
`;

const LogoHeader = styled.h1`

  margin: 8px;
  color: var(--dark-highlight);
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
  width: 100%;
  text-align: center;
`;

const ScrollIndicator = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 25px;
  text-align: center;
  color: var(--dark-highlight);
  z-index: 2;

  h3 {
    margin: 0;
    font-size: 18px;
  }

  @media only screen and (max-width: 800px) {
    bottom: 18px;

    h3 {
      font-size: 16px;
    }
  }
`;

export { LogoContainer, LogoImg, TitleHeader, LogoHeader, CenterContainer, ScrollIndicator };