import styled from "styled-components";
import { zIndex } from "../../../../styles/tokens";

export const CreditsBoard = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 5% 80px;
  position: relative;
  z-index: 5;
  text-align: center;
`;

export const CreditsSection = styled.section`
  margin-bottom: 40px;
`;

export const CreditTitle = styled.h2`
  color: var(--dark-highlight);
  font: normal normal 700 clamp(20px, 1.6vw, 28px) / 1.3 Montserrat;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin: 0 0 10px 0;
`;

export const PeopleList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px 14px;
  justify-content: center;
`;

export const PersonLink = styled.a`
  color: var(--dark-highlight);
  font: normal normal 300 clamp(18px, 1.1vw, 22px) / 1.3 Mulish;
  text-decoration: underline;
  opacity: 0.85;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`;

export const PersonName = styled.span`
  color: var(--dark-highlight);
  font: normal normal 300 clamp(18px, 1.1vw, 22px) / 1.3 Mulish;
`;

export const TakoCountNote = styled.p`
  color: var(--dark-highlight);
  font: normal normal 600 16px/22px Montserrat;
  text-align: center;
  margin: 8px 0 0 0;
  opacity: 0.7;
`;

export const CreditsNote = styled.p`
  color: var(--dark-highlight);
  font: normal normal 300 16px/22px Mulish;
  text-align: center;
  margin-top: 48px;
  opacity: 0.8;
`;

export const CreditsDivider = styled.hr`
  border: none;
  border-top: 1px solid var(--dark-highlight);
  opacity: 0.2;
  margin: 0 auto 40px;
  width: 60%;
`;

export const TakoCountTrigger = styled.button`
  background: none;
  border: none;
  padding: 0;
  color: var(--dark-highlight);
  font: normal normal 300 clamp(18px, 1.1vw, 22px) / 1.3 Mulish;
  text-decoration: underline dotted;
  cursor: pointer;
  opacity: 0.85;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`;

export const TakoListBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: ${zIndex.backdrop};
`;

export const TakoListModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: min(700px, 90vw);
  max-height: 80vh;
  background: var(--background);
  border-radius: 16px;
  box-shadow: 0 4px 32px #0008;
  z-index: ${zIndex.modal};
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
`;

export const TakoListHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const TakoListClose = styled.button`
  background: none;
  border: none;
  color: var(--dark-highlight);
  font-size: 24px;
  line-height: 1;
  cursor: pointer;
  padding: 4px;
`;

export const TakoListBody = styled.div`
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  align-content: flex-start;
`;

export const TakoNameChip = styled.span`
  color: var(--dark-highlight);
  background: var(--dark-highlight-transparent, rgba(0, 0, 0, 0.06));
  font: normal normal 300 14px/1.3 Mulish;
  padding: 4px 10px;
  border-radius: 999px;
  border: 1px solid var(--dark-highlight);
`;
