import React, { useState } from "react";
import { NewTag, ButtonContainer, ButtonsDiv, CookieA, CookieButton, CookieImg, CookieLabel, CookieLink, MenuContainer, MenuFlexRow, MenuTextContainer, TakoPeek } from "./styles/menuStyles";

const TAKO_COUNT = 72;

const buttons = [
  { to: "/timeline", label: "Ina's Timeline" },
  { to: "/takodex", label: "Takodex" },
  { to: "/messages", label: "Messages" },
  { href: `${process.env.PUBLIC_URL}Ina Cookbook.pdf`, label: "Tako Cookbook" },
  { to: "/collages", label: "Takollages" },
  { to: "/moments", label: `Ina Moments (2024)` },
  { to: "/wah", label: "WAH (2024)" },
];

const newButtons = ["Ina's Timeline", "Takodex", "Messages"];

const Menu = (): JSX.Element => {
  const [peekIndex, setPeekIndex] = useState<number | null>(null);
  const [peekTako, setPeekTako] = useState<string>("");
  const [shakingIndex, setShakingIndex] = useState<number | null>(null);

  const handleHover = (i: number) => {
    setShakingIndex(i);
    setTimeout(() => setShakingIndex(null), 400);
    const idx = Math.floor(Math.random() * TAKO_COUNT);
    setPeekTako(`${process.env.PUBLIC_URL}/takos/${idx}.png`);
  };

  return (
    <MenuContainer>
      <MenuFlexRow>
        <MenuTextContainer>
          <div className="Menu-text">
            <p>
              This site was developed by the <b>Tentacult</b> to celebrate <b>Ina&apos;s milestones</b>!
            </p>
            <p>
              This time we honor her <b>5th anniversary since debut</b>!
            </p>
            <p>
              We&apos;ve collected <b>congratulatory messages</b> and <b>artworks</b> from Takodachis around the world.
            </p>
            <p>
              We also updated the <b>timeline</b> with her cute outfits across the years, all her streams and milestones.
              Takodachis also shared their memories of their favorite streams!
              And now we are introducing the <b>TakoDex</b> with entries from the community, explaining the many Takodachi variants there are.
            </p>
            <p>
              We are so proud and extremely happy for how much she has achieved in these five years.
            </p>
            <p>
              <b>From the bottom of our hearts, thank you so much!</b><br />
              <b>With all our love, Happy 5th Anniversary, Ina! 💜🐙</b>
            </p>
            <sub>And Happy Birthday Takos!</sub>
          </div>

        </MenuTextContainer>
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
              {newButtons.includes(btn.label) && (
                <NewTag>New</NewTag>
              )}
              <TakoPeek
                className="tako-peek"
                src={peekTako}
                alt="peeking tako"
                active={peekIndex === i && !!peekTako}
                style={{ visibility: peekTako ? 'visible' : 'hidden' }}
              />
              {"to" in btn ? (
                <CookieLink to={btn.to} role="button">
                  <CookieButton
                    title={btn.label}
                    $shaking={shakingIndex === i}
                  >
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
                  rel={btn.label === "Takollages" ? "noopener noreferrer" : undefined}
                >
                  <CookieButton
                    title={btn.label}
                    $shaking={shakingIndex === i}
                  >
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
