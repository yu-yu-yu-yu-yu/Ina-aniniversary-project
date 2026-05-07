import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { DrawerToggle, ScrollList } from "./ScrollList";
import { Milestone } from "../../../types";
import { Banner } from "./Banner";
import { Navbar, NavHome, HintButton, HintPopover} from "../../Common/Navbar";

const Container = styled.div`
  flex-direction: column;
  display: flex;
  flex: 1;
  min-height: 100vh;
  background: var(--background);
  color: var(--dark-highlight);
`;

const Content = styled.div`
  flex: 1;
  display: flex;
`;

const TimelineTitle = styled.h2`
  margin: 0;
  color: var(--dark-highlight);
  text-shadow:
    0 0 0.03em #ffffff7b,
    0.03em 0 0 #ffffff7b,
    -0.03em 0 0 #ffffff7b,
    0 0.03em 0 #ffffff7b,
    0 -0.03em 0 #ffffff7b,
    0.03em 0.03em 0 #ffffff7b,
    -0.03em -0.03em 0 #ffffff7b,
    0.03em -0.03em 0 #ffffff7b,
    -0.03em 0.03em 0 #ffffff7b;
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

const flavorSwitch = (
  flavour: string,
  props: {
    milestones: Milestone[];
    mobile: boolean;
    modalControls: boolean;
    drawerVisible: boolean;
    toggleDrawer: () => void;
  }
): JSX.Element => {
  switch (flavour) {
    case "list":
    default:
      return <ScrollList {...props} />;
  }
};

export const Timeline = ({
  milestones,
}: {
  milestones: Milestone[];
}): JSX.Element => {
  const [flavour] = useState("list");
  const [mobile, setMobile] = useState(false);
  const [modalControls, setModalControls] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [hintOpen, setHintOpen] = useState(false);
  const navBarRef = useRef(null);

  const checkMobile = () => {
    setMobile(window.innerWidth < 768);
    setModalControls(window.innerWidth < 1200);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    checkMobile();

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Container>
      <Navbar ref={navBarRef} className={mobile ? "mobile" : ""} style={{ alignItems: "center"}}>
          <NavHome />
        <TimelineTitle>Timeline</TimelineTitle>
        <div style={{ flex: "0 0 auto", position: "relative" }}>
          <HintButton
            aria-label="Show timeline usage hint"
            onClick={() => setHintOpen((v) => !v)}
            title="Show timeline usage hint"
          >
            ?
          </HintButton>
          {hintOpen && (
            <HintPopover onClick={() => setHintOpen(false)}>
              {mobile
                ? "Click thumbnail to see more"
                : "Drag timeline to scroll, click on thumbnail to see more details"}
            </HintPopover>
          )}
        </div>
        {flavour === "list" && modalControls && (
          <DrawerToggle onClick={handleDrawerToggle} />
        )}
      </Navbar>
      <Banner />
      <div style={{ width: "90%", borderTop: "3px solid var(--dark-highlight)", margin: "48px auto 18px", position: "relative", zIndex: 2 }} />
      <h2 style={{ textAlign: "center", color: "var(--dark-highlight)", margin: "0 0 18px 0", fontWeight: 700, fontSize: "2.5em", letterSpacing: "1.5px" }}>
        Streams and Milestones
      </h2>
      <Content>
        {flavorSwitch(flavour, {
          milestones,
          mobile,
          modalControls,
          drawerVisible: drawerOpen,
          toggleDrawer: handleDrawerToggle,
        })}
      </Content>
    </Container>
  );
};
