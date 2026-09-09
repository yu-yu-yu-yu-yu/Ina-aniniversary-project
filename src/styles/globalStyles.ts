import styled from "styled-components";

export const TextBoxContainer = styled.div`
  flex: 0 0 auto;
  min-width: 320px;
  max-width: 600px;
  z-index: 5;
  position: relative;

  @media only screen and (max-width: 1100px) {
    width: 100%;
    max-width: 100%;
    min-width: 0;
    z-index: 3;
  }

  .lore-text,
  .Menu-text {
    padding: 10px 35px;
    margin: 0 auto;
    max-width: 650px;
    background: var(--dark-highlight);
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
    @media (max-width: 1400px) {
      max-width: 500px;
      font-size: 20px;
    }
    @media (max-width: 1100px) {
      max-width: 550px;
      width: 90%;
      font-size: 17px;
    }
    @media (max-width: 701px) {
      padding: 25px;
      width: 90%;
      font-size: 16px;
    }
  }
`;

export const SubmissionContainer = styled.div`
  margin: 10px;
  width: 560px;
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
  border: 3px solid var(--light-background);
  background: #ffffff7bfff 0% 0% no-repeat padding-box;
  border-radius: 15px;
  opacity: 1;

  hr {
    height: 1px;
    color: var(--light-background);
    background-color: var(--light-background);
    border: none;
  }
`;

export const BubbleMessage = styled.div`
  padding-top: 5px;
  overflow-wrap: break-word;
  color: var(--dark-highlight);
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
  border: 2px solid var(--light-background);
  border-radius: 23px;
  opacity: 1;
  max-width: 500px;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const BubbleHeader = styled.div`
  color: var(--dark-highlight);
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
  color: var(--dark-highlight);
`;

export const IFrame = styled.iframe`
  border: 2px solid var(--light-background);
  border-radius: 23px;
  opacity: 1;
`;

export const SiteBoard = styled.div`
  width: 100%;
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 2%;
  box-sizing: border-box;
  background: var(--background);
`;

export const CarouselCenterMark = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 2px;
  transform: translateX(-50%);
  background: var(--light-highlight);
  box-shadow: 0 0 12px var(--light-highlight);
  opacity: 0.7;
  pointer-events: none;
  z-index: 40;
`;

export const FiltersContainer = styled.div`
  margin: auto auto 35px;
`;

export const Loader = styled.div`
  display: flex !important;
  justify-content: center;
  align-items: center;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SearchBar = styled.input`
  display: block;
  width: 100%;
  background-color: transparent;
  border: 0;
  border-bottom: 2px solid;
  margin-bottom: 20px;
  outline: none;

  color: var(--dark-highlight);
  text-align: left;
  font: normal normal normal 30px/37px Montserrat;
  letter-spacing: 0;
  opacity: 1;
`;

export const NavTitle = styled.h2`
  margin: 0;
  color: var(--dark-highlight);
  text-shadow:
    0 0 0.03em #ffffff7b,
    0.03em 0 0 #ffffff7b,
    -0.03em 0 0 #ffffff7b,
    0 0.03em 0 #ffffff7b,
    0 -0.03em 0 #ffffff7b,
    0.03em 0.03em 0 #ffffff7b,
    -0.03em -0.03em 0 #ffffff7b,
    0.03em -0.03em 0 #ffffff7b,
    -0.03em 0.03em 0 #ffffff7b;
  text-align: center;
  text-border: 2px solid var(--light-highlight);
  font: normal normal bold clamp(48px, 3vw, 64px) / 1.15 Montserrat;
  flex: 1;
  @media only screen and (max-width: 1000px) {
    font: normal normal bold 32px/40px Montserrat;
    letter-spacing: 1.25px;
  }
  @media only screen and (max-width: 768px) {
    font: normal normal bold 24px/30px Montserrat;
    letter-spacing: 1px;
  }
  @media only screen and (max-width: 700px) {
    position: absolute;
    left: 0;
    right: 0;
    text-align: center;
    pointer-events: none;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2.5em;
  text-align: center;
  color: var(--dark-highlight);
  margin: 0 0 18px 0;
  font-weight: 700;
  letter-spacing: 1.5px;
`;

export const Button = styled.a`
  background: var(--light-highlight);
  color: var(--dark-highlight);
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
