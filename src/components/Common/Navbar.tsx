import styled from "styled-components";
import { NavLink } from "react-router-dom";
import React from "react";

export const Navbar = styled.nav`
  background: transparent linear-gradient(180deg, var(--light-background) 90%, var(--dark-highlight) 100%) 0% 0% no-repeat padding-box;
  display: flex;
  position: sticky;
  top: 0;
  z-index: 100;
  flex: 0 1;
  padding: 0.25rem 1rem;
  text-align: left;
  font: normal normal normal 30px/34px montserrat;
  letter-spacing: 0;
  justify-content: space-between;
  align-items: center;
  &.mobile {
    font: normal normal normal 20px/25px Montserrat;
  }
  bottom-shadow: 0px 4px 4px var(--shadow);

  @media only screen and (max-width: 700px) {
    font: normal normal normal 22px/26px montserrat;
  }
`;

export const StyleHome = styled.button`
  possition: fixed;
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
  background: var(--dark-highlight);
  border: 2px solid var(--light-highlight);
  border-radius: 50%;
  width: 41px;
  height: 41px;
  color: var(--light-highlight);
  font-size: 1.3rem;
  font-weight: bold;
  margin-left: 16px;
  margin-right: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
  &:hover {
    background: var(--dark-highlight);
    color: var(--light-highlight);
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
  padding: 16px 22px;
  font-size: 0.5em;
  z-index: 100;
  min-width: 220px;
  max-width: 400px;
`;

export const NavHome = () => {
  return (
    <StyleHome>
      <NavLink exact to="/">
        <i className="fa fa-home" />
      </NavLink>
    </StyleHome>
  );
};
