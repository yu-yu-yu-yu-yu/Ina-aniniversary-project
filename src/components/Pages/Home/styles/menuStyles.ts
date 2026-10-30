import styled, { keyframes, css } from "styled-components";
import { Link } from "react-router-dom";
import { breakpoints } from "../../../../styles/tokens";

export const NewTag = styled.div`
  position: absolute;
  top: 4px;
  left: 4px;
  background: var(--dark-highlight);
  color: var(--text-color);
  font-size: 18px;
  font-weight: bold;
  padding: 3px 12px;
  border-radius: 12px;
  z-index: 2;
  pointer-events: none;
  @media only screen and (max-width: ${breakpoints.mobile}px) {
    font-size: 12px;
    padding: 2px 7px;
  }
`;

export const shake = keyframes`
  0% { transform: rotate(0deg);}
  20% { transform: rotate(-8deg);}
  40% { transform: rotate(8deg);}
  60% { transform: rotate(-4deg);}
  80% { transform: rotate(4deg);}
  100% { transform: rotate(0deg);}
`;

export const MenuContainer = styled.div`
  text-align: center;
  padding-top: 50px;
  padding-bottom: 10rem;
  background: var(--background) url(${process.env.PUBLIC_URL}/Pattern2.png) 0 0;
  background-attachment: fixed;
  background-size: 180px;
  z-index: 1;
  @media only screen and (max-width: ${breakpoints.mobile}px) {
    padding-top: 0;
    padding-bottom: 50px;
  }
`;

export const MenuFlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 48px;
  width: 100%;
  margin: 0 auto;
  max-width: 1200px;
  @media only screen and (max-width: ${breakpoints.tablet}px) {
    flex-direction: column;
    align-items: center;
    gap: 24px;
    max-width: 100%;
  }
`;

export const ButtonsColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;
  flex: 1 1 0;
  min-width: 10vw;
  max-width: 700px;
  margin-top: 50px;
  @media only screen and (max-width: ${breakpoints.tablet}px) {
    max-width: 100%;
    margin-top: 25px;
    gap: 24px;
  }
  @media only screen and (max-width: ${breakpoints.mobile}px) {
    margin-top: 15px;
    gap: 16px;
  }
`;

export const ButtonsDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(160px, 1fr));
  gap: 28px 32px;
  justify-content: center;
  align-items: start;
  width: 100%;
  @media only screen and (max-width: ${breakpoints.tablet}px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px 24px;
  }
  @media only screen and (max-width: ${breakpoints.mobile}px) {
    grid-template-columns: repeat(2, 150px);
    gap: 12px 16px;
    width: fit-content;
    max-width: 100%;
    margin: 0 auto;
    justify-items: center;
  }
