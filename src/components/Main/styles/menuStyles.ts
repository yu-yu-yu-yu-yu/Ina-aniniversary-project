import styled, { keyframes, css } from "styled-components";
import { Link } from "react-router-dom";


export const NewTag = styled.div`
  position: absolute;
  top: -10px;
  left: 10px;
  background: var(--ika-purple);
  color: white;
  font-size: 0.8em;
  font-weight: bold;
  padding: 2px 8px;
  border-radius: 12px;
  z-index: 2;
  pointer-events: none;
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
  padding-top: 150px;
  padding-bottom: 150px;
  background: var(--background)
    url(${process.env.PUBLIC_URL}/Pattern2.png) 0 0;
  background-attachment: fixed;
  background-size: 180px;
  z-index: 1;
  @media only screen and (max-width: 701px) {
    padding-top: auto;
    padding-bottom: 150px; 
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
  @media only screen and (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
    gap: 24px;
    max-width: 100%;
  }
`;

export const MenuTextContainer = styled.div`
  position: relative;
  text-align: center;
  padding-top: 10px;
  z-index: 3;
  flex: 1 1 0;
  min-width: 320px;
  max-width: 600px;
  
  @media only screen and (max-width: 1100px) {
    width: 100%;
    max-width: 100%;
    min-width: 0;
  }

  &:before {
    content: "";
    display: block;
    width: 60px;
    height: 4px;
    background-color: var(--inai-purple);
    margin: 0 auto 20px auto;
    border-radius: 2px;
  }

  .Menu-text {
    padding: 10px 35px;
    margin: 0 auto 35px auto;
    max-width: 600px;
    background: var(--ika-purple) 0% 0% no-repeat padding-box;
    border-radius: 32px;
    opacity: 1;

    color: var(--text-color);
    text-align: justify;
    font-family: "Mulish", sans-serif;
    font-size: 25px;
    font-weight: 300;

    b {
      font-weight: 800;
    }

    hr {
      border-bottom: 0.5px solid var(--lightdark);
    }

    @media only screen and (max-width: 1400px) {
      max-width: 400px;
      font-size: 20px;
    }

    @media only screen and (max-width: 1100px) {
      display: inline-block;
      max-width: 550px;
      width: 70%;
      text-align: left;
      font-size: 17px;
    }

    @media only screen and (max-width: 701px) {
      padding: 25px;
    }
  }
`;

export const ButtonsDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 10vw);
  row-gap: 16px;
  column-gap: 16px;
  justify-content: center;
  align-items: start;
  padding-top: 0;
  padding-bottom: 0;
  flex: 1 1 0;
  min-width: 10vw;
  max-width: 700px;
  @media only screen and (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 24px;
    column-gap: 32px;
    max-width: 100vw;
  }
  @media only screen and (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 100vw;
    column-gap: 0;
    row-gap: 12px;
  }
`;

export const ButtonContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 160px;
  height: 160px;
  margin: 12px;
  margin-top: 50px;
  z-index: 1;
  overflow: visible;
  @media only screen and (max-width: 1100px) {
    width: 180px;
    height: 180px;
  }
  @media only screen and (max-width: 700px) {
    width: 160px;
    height: 160px;
  }
`;

export interface TakoPeekProps {
  active: boolean;
}
export const TakoPeek = styled.img<TakoPeekProps>`
  position: absolute;
  left: 50%;
  top: 5px;
  width: 5vw;
  pointer-events: none;
  z-index: 0;
  transition: transform 0.4s cubic-bezier(.4,2,.6,1);
  transform: translateX(-50%)
    translateY(${props => (props.active ? '-5.1vw' : '1vw')})
    scale(${props => (props.active ? 1.1 : 1)});
`;

export const CookieButton = styled.button<{ $shaking?: boolean }>`
  width: 10vw;
  height: 10vw; 
  border: none;
  background: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  outline: none;
  margin: 0 8px 16px 8px;
  position: relative;
  ${({ $shaking }) =>
    $shaking &&
    css`
      animation: ${shake} 0.4s linear;
    `}
  @media only screen and (max-width: 1100px) {
    width: 22vw;
    height: 22vw;
    max-width: 180px;
    max-height: 180px;
    margin: 0 8px 16px 8px;
  }
  @media only screen and (max-width: 700px) {
    width: min(40vw, 160px);
    height: min(40vw, 160px);
    margin: 0 8px 16px 8px;
  }
`;

export const CookieImg = styled.img`
  width: 10vw;
  height: 10vw;
  display: block;
  margin: 0 auto;
  transition: transform 0.2s;
  @media only screen and (max-width: 1100px) {
    width: 22vw;
    height: 22vw;
    max-width: 180px;
    max-height: 180px;
  }
  @media only screen and (max-width: 700px) {
    width: min(40vw, 160px);
    height: min(40vw, 160px);
  }
`;

export const CookieLabel = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.1vw;
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
  width: 8vw;
  text-align: center;
  z-index: 1;
  pointer-events: none;
  white-space: pre-line;
  line-height: 1.15;

  @media only screen and (max-width: 1100px) {
    font-size: 1.8vw;
    width: 10vw;
  }
  @media only screen and (max-width: 700px) {
    font-size: 2.5vw;
    width: 16vw;
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