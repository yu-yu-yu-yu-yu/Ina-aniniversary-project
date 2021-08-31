import React, { useLayoutEffect } from "react";
import "./App.css";
import { Switch, Route, NavLink, HashRouter } from "react-router-dom";
import Timeline from "./components/Timeline/Timeline";
import { Milestone } from "./components/Timeline/Milestone";
import MessageBoardContainer from "./components/Messages/MessageBoardContainer";
import styled from "styled-components";
import HomeContent from "./components/Main/HomeContent";

const Footer = styled.footer`

  background: #FBA147 0% 0% no-repeat padding-box;
  opacity: 1;

  

  .footer-img{
    
    margin: auto;
  }

`;

const App = (): JSX.Element => (
  <HashRouter>
    <div className="App">
      {/* <nav className="Header">
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/messages">Messages</NavLink>
        <NavLink to="/timeline">Timeline</NavLink>
      </nav> */}

      <div className="Content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/messages">
            <MessageBoardContainer />
          </Route>
          <Route path="/timeline">
            <Timeline milestones={milestones} />
          </Route>
        </Switch>
      </div>
    </div>
    <Footer>
      <img 
        alt="mini-ina" 
        className="footer-img"
        src={`${process.env.PUBLIC_URL}/MiniIna.png`}
      />
    </Footer>
  </HashRouter>
);

const Home = () => (
  <div>
    <HomeContent></HomeContent>
  </div>
);

// const Messages = () => (
//   <div>
//     <h2>Messages</h2>
//   </div>
// );

const milestones: Milestone[] = [
  {
    label: "debut",
    media: "https://via.placeholder.com/1920x1080/0F0",
  },
  {
    label: "1",
    media: "https://via.placeholder.com/1920x1080/F00",
  },
  {
    label: "2",
    media: "https://via.placeholder.com/1920x1080/00F",
  },
  {
    label: "3",
    media: "https://via.placeholder.com/1920x1080/F00",
  },
  {
    label: "4",
    media: "https://via.placeholder.com/1920x1080/00F",
  },
  {
    label: "5",
    media: "https://via.placeholder.com/1920x1080/F00",
  },
  {
    label: "6",
    media: "https://via.placeholder.com/1920x1080/00F",
  },
];

export default App;
