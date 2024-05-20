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

  @media only screen and (min-width: 1100px) and (max-height: 800px){
    margin-top: 90px;
  }

  @media only screen and (min-width: 1300px) and (max-height: 800px){
    margin-top: 50px;
  }
  
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
      display: inline-block;
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

    img{
      cursor: pointer;
    }
    
    display: flex;
  }

  .footer-img {
    margin: auto;
    max-width: 500px;
    width: 20vw;
    margin-right: 30px;

    @media only screen and (max-width: 950px) {
      width: 100%;
      max-width: 30vw;
    }

    @media only screen and (max-width: 750px) {
      max-width: 250px;
      width: 40vw;
    }

    @media only screen and (max-width: 350px) {
      max-width: 150px;
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
  padding: 20px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--inai-purple);
  border-radius: 15px;
  z-index: 69;
  color: #ffffff;

  font-family: "Mulish", sans-serif;

  a {
    font-weight: bold;
    color: #ffffff;
    transition: all 0.2s ease-in-out;
  }

  a:hover {
    text-shadow: 0px 0px 20px #0f0f0f;
  }

  @media only screen and (max-width: 700px) {
    width: 80%;
  }

  table {
    width: 100%;
  }

  th {
    text-align: left;
    font-size: 25px;
    font-weight: bold;
    border-bottom: 1px solid #ddd;
  }

  td {
    font-size: 17px;
    @media only screen and (max-width: 700px) {
      font-size: 15px;
    }
    @media only screen and (max-width: 320px) {
      font-size: 12px;
    }
  }

  th,
  td {
    padding: 2px 10px;
  }

  p {
    font-weight: 200;
    text-align: center;
    font-size: 16px;
  }

  hr {
    border: 0;
    border-bottom: 1px solid #ddd;
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
              <th colSpan={2}>Credits</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a
                  href="https://twitter.com/chrone_co"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chroneco
                </a>
              </td>
              <td>Loading animation</td>
            </tr>
            <tr>
              <td>
                <a
                  href="https://twitter.com/KinjiDD"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Kinji
                </a>
              </td>
              <td>Developer</td>
            </tr>
            <tr>
              <td>
                <a
                  href="https://twitter.com/losfroger"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Losfroger
                </a>
              </td>
              <td>Art assets, Design</td>
            </tr>
            <tr>
              <td>Lynn</td>
              <td>Planning, General contribution</td>
            </tr>
            <tr>
              <td>
                <a
                  href="https://twitter.com/ninomaeinanis"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ninomae Ina&#39;nis
                </a>
              </td>
              <td>Homepage Ina art</td>
            </tr>
            <tr>
              <td>
                <a
                  href="https://twitter.com/RiftyRifto"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rift
                </a>
              </td>
              <td>General contribution</td>
            </tr>
            <tr>
              <td>
                <a
                  href="https://twitter.com/Shikabashi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Shikabashi
                </a>
              </td>
              <td>Homepage Ina art (S2D animation)</td>
            </tr>
            <tr>
              <td>
                <a
                  href="https://twitter.com/swoog10"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Swoog
                </a>
              </td>
              <td>Art assets, General contribution</td>
            </tr>
            <tr>
              <td>
                <a
                  href="https://twitter.com/YesThatUni"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Uni88
                </a>
              </td>
              <td>General contribution</td>
            </tr>
            <tr>
              <td>Yuyu</td>
              <td>Developer</td>
            </tr>
            <tr>
              <td>Graphic design</td>
              <td>My passion</td>
            </tr>
            <tr>
              <td>
                <a href="https://twitter.com/lyudmilia"
                     target="_blank"
                     rel="noopener noreferrer"
                >
                Lyudmilia
                </a>
              </td>
              <td>Planning, General contribution</td>
            </tr>
            <tr>
              <td>
                <a href="https://twitter.com/wololoSensei"
                   target="_blank"
                   rel="noopener noreferrer"
                >
                  1st Killer
                </a>
              </td>
              <td>Planning, General contribution</td>
            </tr>
          </tbody>
        </table>
        <hr />
        <p>
          And thanks to all the amazing takos that contributed their wonderful
          art and supportive messages!
        </p>
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
          <br />
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
      <div className="footer-img-container">
        <img
          alt="mini-ina"
          className="footer-img"
          src={`${process.env.PUBLIC_URL}/MiniIna.png`}
          onClick={() => setCreditsVisible(true)}
        />
      </div>
      <div className="disclaimer-container">
        <p>
          This is a fan project. We are not affiliated with or endorsed by Cover
          Corporation.
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
