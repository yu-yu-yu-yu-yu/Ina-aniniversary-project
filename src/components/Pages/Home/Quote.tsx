import React, { useState, useCallback } from "react";
import {
  QuoteContainer,
  QuoteInaImg,
  QuoteContent,
  QuoteTextBox,
  GrayscaleButton,
  InaImageWrapper,
  ElixirText,
} from "./styles/quoteStyles";

const RARE_QUOTES = [
  {
    text: "We have games we win, and we have games we lose. I haven't won yet, but I haven't lost. So, I can only win, right?",
    year: "2020",
  },
  { text: "No panik. Just pizza.", year: "2020" },
  { text: "You're robbin a kid!", year: "2026", author: "The ghost of pokajan" },
  { text: "Ina is Ina", year: "2021" },
  {
    text: "It's not the best but it does the job when you need something salty in your life",
    year: "2021",
  },
  {
    text: "We love to see it.. it's the total opposite of speedrunning--slow walking! Slow running is just walking..",
    year: "2021",
  },
  { text: "The tentacult is not a cult!", year: "2021" },
  { text: "Don't quote me", year: "2021" },
  { text: "Home is where Ina is", year: "2023" },
  { text: "Becaused", year: "2023" },
  { text: "Playing Mario is just like cooking instant ramen.", year: "2023" },
  { text: "Art is a sport!", year: "2023" },
  { text: "I don't go outside if i don't have to", year: "2024" },
  { text: "5 is the new 0", year: "2025" },
  { text: "I wanted her to drop kick my face", year: "2025" },
  { text: "Whats that one famous thing", year: "2026" },
  { text: "This world requires too much thought", year: "2026" },
  { text: "YEAH", year: "2022" },
  { text: "This weapon is unbalanced", year: "2022" },
  {
    text: "The world's not a great place, but we're trying to make it better",
    year: "2022",
  },
  { text: "Can I be a PNG?", year: "2022" },
  { text: "How about I set this house on fire?", year: "2023" },
  { text: "PHYSICS, why must you exist?", year: "2023" },
  { text: "Sleep is also very important i feel", year: "2024" },
  { text: "What's the brake?", year: "2024" },
  { text: "I dont know what I am doing", year: "2024" },
  {
    text: "I don't like drawing frills, but I like wearing frills.",
    year: "2024",
  },
  {
    text: "Everything in the world tastes like chicken, or doesn't taste like chicken",
    year: "2024",
  },
  {
    text: "Harmonies are too difficult for me my brain is not built for music.",
    year: "2021",
  },
  {
    text: "Naming layers in 2021...I MEAN 2022! My identity has been revealed as Past Ina in 2021! TCH! Blew my cover!",
    year: "2022",
  },
  { text: "Oh it's a jellyfish!", year: "2021" },
  { text: "Each world has its own world", year: "2021" },
];

const pickRareQuote = () =>
  Math.random() < 0.1
    ? RARE_QUOTES[Math.floor(Math.random() * RARE_QUOTES.length)]
    : null;

// ponytail: heuristic fit, not true auto-fit-text; revisit if quotes get much longer
const fitFontSize = (len: number) =>
  Math.max(9, Math.min(22, 1500 / len));

const Quote = (): JSX.Element => {
  const [grayscale, setGrayscale] = useState(false);
  const [elixirKey, setElixirKey] = useState<number | null>(null);
  const [rareQuote] = useState(pickRareQuote);

  const handleElixir = useCallback(() => {
    setGrayscale((g) => {
      if (g) {
        setElixirKey((k) => (k ?? 0) + 1);
      }
      return !g;
    });
  }, []);

  return (
    <QuoteContainer $grayscale={grayscale}>
      <InaImageWrapper>
        <QuoteInaImg
          src={`${process.env.PUBLIC_URL}/InaInaIna.png`}
          grayscale={grayscale}
          alt="Ina"
        />
        {elixirKey !== null && (
          <ElixirText key={elixirKey}>Miraculously preserved</ElixirText>
        )}
      </InaImageWrapper>
      <QuoteContent style={grayscale ? { filter: "grayscale(1)" } : {}}>
        {rareQuote ? (
          <QuoteTextBox style={{ fontSize: fitFontSize(rareQuote.text.length) }}>
            &quot;{rareQuote.text}&quot;
          </QuoteTextBox>
        ) : (
          <img
            alt="WAH"
            src={`${process.env.PUBLIC_URL}/WAH.png`}
            style={grayscale ? { filter: "grayscale(1)" } : {}}
          />
        )}
        <br />
        {rareQuote ? rareQuote.author ?? "Ninomae Ina'nis" : "Ninomae Ina'nis"}
        <br />
        {rareQuote ? rareQuote.year : "12·09·2020"}
        <br />
      </QuoteContent>
      <GrayscaleButton onClick={handleElixir}>
        {grayscale
          ? "Give her an elixir of the undying"
          : "Ina saw this button!!"}
      </GrayscaleButton>
    </QuoteContainer>
  );
};

export default Quote;
