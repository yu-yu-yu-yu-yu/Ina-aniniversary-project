import styled from "styled-components";
import ScrollContainer from "react-indiana-drag-scroll";

export const Line = styled.span`
  border-top: 5px solid var(--dark-highlight);
  position: relative;
  bottom: 16px;
  width: 500px;
  left: 245px;
  &.mobile {
    border-left: 4px solid var(--dark-highlight);
    position: relative;
    bottom: unset;
    height: 160px;
    top: 80px;
    left: -16px;
    width: 0;
  }
`;

export const ScrollListContainer = styled.div`
  display: flex;
  flex: 1;
  min-height: 0;
  width: 100vw;
  overflow: hidden;
  flex-direction: column;
  &.mobile {
    height: 100vh;
  }
`;
export const TopControlsContainer = styled.div`
  margin: 38px 145px 0;
  padding-bottom: 32px;
  @media (max-width: 1200px) {
    margin: 38px auto 0;
  }
`;
export const SearchBarContainer = styled.div`
  border-bottom: 1px solid var(--dark-highlight);
`;
export const SearchInput = styled.input`
  color: var(--dark-highlight);
  text-align: left;
  font: normal normal normal 30px/37px Montserrat;
  letter-spacing: 0;
  opacity: 1;
  height: 1em;
  padding: 0 0 3px;
  border: none;
  background: none;
  outline: none;

  :focus {
    outline: none;
  }
`;
export const TagBarContainer = styled.div`
  margin-top: 25px;
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 12px;
`;

export const Circle = styled.span`
  background: var(--text-color);
  border: 3px solid var(--color);
  border-radius: 50%;
  width: 22px;
  height: 22px;
  flex-shrink: 0;
  z-index: 2;
`;

export const EventPreview = styled.img<{ outline: string }>`
  background: var(--dark-highlight);
  width: 410px;
  height: 229px;
  border-radius: 5px;
  margin-bottom: 26px;
  z-index: 2;
  border: 5px solid transparent;
  ${({ outline }) =>
    outline.startsWith("linear-gradient")
      ? `
    border-image: ${outline} 1;
    border-image-slice: 1;
  `
      : `
    border-color: ${outline};
  `}
  &.mobile {
    width: 253px;
    height: 141px;
    margin-bottom: 5px;
  }
`;

export const EventContainer = styled.div<{ highlight: boolean }>`
  --color: ${({ highlight }) =>
    highlight ? "var(--light-highlight)" : "var(--dark-highlight)"};
  display: flex;
  flex-direction: column;
  margin-right: 90px;
  width: 410px;
  cursor: grab;
  &.mobile {
    margin: 0;
    width: unset;
    align-items: center;
    flex-direction: row;
  }
`;

export const Triangle = styled.div`
  display: block;
  height: 20px;
  width: 20px;
  border: inherit;
  position: relative;
  bottom: 36px;
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);

  border-radius: 0 0 0 0.25em;
  background-color: var(--color);
  &.mobile {
    display: none;
  }
`;

export const EventInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 0;
`;
export const ListScrollable = styled(ScrollContainer)`
  display: flex;
  flex: 1;
  flex-direction: row;
  width: 100vw;
  align-items: flex-end;
  padding-bottom: 100px;
  scroll-behavior: smooth;
  transition: all linear;
  @media (max-width: 1200px) {
    padding-bottom: 150px;
  }
  :not(&.mobile) > ${EventContainer}:first-child {
    padding-left: 0;
  }
  > ${EventContainer}:last-child {
    ${Line} {
      visibility: hidden;
    }
  }
  &.mobile {
    padding-bottom: 0;
    width: unset;
    flex-direction: column;
    align-items: center;
  }
  img {
    cursor: pointer;
  }
`;

export const MonthListContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: var(--dark-highlight);
  height: 111px;
  padding: 19px 35px;
  border-radius: 15px 15px 0 0;
  opacity: 1;
  flex: 0 1;
  margin: 0 111px;
  justify-content: space-between;
  border: 3px solid var(--ink-black);
  @media (max-width: 1400px) {
    margin: 0 auto;
  }
  z-index: 1;
`;

