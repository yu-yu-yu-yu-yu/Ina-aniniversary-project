import React, { lazy, Suspense, useEffect, useLayoutEffect } from "react";
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
import { DimSharedButtons } from "./styles/globalStyles";

const HomeEntry = lazy(() => import("./components/Pages/Home/HomeEntry"));
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
const Timeline = lazy(() => import("./components/Pages/Timeline/Timeline"));
const TakodexList = lazy(
  () => import("./components/Pages/Takodex/TakodexList"),
);
const CollagePage = lazy(
  () => import("./components/Pages/Collages/CollagePage"),
);
const CreditsPage = lazy(
  () => import("./components/Pages/Credits/CreditsPage"),
);
const OutfitsPage = lazy(
  () => import("./components/Pages/Outfits/OutfitsPage"),
);
const MomentsGallery = lazy(
  () => import("./components/Pages/MomentsGallery/MomentsGallery"),
);
const WahrldPage = lazy(() => import("./components/Pages/Wahrld/WahrldPage"));
const Takonomicon = lazy(
  () => import("./components/Pages/Takonomicon/Takonomicon"),
);

const scrollPositions = new Map<string, number>();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);
  useLayoutEffect(() => {
    window.scrollTo(0, scrollPositions.get(pathname) ?? 0);
    return () => {
      scrollPositions.set(pathname, window.scrollY);
    };
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
              <HomeEntry />
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
            <Route path="/momentsgallery">
              <MomentsGallery />
            </Route>
            <Route path="/wahrld">
              <WahrldPage />
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
            <Route path="/takonomicon">
              <Takonomicon />
            </Route>
          </Switch>
        </Suspense>
      </div>
      <DimSharedButtons />
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
