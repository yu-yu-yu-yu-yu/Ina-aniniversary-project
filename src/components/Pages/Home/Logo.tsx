import React from "react";
import { LogoContainer, TitleHeader, LogoImg, LogoHeader, CenterContainer, ScrollIndicator } from "./styles/logoStyles";

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
