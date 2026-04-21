import styled from "styled-components";

// Re-export shared styles from globalStyles
export {
  SubmissionContainer,
  TextBubbleContainer,
  BubbleMessage,
  BubbleImage,
  BubbleHeader,
  HeaderText,
  IFrame,
  MessageBoard,
  FiltersContainer,
  Loader,
  SearchBar,
  Title,
} from "../../../styles/globalStyles";

// Takodex-specific button with custom styling
export const AddTakoButton = styled.a`
  background: var(--ina-orange);
  color: var(--ika-purple);
  border-radius: 8px;
  padding: 8px 18px;
  font-weight: 500;
  font-size: 0.5em;
  text-decoration: none;
  margin-left: 16px;
  transition: background 0.2s, color 0.2s, filter 0.2s;
  &:hover {
    background: var(--ika-purple);
    color: var(--ina-orange);
  }

  @media only screen and (max-width: 768px) {
    font-size: 0.5em;
    padding: 10px 12px;
    margin-left: 8px;
    margin-top: 6px;
    display: inline-block;
  }
`;