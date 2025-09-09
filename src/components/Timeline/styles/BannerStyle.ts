import styled from "styled-components";
import ScrollContainer from "react-indiana-drag-scroll";

export const BannerWrapper = styled.div`
  width: 100%;
  margin: 0 auto 32px auto;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  min-height: 320px;
  overflow-x: hidden;
  padding: 48px 0 0 0;
  background: transparent;
`;

export const Container = styled(ScrollContainer)`
  display: flex;
  align-items: flex-end;
  width: 100%;
  justify-content: space-between;
  position: relative;
  height: auto;
  cursor: grab;
  padding: 32px 0 32px 0;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const VodLink = styled.a`
  color: var(--ina-orange);
  font-style: italic;
  font-weight: bold;
  transition: color 0.2s;
  &:hover {
    color: #fff7b2;
    background: var(--ina-orange);
    text-decoration: underline;
    border-radius: 4px;
    padding: 0 4px;
  }
`;

export const BannerImgWrapper = styled.div<{ imgSrc: string }>`
  position: relative;
  margin: 0 16px;
  transition: transform 0.2s;
  &:hover {
    z-index: 2;
  }
  &::before {
    content: "";
    position: absolute;
    width: 50%;
    height: 50%;
    transform: translate(50%, 50%);
    background: var(--ika-purple);
    filter: blur(50px) brightness(2) saturate(1.2);
    opacity: 0.8;
    z-index: 0;
    pointer-events: none;
  }
`;

export const BannerImg = styled.img`
  max-width: 400px;
  max-height: 500px;
  width: auto;
  height: auto;
  border: 3px solid transparent;
  cursor: pointer;
  transition: box-shadow 0.2s, transform 0.2s;
  position: relative;
  z-index: 1;
  &:hover {
    transform: scale(1.08);
  }
`;

export const DialogueBox = styled.div<{ $active: boolean }>`
  position: absolute;
  left: 50%;
  bottom: 90px;
  transform: translateX(-50%);
  min-width: 180px;
  background: var(--ika-purple);
  color: #fff;
  border: 2px solid var(--ina-orange);
  border-radius: 12px;
  box-shadow: 0 4px 16px #0003;
  padding: 12px 18px;
  font-size: 15px;
  z-index: 10;
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  pointer-events: ${({ $active }) => ($active ? "auto" : "none")};
  transition: opacity 0.15s;
`;