export const YearContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: var(--dark-highlight);
  border-radius: 10px;
  border: 3px solid var(--ink-black);
  padding: 0 12px;
  margin: 0 auto 12px auto;
  width: fit-content;
  position: relative;
  z-index: 0;
`;

export const YearDisplay = styled.div<{
  selected: boolean;
}>`
  padding: 5px;
  color: ${({ selected }) =>
    selected ? "var(--light-highlight)" : "var(--text-color)"};
  text-align: center;
  letter-spacing: 0;
  font: normal normal ${({ selected }) => (selected ? "bold" : "light")} 30px
    Roboto;
  font-size: ${({ selected }) => (selected ? "30px" : "26px")};
  opacity: 1;
  margin: auto 0;
  position: relative;
  :hover {
    cursor: pointer;
  }
  & + & {
    padding-left: 14px;
  }
  & + &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 55%;
    width: 1px;
    background: var(--text-color);
    opacity: 0.35;
  }
  ${({ selected }) =>
    selected &&
    `
      text-shadow:
        -1px -1px 0 var(--shadow),
         1px -1px 0 var(--shadow),
        -1px  1px 0 var(--shadow),
         1px  1px 0 var(--shadow);
    `}
`;

export const MonthDisplay = styled.span<{
  highlight: boolean;
  passed: boolean;
}>`
  color: ${({ highlight }) =>
    highlight ? "var(--light-highlight)" : "var(--text-color)"};
  text-align: center;
  font: normal normal
    ${({ highlight, passed }) =>
      highlight ? "bold" : passed ? "light" : "100"}
    30px/37px Roboto;
  font-size: ${({ highlight }) => (highlight ? "30px" : "27px")};
  opacity: 1;
  margin: auto 0;
  position: relative;
  :hover {
    cursor: pointer;
  }
  & + & {
    padding-left: 14px;
  }
  & + &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 55%;
    width: 1px;
    background: var(--text-color);
    opacity: 0.35;
  }
  ${({ highlight }) =>
    highlight &&
    `
      text-shadow:
        -2px -2px 0 var(--shadow),
         2px -2px 0 var(--shadow),
        -2px  2px 0 var(--shadow),
         2px  2px 0 var(--shadow);
    `}
`;

export const MonthAnchorHeader = styled.span`
  font: normal normal 300 2em Roboto;
  color: var(--light-highlight);
  border-left: 2px solid var(--light-highlight);
  padding-left: 5px;
  margin-left: 5px;
  margin-bottom: 5px;
  &.mobile {
    border: none;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    direction: rtl;
    font: normal normal 300 15px/18px Roboto;
    margin: 0;
    padding: 0;
    width: 0;
    position: relative;
    left: -23px;
  }
`;

export const EventLabel = styled.span`
  color: var(--color);
  text-align: center;
  font: normal normal 300 30px/37px Roboto;
  letter-spacing: 1.5px;
  width: 430px;
  height: 74px;
  display: block;
  overflow-y: auto;
  overflow-x: hidden;
  white-space: normal;
  word-break: break-word;
  text-overflow: unset;

  scrollbar-width: thin;
  scrollbar-color: var(--dark-highlight) transparent;

  &::-webkit-scrollbar {
    width: 8px;
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--dark-highlight);
    border-radius: 8px;
    min-height: 16px;
    box-shadow: none;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &.mobile {
    text-align: left;
    font: normal normal 400 20px/24px Roboto;
    letter-spacing: 1px;
    width: 240px;
    height: 48px;
  }
`;

export const EventDate = styled.span`
  color: var(--color);
  text-align: center;
  font: normal normal 300 30px/37px Roboto;
  letter-spacing: 1.5px;
  &.mobile {
    text-align: right;
    font: normal normal 300 13px/15px Roboto;
    letter-spacing: 0.65px;
  }
