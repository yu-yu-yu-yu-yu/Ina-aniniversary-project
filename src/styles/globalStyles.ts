import styled, { createGlobalStyle } from "styled-components";
import { breakpoints, buttonShadow, zIndex } from "./tokens";

export const TextBoxContainer = styled.div`
  flex: 0 0 auto;
  min-width: 320px;
  max-width: 600px;
  z-index: 5;
  position: relative;

  @media only screen and (max-width: ${breakpoints.tablet}px) {
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
    @media (max-width: ${breakpoints.tablet}px) {
      max-width: 550px;
      width: 90%;
      font-size: 17px;
    }
    @media (max-width: ${breakpoints.mobile}px) {
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
  @media only screen and (max-width: ${breakpoints.mobile}px) {
    position: absolute;
    left: 0;
    right: 0;
    text-align: center;
    pointer-events: none;
  }
`;

export const CompactNavTitle = styled(NavTitle)`
  font-size: clamp(22px, 3.2vw, 44px);
  line-height: 1.15;
`;

export const DimSharedButtons = createGlobalStyle`
  button[title="Mute BGM"],
  button[title="Unmute BGM"],
  button[title^="Switch theme"] {
    opacity: 0.45;
    transition: opacity 0.2s;
  }
  button[title="Mute BGM"]:hover,
  button[title="Unmute BGM"]:hover,
  button[title^="Switch theme"]:hover {
    opacity: 1;
  }
`;

export const EdgeArrow = styled.button<{ $side: "left" | "right" }>`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  height: clamp(120px, 26vh, 240px);
  ${({ $side }) => ($side === "left" ? "left: 0;" : "right: 0;")}
  width: clamp(48px, 7vw, 120px);
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    ${({ $side }) => ($side === "left" ? "90deg" : "270deg")},
    rgba(0, 0, 0, 0.28),
    transparent
  );
  color: var(--light-highlight);
  font-size: clamp(1.2em, 2.4vw, 2em);
  border: none;
  cursor: pointer;
  opacity: 0.25;
  transition: opacity 0.2s;
  &:hover:not(:disabled),
  &:focus-visible {
    opacity: 1;
  }
  &:focus-visible {
    outline: 2px solid var(--light-highlight);
    outline-offset: -4px;
  }
  &:disabled {
    opacity: 0.08;
    cursor: not-allowed;
  }
`;

export const ExhibitCounter = styled.span`
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: ${zIndex.modal};
  background: var(--dark-highlight);
  color: var(--text-color);
  border: 2px solid var(--light-highlight);
  border-radius: 24px;
  height: 48px;
  min-width: 48px;
  box-sizing: border-box;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  opacity: 0.9;
  transition: opacity 0.2s;
  &:hover {
    opacity: 1;
  }
  box-shadow: ${buttonShadow};
`;

export const ArtworkButton = styled.button`
  background: rgba(0, 0, 0, 0.52);
  color: var(--light-highlight);
  border: 1px solid var(--light-highlight);
  border-radius: 50%;
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 10px;
  opacity: 0.72;
  transition:
    opacity 0.18s,
    background 0.18s;
  flex-shrink: 0;
  &:hover {
    opacity: 1;
    background: rgba(0, 0, 0, 0.78);
  }
`;

export const PageContainer = styled.div`
  flex-direction: column;
  display: flex;
  flex: 1;
  min-height: 100vh;
  background: var(--background);
  color: var(--dark-highlight);
`;

export const Card = styled.div`
  background: var(--light-background);
  border: 2px solid var(--dark-background);
  border-radius: 15px;
  overflow: hidden;
`;

export const CardHeader = styled.div`
  background: var(--dark-highlight);
  color: var(--text-color);
  font: 700 clamp(22px, 1.3vw, 28px) / 1.35 Montserrat;
  padding: 10px 12px;
  border-bottom: 2px solid var(--light-highlight);
  display: flex;
  align-items: center;
`;

export const CardText = styled.div`
  padding-top: 5px;
  overflow-wrap: break-word;
  color: var(--ink-black);
  text-align: left;
  font: normal normal 300 clamp(20px, 1.1vw, 25px) / 1.3 Mulish;
  letter-spacing: 0px;
  opacity: 1;
  white-space: pre-line;
`;

export const PageRoot = styled.div`
  min-height: 100vh;
  background: var(--background);
`;
