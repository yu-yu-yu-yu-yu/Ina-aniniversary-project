import styled from "styled-components";
import {Milestone} from "../Milestone";
import ScrollContainer from "react-indiana-drag-scroll";

export const LineRight = styled.span`
  border: 3px solid var(--ika-purple);
  position: relative;
  bottom: 17px;
  width: 500px;
  left: 245px;
`;

export const ScrollListContainer = styled.div`
  display: flex;
  flex: 1;
  margin-top: 38px;
  flex-direction: column;
`;
export const TopControlsContainer = styled.div`
  margin: 0 145px;
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
export const EventPreview = styled.div<{ media: Milestone["media"] }>`
  background: var(--ika-purple)
    url(${({ media }) => process.env.PUBLIC_URL + "/" + media}) center;
  background-size: cover;
  width: 410px;
  height: 229px;
  border-radius: 5px;
  margin-bottom: 26px;
  z-index: 2;
`;

export const EventContainer = styled.div<{ highlight: boolean }>`
  --color: ${({ highlight }) =>
    highlight ? "var(--ina-orange)" : "var(--ika-purple)"};
  display: flex;
  flex-direction: column;
  margin-right: 90px;
  width: 410px;
  cursor: grab;
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
  > ${EventContainer}:first-child {
    padding-left: 111px;
  }
  > ${EventContainer}:last-child {
    ${LineRight} {
      visibility: hidden;
    }
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
`;

export const EventDate = styled.span`
  color: var(--color);
  text-align: center;
  font: normal normal 300 30px/37px Roboto;
  letter-spacing: 1.5px;
`;
