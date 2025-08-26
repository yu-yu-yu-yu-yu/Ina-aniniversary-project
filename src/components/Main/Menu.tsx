import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MenuContainer = styled.div`
  text-align: center;
  padding-top: 150px;
  padding-bottom: 150px;
  background: var(--unnamed-color-f3edff)
    url(${process.env.PUBLIC_URL}/Pattern2.png) 0 0;
  background-attachment: fixed;
  background-size: 180px;
    z-index: 1;
  @media only screen and (max-width: 701px) {
    padding-top: auto;
    padding-bottom: 150px; 
  }
`;

const MenuTextContainer = styled.div`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  padding-top: 10px;
  z-index: 3;
  
  @media only screen and (max-width: 1100px) {
    left: auto;
    transform: none;
    width: 100%;
  }

  &:before {
    content: "";
    display: block;
    width: 60px;
    height: 4px;
    background-color: var(--inai-purple);
    margin: 0 auto 20px auto;
    border-radius: 2px;
  }

  .Menu-text {
    padding: 10px 35px;
    margin: 0 auto 35px auto;
    max-width: 600px;
    background: #564f68 0% 0% no-repeat padding-box;
    border-radius: 32px;
    opacity: 1;

    color: var(--unnamed-color-f3edff);
    text-align: justify;
    font-family: "Mulish", sans-serif;
    font-size: 25px;
    font-weight: 300;

    b {
      font-weight: 800;
    }

    hr {
      border-bottom: 0.5px solid #f3edff;
    }

    @media only screen and (max-width: 1400px) {
      max-width: 400px;
      font-size: 20px;
    }

    @media only screen and (max-width: 1100px) {
      display: inline-block;
      max-width: 550px;
      width: 70%;
      text-align: left;
      font-size: 17px;
    }

    @media only screen and (max-width: 701px) {
      padding: 25px;
    }
  }

  .buttons-div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 50px;
    column-gap: 30px;
    justify-items: center;
    padding-top: 30px;
    padding-bottom: 30px;

    @media only screen and (max-width: 1080px) {
      row-gap: 50px;
      column-gap: 25px;
    }

    @media only screen and (max-width: 1100px) {
      grid-template-columns: repeat(2, 1fr);
      row-gap: 40px;
      column-gap: 20px;
      padding-top: 30px;
      padding-bottom: 30px;
    }

    @media only screen and (max-width: 701px) {
      grid-template-columns: 1fr;
      row-gap: 40px;
      column-gap: 0;
    }
  }

  .buttons-div .bio-button {
    background: var(--inai-purple) 0% 0% no-repeat padding-box;
    border: 0;
    border-radius: 24px;
    color: #ffffff;
    font-weight: bold;
    text-align: center;
    white-space: nowrap;
    padding: 20px 40px;
    margin: 15px;

    &.disabled {
      pointer-events: none;
      opacity: 0.6;
    }

    &.blur {
      opacity: 0.6;
    }

    @media only screen and (max-width: 1400px) {
      font-size: 22px;
      padding: 15px 30px;
    }

    @media only screen and (max-width: 1100px) {
      font-size: 17px;
      padding: 10px 15px;
      width: 110px;
    }
  }
`;

const TAKO_COUNT = 72;

const ButtonContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 180px;
  height: 180px;
  margin: 28px;
  z-index: 1;
  overflow: visible;
`;

interface TakoPeekProps {
    active: boolean;
}
const TakoPeek = styled.img<TakoPeekProps>`
  position: absolute;
  left: 50%;
  top: 5px;
  width: 80px;
  pointer-events: none;
  z-index: 0;
  transition: transform 0.4s cubic-bezier(.4,2,.6,1);
  transform: translateX(-50%)
    translateY(${props => (props.active ? '-80px' : '20px')})
    scale(${props => (props.active ? 1.1 : 1)});
`;

const CookieImg = styled.img<{ rotation: number }>`
  width: 180px;
  height: 180px;
  display: block;
  margin: 0 auto;
  transform: rotate(${({ rotation }) => rotation}deg);
  transition: transform 0.2s;
