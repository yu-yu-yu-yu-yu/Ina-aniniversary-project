import styled from "styled-components";
import {Milestone} from "../Milestone";

export const Row = styled.div<{ big?: boolean; center?: boolean }>`
  display: flex;
  flex-direction: row;
  flex: 1;
  height: ${({ big }) => (big ? "100%" : "initial")};
  justify-content: ${({ center }) => (center ? "center" : "initial")};
  > *:first-child {
    margin-right: 5%;
  }
  > *:only-child {
    margin: 0;
  }
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 100%;
`;
export const EventText = styled.p`
  font-size: 1.25vw;
  line-height: 2vw;
  //margin: 0 2em;
  text-align: justify;
  @media (max-width: 950px) {
    font-size: 13px;
  }
`;
export const EventLabel = styled.h1`
  text-align: center;
  padding: 0 2em;
  font-size: 2vw;
`;
export const EventMediaContainer = styled.div<{
  media: Milestone["media"];
}>`
  background: url(${(props) => process.env.PUBLIC_URL + "/" + props.media})
    center;
  background-size: cover;
  flex: 1;
`;
export const NewsPaperContainer = styled.div`
  //overflow: scroll;
  margin: 2vw 5em;
  > ${Row} {
    padding: 2vw 0;
  }
  img {
    max-width: 100%;
  }
`;
export const SectionButton = styled.div<{ selected: boolean }>`
  color: #fff;
  font-size: 5vw;
  line-height: 5vw;
  font-weight: 300;
  text-align: center;
  padding: 0.2em 1em;
  background-color: ${({ selected }) => (selected ? "#777" : "#888")};
  //background-color: #fff;
  :hover {
    cursor: pointer;
  }
`;
export const SectionContainer = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: center;
  margin: 0 5em;
`;
