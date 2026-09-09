import styled from "styled-components";

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
