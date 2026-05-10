import React, { useState } from "react";
import { QuoteContainer, QuoteInaImg, QuoteContent, GrayscaleButton } from "./styles/quoteStyles";

const Quote = (): JSX.Element => {
  const [grayscale, setGrayscale] = useState(false);

  return (
    <QuoteContainer $grayscale={grayscale}>
      <QuoteInaImg
        src={`${process.env.PUBLIC_URL}/InaInaIna.png`}
        grayscale={grayscale}
        alt="Ina"
      />
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
      <GrayscaleButton onClick={() => setGrayscale((g) => !g)}>
        {grayscale ? "Give her an elixir of the undying" : "Ina asked for this button but didn't see it last time lol"}
      </GrayscaleButton>
    </QuoteContainer>
  );
};

export default Quote;