import React, { lazy, Suspense, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import { milestones } from "./components/Pages/Timeline/Milestones";
import { ThemeSwitcher } from "./components/Common/ThemeSwitcher";
import { MuteProvider } from "./components/Common/MuteButton";
import { TakoLoading } from "./components/Common/TakoLoading";

const HomeContent = lazy(() => import("./components/Pages/Home/HomeContent"));
const MessageBoard = lazy(
  () => import("./components/Pages/Messages/MessageBoardContainer"),
);
const BoardContainer = lazy(
  () => import("./components/Pages/Letters/BoardContainer"),
);
const PlaylistBoard = lazy(
  () => import("./components/Pages/Playlist/PlaylistBoard"),
);
const VideoBoardContainer = lazy(
  () => import("./components/Pages/Messages/VideoBoardContainer"),
);
const Timeline = lazy(() =>
  import("./components/Pages/Timeline/Timeline").then((m) => ({
    default: m.Timeline,
  })),
);
const TakodexList = lazy(() =>
  import("./components/Pages/Takodex/TakodexList").then((m) => ({
    default: m.TakodexList,
  })),
);
const CollagePage = lazy(() => import("./components/Pages/Collages/collage"));
const CreditsPage = lazy(
  () => import("./components/Pages/Credits/CreditsPage"),
);
const OutfitsPage = lazy(
  () => import("./components/Pages/Outfits/OutfitsPage"),
);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = (): JSX.Element => (
  <Router>
    <ScrollToTop />
    <div className="App">
      <div className="Content">
        <Suspense fallback={<TakoLoading fullPage />}>
          <Switch>
            <Route exact path="/">
              <HomeContent />
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
            <Route path="/inaoutfit">
              <OutfitsPage />
            </Route>
            <Route path="/takodex">
              <TakodexList />
            </Route>
            <Route path="/collages">
              <CollagePage />
            </Route>
            <Route path="/credits">
              <CreditsPage />
            </Route>
          </Switch>
        </Suspense>
      </div>
      <ThemeSwitcher />
    </div>
  </Router>
);

function AppWrapper() {
  return (
    <MuteProvider>
      <App />
    </MuteProvider>
  );
}

export default AppWrapper;
