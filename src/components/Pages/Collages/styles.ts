import styled from "styled-components";

export const PageContainer = styled.div`
  min-height: 100vh;
  background: var(--background);
`;

export { NavTitle } from "../../../styles/globalStyles";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 18px;
  margin: 48px auto;
  width: 90%;
`;

export const Card = styled.div`
  background: var(--dark-highlight);
  border-radius: 12px;
  box-shadow: 0 4px 16px #0003;
  padding: 18px;
  text-align: center;
`;

export const Thumbnail = styled.img`
  width: 25rem;
  max-width: 100%;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 2px 8px #0002;
`;

export const CollageTitle = styled.h3`
  margin: 16px 0 8px 0;
  color: var(--light-highlight);
  font-size: 1.25em;
`;

export const Description = styled.p`
  color: var(--text-color);
  font-size: 1em;
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;

export const ModalImg = styled.img`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 90vw;
  max-height: 90vh;
  border-radius: 12px;
  box-shadow: 0 4px 32px #0008;
  z-index: 1001;
`;
