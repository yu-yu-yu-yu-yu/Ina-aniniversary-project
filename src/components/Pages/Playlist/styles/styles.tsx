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
  release: "#E91E8C",
  cover: "#9B59B6",
  "Ina's original": "#E91E8C",
  "Hololive's original": "#8E44AD",
  "3rd Party": "#3498DB",
  karaoke: "#F39C12",
  concert: "#E74C3C",
  featured: "#F1C40F",
  banana: "#FFE135",
  archived: "#95A5A6",
  "unofficially archived": "#E67E22",
  unarchived: "#C0392B",
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

export const NavButtonGroup = styled.div`
  display: none;
  gap: 8px;
  align-items: center;
  flex-shrink: 0;

  @media only screen and (max-width: 700px) {
    display: flex;
  }
`;

export const SearchRow = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  margin-bottom: 20px;
  @media only screen and (max-width: 700px) {
    display: none;
  }
`;

export const SearchRowButtons = styled.div`
  display: flex;
  gap: 8px;
  flex-shrink: 0;
  padding-bottom: 4px;

  @media only screen and (max-width: 700px) {
    display: none;
  }
`;

export const SectionHeader = styled.h3`
  font: normal normal 700 18px/24px Montserrat;
  color: var(--dark-highlight);
  letter-spacing: 0.5px;
  margin: 28px 0 12px;
  padding-bottom: 6px;
  border-bottom: 2px solid var(--dark-highlight);
`;

export const ModalButton = styled.button<{ active?: boolean }>`
  font: normal normal 700 13px/18px Montserrat;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  background: ${({ active }) =>
    active ? "var(--light-highlight)" : "var(--dark-highlight)"};
  color: ${({ active }) =>
    active ? "var(--dark-highlight)" : "var(--text-color)"};
  border: 2px solid var(--light-highlight);
  border-radius: 10px;
  padding: 8px 16px;
  min-width: 120px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  flex-shrink: 0;
  &:hover {
    opacity: 0.8;
  }
`;

export const VersionSubtitle = styled.button<{ canToggle?: boolean }>`
  background: none;
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  width: 100%;
  text-align: center;
  font: normal normal 500 9px/13px Montserrat;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--text-color);
  opacity: ${({ canToggle }) => (canToggle ? 0.85 : 0.45)};
  cursor: ${({ canToggle }) => (canToggle ? "pointer" : "default")};
  padding: 5px 0 2px;
  margin-top: 4px;
  display: block;
  transition:
    background-color 0.15s ease,
    color 0.15s ease,
    opacity 0.15s ease;
  &:hover {
    opacity: ${({ canToggle }) => (canToggle ? 1 : 0.45)};
    ${({ canToggle }) =>
      canToggle &&
      `
      background: var(--text-color);
      color: var(--dark-highlight);
    `}
  }
`;

export const DropdownContent = styled.div`
  z-index: 201;
  background: var(--light-background);
  border-radius: 12px;
  padding: 16px;
  width: 260px;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.35);
  border: 1px solid var(--dark-highlight);
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media only screen and (min-width: 701px) {
    width: auto;
    max-width: min(90vw, 680px);
    max-height: unset;
    overflow-y: visible;
  }
`;

export const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media only screen and (min-width: 701px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
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

export const SongCountBadge = styled.div`
  font: normal normal 700 13px/18px Montserrat;
  letter-spacing: 0.5px;
  background: var(--dark-highlight);
  color: var(--text-color);
  border: 2px solid var(--light-highlight);
  border-radius: 10px;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  gap: 7px;
  flex-shrink: 0;
  cursor: default;
  user-select: none;
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
  color: var(--text-color);
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
    -webkit-text-stroke: 0.5px var(--title-stroke);
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

export const PerformanceControls = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 0;
  flex-wrap: wrap;
`;

export const ControlButton = styled.button<{ active?: boolean }>`
  font: normal normal 600 10px/13px Montserrat;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  border: 1px solid var(--dark-highlight);
  border-radius: 5px;
  padding: 2px 7px;
  cursor: pointer;
  background: ${({ active }) =>
    active ? "var(--dark-highlight)" : "transparent"};
  color: ${({ active }) =>
    active ? "var(--text-color)" : "var(--dark-highlight)"};
  &:hover {
    opacity: 0.75;
  }
`;

export const CyclerLabel = styled.span`
  font: normal normal 600 10px/13px Montserrat;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  color: var(--dark-highlight);
  flex: 1;
  text-align: center;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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
