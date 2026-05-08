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

export const playlistFilterColors: Record<string, string> = {
  cover: "#9B59B6",
  "Ina's original": "#E91E8C",
  "Artist's original": "#3498DB",
  karaoke: "#F39C12",
  concert: "#E74C3C",
  archived: "#95A5A6",
  "unofficial archive": "#E67E22",
  duo: "#1ABC9C",
  group: "#27AE60",
};

export const PlaylistBackdrop = styled.span`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 200;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const PlaylistDrawerContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 201;
  background: var(--light-background);
  border-radius: 15px;
  padding: 20px;
  width: min(90vw, 360px);
  max-height: 85vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const PlaylistDrawerToggle = styled.i`
  color: var(--text-color);
  padding-right: 15px;
  font-size: 1.2em;
  cursor: pointer;
  flex-shrink: 0;
  &:hover {
    opacity: 0.7;
  }
`;

export const PlaylistDrawerSeparator = styled.div`
  font: normal normal 300 13px/16px Montserrat;
  color: var(--text-color);
  border-bottom: 1px solid var(--text-color);
  padding-bottom: 4px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

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
  background: var(--dark-highlight);
  color: var(--text-color);
  text-align: center;
  font: normal normal 700 18px/24px Montserrat;
  letter-spacing: 0.5px;
  display: block;
  padding: 10px 12px;
  margin: -0.5rem -0.5rem 6px -0.5rem;
  border-bottom: 2px solid var(--light-highlight);

  & > * {
    color: inherit;
    -webkit-text-stroke: 0.5px var(--light-highlight);
    text-shadow: 0 1px 6px rgba(0, 0, 0, 0.35);
    overflow-wrap: break-word;
    word-break: break-word;
  }
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

export const SongTag = styled.span<{ tagColor?: string }>`
  font: normal normal 600 11px/14px Montserrat;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: white;
  background: ${({ tagColor }) => tagColor || "var(--dark-highlight)"};
  border-radius: 6px;
  padding: 2px 8px;
`;
