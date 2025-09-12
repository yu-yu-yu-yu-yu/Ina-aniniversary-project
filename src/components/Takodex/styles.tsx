import styled from "styled-components";

export const SubmissionContainer = styled.div`
  margin: 10px;
  width: 450px;
  @media only screen and (max-width: 768px) {
    margin-left: 0px;
    width: 100%;
    padding-bottom: 5px;
  }
`;

export const TextBubbleContainer = styled.div`
  position: relative;
  font-family: sans-serif;
  font-size: 18px;
  line-height: 24px;
  padding: 15px;
  border: 3px solid var(--inai-purple);
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 15px;
  opacity: 1;

  hr {
    height: 1px;
    color: var(--inai-purple);
    background-color: var(--inai-purple);
    border: none;  }
  
`;
export const BubbleMessage = styled.div`
  padding-top: 5px;
  overflow-wrap: break-word;
  color: var(--ika-purple);
  text-align: left;
  font: normal normal 300 20px/25px Mulish;
  letter-spacing: 0px;
  opacity: 1;
  white-space: pre-line;
`;
export const BubbleImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  border: 2px solid var(--inai-purple);
  border-radius: 23px;
  opacity: 1;
  max-width: 400px;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const BubbleHeader = styled.div`
  color: var(--ika-purple); 
  text-align: center;     

  font: normal normal 600 30px/40px Montserrat;

  @media only screen and (max-width: 768px) {
    font: normal normal 600 24px/30px Montserrat;
  }

  letter-spacing: 0px;
  opacity: 1;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
export const HeaderText = styled.div`
  overflow-wrap: break-word;
  color: var(--ika-purple);
`;
export const IFrame = styled.iframe`
  border: 2px solid var(--inai-purple);
  border-radius: 23px;
  opacity: 1;
`;
export const MessageBoard = styled.div`
  width: 90%;
  margin-right: auto;
  margin-left: auto;
  margin-top: 25px;
`;

export const FiltersContainer = styled.div`
  margin: auto auto 35px;
`;
export const Loader = styled.div`
  display: flex !important;
  justify-content: center;
  align-items: center;
`;
export const SearchBar = styled.input`
  display: block;
  width: 100%;
  background-color: transparent;
  border: 0;
  border-bottom: 2px solid;
  margin-bottom: 20px;
  outline: none;

  color: var(--ika-purple);
  text-align: left;
  font: normal normal normal 30px/37px Montserrat;
  letter-spacing: 0;
  opacity: 1;

  .switchs-container {
    width: 40px;
  }
`;

export const Navbar = styled.nav`
  background: var(--inai-purple);
  display: flex;
  position: sticky;
  top: 0;
  z-index: 100;
  flex: 0 1;
  padding: 0.9rem 1.25rem;
  text-align: center;
  font: normal normal normal 3em montserrat;
  letter-spacing: 0;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    font: normal normal normal 25px/30px Montserrat;
    padding: 0.7rem 0.5rem;
    text-align: left;
  }
`;

export const Title = styled.h2`
  margin: 0;
  color: var(--ika-purple);
  text-align: center;
  font: normal normal bold 48px/56px Montserrat;
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