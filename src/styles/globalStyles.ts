import styled from "styled-components";

export const SubmissionContainer = styled.div`
  margin: 10px;
  width: 450px;
  @media only screen and (max-width: 768px) {
    margin-left: 0px;
    width: 100%;
    padding-bottom: 5px;
  }
`;

export const TextBubbleContainer = styled.div`
  position: relative;
  font-family: sans-serif;
  font-size: 18px;
  line-height: 24px;
  padding: 15px;
  border: 3px solid var(--inai-purple);
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 15px;
  opacity: 1;

  hr {
    height: 1px;
    color: var(--inai-purple);
    background-color: var(--inai-purple);
    border: none;
  }
`;

export const BubbleMessage = styled.div`
  padding-top: 5px;
  overflow-wrap: break-word;
  color: var(--ika-purple);
  text-align: left;
  font: normal normal 300 20px/25px Mulish;
  letter-spacing: 0px;
  opacity: 1;
  white-space: pre-line;
`;

export const BubbleImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  border: 2px solid var(--inai-purple);
  border-radius: 23px;
  opacity: 1;
  max-width: 400px;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const BubbleHeader = styled.div`
  color: var(--ika-purple);
  text-align: center;
  font: normal normal 600 30px/40px Montserrat;

  @media only screen and (max-width: 768px) {
    font: normal normal 600 24px/30px Montserrat;
  }

  letter-spacing: 0px;
  opacity: 1;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const HeaderText = styled.div`
  overflow-wrap: break-word;
  color: var(--ika-purple);
`;

export const IFrame = styled.iframe`
  border: 2px solid var(--inai-purple);
  border-radius: 23px;
  opacity: 1;
`;

export const MessageBoard = styled.div`
  width: 90%;
  margin-right: auto;
  margin-left: auto;
  margin-top: 25px;
`;

export const FiltersContainer = styled.div`
  margin: auto auto 35px;
`;

export const Loader = styled.div`
  display: flex !important;
  justify-content: center;
  align-items: center;
`;

export const CenteredContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CenteredText = styled.p`
  text-align: center;
`;

export const AutoMargin = styled.div`
  margin: 0 auto;
`;

export const SearchBar = styled.input`
  display: block;
  width: 100%;
  background-color: transparent;
  border: 0;
  border-bottom: 2px solid;
  margin-bottom: 20px;
  outline: none;

  color: var(--ika-purple);
  text-align: left;
  font: normal normal normal 30px/37px Montserrat;
  letter-spacing: 0;
  opacity: 1;
`;

export const Title = styled.h2`
  margin: 0;
  color: var(--ika-purple);
  text-align: center;
  font: normal normal bold 48px/56px Montserrat;
  flex: 1;
  @media only screen and (max-width: 1000px) {
    font: normal normal bold 32px/40px Montserrat;
    letter-spacing: 1.25px;
  }
  @media only screen and (max-width: 768px) {
    font: normal normal bold 24px/30px Montserrat;
    letter-spacing: 1px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2.5em;
  text-align: center;
  color: var(--ika-purple);
  margin: 0 0 18px 0;
  font-weight: 700;
  letter-spacing: 1.5px;
`;

export const Button = styled.a`
  background: var(--ina-orange);
  color: var(--ika-purple);
  border-radius: 8px;
  padding: 8px 18px;
  font-weight: 500;
  font-size: 0.5em;
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

export const SecondaryButton = styled(Button)`
  background: transparent;
  border: 2px solid var(--ina-orange);
  color: var(--ina-orange);
`;

export const HiddenAudio = styled.audio`
  display: none;
`;

export const PointerAuto = styled.div`
  pointer-events: auto;
  cursor: pointer;
`;

export const NoPointer = styled.div`
  pointer-events: none;
`;

export const OverflowHidden = styled.div`
  overflow: hidden;
`;

export const OverflowAuto = styled.div`
  overflow: auto;
`;

export const MasonryGrid = styled.div`
  margin: 0 auto;
`;

export const LoadingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 315px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export const BackdropStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;
