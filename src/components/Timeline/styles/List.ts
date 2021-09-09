import styled from "styled-components";
import ScrollContainer from "react-indiana-drag-scroll";

export const Line = styled.span`
  border: 3px solid var(--ika-purple);
  position: relative;
  bottom: 17px;
  width: 500px;
  left: 245px;
  &.mobile {
    border: 3px solid var(--ika-purple);
    position: relative;
    bottom: unset;
    height: 240px;
    top: 120px;
    left: -17px;
    width: 0;
  }
`;

export const ScrollListContainer = styled.div`
  display: flex;
  flex: 1;
  width: 100vw;
  flex-direction: column;
  &.mobile {
    height: calc(100vh - 87px);
  }
`;
export const TopControlsContainer = styled.div`
  margin: 38px 145px 0;
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
  overflow: hidden;
  align-items: flex-end;
  padding-bottom: 10%;
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
`;
export const MonthDisplay = styled.div<{ highlight: boolean; passed: boolean }>`
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
