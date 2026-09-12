import styled, { css, keyframes } from "styled-components";

const QuoteContainer = styled.div<{ $grayscale?: boolean }>`
  background: ${({ $grayscale }) =>
    $grayscale
      ? "linear-gradient(180deg, rgba(20,20,20,0.95) 0%, rgba(40,40,40,0.95) 100%)"
      : "transparent linear-gradient(180deg, var(--light-background) 0%, var(--dark-highlight) 100%) 0% 0% no-repeat padding-box"};
  text-align: center;
  padding: 80px 20px;

  box-shadow: 0px 10px 6px var(--shadow);
  z-index: 3;
  position: relative;

  @media only screen and (max-width: 701px) {
    margin-top: 0;
    padding: 40px 20px 60px;
  }
`;

const QuoteInaImg = styled.img<{ $grayscale?: boolean }>`
  display: inline-block;
  z-index: 3;
  width: 300px;
  filter: ${({ $grayscale }) => ($grayscale ? "grayscale(1)" : "none")};
  transition: filter 0.2s;
  @media only screen and (max-width: 701px) {
    width: 200px;
  }
`;

const QuoteTextBox = styled.div`
  width: 300px;
  min-height: 118px;
  border-bottom: solid 4px;
  padding: 12px 12px 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: visible;
  filter: inherit;
  @media only screen and (max-width: 701px) {
    width: 250px;
    min-height: 98px;
    padding: 6px 10px 18px;
  }
  @media only screen and (max-width: 300px) {
    width: 200px;
  }
`;

const QuoteContent = styled.div`
  text-align: left;
  display: inline-block;
  vertical-align: center;
  margin-left: 40px;
  font: normal normal normal 40px/1.2 Roboto;
  letter-spacing: 2.5px;
  color: #ffffff;
  color: var(--text-color);
  @media only screen and (max-width: 701px) {
    display: block;
    margin: auto;
    text-align: center;
    font: normal normal normal 26px/1.2 Roboto;
    letter-spacing: 1.3px;
    margin-left: 0;
  }
  img {
    border-bottom: solid 4px;
    padding-bottom: 24px;
    width: 300px;
    filter: inherit;
    @media only screen and (max-width: 701px) {
      width: 250px;
      padding-bottom: 12px;
      padding-top: 20px;
    }
    @media only screen and (max-width: 300px) {
      width: 200px;
      padding-bottom: 12px;
      padding-top: 20px;
    }
  }
`;

const QuoteActions = styled.div`
  position: absolute;
  right: 18px;
  bottom: 18px;
  display: flex;
  gap: 8px;
  z-index: 10;

  @media only screen and (max-width: 701px) {
    position: static;
    justify-content: center;
    margin-top: 18px;
  }
`;

const rainbowFlash = keyframes`
  0% { background: linear-gradient(90deg, #ff5f6d, #ffc371, #7ae582, #76b7ff, #d291ff, #ff5f6d); color: #1a1a1a; box-shadow: 0 0 0 rgba(0,0,0,0), 0 0 12px rgba(255,255,255,0.9); }
  16% { background: linear-gradient(90deg, #ffc371, #7ae582, #76b7ff, #d291ff, #ff5f6d, #ff5f6d); }
  33% { background: linear-gradient(90deg, #7ae582, #76b7ff, #d291ff, #ff5f6d, #ff5f6d, #ffc371); }
  50% { background: linear-gradient(90deg, #76b7ff, #d291ff, #ff5f6d, #ffc371, #7ae582, #76b7ff); }
  66% { background: linear-gradient(90deg, #d291ff, #ff5f6d, #ffc371, #7ae582, #76b7ff, #d291ff); }
  100% { background: linear-gradient(90deg, #ff5f6d, #ffc371, #7ae582, #76b7ff, #d291ff, #ff5f6d); color: #1a1a1a; box-shadow: 0 0 18px rgba(255,255,255,0.7); }
`;

const QuoteActionButton = styled.button`
  background: var(--light-highlight);
  color: var(--text-color);
  border: none;
  border-radius: 8px;
  padding: 10px 18px;
  font-size: 1em;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 2px 8px var(--shadow);
  transition:
    background 0.2s,
    color 0.2s,
    box-shadow 0.2s;
  &:hover {
    background: var(--dark-highlight);
    color: var(--light-highlight);
  }

  @media only screen and (max-width: 701px) {
    font-size: 0.8em;
    padding: 8px 14px;
  }
`;

const GachaButton = styled(QuoteActionButton)<{ $active?: boolean }>`
  background: #e9d5ff;
  color: #2a1d3a;

  ${({ $active }) =>
    $active &&
    css`
      animation: ${rainbowFlash} 3s ease-in-out 1;
      box-shadow: 0 0 18px rgba(255, 255, 255, 0.8), 0 0 28px rgba(128, 90, 213, 0.8);
    `}

  &:hover {
    background: #d8b4fe;
    color: #1f1230;
  }
`;

const GrayscaleButton = styled(QuoteActionButton)``;

const elixirFade = keyframes`
  0%   { opacity: 0; transform: translateY(8px); }
  15%  { opacity: 1; transform: translateY(0); }
  70%  { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(-8px); }
`;

const InaImageWrapper = styled.div`
  display: inline-block;
  position: relative;
`;

const ElixirText = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  width: max-content;
  max-width: 90vw;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 3.3rem;
  letter-spacing: 2px;
  text-shadow:
    0 0 12px #a78bfa,
    0 2px 8px rgba(0, 0, 0, 0.8);
  pointer-events: none;
  animation: ${elixirFade} 2.5s ease forwards;
  @media only screen and (max-width: 701px) {
    font-size: 1.5rem;
    letter-spacing: 1px;
    width: min-content;
  }
`;

export {
  QuoteContainer,
  QuoteInaImg,
  QuoteContent,
  QuoteTextBox,
  QuoteActions,
  GrayscaleButton,
  GachaButton,
  InaImageWrapper,
  ElixirText,
};
