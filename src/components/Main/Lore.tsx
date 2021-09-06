import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const LoreContainer = styled.div`
  text-align: center;
  margin-bottom: -10px;
`;

const LoreTextContainer = styled.div`
  z-index: 1;
  position: absolute;
  left: 190px;

  .lore-text {
    padding: 2px 25px;
    margin-top: 60px;
    width: 600px;
    background: #564f68 0% 0% no-repeat padding-box;
    border-radius: 32px;
    opacity: 1;

    color: var(--unnamed-color-f3edff);
    text-align: left;
    font: normal normal 300 28px/37px Mulish;
    letter-spacing: 0px;
    color: #f3edff;
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
`;

const InaVideo = styled.video`
  width: 100%;
  height: 100%;
  margin-left: 35%;
`;

const InaVideoContainer = styled.div`
  display: inline-block;
  overflow: hidden;
`;

const Lore = (): JSX.Element => {

    return (
        <LoreContainer>
            <LoreTextContainer>
                <LoreTextPolygon />
                <div className="lore-text">
                    <p>
                        One day, Ina&apos;nis picked up a strange book and then started to
                        gain the power of controlling tentacles. To her, tentacles are
                        just a part in her ordinary life; it has never been a big deal for
                        her. However, her girly mind does want to get them dressed up and
                        stay pretty.
                    </p>
                    <p>
                        After gaining power, she started hearing Ancient Whispers and
                        Revelations. Hence, she began her VTuber activities to deliver
                        random sanity checks on humanity, as an ordinary girl.
                    </p>
                </div>
                <div style={{ marginTop: "50px" }}>
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