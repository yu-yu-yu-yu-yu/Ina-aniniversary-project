import styled from "styled-components";

export const SubmissionContainer = styled.div`
  margin: 10px;
  width: 450px;
  @media only screen and (max-width: 768px) {
    margin-left: 0px;
    width: 100%;
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
`;
export const BubbleImage = styled.img`
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
  color: var(--ina-orange);
  text-align: left;

  font: normal normal 600 30px/40px Montserrat;

  @media only screen and (max-width: 768px) {
    font: normal normal 600 24px/30px Montserrat;
  }

  letter-spacing: 0px;
  opacity: 1;
  display: flex;
  width: 100%;
  align-items: center;
`;
export const HeaderText = styled.div`
  overflow-wrap: break-word;
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
  position: relative;
  flex: 0 1;
  padding: 0.9rem 1.25rem;
  text-align: left;
  font: normal normal normal 3em montserrat;
  letter-spacing: 0;
  justify-content: space-between;
`;