`;

export const EventThumbMobile = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DrawerContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--light-background);
  border-radius: 15px;
  z-index: 69;
  width: min(90vw, 380px);
  max-height: 85vh;
  overflow-y: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  > ${TopControlsContainer} {
    margin: 0;
    padding: 0;
  }
  ${SearchInput} {
    font: normal normal normal 16px/19px Montserrat;
    color: var(--text-color);
    ::placeholder {
      color: var(--text-color);
    }
  }
  ${SearchBarContainer} {
    border-bottom-color: var(--text-color);
    margin: 0;
  }
  ${TagBarContainer} {
    margin: 0;
  }
  ${TagsContainer} {
    flex-direction: column;
  }
  ${MonthListContainer} {
    height: auto;
    min-height: unset;
    margin: 0;
    background: transparent;
    border: none;
    border-radius: 0;
    padding: 0;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 6px;
    justify-content: flex-start;
  }
  ${MonthDisplay} {
    font-size: 13px;
    line-height: 15px;
    padding: 5px 10px;
    border-radius: 20px;
    background: var(--dark-highlight);
    text-shadow: none;
    & + & {
      padding-left: 10px;
    }
    & + &::before {
      display: none;
    }
  }
  ${YearContainer} {
    border-width: 1px;
    margin: 0 auto 4px;
    padding: 0 8px;
  }
  ${YearDisplay} {
    font-size: 18px;
    padding: 4px 6px;
  }
`;

export const Backdrop = styled.span`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 69;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const DrawerSeparator = styled.span`
  display: block;
  font: normal normal 300 13px/16px Montserrat;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: var(--text-color);
  border-bottom: 1px solid var(--text-color);
  padding-bottom: 4px;
`;

export const DrawerToggleI = styled.button`
  font: normal normal 700 13px/18px Montserrat;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  background: var(--dark-highlight);
  color: var(--text-color);
  border: 2px solid var(--light-highlight);
  border-radius: 10px;
  padding: 8px 14px;
  margin-right: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  flex-shrink: 0;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.8;
  }
`;

export const NavLinkContainer = styled.div`
  flex-grow: 2;
`;
export const EventModalInfo = styled.div`
  padding-left: 60px;
  display: flex;
  width: 640px;
  max-width: 100%;
  flex-direction: row;
  padding-bottom: 10px;
  &.mobile {
    width: unset;
    padding: 0 30px;
    flex-direction: column;
  }
`;
export const EventModalInfoLeft = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  padding-right: 20px;
  &.mobile {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    border-bottom: 2px solid var(--text-color);
    flex-direction: row;
    padding: 0;
  }
`;
export const EventModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  background: var(--light-background);
  color: var(--text-color);
  border: 2px solid var(--light-highlight);
  border-radius: 12px;
  box-shadow: 0 4px 16px var(--shadow);
  padding: 24px 32px;
  max-width: 90vw;
  max-height: 90vh;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;
export const ModalVideo = styled.iframe`
  width: 100%;
  box-shadow: 0px 5px 5px var(--shadow);
`;

export const ModalMedia = styled.img`
  width: 100%;
  box-shadow: 0px 5px 5px var(--shadow);
`;
export const EventModalDescription = styled.p`
  font: normal normal 300 15px/18px Roboto;
  width: 335px;
  border-left: 2px solid var(--text-color);
  padding-left: 20px;
  flex: 3;
  &.mobile {
    width: unset;
    padding: 0;
    border: none;
  }
`;
export const EventModalHeading = styled.a`
  text-align: right;
  font: normal normal normal 30px/40px Montserrat;
  letter-spacing: 0;
  padding-top: 10px;
  color: var(--text-color);
  text-shadow: 0 5px 6px var(--shadow);
  overflow: hidden;
  width: 300px;
  &.mobile {
    font: normal normal normal 22px/27px Montserrat;
    text-align: left;
    text-shadow: unset;
  }
  text-decoration: underline;
`;

