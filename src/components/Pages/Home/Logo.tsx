import React, { useMemo } from "react";
import styled, { keyframes } from "styled-components";
import {
  LogoContainer,
  TitleHeader,
  LogoImg,
  LogoHeader,
  CenterContainer,
  ScrollIndicator,
} from "./styles/logoStyles";
import { useTheme } from "../../Common/ThemeProvider";
import { ThemeName } from "../../../types";

const themeBalloonFile: Record<ThemeName, string> = {
  Standard: "",
  Violet: "violet",
  Meconopsis: "meconopsis",
  Temari: "temari",
  TakoTakover: "tako8takover",
};

const ALL_SHAPED = [
  "0",
  "1",
  "cookies",
  "uhh-i-think-she-needs-help",
];

const bob = keyframes`
  0%, 100% { transform: translateY(0) rotate(-3deg); }
  50%       { transform: translateY(-14px) rotate(3deg); }
`;

const LogoImageRow = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const BalloonAnchor = styled.img<{
  $side: "left" | "right";
  $top: string;
  $gap: string;
  $delay: number;
}>`
  position: absolute;
  height: 18vmax;
  width: auto;
  top: ${({ $top }) => $top};
  ${({ $side, $gap }) =>
    $side === "left"
      ? `right: calc(100% + ${$gap});`
      : `left: calc(100% + ${$gap});`}
  animation: ${bob} ${({ $delay }) => 2.6 + $delay * 0.35}s ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay * 0.45}s;
  pointer-events: none;

  @media only screen and (max-width: 700px) {
    display: none;
  }
`;

const Logo = (): JSX.Element => {
  const { theme } = useTheme();

  const { mvFiles, shapedFiles, pos } = useMemo(() => {
    const mv =
      theme === "Standard"
        ? ["meconopsis", "violet", "temari", "tako8takover"]
        : Array(4).fill(themeBalloonFile[theme]);

    const shuffled = [...ALL_SHAPED].sort(() => Math.random() - 0.5);

    const jitter = (range: number) => `${(Math.random() - 0.5) * range}%`;
    const randPx = (min: number, max: number) =>
      `${Math.floor(Math.random() * (max - min) + min)}px`;
    const randTop = (min: number, max: number) =>
      `${Math.floor(Math.random() * (max - min) + min)}%`;

    return {
      mvFiles: mv,
      shapedFiles: shuffled,
      pos: {
        
        mvLT: jitter(20), mvLB: jitter(20), mvRT: jitter(20), mvRB: jitter(20),
        mvGapLT: randPx(8, 28), mvGapLB: randPx(8, 28),
        mvGapRT: randPx(8, 28), mvGapRB: randPx(8, 28),

        shTopLT: randTop(-20, 0),  shTopLB: randTop(55, 78),
        shTopRT: randTop(-20, 0),  shTopRB: randTop(55, 78),
        shGapLT: randPx(130, 210), shGapLB: randPx(120, 200),
        shGapRT: randPx(130, 210), shGapRB: randPx(120, 200),
      },
    };
  }, [theme]);

  const mvSrc = (name: string) =>
    `${process.env.PUBLIC_URL}/balloons/mv/balloon-mv-${name}.png`;
  const tkSrc = (name: string) =>
    `${process.env.PUBLIC_URL}/balloons/takos/balloon-takos-${name}.png`;

  return (
    <LogoContainer>
      <CenterContainer>
        <TitleHeader>Tentacult Temple Fan Site</TitleHeader>
        <LogoImageRow>
          <BalloonAnchor $side="left"  $top={`calc(0%  + ${pos.mvLT})`} $gap={pos.mvGapLT} $delay={0} src={mvSrc(mvFiles[0])} alt="" />
          <BalloonAnchor $side="left"  $top={`calc(45% + ${pos.mvLB})`} $gap={pos.mvGapLB} $delay={1} src={mvSrc(mvFiles[1])} alt="" />
          <BalloonAnchor $side="right" $top={`calc(5%  + ${pos.mvRT})`} $gap={pos.mvGapRT} $delay={2} src={mvSrc(mvFiles[2])} alt="" />
          <BalloonAnchor $side="right" $top={`calc(40% + ${pos.mvRB})`} $gap={pos.mvGapRB} $delay={3} src={mvSrc(mvFiles[3])} alt="" />

          <LogoImg alt="ina-logo" src={`${process.env.PUBLIC_URL}/InaLogo.png`} />

          <BalloonAnchor $side="left"  $top={pos.shTopLT} $gap={pos.shGapLT} $delay={4} src={tkSrc(shapedFiles[0])} alt="" />
          <BalloonAnchor $side="left"  $top={pos.shTopLB} $gap={pos.shGapLB} $delay={5} src={tkSrc(shapedFiles[1])} alt="" />
          <BalloonAnchor $side="right" $top={pos.shTopRT} $gap={pos.shGapRT} $delay={6} src={tkSrc(shapedFiles[2])} alt="" />
          <BalloonAnchor $side="right" $top={pos.shTopRB} $gap={pos.shGapRB} $delay={7} src={tkSrc(shapedFiles[3])} alt="" />
        </LogoImageRow>
        <LogoHeader>INA&apos;S 6TH BIRTHDAY CELEBRATION</LogoHeader>
      </CenterContainer>
      <ScrollIndicator>
        <h3>
          <i className="fa fa-chevron-down"></i> Scroll down for more{" "}
          <i className="fa fa-chevron-down"></i>
        </h3>
      </ScrollIndicator>
    </LogoContainer>
  );
};

export default Logo;
