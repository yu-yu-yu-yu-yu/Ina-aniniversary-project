import styled from "styled-components";
import ScrollContainer from "react-indiana-drag-scroll";

export const Line = styled.span`
  border-top: 5px solid var(--ika-purple);
  position: relative;
  bottom: 16px;
  width: 500px;
  left: 245px;
  &.mobile {
    border-left: 4px solid var(--ika-purple);
    position: relative;
    bottom: unset;
    height: 240px;
    top: 120px;
    left: -16px;
    width: 0;
  }
`;

export const ScrollListContainer = styled.div`
  display: flex;
  flex: 1;
  width: 100vw;
  overflow: hidden;
  flex-direction: column;
  &.mobile {
    height: 100vh;
  }
`;
export const TopControlsContainer = styled.div`
  margin: 38px 145px 0;
  @media (max-width: 1200px) {
    margin: 38px auto 0;
  }
`;
export const SearchBarContainer = styled.div`
  border-bottom: 1px solid var(--ika-purple);
`;
export const SearchInput = styled.input`
  color: var(--ika-purple);
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
`;
export const Circle = styled.span`
  background: #fff;
  border: 3px solid var(--color);
  border-radius: 50%;
  width: 22px;
  height: 22px;
  //padding: 5px;
  flex-shrink: 0;
  z-index: 2;
`;

//url(${({ media }) => }) center;
//background-size: cover;
export const EventPreview = styled.img`
  background: var(--ika-purple);
  width: 410px;
  height: 229px;
  border-radius: 5px;
  margin-bottom: 26px;
  z-index: 2;
  &.mobile {
    width: 253px;
    height: 141px;
    margin-bottom: 5px;
  }
`;

export const EventContainer = styled.div<{ highlight: boolean }>`
  --color: ${({ highlight }) =>
    highlight ? "var(--ina-orange)" : "var(--ika-purple)"};
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
  padding-bottom: 10%;
  scroll-behavior: smooth;
  transition: all linear;
  @media (max-width: 1200px) {
    padding-bottom: 25%;
  }
  :not(&.mobile) > ${EventContainer}:first-child {
    padding-left: 111px;
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
`;

export const MonthListContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: var(--ika-purple);
  height: 111px;
  padding: 19px 35px;
  border-radius: 15px 15px 0 0;
  opacity: 1;
  flex: 0 1;
  margin: 0 111px;
  justify-content: space-between;
  @media (max-width: 1400px) {
    margin: 0 auto;
  }
`;
export const MonthDisplay = styled.span<{
  highlight: boolean;
  passed: boolean;
}>`
  color: white;
  text-align: center;
  letter-spacing: 0;
  font: normal normal
    ${({ highlight, passed }) =>
      highlight ? "normal" : passed ? "light" : "100"}
    30px/37px Roboto;
  opacity: 1;
  margin: auto 0;
  :hover {
    cursor: pointer;
  }
`;

export const MonthAnchorHeader = styled.span`
  font: normal normal 300 2em Roboto;
  color: var(--ina-orange);
  border-left: 2px solid var(--ina-orange);
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
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 430px;
  &.mobile {
    text-align: left;
    font: normal normal 400 20px/24px Roboto;
    letter-spacing: 1px;
    width: 240px;
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
  width: 341px;
  height: 343px;
  margin: 70px auto 0;
  right: 0;
  left: 0;
  top: 0;
  position: absolute;
  background-color: var(--inai-purple);
  border-radius: 15px;
  z-index: 69;
  > ${TopControlsContainer} {
    margin: 15px auto;
  }
  ${SearchInput} {
    font: normal normal normal 16px/19px Montserrat;
    color: #ffffff;
    ::placeholder {
      color: white;
    }
  }
  ${SearchBarContainer} {
    border-bottom-color: white;
    margin: 0 20px;
  }
  ${TagBarContainer} {
    margin-top: 15px;
    margin-left: 20px;
  }
  ${TagsContainer} {
    flex-direction: column;
  }
  ${MonthListContainer} {
    margin: 0;
    background: unset;
    flex-direction: column;
    flex-wrap: wrap;
  }
  ${MonthDisplay} {
    font-size: 16px;
    line-height: 19px;
    :not(:nth-child(4n)) {
      padding-bottom: 8px;
    }
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
  margin: 0 20px;
  text-align: left;
  font: normal normal 300 16px/19px Montserrat;
  letter-spacing: 0;
  color: white;
  opacity: 1;
  border-bottom: 2px solid white;
  display: block;
`;

export const DrawerToggleI = styled.i`
  color: white;
  padding-right: 15px;
  &:hover {
    cursor: pointer;
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
    border-bottom: 2px solid #fff;
    flex-direction: row;
    padding: 0;
  }
`;
export const EventModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 735px;
  max-width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 69;
  border-radius: 15px;
  color: #fff;
  background: var(--inai-purple);
`;
export const ModalVideo = styled.iframe`
  width: 100%;
  box-shadow: 0px 5px 5px #0000003d;
`;

export const ModalMedia = styled.img`
  width: 100%;
  box-shadow: 0px 5px 5px #0000003d;
`;
export const EventModalDescription = styled.p`
  font: normal normal 300 15px/18px Roboto;
  width: 335px;
  border-left: 2px solid #fff;
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
  color: #ffffff;
  text-shadow: 0 5px 6px #00000029;
  overflow: hidden;
  //text-overflow: ellipsis;
  //white-space: nowrap;
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
  color: #ffffff;
  padding-top: 10px;
  text-shadow: 0px 5px 6px #00000029;
  &.mobile {
    font: normal normal 300 13px/15px Roboto;
    letter-spacing: 0.65px;
  }
`;
