import React, { useState } from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";
import { Backdrop } from "../Timeline/styles/List";

const Footer = styled.footer`
  position: relative;  
  z-index: 2;
  background: #fba147 0% 0% no-repeat padding-box;
  padding: 25px 0px;
  opacity: 1;
  display: flex;
  width: 100%;

  flex-direction: row;
  justify-content: space-around;

  
  @media only screen and (max-width: 750px) {
    padding: 35px 0px;
    padding-top: 5px;
  }

  .footer-social-container{    
    flex-grow: 2;
    display: flex;
    flex-direction: column;

    justify-content:center;
    
    margin: 10px;

    .social-links {
      margin-left: 30px;

      @media only screen and (max-width: 750px) {
        margin-left: 0px;
      }
    }

    p {
      margin 10px;
    }

  }



  .disclaimer-container { 
    position: absolute;
    width: 80%;
    
    left: 50%;
    bottom: 2%;
    transform: translate(-50%, -30%);

    p {  
      text-align: center;
      font-size: 15px;
      margin: 0px;

      @media only screen and (max-width: 1460px) {
        font-size: 12px;
      }

      @media only screen and (max-width: 950px) {
        font-size: 10px;
      }
      
      @media only screen and (max-width: 750px) {
        font-size: 8px;
      }

      @media only screen and (max-width: 280px) {
        font-size: 5px;
      }
    }
  }

  p{
    
    font-family: 'Montserrat', sans-serif;
    font-size: 35px;
    font-weight: 400;

    letter-spacing: 0px;
    color: #4F415C;

    @media only screen and (max-width: 1460px) {
      font-size: 25px;
    }

    @media only screen and (max-width: 950px) {
      font-size: 20px;
    }

    @media only screen and (max-width: 750px) {
      font-size: 19px;
    }

    @media only screen and (max-width: 475px) {
      font-size: 15px;
    }

    @media only screen and (max-width: 405px) {
      font-size: 12px;
    }

    @media only screen and (max-width: 280px) {
      font-size: 9px;
    }
  }
 

  .fa {
    margin-right: auto;
    margin-top: auto;
  }

  .footer-img-container{
    flex-grow: 2;
    cursor: pointer;
    
    display: flex;
  }

  .footer-img {
    margin: auto;
    max-width: 300px;
    width: 18vw;
    margin-right: 30px;

    @media only screen and (max-width: 950px) {
      width: 100%;
      max-width: 10em;
    }

    @media only screen and (max-width: 750px) {
      max-width: 200px;
      width: 30vw;
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
  transform: translate(-50%, -62%);
  top: 0%;


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
  height: auto;
  margin: 70px auto 0;
  padding: 20px;
  right: 0;
  left: 0;
  top: 0;
  position: fixed;
  background-color: var(--inai-purple);
  border-radius: 15px;
  z-index: 69;

  table {
      font-family: 'Mulish', sans-serif;
  }

  th {
      font-size:25px;
      font-weight: bold;
      border-bottom: 1px solid #ddd;
  }

  td {
      font-size: 17px;
  }

  th, td {
      color: #ffffff;
      padding: 5px 7px;
  }

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
        <div className="social-links">
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
      <div className="disclaimer-container">
        <p>
          This is a fan project. We are not affiliated with or endorsed by Cover Corporation.
        </p>
      </div>
      <Credits
        visible={creditsVisible}
        hideModal={() => setCreditsVisible(false)}
      />
    </Footer>
  );
};

export default HomeFooter;
