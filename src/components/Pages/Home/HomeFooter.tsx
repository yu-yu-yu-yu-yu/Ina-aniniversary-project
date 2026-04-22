import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Backdrop } from "../Timeline/styles/List";
import { CreditsModal, Footer, AoLogo } from "./styles/footerStyles";

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
                <a href="https://dova-s.jp/" target="_blank" rel="noopener noreferrer">
                  DOVA-SYNDROME
                </a>
              </td>
              <td>
                BGM
              </td>
            </tr>
            <tr>
              <td>
                rinh, eLun, Takomonty, floomf, Sei, LuLu, Malvar0.0, kshut, m-pien, Yoru, Younhand, Kais3r, NowaruArt, Eyeye, JangJang, Taiki, RCSI, Teo, Diana, Applejuice, Wydken, Astraea
              </td>
              <td>
                Timeline Banner Outfit Artworks
              </td>
            </tr>
            <tr>
              <td>
                StrawberryCandy, Sock
              </td>
              <td>
                All for One Banner Planning and Organizing
              </td>
            </tr>
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
              <td>
                <a
                  href="https://twitter.com/NexoZerok"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  NxKarim
                </a>
              </td>
              <td>Planning(2025), Developer, General contribution</td>
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
            <tr>
              <td>
                <a href="https://x.com/Ryusei_Kiiro"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ryusei
                </a>
              </td>
              <td>General contribution</td>
            </tr>
            <tr>
              <td>Graphic design</td>
              <td>My passion</td>
            </tr>
            <tr>
              <td>That cookie</td>
              <td>man that cookie was so good</td>
            </tr>
            <br />
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
              <td>For being so cute and cool and our priestess, Homepage Ina art</td>
            </tr>
          </tbody>
        </table>
        <hr />
        <p>
          And thanks to all the amazing takos that contributed their wonderful
          moments and supportive messages!
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
