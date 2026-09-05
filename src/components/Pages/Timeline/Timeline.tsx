import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { DrawerToggle, ScrollList } from "./ScrollList";
import { Milestone } from "../../../types";
import { Navbar, NavHome, HintButton, HintPopover } from "../../Common/Navbar";
import { PageContainer, PageTitle } from "./styles/List";

const Content = styled.div`
  flex: 1;
  display: flex;
`;

export const Timeline = ({
  milestones,
}: {
  milestones: Milestone[];
}): JSX.Element => {
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
    <PageContainer>
      <Navbar
        ref={navBarRef}
        className={mobile ? "mobile" : ""}
        style={{ alignItems: "center" }}
      >
        <NavHome />
        <PageTitle>Timeline</PageTitle>
        <div style={{ flex: "0 0 auto", position: "relative" }}>
          <HintButton
            aria-label="Show timeline usage hint"
            onClick={() => setHintOpen((v) => !v)}
            title="Show timeline usage hint"
          >
            <i className="fa fa-question-circle" aria-hidden="true" /> Help
          </HintButton>
          {hintOpen && (
            <HintPopover onClick={() => setHintOpen(false)}>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 10 }}
              >
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
                    {mobile ? (
                      <li>Scroll vertically to browse the current month</li>
                    ) : (
                      <li>
                        Drag horizontally to scroll through the current month
                      </li>
                    )}
                    <li>
                      Click a thumbnail to see full details, date and notes
                    </li>
                    <li>
                      Use the <b>Search</b> {mobile ? "drawer" : "bar"} to
                      filter milestones by name
                    </li>
                    <li>
                      Tag toggles filter by type: Highlighted, Important,
                      Gaming, Drawing, Collab, Song, or Has Comment
                    </li>
                    <li>
                      The <b>【tag】</b> dropdown filters by stream series (e.g.
                      Minecraft, Elden Ring)
                    </li>
                    <li>
                      Use the <b>Month / Year</b> bar at the bottom to jump to
                      any period
                    </li>
                    {mobile && (
                      <li>
                        Tap the <b>Search</b> button in the navbar to open
                        filters &amp; navigation
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
            </HintPopover>
          )}
        </div>
        {modalControls && <DrawerToggle onClick={handleDrawerToggle} />}
      </Navbar>
      <Content>
        <ScrollList
          milestones={milestones}
          mobile={mobile}
          modalControls={modalControls}
          drawerVisible={drawerOpen}
          toggleDrawer={handleDrawerToggle}
        />
      </Content>
    </PageContainer>
  );
};
