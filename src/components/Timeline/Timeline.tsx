import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { DrawerToggle, ScrollList } from "./ScrollList";
import { Milestone } from "./Milestone";
import { NavLink } from "react-router-dom";
import { NavLinkContainer } from "./styles/List";
import { Banner } from "./Banner";

const Container = styled.div`
  flex-direction: column;
  display: flex;
  flex: 1;
  color: var(--ika-purple);
`;

const Navbar = styled.nav`
  background: var(--inai-purple);
  display: flex;
  position: sticky;
  top: 0;
  z-index: 100;
  flex: 0 1;
  padding: 0.9rem 1.25rem;
  text-align: left;
  font: normal normal normal 45px/55px montserrat;
  letter-spacing: 0;
  justify-content: space-between;
  &.mobile {
    font: normal normal normal 25px/30px Montserrat;
  }
`;

const Content = styled.div`
  flex: 1;
  display: flex;
`;

const TimelineTitle = styled.h2`
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

const HintButton = styled.button`
  background: var(--ina-orange);
  border: none;
  border-radius: 50%;
  width: 38px;
  height: 38px;
  color: var(--ika-purple);
  font-size: 1.5rem;
  font-weight: bold;
  margin-left: 16px;
  margin-right: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
  &:hover {
    background: var(--ika-purple);
    color: var(--ina-orange);
  }
`;

const HintPopover = styled.div`
  position: absolute;
  top: 60px;
  right: 10px;
  background: var(--ika-purple);
  color: #fff;
  border: 2px solid var(--ina-orange);
  border-radius: 12px;
  box-shadow: 0 4px 16px #0003;
  padding: 16px 22px;
  font-size: 0.5em;
  z-index: 100;
  min-width: 220px;
  max-width: 400px;
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

  // const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   setFlavour(event.target.value);
  // };

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
        <NavLinkContainer style={{ flex: "0 0 auto" }}>
          <NavLink exact to="/">
            <i className="fa fa-angle-left" /> Return
          </NavLink>
        </NavLinkContainer>
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
      <div style={{ width: "90%", margin: "0 auto", borderTop: "3px solid var(--ika-purple)", marginBottom: "18px", marginTop: "18px" }} />
      <h2 style={{ textAlign: "center", color: "var(--ika-purple)", margin: "0 0 18px 0", fontWeight: 700, fontSize: "2.5em", letterSpacing: "1.5px" }}>
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
