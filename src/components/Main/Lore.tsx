import React from "react";
import styled from "styled-components";

const LoreContainer = styled.div`
  text-align: center;
  padding-top: 90px;
  background: var(--background) url(${process.env.PUBLIC_URL}/Pattern2.png) 0 0;
  background-attachment: fixed;
  background-size: 170px;
  z-index: 3;
  @media (max-width: 701px) {
    padding-top: auto;
  }
`;

const LoreTextContainer = styled.div`
  position: absolute;
  margin-left: 5%;
  z-index: 3;
  @media (max-width: 1400px) {
    left: 9em;
  }
  @media (max-width: 1100px) {
    position: relative;
    width: 100%;
    text-align: center;
    left: auto;
  }
  .lore-text {
    padding: 10px 35px;
    margin-top: 20px;
    max-width: 650px;
    background: var(--ika-purple);
    border-radius: 32px;
    opacity: 1;
    color: var(--text-color);
    text-align: left;
    font-family: "Mulish", sans-serif;
    font-size: 25px;
    font-weight: 300;
    b {
      font-weight: 800;
    }
    hr {
      border-bottom: 0.5px solid var(--text-color);
    }
    @media (max-width: 701px) {
      padding: 25px;
    }
    @media (max-width: 1400px) {
      max-width: 400px;
      font-size: 20px;
    }
    @media (max-width: 1100px) {
      display: inline-block;
      max-width: 550px;
      width: 70%;
      font-size: 17px;
    }
  }
`;

const InaVideoContainer = styled.div`
  display: inline-block;
  overflow: hidden;
  position: relative;
  @media (max-width: 1100px) {
    display: block;
    width: 100vw;
    left: 0;
    right: 0;
    margin-top: 0;
    z-index: 0;
  }
`;

const InaVideo = styled.video`
  width: 100%;
  height: 100%;
  margin-left: 35%;
  @media (min-width: 1440px) and (max-width: 1650px) {
    margin-top: 20vh;
  }
  @media (min-width: 1100px) and (max-width: 1439px) {
    margin-top: 28vh;
  }
  @media (max-width: 1100px) {
    margin-left: 0;
    width: 100vw;
    max-width: 100vw;
    margin-top: 80px;
    display: block;
  }
  @media (max-width: 850px) {
    margin-top: 100px;
  }
  @media (max-width: 600px) {
    margin-top: 120px;
  }
  @media (max-width: 350px) {
    margin-top: 140px;
  }
`;

const AnimationCreditsContainer = styled.div`
  position: absolute;
  bottom: 70px;
  right: 20%;
`;

const AnimationCredits = styled.p`
  color: white;
  font-size: 20px;
  text-shadow: 0 5px 6px #00000029;
  align-self: center;
`;

const Lore = (): JSX.Element => (
  <LoreContainer>
    <LoreTextContainer>
      <div className="lore-text">
        <p>
          One day, <b>Ina&apos;nis</b> picked up a <b>strange book</b> and then
          started to gain the power of <b>controlling tentacles</b>. To her,
          <b>tentacles</b> are just a part in her ordinary life; it has never
          been a big deal for her. However, her girly mind does want to get them
          <b>dressed up and stay pretty</b>.
        </p>
        <p>
          After gaining power, she started hearing{" "}
          <b>Ancient Whispers and Revelations</b>. Hence, she began her{" "}
          <b>VTuber activities</b> to deliver <b>random sanity checks</b> on
          humanity, as an <b>ordinary girl</b>.
        </p>
        <hr />
        <p>
          And thus five years have passed, <b>humanity&apos;s sanity</b>
          fluttering back into harmony at a{" "}
          <b>cadence of world-domination proportions</b>, slowly but surely. The{" "}
          <b>violet echoes</b> of her earliest melody like a quiet bloom in the
          void have softened fear into comfort; <b>sapphire petals</b> drift
          through the darkness, reminders of fragile beauty and fleeting memory;
          and a <b>whispered hand-ball of colorful hope</b> spins itself into the
          fabric of the everyday.
        </p>
        <p>
          No longer just an ordinary girl, but an icon, a hero, an idol.
          <b>Miraculously preserved</b>, and with many <b>newfound friends</b> by
          her side, countless <b>adventures lived</b> and <b>cookies eaten</b>,
          hearts moved within <b>glow-stick seas of live concerts</b>, <b>Ina</b>
          continues her journey always going next, always improving, guiding and
          inspiring <b>Takodachis</b> across the world with her many{" "}
          <b>talents</b> and <b>perseverance</b>, her <b>art</b>, <b>voice</b>,
          <b>dance</b>, and <b>unbelievable cuteness and gently adorable
          personality</b>.
        </p>
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
      <AnimationCreditsContainer>
        <AnimationCredits>
          Illustration: @ninomaeinanis
          <br /> Spine 2D Animation: @Shikabashi
        </AnimationCredits>
      </AnimationCreditsContainer>
    </InaVideoContainer>
  </LoreContainer>
);

export default Lore;
