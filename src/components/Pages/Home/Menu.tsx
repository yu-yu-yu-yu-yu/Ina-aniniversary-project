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
  { to: "/letters", label: "Letters for Ina" },
  { to: "/playlist", label: "The Ultimate Ina Playlist" },
  { to: "/timeline", label: "Ina's Timeline" },
  { to: "/takodex", label: "Takodex" },
  { to: "/messages", label: "Artworks & Messages" },
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
              This time we celebrate your <b>birthday</b>!
            </p>
            <p>
              We&apos;ve collected <b>artworks and fan letters</b> from
              Takodachis around the world. Takos picked up pen and paper to pour
              their hearts out and send their love directly to you, and we are
              also keeping their letters here on the site for you to come back
              to whenever you want. We also put together the{" "}
              <b>ultimate Ninomae Ina&apos;nis playlist</b> with every single
              song you have ever sung over the years. The <b>outfit timeline</b>{" "}
              has been updated too, with even more of your huge wardrobe on
              display across the years!
            </p>
            <p>
              We are so proud and extremely happy for how much you have achieved
              and how much love you continue to share with all of us.
            </p>
            <p>
              <b>From the bottom of our hearts, thank you so much!</b>
              <br />
              <b>With all our love, Happy Birthday, Ina! 💜🐙</b>
            </p>
            <sub>And Happy Anniversary, Takos!</sub>
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
