import React, { useState } from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";
import { Backdrop } from "../Timeline/styles/List";

const Footer = styled.footer`
  position: relative;  
  z-index: 2;
  background: #fba147 0% 0% no-repeat padding-box;
  opacity: 1;
  display: flex;
  width: 100%;

  flex-direction: row;
  justify-content: space-around;

  
  .footer-social-container{    
    flex-grow: 2;
    display: flex;
    flex-direction: column;
    

    a{
      margin: auto;
    }

  }

  .disclaimer-container{ 
      flex-grow: 1;
      max-width 35vw;
      margin-top: 40px;
      text-align: center;  

      @media only screen and (max-width: 950px) {
        margin: auto;
      }
  }

  p{
    
    font: normal normal normal 35px/43px Montserrat;
    letter-spacing: 0px;
    color: #4F415C;

    @media only screen and (max-width: 1460px) {
      font: normal normal normal 25px/35px Montserrat;
      letter-spacing: 0px;
    }

    @media only screen and (max-width: 950px) {
      font: normal normal normal 20px/20px Montserrat;
      letter-spacing: 0px;
    }

    @media only screen and (max-width: 750px) {
      font: normal normal normal 11px/14px Montserrat;
    }

    @media only screen and (max-width: 280px) {
      font: normal normal normal 9px/11px Montserrat;
    }
  }
 

  .fa {
    margin-right: auto;
    margin-top: auto;
  }

  .footer-img-container{
    flex-grow: 2;
    
    // margin-left: auto;
    display: flex;
  }

  .footer-img {
    margin: auto;
    max-width: 300px;
    width: 18vw;
    // margin-left: auto;

    @media only screen and (max-width: 950px) {
      width: 100%;
      max-width: 10em;
    }

    @media only screen and (max-width: 750px) {
      max-width: 120px;
      width: 15vw;
    }

    @media only screen and (max-width: 350px) {
      max-width: 100px;
    }

    @media only screen and (max-width: 270px) {
      display: none;
    }


  }

  i{
    font-size: 48px; 
    color: #4F415C;

    @media only screen and (max-width: 950px) {
      font-size: 24px; 
    }
  }

`;

const AoLogo = styled.div`
  z-index: 2;
  position: absolute;
  left: 50%;
  margin-top: -7em;

  @media only screen and (max-width: 1200px) {
    margin-top: -4.6em;
  }

  img {
    width: 120px;

    @media only screen and (max-width: 1200px) {
      width: 80px;
    }
  }

  @media only screen and (max-width: 950px) {
    display: none;
  }
`;

const CreditsModal = styled.div`
  width: 600px;
  height: 343px;
  margin: 70px auto 0;
  right: 0;
  left: 0;
  top: 0;
  position: fixed;
  background-color: var(--inai-purple);
  border-radius: 15px;
  z-index: 69;
`;

const Credits = ({
  visible,
  hideModal,
}: {
  visible?: boolean;
  hideModal: () => void;
}) => {
  if (!visible) return null;
  return ReactDOM.createPortal(
    <>
      <Backdrop onClick={hideModal} />
      <CreditsModal>
        <table>
          <thead>
            <tr>
              <th colSpan={3}>Credits</th>
            </tr>
          </thead>
          <tr>
            <td>yuyu</td>
            <td>ﾕﾕ#2434</td>
            <td>Developer</td>
          </tr>
          <tr>
            <td>@Kimchi</td>
            <td>Kinji#8200</td>
            <td>Developer</td>
          </tr>
          <tr>
            <td>Frogo</td>
            <td>losfroger#8927</td>
            <td>Art assets,Design</td>
          </tr>
          <tr>
            <td>@Braincell #0901 | swoog</td>
            <td>swoog#0901</td>
            <td>Art assets, General Contribution</td>
          </tr>
          <tr>
            <td>Lynn</td>
            <td>Lynn#0572</td>
            <td>Planning, General Contribution</td>
          </tr>
          <tr>
            <td>Braincell #88 | Unidachi88</td>
            <td>Uni#9971</td>
            <td>General Contribution</td>
          </tr>
          <tr>
            <td>Braincell #3698 || Rift</td>
            <td>Rift#6565</td>
            <td>General Contribution</td>
          </tr>
          <tr>
            <td>Chroneco</td>
            <td>@Chroneco</td>
            <td>Tako loading animation</td>
          </tr>
          <tr>
            <td>Ninomae Ina’nis</td>
            <td>@ninomaeinanis</td>
            <td>Ina L2D Homepage art</td>
          </tr>
          <tr>
            <td>Shikabashi</td>
            <td>@Shikabashi</td>
            <td>Ina L2D Homepage animation</td>
          </tr>
          <tr>
            <td>Graphic design</td>
            <td />
            <td>My passion</td>
          </tr>
        </table>
      </CreditsModal>
    </>,
    document.getElementById("root") as HTMLElement
  );
};

const HomeFooter = (): JSX.Element => {
  const [creditsVisible, setCreditsVisible] = useState(false);
  return (
    <Footer>
      <AoLogo>
        <img
          alt="Ao-chan Logo"
          src={`${process.env.PUBLIC_URL}/AOPatternFilledIn.png`}
        />
      </AoLogo>
      <div className="footer-social-container">
        <a href="https://twitter.com/ninomaeinanis">
          <p>
            <i className="fa fa-twitter"></i> @ninomaeinanis
          </p>
        </a>
        <a
          rel="stylesheet"
          href="https://www.youtube.com/channel/UCMwGHR0BTZuLsmjY_NT5Pwg"
        >
          <p>
            <i className="fa fa-youtube-play"></i> Ninomae Ina&apos;nis Ch.
          </p>
        </a>
      </div>
      <div className="disclaimer-container">
        <p>
          This is a fan project. We are not affiliated or endorsed by Cover Corporation.
        </p>
      </div>
      <div
        className="footer-img-container"
        onClick={() => setCreditsVisible(true)}
      >
        <img
          alt="mini-ina"
          className="footer-img"
          src={`${process.env.PUBLIC_URL}/MiniIna.png`}
        />
      </div>
      <Credits
        visible={creditsVisible}
        hideModal={() => setCreditsVisible(false)}
      />
    </Footer>
  );
};

export default HomeFooter;
