import React from "react";
import styled from "styled-components";

const LoreContainer = styled.div`
  text-align: center;
  padding-top: 90px;
  margin-bottom: -90px;
  background: var(--background)
    url(${process.env.PUBLIC_URL}/Pattern2.png) 0 0;
  background-attachment: fixed;
  background-size: 170px;
  z-index: 3;
  @media only screen and (min-width: 1100px) and (max-width: 1650px) {
    // padding-bottom: 20vh;
  }

  @media only screen and (max-width: 701px) {
    padding-top: auto;
  }
`;

const LoreTextContainer = styled.div`
  position: absolute;
  left: 190px;
  z-index: 3;
  @media only screen and (max-width: 1400px) {
    left: 9em;
  }

  @media only screen and (max-width: 1100px) {
    position: relative;
    width: 100%;
    text-align: center;
    left: auto;
  }

  .lore-text {
    padding: 10px 35px;
    margin-top: 60px;
    max-width: 600px;
    background: var(--ika-purple) 0% 0% no-repeat padding-box;
    border-radius: 32px;
    opacity: 1;

    color: var(--text-color);
    text-align: left;
    font-family: "Mulish", sans-serif;
    font-size: 25px;
    font-weight: 300;
    letter-spacing: 0;

    b {
      font-weight: 800;
    }

    hr {
      border-bottom: 0.5px solid var(--text-color);
    }

    @media only screen and (max-width: 701px) {
      padding: 25px;
    }

    @media only screen and (max-width: 1400px) {
      max-width: 400px;
      font-family: "Mulish", sans-serif;
      font-size: 20px;
    }

    @media only screen and (max-width: 1100px) {
      display: inline-block;
      max-width: 550px;
      width: 70%;
      color: var(--text-color);
      text-align: left;
      font-family: "Mulish", sans-serif;
      font-size: 17px;
      letter-spacing: 0px;
    }
  }

  .buttons-div {
    margin-top: 50px;

    @media only screen and (max-width: 1100px) {
      display: inline-block;
      margin-right: 40%;
    }

    @media only screen and (max-width: 850px) {
      margin-right: 50%;
    }
  }

  .bio-button {
    background: var(--inai-purple) 0% 0% no-repeat padding-box;
    border: 0px;
    border-radius: 32px;
    opacity: 1;
    text-align: left;
    font: normal normal bold 35px/51px Roboto;
    letter-spacing: 2.5px;
    color: #ffffff;
    white-space: nowrap;
    padding: 20px 40px;
    margin: 10px;

    &.disabled {
      pointer-events: none;
      cursor: default;
      opacity: 0.6;
    }
    &.blur {
      opacity: 0.6;
    }

    @media only screen and (max-width: 1400px) {
      font: normal normal bold 22px/30px Roboto;
    }

    @media only screen and (max-width: 1100px) {
      text-align: center;
      font: normal normal bold 17px/20px Roboto;
      letter-spacing: 0.34px;
      width: 110px;
      padding: 10px 15px;
      display: block;
      z-index: 3;
    }
  }
`;

const LoreTextPolygon = styled.video`
  position: absolute;
  left: 100%;
  top: 40%;
  width: 0;
  height: 0;
  border-top: 40px solid transparent;
  border-bottom: 40px solid transparent;
  //border-left: 40px solid var(--ika-purple);

  @media only screen and (max-width: 1100px) {
    display: none;
  }
`;

const InaVideoContainer = styled.div`
  display: inline-block;
  overflow: hidden;
  position: relative;

  @media only screen and (max-width: 1100px) {
    position: relative;
    display: block;
    margin-top: -10em;
    z-index: 0;
  }
`;

const InaVideo = styled.video`
  width: 100%;
  height: 100%;
  margin-left: 35%;

  @media only screen and (min-width: 1440px) and (max-width: 1650px) {
    margin-top: 20vh;
  }

  @media only screen and (min-width: 1100px) and (max-width: 1439px) {
    margin-top: 28vh;
  }

  @media only screen and (max-width: 1100px) {
    margin-left: 13em;
    width: 1000px;
  }

  @media only screen and (max-width: 850px) {
    margin-left: 10em;
    width: 800px;
  }

  @media only screen and (max-width: 600px) {
    margin-left: 0%;
  }

  @media only screen and (max-width: 350px) {
    margin-left: -20%;
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



const Lore = (): JSX.Element => {

  return (
    <LoreContainer>
      <LoreTextContainer>
        <LoreTextPolygon />
        <div className="lore-text">
          <p>
            One day, <b>Ina&apos;nis</b> picked up a <b>strange book</b> and
            then started to gain the power of <b>controlling tentacles</b>. To
            her, <b>tentacles</b> are just a part in her ordinary life; it has
            never been a big deal for her. However, her girly mind does want to
            get them <b>dressed up and stay pretty</b>.
          </p>
          <p>
            After gaining power, she started hearing{" "}
            <b>Ancient Whispers and Revelations</b>. Hence, she began her{" "}
            <b>VTuber activities </b> to deliver <b>random sanity checks</b> on
            humanity, as an <b>ordinary girl</b>.
          </p>
          <hr />
          <p>
            Then five years have passed, <b>humanity&apos;s sanity</b> fluttering back into harmony at a 
            <b>cadence of world-domination proportions</b>, slowly but surely. 
            The <b>violet echoes</b> of her earliest melody like a quiet bloom in the void have softened fear into comfort; <b>sapphire petals</b> drift through the darkness, reminders of fragile beauty and fleeting memory; and a <b>whispered hand-ball of colorful hope</b> spins itself into the fabric of the everyday.
          </p>
          <p>
            <b>Miraculously preserved</b>, many <b>newfound friends</b> by her side, countless <b>adventures lived</b> and <b>cookies eaten</b>, hearts moved within <b>glow-stick seas of live concerts</b>, <b>Ina</b> continues her journey always going next, always improving, guiding and inspiring <b>Takodachis</b> across the world with her many <b>talents</b> and <b>perseverance</b> <b>voice</b>, her <b>art</b>, her <b>dance</b>, and her <b>cuteness and gently adorable personality</b>.
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
};

export default Lore;
