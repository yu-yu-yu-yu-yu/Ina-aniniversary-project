import React, { useState, useCallback } from "react";
import { QuoteContainer, QuoteInaImg, QuoteContent, GrayscaleButton, InaImageWrapper, ElixirText } from "./styles/quoteStyles";

const Quote = (): JSX.Element => {
  const [grayscale, setGrayscale] = useState(false);
  const [elixirKey, setElixirKey] = useState<number | null>(null);

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
        <img
          alt="WAH"
          src={`${process.env.PUBLIC_URL}/WAH.png`}
          style={grayscale ? { filter: "grayscale(1)" } : {}}
        />
        <br />
        Ninomae Ina&apos;nis
        <br />
        12·09·2020
        <br />
      </QuoteContent>
      <GrayscaleButton onClick={handleElixir}>
        {grayscale ? "Give her an elixir of the undying" : "Ina asked for this button but didn't see it last time lol"}
      </GrayscaleButton>
    </QuoteContainer>
  );
};

export default Quote;