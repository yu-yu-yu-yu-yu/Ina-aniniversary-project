import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MessageBoard from "./components/Pages/Messages/MessageBoardContainer";
import HomeContent from "./components/Pages/Home/HomeContent";
import { Timeline } from "./components/Pages/Timeline/Timeline";
import { milestones } from "./components/Pages/Timeline/Milestones";
import VideoBoardContainer from "./components/Pages/Messages/VideoBoardContainer";
import { TakodexList } from "./components/Pages/Takodex/TakodexList";
import { ThemeSwitcher } from "./components/Common/ThemeSwitcher";
import { MuteProvider } from "./components/Common/MuteButton";
import BoardContainer  from "./components/Pages/Letters/BoardContainer";
import PlaylistBoard from "./components/Pages/Playlist/PlaylistBoard";
import CollagePage from "./components/Pages/Collages/collage";

const App = (): JSX.Element => (
  <Router>
    <div className="App">
      <div className="Content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/messages">
            <MessageBoard />
          </Route>
          <Route path="/letters">
            <BoardContainer />
          </Route>
          <Route path="/playlist">
            <PlaylistBoard />
          </Route>
          <Route path="/moments">
            <VideoBoardContainer mode="moments" />
          </Route>
          <Route path="/wah">
            <VideoBoardContainer mode="wah" />
          </Route>
          <Route path="/timeline">
            <Timeline milestones={milestones} />
          </Route>
          <Route path="/takodex" component={TakodexList} />
          <Route path="/collages">
            <CollagePage />
          </Route>
        </Switch>
      </div>
      <ThemeSwitcher />
    </div>
  </Router>
);

const Home = () => (
  <div>
    <HomeContent />
  </div>
);

function AppWrapper() {
  return (
    <MuteProvider>
      <App />
    </MuteProvider>
  );
}

export default AppWrapper;
