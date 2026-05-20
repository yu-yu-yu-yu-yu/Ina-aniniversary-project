import styled from "styled-components";

export {
  SubmissionContainer,
  BubbleImage,
  IFrame,
  SiteBoard,
  FiltersContainer,
  Loader,
  SearchBar,
  NavTitle,
} from "../../../styles/globalStyles";

export const TakodexText = styled.div`
  padding-top: 5px;
  overflow-wrap: break-word;
  color: var(--ink-black);
  text-align: left;
  font: normal normal 300 20px/25px Mulish;
  letter-spacing: 0px;
  opacity: 1;
  white-space: pre-line;
`;

export const TakodexImage = styled.img`
  display: block;
  width: 100%;
  height: 260px;
  object-fit: contain;
  border-radius: 8px;
  margin: 8px 0;
`;

export const TakodexCard = styled.div`
  background: var(--light-background);
  border: 2px solid var(--dark-background);
  border-radius: 15px;
  overflow: hidden;
`;

export const TakodexCardHeader = styled.div`
  background: var(--dark-highlight);
  color: var(--text-color);
  font: 700 22px/30px Montserrat;
  padding: 10px 12px;
  border-bottom: 2px solid var(--light-highlight);
  text-align: center;
`;

export const AddTakoButton = styled.a`
  background: var(--light-highlight);
  color: var(--dark-highlight);
  border-radius: 8px;
  padding: 8px 18px;
  font-weight: 500;
  font-size: 0.5em;
  text-decoration: none;
  margin-left: 16px;
  transition: background 0.2s, color 0.2s, filter 0.2s;
  &:hover {
    background: var(--dark-highlight);
    color: var(--light-highlight);
  }

  @media only screen and (max-width: 768px) {
    font-size: 0.5em;
    padding: 10px 12px;
    margin-left: 8px;
    margin-top: 6px;
    display: inline-block;
  }
`;