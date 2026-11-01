import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import Logo from "./Logo";
import FloatingTakos from "./FloatingTakos";
import FloatingBalloons from "./FloatingBalloons";
import { useMute } from "../../Common/MuteButton";
import { useAudio } from "../../../hooks/useAudio";
import {
  BOOK_FONT_SRC,
  COVER_FRONT,
  SPINE,
  SPINE_RATIO,
} from "../Takonomicon/assets";
import { markIntroSeen } from "./introFlag";
import { zIndex } from "../../../styles/tokens";

const IDLE_MS = 10000;
const GLITCH_START_MS = 3000;
const SLOW_MS = 4200;
const FADE_MS = 6000;
const SPINE_MS = 3000;
const TEXT_DELAY_MS = 1800;
const TEXT_MS = 2400;
const BGM_END_RATE = 0.5;
const BGM_VOLUME = 0.1;

const TOP_TEXT = "Magic pages open wide";
const BOTTOM_TEXT = "Spilling secrets from inside";

type Phase = "idle" | "slowing" | "dark" | "book";

const IntroFont = createGlobalStyle`
  @font-face {
    font-family: "Takohuyk";
    src: url(${BOOK_FONT_SRC}) format("truetype");
    font-display: block;
  }
`;

const Home = styled.div`
  position: relative;
  width: 100%;
  max-width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: var(--background);
`;

const Overlay = styled.div<{ $on: boolean }>`
  position: fixed;
  inset: 0;
  z-index: ${zIndex.intro};
  pointer-events: ${({ $on }) => ($on ? "auto" : "none")};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled.div<{ $on: boolean }>`
  position: absolute;
  inset: 0;
  z-index: -1;
  background: #000;
  will-change: opacity;
  opacity: ${({ $on }) => ($on ? 1 : 0)};
  transition: opacity ${FADE_MS}ms ease-in-out;
`;

const SpineButton = styled.button<{ $on: boolean }>`
  all: unset;
  cursor: pointer;
  will-change: opacity;
  opacity: ${({ $on }) => ($on ? 1 : 0)};
  transition:
    opacity ${SPINE_MS}ms ease-in-out,
    transform 0.4s ease,
    filter 0.4s ease;
  filter: drop-shadow(0 0 24px rgba(171, 189, 240, 0.35));

  &:hover,
  &:focus-visible {
    transform: translateY(-8px);
    filter: drop-shadow(0 0 36px rgba(232, 201, 255, 0.7));
  }
`;

const SpineImg = styled.img`
  display: block;
  height: 70vh;
  width: auto;
  aspect-ratio: ${SPINE_RATIO.width} / ${SPINE_RATIO.height};
  border-radius: 4px;
`;

const Line = styled.p<{ $edge: "top" | "bottom"; $on: boolean }>`
  position: absolute;
  ${({ $edge }) => $edge}: 8vh;
  left: 0;
  right: 0;
  margin: 0;
  padding: 0 24px;
  text-align: center;
  font-family: "Takohuyk", "Mulish", sans-serif;
  font-size: clamp(18px, 3.2vh, 32px);
  letter-spacing: 0.12em;
  color: ${({ $on }) => ($on ? "#eef1ff" : "rgba(238, 241, 255, 0)")};
  -webkit-font-smoothing: antialiased;
  transition: color ${TEXT_MS}ms ease-in-out
    ${({ $on }) => ($on ? TEXT_DELAY_MS : 0)}ms;
  pointer-events: none;
