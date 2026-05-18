import styled, { keyframes } from "styled-components";

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

const QuoteInaImg = styled.img<{ grayscale?: boolean }>`
  display: inline-block;
  z-index: 3;
  width: 300px;
  filter: ${({ grayscale }) => (grayscale ? "grayscale(1)" : "none")};
  transition: filter 0.2s;
  @media only screen and (max-width: 701px) {
    width: 200px;
  }
`;

const QuoteContent = styled.div`
  text-align: left;
  display: inline-block;
  vertical-align: center;
  margin-left: 40px;
  font: normal normal normal 40px/51px Roboto;
  letter-spacing: 2.5px;
  color: #ffffff;
  color: var(--text-color);
  @media only screen and (max-width: 701px) {
    display: block;
    margin: auto;
    text-align: center;
    font: normal normal normal 26px/32px Roboto;
    letter-spacing: 1.3px;
    margin-left: 0;
  }
  img {
    border-bottom: solid 4px;
    padding-bottom: 40px;
    width: 300px;
    filter: inherit;
    @media only screen and (max-width: 701px) {
      width: 250px;
      padding-bottom: 10px;
      padding-top: 20px;
    }
    @media only screen and (max-width: 300px) {
      width: 200px;
      padding-bottom: 10px;
      padding-top: 20px;
    }
  }
`;

const GrayscaleButton = styled.button`
  position: absolute;
  bottom: 18px;
  right: 18px;
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
  transition: background 0.2s, color 0.2s;
  z-index: 10;
  &:hover {
    background: var(--dark-highlight);
    color: var(--light-highlight);
  }

  @media only screen and (max-width: 701px) {
    position: static;
    display: block;
    margin: 18px auto 0;
    font-size: 0.8em;
    padding: 8px 14px;
  }
`;

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
  text-shadow: 0 0 12px #a78bfa, 0 2px 8px rgba(0, 0, 0, 0.8);
  pointer-events: none;
  animation: ${elixirFade} 2.5s ease forwards;
  @media only screen and (max-width: 701px) {
    font-size: 1.5rem;
    letter-spacing: 1px;
    width: min-content;
  }
`;

export { QuoteContainer, QuoteInaImg, QuoteContent, GrayscaleButton, InaImageWrapper, ElixirText };