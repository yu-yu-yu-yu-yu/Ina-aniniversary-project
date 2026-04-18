import styled from "styled-components";

export const Navbar = styled.nav`
  background: var(--inai-purple);
  display: flex;
  position: sticky;
  z-index: 100;
  top: 0;
  flex: 0 1;
  padding: 0.9rem 1.25rem;
  text-align: left;
  font: normal normal normal 3em montserrat;
  letter-spacing: 0;
  justify-content: space-between;
`;

export const NavLinkContainer = styled.div`
  flex-grow: 2;
`;

export const Title = styled.h2`
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

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 18px;
  margin: 48px auto;
  width: 90%;
`;

export const Card = styled.div`
  background: var(--ika-purple);
  border-radius: 12px;
  box-shadow: 0 4px 16px #0003;
  padding: 18px;
  text-align: center;
`;

export const Thumbnail = styled.img`
  width: 25rem;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 2px 8px #0002;
`;

export const CollageTitle = styled.h3`
  margin: 16px 0 8px 0;
  color: var(--ina-orange);
  font-size: 1.25em;
`;

export const Description = styled.p`
  color: var(--text-color);
  font-size: 1em;
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.7);
  z-index: 1000;
`;

export const ModalImg = styled.img`
  position: fixed;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  max-width: 90vw;
  max-height: 90vh;
  border-radius: 12px;
  box-shadow: 0 4px 32px #0008;
  z-index: 1001;
`;