`;

export const Shelf = styled.div`
  position: relative;
  width: min(100%, 520px);
  padding: 14px 18px 0;
  box-sizing: border-box;
  border: 8px solid #6e4a2e;
  border-bottom: none;
  border-radius: 10px 10px 0 0;
  background: linear-gradient(180deg, #3a2515 0%, #4d3220 100%);
  box-shadow:
    inset 0 8px 18px rgba(0, 0, 0, 0.45),
    0 6px 14px var(--shadow);
`;

export const ShelfBooks = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 6px;
  height: 190px;
  @media only screen and (max-width: ${breakpoints.mobile}px) {
    height: 160px;
  }
`;

export const ShelfPlank = styled.div`
  height: 20px;
  margin: 0 -18px;
  border-radius: 0 0 4px 4px;
  background: linear-gradient(180deg, #b07a4c 0%, #7d5233 100%);
  box-shadow: 0 4px 0 #4d3220;
`;

export const DecoBook = styled.div<{ $h: number; $w: number; $tilt?: number }>`
  position: relative;
  flex: none;
  width: ${({ $w }) => $w}px;
  height: ${({ $h }) => $h}px;
  border-radius: 3px 3px 1px 1px;
  background: var(--dark-background);
  box-shadow: inset -4px 0 0 rgba(0, 0, 0, 0.25);
  transform: rotate(${({ $tilt }) => $tilt ?? 0}deg);
  transform-origin: bottom center;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    height: 5px;
    background: var(--light-highlight);
    opacity: 0.85;
  }
  &::before {
    top: 14%;
  }
  &::after {
    bottom: 14%;
  }
`;

export const ShelfSpineLink = styled(Link)`
  position: relative;
  flex: none;
  display: block;
  height: 100%;
  cursor: pointer;
  transition: transform 0.25s ease;
  filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.5));

  &:hover,
  &:focus-visible {
    transform: translateY(-12px) rotate(-2deg);
  }
`;

export const ShelfSpineImg = styled.img`
  display: block;
  height: 100%;
  width: auto;
  border-radius: 2px;
`;

export const ButtonContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 160px;
  height: 160px;
  margin: 0;
  padding-top: 50px;
  z-index: 1;
  overflow: visible;
  @media only screen and (max-width: ${breakpoints.tablet}px) {
    width: 160px;
    height: 160px;
    padding-top: 25px;
  }
  @media only screen and (max-width: ${breakpoints.mobile}px) {
    width: 150px;
    height: 150px;
    padding-top: 15px;
  }
`;

export interface TakoPeekProps {
  $active: boolean;
}

export const TakoPeek = styled.img<TakoPeekProps>`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 80px;
  pointer-events: none;
  z-index: 0;
  transition: ${(props) =>
    props.$active ? "transform 0.4s cubic-bezier(.4,2,.6,1)" : "none"};
  transform: translate(-50%, -50%)
    translateY(${(props) => (props.$active ? "-5.1vw" : "4vw")})
    scale(${(props) => (props.$active ? 1.1 : 0.5)});
  @media only screen and (max-width: ${breakpoints.mobile}px) {
    width: 60px;
    transform: translate(-50%, -50%)
      translateY(${(props) => (props.$active ? "-15vw" : "4vw")})
      scale(${(props) => (props.$active ? 1.1 : 0.5)});
  }
`;

export const CookieButton = styled.button<{ $shaking?: boolean }>`
  width: 200px;
  height: 200px;
  border: none;
  background: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
  margin: 0;
  position: relative;
  ${({ $shaking }) =>
    $shaking &&
    css`
      animation: ${shake} 0.4s linear;
    `}
  @media only screen and (max-width: ${breakpoints.tablet}px) {
    max-width: 180px;
    max-height: 180px;
  }
  @media only screen and (max-width: ${breakpoints.mobile}px) {
    width: 150px;
    height: 150px;
  }
`;

export const CookieImg = styled.img`
  display: block;
  margin: 0 auto;
  width: 148px;
  height: 148px;
  transition: transform 0.2s;
  @media only screen and (max-width: ${breakpoints.tablet}px) {
    width: min(46vw, 166px);
    height: min(46vw, 166px);
  }
  @media only screen and (max-width: ${breakpoints.mobile}px) {
    width: 138px;
    height: 138px;
  }
`;

export const CookieLabel = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: clamp(14px, 4vw, 20px);
  font-weight: 1000;
  color: #38250aff;
  text-shadow:
    0 0 0.08em #fff,
    0.08em 0 0 #fff,
    -0.08em 0 0 #fff,
    0 0.08em 0 #fff,
    0 -0.08em 0 #fff,
    0.08em 0.08em 0 #fff,
    -0.08em -0.08em 0 #fff,
    0.08em -0.08em 0 #fff,
    -0.08em 0.08em 0 #fff;
  width: 90%;
  min-width: 0;
  text-align: center;
  z-index: 1;
  pointer-events: none;
  white-space: pre-line;
  line-height: 1.15;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: ${breakpoints.tablet}px) {
    font-size: clamp(13px, 3vw, 18px);
    max-width: 90%;
  }
  @media only screen and (max-width: ${breakpoints.mobile}px) {
    font-size: clamp(12px, 4vw, 16px);
    max-width: 90%;
  }
`;

export const CookieLink = styled(Link)`
  all: unset;
  cursor: pointer;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CookieA = styled.a`
  all: unset;
  cursor: pointer;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