`;

const preloadImage = (src: string): Promise<unknown> =>
  new Promise((resolve) => {
    const img = new Image();
    img.onload = img.onerror = resolve;
    img.src = src;
  });

const preloadBook = (): Promise<unknown> =>
  Promise.allSettled([
    import("../Takonomicon/Takonomicon"),
    fetch(`${process.env.PUBLIC_URL}/data/takonomiconData.json`).then((r) =>
      r.json(),
    ),
    preloadImage(COVER_FRONT),
  ]);

const isTransition = (a: Animation): boolean =>
  typeof CSSTransition !== "undefined" && a instanceof CSSTransition;

const BookIntro = (): JSX.Element => {
  const history = useHistory();
  const { muted } = useMute();
  const audioRef = useAudio({ muted, autoPlay: true, volume: BGM_VOLUME });
  const [phase, setPhase] = useState<Phase>("idle");
  const rateRef = useRef(1);

  useEffect(() => {
    document.fonts?.load('16px "Takohuyk"').catch(() => undefined);
  }, []);

  useEffect(() => {
    const reduceMotion =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    const html = document.documentElement;
    const prevBody = document.body.style.overflow;
    const prevHtml = html.style.overflow;
    const lock = () => {
      document.body.style.overflow = "hidden";
      html.style.overflow = "hidden";
    };

    let raf = 0;
    let idleTimer = 0;
    let darkTimer = 0;
    let bgmRaf = 0;
    let cancelled = false;
    const bookReady = preloadBook();

    const applyRate = () => {
      if (rateRef.current === 1) return;
      document.getAnimations().forEach((a) => {
        if (!isTransition(a)) a.playbackRate = rateRef.current;
      });
      raf = requestAnimationFrame(applyRate);
    };

    const slowBgm = (durationMs: number) => {
      const t0 = performance.now();
      const bgmTick = (now: number) => {
        const p = Math.min(1, (now - t0) / durationMs);
        if (audioRef.current)
          audioRef.current.playbackRate = 1 - (1 - BGM_END_RATE) * p;
        if (p < 1) bgmRaf = requestAnimationFrame(bgmTick);
      };
      bgmRaf = requestAnimationFrame(bgmTick);
    };

    const toBook = async () => {
      await bookReady;
      if (cancelled) return;
      setPhase("dark");
      darkTimer = window.setTimeout(() => {
        cancelAnimationFrame(raf);
        setPhase("book");
      }, FADE_MS);
    };

    if (reduceMotion) {
      idleTimer = window.setTimeout(() => {
        lock();
        rateRef.current = 0;
        applyRate();
        slowBgm(FADE_MS);
        toBook();
      }, IDLE_MS);
    } else {
      idleTimer = window.setTimeout(() => {
        lock();
        setPhase("slowing");
        const t0 = performance.now();
        slowBgm(SLOW_MS + FADE_MS);
        const tick = (now: number) => {
          const p = Math.min(1, (now - t0) / SLOW_MS);
          rateRef.current = Math.max(0, (1 - p) * (1 - p));
          document.getAnimations().forEach((a) => {
            if (!isTransition(a)) a.playbackRate = rateRef.current;
          });
          if (p < 1) {
            raf = requestAnimationFrame(tick);
            return;
          }
          rateRef.current = 0;
          applyRate();
          toBook();
        };
        raf = requestAnimationFrame(tick);
      }, IDLE_MS);
    }

    return () => {
      cancelled = true;
      window.clearTimeout(idleTimer);
      window.clearTimeout(darkTimer);
      cancelAnimationFrame(raf);
      cancelAnimationFrame(bgmRaf);
      rateRef.current = 1;
      document.body.style.overflow = prevBody;
      html.style.overflow = prevHtml;
    };
  }, [audioRef]);

  const openBook = () => {
    markIntroSeen();
    history.push("/takonomicon");
  };

  const bookShown = phase === "book";

  return (
    <>
      <IntroFont />
      <audio
        ref={audioRef}
        src={process.env.PUBLIC_URL + "/明日も晴れるといいね.mp3"}
        loop
        preload="auto"
        style={{ display: "none" }}
      />
      {!bookShown && (
        <Home>
          <FloatingBalloons
            glitchStartMs={GLITCH_START_MS}
            glitchMs={IDLE_MS}
          />
          <FloatingTakos glitchStartMs={GLITCH_START_MS} glitchMs={IDLE_MS} />
          <Logo glitchStartMs={GLITCH_START_MS} glitchMs={IDLE_MS} />
        </Home>
      )}
      <Overlay $on={phase === "dark" || bookShown}>
        <Backdrop $on={phase === "dark" || bookShown} />
        <Line $edge="top" $on={bookShown}>
          {TOP_TEXT}
        </Line>
        <SpineButton
          $on={bookShown}
          onClick={openBook}
          disabled={!bookShown}
          aria-label="Open the Tako Lore Book"
        >
          <SpineImg src={SPINE} alt="" decoding="sync" />
        </SpineButton>
        <Line $edge="bottom" $on={bookShown}>
          {BOTTOM_TEXT}
        </Line>
      </Overlay>
    </>
  );
};

export default BookIntro;
