import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { DrawerToggle, ScrollList } from "./ScrollList";
import { Milestone } from "../../../types";
import { Navbar, NavHome, NavHelp } from "../../Common/Navbar";
import { PageTitle } from "./styles";
import { PageContainer } from "../../../styles/globalStyles";
import { PageBgm } from "../../Common/PageBgm";

const Content = styled.div`
  flex: 1;
  min-height: 0;
  display: flex;
`;

const Timeline = ({ milestones }: { milestones: Milestone[] }): JSX.Element => {
  const [mobile, setMobile] = useState(false);
  const [modalControls, setModalControls] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navBarRef = useRef(null);

  const checkMobile = () => {
    setMobile(window.innerWidth < 768);
    setModalControls(window.innerWidth < 1200);
  };

  useEffect(() => {
    checkMobile();

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <PageContainer style={{ height: "100vh", overflow: "hidden" }}>
      <PageBgm src="/ensolarado.mp3" />
      <Navbar
        ref={navBarRef}
        className={mobile ? "mobile" : ""}
        style={{ alignItems: "center" }}
      >
        <NavHome />
        <PageTitle>Timeline</PageTitle>
        <NavHelp label="Show timeline usage hint">
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <section>
              <div
                style={{
                  fontWeight: 700,
                  marginBottom: 5,
                  paddingBottom: 3,
                  borderBottom: "1px solid var(--light-highlight)",
                }}
              >
                Streams &amp; Milestones
              </div>
              <ul style={{ margin: 0, paddingLeft: 16, lineHeight: 1.65 }}>
                <li>Drag or click a side card to bring it to the center</li>
                <li>
                  The centered stream plays its VOD, description and tako
                  messages right on the page
                </li>
                <li>
                  Click a node on the tentacle below to jump straight to that
                  stream
                </li>
                <li>
                  Use the <b>Search</b> {mobile ? "drawer" : "bar"} to filter
                  milestones by name
                </li>
                <li>
                  Tag toggles filter by type: Highlighted, Important, Gaming,
                  Drawing, Collab, Song, or Has Comment
                </li>
                <li>
                  The <b>【tag】</b> dropdown filters by stream series (e.g.
                  Minecraft, Elden Ring)
                </li>
                <li>
                  Use the <b>Month / Year</b> bar at the bottom to jump to any
                  period
                </li>
                {mobile && (
                  <li>
                    Tap the <b>Search</b> button in the navbar to open filters
                    &amp; navigation
                  </li>
                )}
              </ul>
            </section>

            <div
              style={{
                textAlign: "center",
                opacity: 0.45,
                fontSize: "0.88em",
              }}
            >
              Click anywhere to close
            </div>
          </div>
        </NavHelp>
        {modalControls && <DrawerToggle onClick={handleDrawerToggle} />}
      </Navbar>
      <Content>
        <ScrollList
          milestones={milestones}
          modalControls={modalControls}
          drawerVisible={drawerOpen}
          toggleDrawer={handleDrawerToggle}
        />
      </Content>
    </PageContainer>
  );
};

export default Timeline;
