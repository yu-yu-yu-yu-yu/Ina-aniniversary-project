import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MessageBoardContainer from "./components/Messages/MessageBoardContainer";
import HomeContent from "./components/Main/HomeContent";
import { Timeline } from "./components/Timeline/Timeline";
import { milestones } from "./components/Timeline/Milestones";

const App = (): JSX.Element => (
  <Router>
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
  </Router>
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

export default App;