export const EventModalDate = styled.span`
  text-align: right;
  font: normal normal 300 25px/30px Roboto;
  letter-spacing: 1.25px;
  color: var(--text-color);
  padding-top: 10px;
  text-shadow: 0px 5px 6px var(--shadow);
  &.mobile {
    font: normal normal 300 13px/15px Roboto;
    letter-spacing: 0.65px;
  }
`;

export const TimelineDialogueBox = styled.div`
  position: absolute;
  left: 50%;
  top: -10px;
  transform: translateX(-50%) translateY(-100%);
  min-width: 250px;
  max-width: 300px;
  background: var(--dark-highlight);
  color: var(--text-color);
  border: 2px solid var(--light-highlight);
  border-radius: 12px;
  box-shadow: 0 4px 16px var(--shadow);
  padding: 16px 22px;
  font-size: 16px;
  z-index: 20;
  opacity: 1;
  pointer-events: none;
  transition: opacity 0.15s;
  white-space: pre-line;
  word-break: break-word;
  overflow-wrap: anywhere;
`;

export const TagDropdownSelect = styled.select<{ mobile?: boolean }>`
  background: var(--dark-highlight);
  color: white;
  border: 2px solid var(--light-highlight);
  border-radius: 8px;
  font-size: ${({ mobile }) => (mobile ? 16 : 22)}px;
  padding: 6px 16px;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  width: 100%;
  outline: none;
`;

export const PageArrowButton = styled.button`
  background: var(--dark-highlight);
  border: 2px solid var(--light-highlight);
  border-radius: 50%;
  width: 2.2em;
  height: 2.2em;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  color: var(--light-highlight);
  font-size: 1.1em;
  flex-shrink: 0;
  transition:
    background 0.2s,
    color 0.2s,
    border 0.2s;
  &:disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }
  &:not(:disabled):hover {
    background: var(--light-highlight);
    color: var(--dark-highlight);
  }
`;

export const PageContainer = styled.div`
  flex-direction: column;
  display: flex;
  flex: 1;
  min-height: 100vh;
  background: var(--background);
  color: var(--dark-highlight);
`;

export const PageTitle = styled.h2`
  margin: 0;
  color: var(--dark-highlight);
  text-shadow:
    0 0 0.03em #ffffff7b,
    0.03em 0 0 #ffffff7b,
    -0.03em 0 0 #ffffff7b,
    0 0.03em 0 #ffffff7b,
    0 -0.03em 0 #ffffff7b,
    0.03em 0.03em 0 #ffffff7b,
    -0.03em -0.03em 0 #ffffff7b,
    0.03em -0.03em 0 #ffffff7b,
    -0.03em 0.03em 0 #ffffff7b;
  text-align: center;
  font: normal normal bold clamp(48px, 3vw, 60px) / 1.15 Montserrat;
  flex: 1;
  @media only screen and (max-width: 1000px) {
    font: normal normal bold 32px/40px Montserrat;
    letter-spacing: 1.25px;
  }
  @media only screen and (max-width: 768px) {
    font: normal normal bold 24px/30px Montserrat;
    letter-spacing: 1px;
  }
`;

export const StageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  flex: 1;
  min-height: 0;
  padding: 12px 0 32px;
`;

export const StageScroller = styled.div`
  display: flex;
  align-items: stretch;
  width: 100%;
  flex: 1;
  min-height: 0;
  cursor: grab;
  user-select: none;
  gap: 40px;
  padding: 1.2rem 0;
  overflow-x: scroll;
  overflow-y: hidden;
  touch-action: pan-x;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  -ms-overflow-style: none;
  --pivot-w: min(1400px, calc(100% - 520px));
  &::-webkit-scrollbar {
    display: none;
  }
  &::before,
  &::after {
    content: "";
    display: block;
    flex: 0 0 max(0px, calc(50% - var(--pivot-w) / 2));
  }
