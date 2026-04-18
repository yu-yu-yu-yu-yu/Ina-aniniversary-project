import styled from "styled-components";

export const Navbar = styled.nav`
  background: var(--inai-purple);
  display: flex;
  position: sticky;
  top: 0;
  z-index: 100;
  flex: 0 1;
  padding: 0.5rem 1.25rem;
  text-align: left;
  font: normal normal normal 35px/40px montserrat;
  letter-spacing: 0;
  justify-content: space-between;
  &.mobile {
    font: normal normal normal 20px/25px Montserrat;
  }
`;