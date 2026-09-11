import React, { useState } from "react";
import {
  NewTag,
  ButtonContainer,
  ButtonsDiv,
  CookieA,
  CookieButton,
  CookieImg,
  CookieLabel,
  CookieLink,
  MenuContainer,
  MenuFlexRow,
  TakoPeek,
} from "./styles/menuStyles";
import { TextBoxContainer } from "../../../styles/globalStyles";
import { TAKO_FILES } from "../../../constants/takos";

const buttons = [
  { to: "/inaoutfit", label: "Ina Ina Outfit!" },
  { to: "/momentsgallery", label: "Moments Gallery" },
  { to: "/wahrld", label: "Ina around the WAHrld" },
  { to: "/playlist", label: "The Ultimate Ina Playlist" },
  { to: "/timeline", label: "Ina's Timeline" },
  { to: "/takodex", label: "Takodex" },
  { to: "/messages", label: "Artworks & Messages" },
  { to: "/letters", label: "Letters for Ina" },
  { href: `${process.env.PUBLIC_URL}Ina Cookbook.pdf`, label: "Tako Cookbook" },
  { to: "/collages", label: "Takollages" },
  { to: "/moments", label: `Ina Moments (2024)` },
  { to: "/wah", label: "WAH (2024)" },
];

const newButtons = [
  "Ina Ina Outfit!",
  "Moments Gallery",
  "Ina around the WAHrld",
];

const updateButtons = [
  "The Ultimate Ina Playlist",
  "Ina's Timeline",
  "Takodex",
  "Artworks & Messages",
];

const Menu = (): JSX.Element => {
  const [peekIndex, setPeekIndex] = useState<number | null>(null);
  const [peekTako, setPeekTako] = useState<string>("");
  const [shakingIndex, setShakingIndex] = useState<number | null>(null);

  const handleHover = (i: number) => {
    setShakingIndex(i);
    setTimeout(() => setShakingIndex(null), 400);
    setPeekTako("");
    setTimeout(() => {
      const file = TAKO_FILES[Math.floor(Math.random() * TAKO_FILES.length)];
      setPeekTako(
        `${process.env.PUBLIC_URL}/takos/${encodeURIComponent(file)}`,
      );
    }, 120);
  };

  return (
    <MenuContainer>
      <MenuFlexRow>
        <TextBoxContainer>
          <div className="Menu-text">
            <p>
              This site was developed by the <b>Tentacult</b> to celebrate{" "}
              <b>Ina&apos;s milestones</b>!
            </p>
            <p>
              It is <b>TAKOTIME</b> to celebrate your <b>6th anniversary</b>!!
            </p>
            <p>
              This time, we collected all sorts of things from all over, from
              artwork to photos! From the world to you, takos share their
              support!! <b>World Domination!!</b> In the{" "}
              <b>Ina Around the WAHld</b> section, takos showed that we are
              everywhere!! <b>WE ARE HERE!!</b>
            </p>
            <p>
              We made tributes for all the amazing and fun moments that we
              spent over these six years. These can be found in the{" "}
              <b>Moment Gallery</b> so we can remember them forever. Each
              moment is like a piece of art made by you, your friends, and us,
              and we will all cherish them always.
            </p>
            <p>
              Of course, as always, there are updates to other pages of the
              site as well! New outfits illustrated by talented takos, new
              song entries in the playlist, a timeline that is now up to date,
              and new tako variants registered in the <b>Takodex</b>!
            </p>
            <p>
              Things have changed so much as the years have gone by, but you
              will always have our support. We couldn&apos;t be prouder to be{" "}
              <b>Takodachis</b>, since we have such an amazing{" "}
              <b>priestess</b>.
            </p>
            <p>
              <b>From many takos around the world, thank you so much!</b>
              <br />
              <b>With all our love, Happy Anniversary, Ina! 💜🐙</b>
            </p>
          </div>
        </TextBoxContainer>
        <ButtonsDiv>
          {buttons.map((btn, i) => (
            <ButtonContainer
              key={btn.label}
              onMouseEnter={() => {
                setPeekIndex(i);
                handleHover(i);
              }}
              onMouseLeave={() => setPeekIndex(null)}
              style={{ position: "relative" }}
            >
              {newButtons.includes(btn.label) && <NewTag>New!</NewTag>}
              {updateButtons.includes(btn.label) && <NewTag>Update!</NewTag>}
              <TakoPeek
                className="tako-peek"
                src={peekTako}
                alt="peeking tako"
                active={peekIndex === i && !!peekTako}
                style={{ visibility: peekTako ? "visible" : "hidden" }}
              />
              {"to" in btn ? (
                <CookieLink to={btn.to} role="button">
                  <CookieButton title={btn.label} $shaking={shakingIndex === i}>
                    <CookieImg
                      src={process.env.PUBLIC_URL + "/cookie.png"}
                      alt="cookie"
                    />
                    <CookieLabel>{btn.label}</CookieLabel>
                  </CookieButton>
                </CookieLink>
              ) : (
                <CookieA
                  href={btn.href}
                  role="button"
                  target={btn.label === "Takollages" ? "_blank" : undefined}
                  rel={
                    btn.label === "Takollages"
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  <CookieButton title={btn.label} $shaking={shakingIndex === i}>
                    <CookieImg
                      src={process.env.PUBLIC_URL + "/cookie.png"}
                      alt="cookie"
                    />
                    <CookieLabel>{btn.label}</CookieLabel>
                  </CookieButton>
                </CookieA>
              )}
            </ButtonContainer>
          ))}
        </ButtonsDiv>
      </MenuFlexRow>
    </MenuContainer>
  );
};

export default Menu;
