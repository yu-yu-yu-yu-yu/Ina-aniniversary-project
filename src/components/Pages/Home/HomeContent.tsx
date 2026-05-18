import React from "react";
import styled from "styled-components";
import HomeFooter from "./HomeFooter";
import Logo from "./Logo";
import Lore from "./Lore";
import Quote from "./Quote";
import Menu from "./Menu";
import Divider from "../../Common/Divider";
import { useMute } from "../../Common/MuteButton";
import { useAudio } from "../../../hooks/useAudio";
import FloatingTakos from "./FloatingTakos";
import FloatingBalloons from "./FloatingBalloons";

const Home = styled.div`
  position: relative;
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
  min-height: 100vh;
  background: var(--background);
`;

const HomeContent = (): JSX.Element => {
  const { muted } = useMute();
  const audioRef = useAudio({ muted, autoPlay: true });

  return (
    <>
      <audio
        ref={audioRef}
        src={process.env.PUBLIC_URL + "/明日も晴れるといいね.mp3"}
        loop
        preload="auto"
        style={{ display: "none" }}
      />
      <Home>
        <FloatingBalloons />
        <FloatingTakos />
        <Logo />
        <Quote />
        <Divider mirror topGap="48px" />
        <Lore />
        <Divider  topGap="48px"/>
        <Menu />
        <HomeFooter />
      </Home>
    </>
  );
};

export default HomeContent;
