import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

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

  margin: 10px;
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

  margin: 10px;
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

const floatUp = keyframes`
  0% {
    transform: translateY(100vh) scaleX(1.5) scaleY(0.5);
    opacity: 0;
  }
  5% {
    opacity: 1;
    transform: translateY(90vh) scaleX(0.5) scaleY(1.5);
  }
  15% {
    transform: translateY(70vh) scaleX(1.3) scaleY(0.7);
  }
  30% {
    transform: translateY(40vh) scaleX(0.7) scaleY(1.3);
  }
  50% {
    transform: translateY(0vh) scaleX(1.2) scaleY(0.8);
  }
  70% {
    transform: translateY(-40vh) scaleX(0.8) scaleY(1.2);
  }
  90% {
    opacity: 1;
    transform: translateY(-100vh) scaleX(1.1) scaleY(0.9);
  }
  100% {
    transform: translateY(-120vh) scaleX(1) scaleY(1);
    opacity: 0;
  }
`;

const FloatingTako = styled.img<{ left: number }>`
  position: absolute;
  left: ${({ left }) => left}vw;
  bottom: 0;
  width: 100px;
  z-index: 0; // Lowered to put in background
  pointer-events: none;
  animation: ${floatUp} 12s linear forwards;
`;

const CenterContainer = styled.div`
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  position: absolute;
  z-index: 1; // Added to keep content above takos
`;

const ScrollIndicator = styled.div`
  position: absolute;
  width:100%;
  left: 50%;
  bottom: -5px;
  transform: translateX(-50%);
  color: #584F69;
  z-index: 1; // Added to keep indicator above takos

  @media only screen and (max-width: 800px) {
    bottom: 10vh;
  }
`;

const takoCount = 72; 

const Logo = (): JSX.Element => {
  const [floatingTakos, setFloatingTakos] = useState<
    { key: number; left: number; tako: number }[]
  >([]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < 0.5) {
        const randomTako = Math.floor(Math.random() * takoCount);
        const newTako = {
          key: Date.now() + Math.random(),
          left: Math.random() * 80 + 10,
          tako: randomTako,
        };
        setFloatingTakos((prev) => [...prev, newTako]);
        setTimeout(() => {
          setFloatingTakos((prev) => prev.filter((t) => t.key !== newTako.key));
        }, 12000);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <LogoContainer>
      <CenterContainer>
        <TitleHeader>Tentacult Temple Fan Site</TitleHeader>
        <LogoImg alt="ina-logo" src={`${process.env.PUBLIC_URL}/InaLogo.png`} />
        <LogoHeader>INA&apos;S 5TH ANNIVERSARY CELEBRATION FAN PROJECT</LogoHeader>
      </CenterContainer>
      <ScrollIndicator>
        <h3>
          <i className="fa fa-chevron-down"></i> Scroll down for more <i className="fa fa-chevron-down"></i>
        </h3>
      </ScrollIndicator>
      {floatingTakos.map((tako) => (
        <FloatingTako
          key={tako.key}
          left={tako.left}
          src={`${process.env.PUBLIC_URL}/takos/${tako.tako}.png`}
          alt="floating takodachi"
        />
      ))}
    </LogoContainer>
  );
};

export default Logo;
