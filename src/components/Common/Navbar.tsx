import styled from "styled-components";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import { breakpoints, zIndex } from "../../styles/tokens";

export const Navbar = styled.nav`
  background: transparent
    linear-gradient(
      180deg,
      var(--light-background) 90%,
      var(--dark-highlight) 100%
    )
    0% 0% no-repeat padding-box;
  display: flex;
  position: sticky;
  top: 0;
  z-index: ${zIndex.nav};
  flex: 0 1;
  padding: 0.25rem 1rem;
  text-align: left;
  font: normal normal normal 30px/34px Montserrat;
  letter-spacing: 0;
  justify-content: space-between;
  align-items: center;
  &.mobile {
    font: normal normal normal 20px/25px Montserrat;
  }

  @media only screen and (max-width: ${breakpoints.mobile}px) {
    font: normal normal normal 22px/26px Montserrat;
  }
`;

export const StyleHome = styled(NavLink)`
  font-size: inherit;
  background: var(--dark-highlight);
  border: 2px solid var(--light-highlight);
  border-radius: 50%;
  width: 1.4em;
  height: 1.4em;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;

  transition:
    background 0.2s,
    color 0.2s,
    border 0.2s;

  .fa-home {
    color: var(--light-highlight);
  }

  &:hover {
    background: var(--dark-highlight);
    border: 2px solid var(--light-highlight);
  }
`;

export const HintButton = styled.button`
  font: normal normal 700 13px/18px Montserrat;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  background: var(--dark-highlight);
  color: var(--text-color);
  border: 2px solid var(--light-highlight);
  border-radius: 10px;
  padding: 8px 14px;
  margin-left: 8px;
  margin-right: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  flex-shrink: 0;
  transition: opacity 0.2s;
  @media only screen and (max-width: ${breakpoints.mobile}px) {
    padding: 8px 10px;
    gap: 0;
    .btn-text {
      display: none;
    }
  }
  &:hover {
    opacity: 0.8;
  }
`;

export const HintPopover = styled.div`
  position: absolute;
  top: 60px;
  right: 10px;
  background: var(--dark-highlight);
  color: var(--text-color);
  border: 2px solid var(--light-highlight);
  border-radius: 12px;
  box-shadow: 0 4px 16px var(--shadow);
  padding: 16px 20px;
  font-size: clamp(12px, 0.5em, 15px);
  z-index: ${zIndex.nav};
  min-width: 260px;
  max-width: min(90vw, 460px);
  max-height: 80vh;
  overflow-y: auto;
`;

export const NavHome = () => {
  return (
    <StyleHome exact to="/">
      <i className="fa fa-home" />
    </StyleHome>
  );
};

export const NavHelp = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}): JSX.Element => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ flex: "0 0 auto", position: "relative" }}>
      <HintButton
        aria-label={label}
        title={label}
        onClick={() => setOpen((v) => !v)}
      >
        <i className="fa fa-question-circle" aria-hidden="true" />
        <span className="btn-text">Help</span>
      </HintButton>
      {open && (
        <HintPopover onClick={() => setOpen(false)}>{children}</HintPopover>
      )}
    </div>
  );
};