`;

export const StageSlot = styled.div<{ $isPivot: boolean; $dragging: boolean }>`
  position: relative;
  flex-shrink: 0;
  height: 100%;
  overflow-y: auto;
  width: ${({ $isPivot, $dragging }) =>
    $isPivot && !$dragging ? "var(--pivot-w)" : "220px"};
  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-snap-align: center;
  scroll-snap-stop: always;
  opacity: ${({ $isPivot, $dragging }) => ($isPivot && !$dragging ? 1 : 0.45)};
  transform: ${({ $isPivot, $dragging }) =>
    $isPivot && !$dragging ? "scale(1)" : "scale(0.55)"};
  transition:
    width 0.4s ease,
    opacity 0.35s,
    transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  cursor: ${({ $isPivot }) => ($isPivot ? "default" : "pointer")};
`;

export const NeighborThumb = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  background: var(--dark-highlight);
  border: 2px solid var(--light-highlight);
  border-radius: 12px;
  padding: 14px;
  color: var(--text-color);
  text-align: center;
  width: 100%;

  img {
    width: 100%;
    max-height: 120px;
    object-fit: contain;
    border-radius: 8px;
  }
`;

export const StageSkeleton = styled.div`
  width: 100%;
  height: 120px;
  border-radius: 8px;
  background: var(--light-highlight);
  opacity: 0.35;
`;

export const StageMain = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;
  width: min(1400px, 92vw);
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StageCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  min-width: 300px;
`;

export const StageVideoFrame = styled.iframe`
  aspect-ratio: 16 / 9;
  width: auto;
  max-width: min(1200px, 90vw);
  height: min(52vh, 640px);
  border: 0;
  border-radius: 12px;
  box-shadow: 0 8px 24px var(--shadow);
`;

export const StageImageFrame = styled.img`
  width: auto;
  height: auto;
  max-width: min(1200px, 90vw);
  max-height: min(52vh, 640px);
  border-radius: 12px;
  box-shadow: 0 8px 24px var(--shadow);
`;

export const StageHeading = styled.a`
  margin-top: 12px;
  font: normal normal bold 22px/28px Montserrat;
  color: var(--dark-highlight);
  text-align: center;
  text-decoration: none;
`;

export const StageDate = styled.span`
  color: var(--dark-highlight);
  opacity: 0.75;
`;

export const StageDescription = styled.p`
  margin: 16px 0 0;
  text-align: center;
  line-height: 1.6;
  color: var(--dark-highlight);
  max-width: 700px;
`;

export const BubbleColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 260px;
  flex-shrink: 0;
  @media (max-width: 900px) {
    width: 100%;
    max-width: 400px;
    align-items: center;
  }
`;

export const SpeechBubble = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  background: var(--dark-highlight);
  color: var(--text-color);
  border: 2px solid var(--light-highlight);
  border-radius: 14px;
  padding: 10px 14px;
  max-width: 260px;
  font-size: 14px;

  img {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: 2px solid var(--light-highlight);
    flex-shrink: 0;
  }

  &::after {
    content: "";
    position: absolute;
    top: 16px;
    width: 0;
    height: 0;
    border: 8px solid transparent;
  }

  &.left::after {
    right: -16px;
    border-left-color: var(--dark-highlight);
  }

  &.right::after {
    left: -16px;
    border-right-color: var(--dark-highlight);
  }
`;

export const RailContainer = styled.div`
  position: relative;
  overflow-x: auto;
  overflow-y: hidden;
  margin: 24px auto 0;
  width: min(1400px, 92vw);
  scrollbar-width: thin;
`;

export const RailNode = styled.button<{ $active: boolean }>`
  position: absolute;
  transform: translate(-50%, -50%);
  width: ${({ $active }) => ($active ? "20px" : "14px")};
  height: ${({ $active }) => ($active ? "20px" : "14px")};
  border-radius: 50%;
  border: 2px solid var(--light-highlight);
  background: ${({ $active }) =>
    $active ? "var(--light-highlight)" : "var(--dark-highlight)"};
  cursor: pointer;
  padding: 0;
  transition:
    width 0.2s,
    height 0.2s,
    background 0.2s;
  &:hover {
    filter: brightness(1.15);
  }
`;
