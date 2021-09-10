import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LoreContainer = styled.div`
  text-align: center;
  margin-bottom: -10px;
  background: var(--unnamed-color-f3edff)
    url(${process.env.PUBLIC_URL}/Pattern2.png) 0 0;
  background-size: 100px;

  @media only screen and (max-width: 701px) {
    padding-top: auto;
  }
`;

const LoreTextContainer = styled.div`
  z-index: 1;
  position: absolute;
  left: 190px;

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
    background: #564f68 0% 0% no-repeat padding-box;
    border-radius: 32px;
    opacity: 1;

    color: var(--unnamed-color-f3edff);
    text-align: left;
    font: normal normal 300 28px/37px Mulish;
    letter-spacing: 0;

    @media only screen and (max-width: 701px) {
      padding: 25px;
    }

    @media only screen and (max-width: 1400px) {
      max-width: 400px;
      font: normal normal 300 20px/30px Mulish;
    }

    @media only screen and (max-width: 1100px) {
      display: inline-block;
      max-width: 550px;
      width: 70%;
      color: var(--unnamed-color-f3edff);
      text-align: left;
      font: normal normal 300 15px/19px Mulish;
      letter-spacing: 0px;
      z-index: 1;
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
    background: #a198b3 0% 0% no-repeat padding-box;
    border: 0px;
    border-radius: 32px;
    opacity: 1;
    text-align: left;
    font: normal normal bold 35px/51px Roboto;
    letter-spacing: 2.5px;
    color: #ffffff;
    opacity: 1;

    padding: 20px 40px;
    margin: 10px;

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
  z-index: 1;
  position: absolute;
  left: 100%;
  top: 40%;
  width: 0;
  height: 0;
  border-top: 40px solid transparent;
  border-bottom: 40px solid transparent;
  border-left: 40px solid var(--ika-purple);

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

const Lore = (): JSX.Element => {
  return (
    <LoreContainer>
      <LoreTextContainer>
        <LoreTextPolygon />
        <div className="lore-text">
          <p>
            One day, Ina&apos;nis picked up a strange book and then started to
            gain the power of controlling tentacles. To her, tentacles are just
            a part in her ordinary life; it has never been a big deal for her.
            However, her girly mind does want to get them dressed up and stay
            pretty.
          </p>
          <p>
            After gaining power, she started hearing Ancient Whispers and
            Revelations. Hence, she began her VTuber activities to deliver
            random sanity checks on humanity, as an ordinary girl.
          </p>
          <hr />
          <p>
            {`This site was developed by the Tentacult to celebrate Ina's first
            debut anniversary. We've collected congratulatory messages from
            Takodachi across the world! We also made a little timeline of all
            the great things Ina has done in the past year.`}
          </p>
        </div>
        <div className="buttons-div">
          <Link to="/messages" role="button" className="bio-button">
            Messages
          </Link>
          <Link to="/timeline" role="button" className="bio-button">
            Timeline
          </Link>
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
      </InaVideoContainer>
    </LoreContainer>
  );
};

export default Lore;
