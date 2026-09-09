import styled from "styled-components";

export {
  SubmissionContainer,
  BubbleMessage,
  BubbleImage,
  IFrame,
  SiteBoard,
  FiltersContainer,
  Loader,
  SearchBar,
  NavTitle,
} from "../../../styles/globalStyles";

export const MessageCard = styled.div`
  background: var(--light-background);
  border: 2px solid var(--dark-background);
  border-radius: 15px;
  overflow: hidden;
`;

export const MessageCardHeader = styled.div`
  background: var(--dark-highlight);
  color: var(--text-color);
  font: 700 clamp(22px, 1.3vw, 28px) / 1.35 Montserrat;
  padding: 10px 12px;
  border-bottom: 2px solid var(--light-highlight);
  display: flex;
  align-items: center;
`;

export const MessageText = styled.div`
  padding-top: 5px;
  overflow-wrap: break-word;
  color: var(--ink-black);
  text-align: left;
  font: normal normal 300 clamp(20px, 1.1vw, 25px) / 1.3 Mulish;
  letter-spacing: 0px;
  opacity: 1;
  white-space: pre-line;
`;