`;

const CookieButton = styled.button`
  width: 180px;
  height: 180px;
  border: none;
  background: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  outline: none;
  margin: 0 16px 24px 16px;
  position: relative;
`;

const CookieLabel = styled.span`
  font-size: 1.2rem;
  font-weight: 1000;
  color: #38250aff;
  text-shadow:
    2px 2px 0 #fff,
    0 1px 0 #fff8;
  margin-top: -105px;
  text-align: ceter;
  width: 200px;
  z-index: 1;
`;

const CookieLink = styled(Link)`
  all: unset;
  cursor: pointer;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CookieA = styled.a`
  all: unset;
  cursor: pointer;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const buttons = [
    { to: "/messages", label: "Messages" },
    { to: "/moments", label: "Moments (2024)" },
    { to: "/wah", label: "WAH (2024)" },
    { href: `${process.env.PUBLIC_URL}Ina Cookbook.pdf`, label: "Tako cookbook" },
    { href: `${process.env.PUBLIC_URL}/collage.png`, label: "Secret" },
    { to: "/takodex", label: "Test Takodex List" },
    { to: "/timeline", label: "Ina's Timeline" },
];

const Menu = (): JSX.Element => {
    const [peekIndex, setPeekIndex] = useState<number | null>(null);
    const [peekTako, setPeekTako] = useState<string>("");

    const handleHover = () => {
        const idx = Math.floor(Math.random() * TAKO_COUNT);
        setPeekTako(`${process.env.PUBLIC_URL}/takos/${idx}.png`);
    };

    return (
        <MenuContainer>
            <MenuTextContainer>
                <div className="Menu-text">
                    <p>
                        This site was developed by the <b>Tentacult</b> to celebrate <b>Ina&apos;s milestones</b>!
                    </p>
                    <p>
                        This time we honor her <b>5th anniversary since debut</b>!
                    </p>
                    <p>
                        We&apos;ve collected <b>congratulatory messages</b> and <b>artworks</b> from Takodachis around the world and also updated the <b>timeline</b> with all of her streams and achievements.
                    </p>
                    <p>
                        And now we are introducing the <b>TakoDex</b>!
                    </p>
                    <p>
                        We are so proud and extremely happy for how much she has achieved in these five years.
                    </p>
                    <p>
                        <b>Thank you so much</b> from all Takodachis, and <b>Happy Anniversary Ina</b>!
                    </p>
                </div>
                <div className="buttons-div" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                    {buttons.map((btn, i) => {
                        const rotation = (i * 37) % 360;
                        return (
                            <ButtonContainer
                                key={btn.label}
                                onMouseEnter={() => {
                                    setPeekIndex(i);
                                    handleHover();
                                }}
                                onMouseLeave={() => setPeekIndex(null)}
                            >
                                <TakoPeek
                                    className="tako-peek"
                                    src={peekTako}
                                    alt="peeking tako"
                                    active={peekIndex === i && !!peekTako}
                                    style={{ visibility: peekTako ? 'visible' : 'hidden' }}
                                />
                                {"to" in btn ? (
                                    <CookieLink to={btn.to} role="button">
                                        <CookieButton title={btn.label}>
                                            <CookieImg
                                                src={process.env.PUBLIC_URL + "/cookie.png"}
                                                alt="cookie"
                                                rotation={rotation}
                                            />
                                            <CookieLabel>{btn.label}</CookieLabel>
                                        </CookieButton>
                                    </CookieLink>
                                ) : (
                                    <CookieA
                                        href={btn.href}
                                        role="button"
                                        target={btn.label === "Secret" ? "_blank" : undefined}
                                        rel={btn.label === "Secret" ? "noopener noreferrer" : undefined}
                                    >
                                        <CookieButton title={btn.label}>
                                            <CookieImg
                                                src={process.env.PUBLIC_URL + "/cookie.png"}
                                                alt="cookie"
                                                rotation={rotation}
                                            />
                                            <CookieLabel>{btn.label}</CookieLabel>
                                        </CookieButton>
                                    </CookieA>
                                )}
                            </ButtonContainer>
                        );
                    })}
                </div>
            </MenuTextContainer>
        </MenuContainer>
    );
};

export default Menu;
