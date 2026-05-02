import styled from "styled-components";

export {
  HeaderText,
  IFrame,
  SiteBoard,
  FiltersContainer,
  Loader,
  SearchBar,
  NavTitle,
} from "../../../../styles/globalStyles";

export const BubbleSong = styled.div`
  padding-top: 5px;
  overflow-wrap: break-word;
  color: var(--dark-highlight);
  text-align: left;
  font: normal normal 300 16px/22px Mulish;
  letter-spacing: 0px;
  opacity: 1;
  white-space: pre-line;
`;

export const BubbleImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const BubbleHeader = styled.div`
  color: var(--dark-highlight);
  text-align: center;
  font: normal normal 600 20px/28px Montserrat;
  letter-spacing: 0px;
  opacity: 1;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 4px;
`;

export const SongGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  width: 100%;

  @media only screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 540px) {
    grid-template-columns: 1fr;
  }
`;

export const SongCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid var(--dark-background);
  border-radius: 15px;
  overflow: hidden;
  background: var(--light-background);
  min-width: 0;
`;

export const SongCardMedia = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: var(--dark-background);

  iframe {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 0;
  }
`;

export const SongCardInfo = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
`;

export const SongTagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: auto;
  padding-top: 8px;
`;

export const SongTag = styled.span`
  font: normal normal 600 11px/14px Montserrat;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: var(--light-background);
  background: var(--dark-highlight);
  border-radius: 6px;
  padding: 2px 8px;
`;
