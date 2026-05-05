import styled from "styled-components";

const LoreContainer = styled.div`
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
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
  --video-edge-fade: 28px;

  width: 100%;
  height: auto;
  max-width: 800px;
  display: block;
  border-radius: 24px;
  filter: drop-shadow(0 0 18px rgba(0, 0, 0, 0.2));
  -webkit-mask-image:
    linear-gradient(
      to right,
      transparent,
      #000 var(--video-edge-fade),
      #000 calc(100% - var(--video-edge-fade)),
      transparent
    ),
    linear-gradient(
      to bottom,
      transparent,
      #000 var(--video-edge-fade),
      #000 calc(100% - var(--video-edge-fade)),
      transparent
    );
  -webkit-mask-composite: source-in;
  mask-image:
    linear-gradient(
      to right,
      transparent,
      #000 var(--video-edge-fade),
      #000 calc(100% - var(--video-edge-fade)),
      transparent
    ),
    linear-gradient(
      to bottom,
      transparent,
      #000 var(--video-edge-fade),
      #000 calc(100% - var(--video-edge-fade)),
      transparent
    );
  mask-composite: intersect;

  @media only screen and (max-width: 1100px) {
    max-width: 100%;
    --video-edge-fade: 18px;
  }
`;

const VideoShuffleButton = styled.button`
  position: absolute;
  top: 18px;
  right: 18px;
  z-index: 5;
  width: 44px;
  height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.28);
  color: var(--text-color);
  cursor: pointer;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.22);
  backdrop-filter: blur(6px);
  transition: background 0.18s ease, transform 0.18s ease, box-shadow 0.18s ease;

  i {
    font-size: 20px;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.42);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.28);
    transform: rotate(35deg) scale(1.06);
  }

  &:focus-visible {
    outline: 3px solid var(--light-highlight);
    outline-offset: 3px;
  }

  @media only screen and (max-width: 480px) {
    top: 12px;
    right: 12px;
    width: 38px;
    height: 38px;

    i {
      font-size: 17px;
    }
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

export {
  LoreContainer,
  FlexRow,
  InaVideoContainer,
  InaVideo,
  VideoShuffleButton,
  AnimationCreditsContainer,
  AnimationCredits,
};
