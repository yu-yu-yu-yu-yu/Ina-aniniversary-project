import styled from "styled-components";

const LoreContainer = styled.div`
  text-align: center;
  padding-top: 90px;
  padding-bottom: 50px;
  background: var(--background)
  url(${process.env.PUBLIC_URL}/Pattern2.png) 0 0;
  background-attachment: fixed;
  background-size: 180px;
  z-index: 3;
  @media (max-width: 701px) {
    padding-top: 40px;
  }
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0;
  width: 100%;
  margin: 0 auto;
  max-width: 1200px;
  position: relative;

  @media only screen and (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
    gap: 24px;
    max-width: 100%;
  }
`;

const InaVideoContainer = styled.div`
  flex: 1;
  min-width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
  position: relative;
  z-index: 2;
  margin-left: -120px;

  @media only screen and (max-width: 1100px) {
    width: 100%;
    min-width: 0;
    margin-left: 0;
    z-index: 3;
  }
`;

const InaVideo = styled.video`
  width: 100%;
  height: auto;
  max-width: 800px;
  display: block;

  @media only screen and (max-width: 1100px) {
    max-width: 100%;
  }
`;

const AnimationCreditsContainer = styled.div`
  position: absolute;
  bottom: 12px;
  right: 12px;
  z-index: 4;
  pointer-events: none;
  text-align: right;
  padding: 6px 10px;
  border-radius: 6px;
  background: rgba(0,0,0,0.15); 

  @media only screen and (max-width: 480px) {
    bottom: 8px;
    right: 8px;
    padding: 4px 8px;
  }
`;

const AnimationCredits = styled.p`
  color: var(--text-color);
  font-size: 18px;
  text-shadow: 0 10px 14px var(--shadow);
  align-self: center;
  margin: 0;

  @media only screen and (max-width: 1100px) {
    font-size: 13px;
  }
`;

export { LoreContainer, FlexRow, InaVideoContainer, InaVideo, AnimationCreditsContainer, AnimationCredits };