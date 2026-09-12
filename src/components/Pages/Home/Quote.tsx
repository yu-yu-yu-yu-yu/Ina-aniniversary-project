import React, { useState, useCallback } from "react";
import {
  QuoteContainer,
  QuoteInaImg,
  QuoteContent,
  QuoteTextBox,
  GrayscaleButton,
  GachaButton,
  QuoteActions,
  InaImageWrapper,
  ElixirText,
} from "./styles/quoteStyles";

const RARE_QUOTES = [
  {
    text: "We have games we win, and we have games we lose. I haven't won yet, but I haven't lost. So, I can only win, right?",
    year: "2020",
  },
  { text: "No panik. Just pizza.", year: "2020" },
  {
    text: "You're robbin a kid!",
    year: "2026",
    author: "The ghost of pokajan",
  },
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
  { text: "WARAU NA!!!", year: "2023" },
  { text: "Takobocchi...", year: "2023" },
  { text: "You're in denial! It's the Amazon.", year: "2021" },
  { text: "Bears don't go to cram school. They study kuman.", year: "2021" },
  { text: "This is unbearable. Unbelievable.", year: "2021" },
  { text: "I'm only friends with 25 letters of the alphabet.", year: "2021" },
  { text: "I specialize in oyaji gyagu.", year: "2021" },
  {
    text: "No pun is in a mode. It's just built-in. It's permanent. You can't turn it off.",
    year: "2021",
  },
  {
    text: "A dad joke is only a dad joke when it becomes apparent.",
    year: "2021",
  },
  { text: "Deja vu *giggle* nya nya nya nya nya nyaa", year: "2020" },
  { text: "I'm not selling my friends for that low!", year: "2020" },
  { text: "It's like Blues Clues, but spookier", year: "2020" },
  { text: "Sir, may I see your suction cups", year: "2020" },
  {
    text: "Sometimes violence is necessary for....entertainment",
    year: "2020",
  },
  { text: "be nice to your body", year: "2020" },
  { text: "Its Tuesday somewhere in the world.", year: "2020" },
  { text: "Learn to lie to yourself, it's important", year: "2020" },
  { text: "I see Gura as a dessert", year: "2020" },
  { text: "Isn't this the good stuff?", year: "2020" },
  { text: "Do eyebrows grow back?", year: "2020" },
  { text: "As long as we go down smiling, it's all worth it", year: "2020" },
  { text: "Thank goodness for TNT", year: "2020" },
  { text: "I rode Mr Pierce until he became friendly", year: "2020" },
  { text: "I raised this chat.", year: "2020" },
  {
    text: "boing boing boing boing boing boing boing boing boing boing",
    year: "2021",
  },
  { text: "Very Nice, good job chat, we did it", year: "2021" },
  { text: "there's no rule in eating kitkats", year: "2021" },
  { text: "puns is a lifestyle", year: "2021" },
  {
    text: "These days... you have to get used to doing things by yourself--if you know how to embrace being alone, it's a good skill... sometimes...",
    year: "2021",
  },
  { text: "What is right?", year: "2021" },
  { text: "jumpy boi can jump", year: "2021" },
  { text: "Improvise - Adapt - Overcome - Die", year: "2021" },
  { text: "Those are some big beans.", year: "2021" },
  { text: "Why...?", year: "2021" },
  { text: "Yeah die die die die die", year: "2021" },
  { text: "this whip is nice", year: "2021" },
  { text: "Is Minecraft's cake a cake?", year: "2021" },
  { text: "If it ain't broke, it ain't broken", year: "2021" },
  { text: "super simple, super cute, but also with details", year: "2021" },
  { text: "The bench is the bench", year: "2021" },
  { text: "cats are liquid", year: "2021" },
  { text: "IM RICH!", year: "2021" },
  { text: "graduate from unga bunga", year: "2021" },
  { text: "I dont feel pain", year: "2021" },
  { text: "OH YEAH WIGGLE THAT", year: "2021" },
  { text: "But this puts a smile on my face", year: "2021" },
  { text: "Does mask blink", year: "2021" },
  { text: "I have no social life", year: "2021" },
  { text: "saving is good", year: "2021" },
  { text: "check yourself before you wreck yourself", year: "2021" },
  { text: "How did I do that?", year: "2021" },
  { text: "It's ok to bully", year: "2021" },
  { text: "no, don't eat", year: "2022" },
  { text: "you sound like that one dude", year: "2022" },
  { text: "She threw me up in the air like a bag of groceries.", year: "2022" },
  { text: "Destroy nature", year: "2022" },
  { text: "Yes my hood please.", year: "2023" },
  { text: "I'm a good at shooting", year: "2023" },
  { text: "stuff", year: "2023" },
  { text: "I don't know what first look like", year: "2023" },
  { text: "The truth that is the truth", year: "2023" },
  { text: "You never know you know", year: "2023" },
  { text: "THE FURRY COMMISSIONS!", year: "2023" },
  {
    text: "Do you get why the blowfish blows up? Cus it's a blowfish?",
    year: "2021",
  },
  { text: "Don't start loafing around!", year: "2021" },
  { text: "I can bearly finish this question!", year: "2021" },
  {
    text: "What's 01 in binary... It's just one? Was that the answer you guys oneted?",
    year: "2021",
  },
  { text: "they shouldn't bee here... hahaa get it... bee...", year: "2021" },
  { text: "you might not beelieve me, but I didn't mean to!", year: "2021" },
  { text: "I don't wanna bee here..", year: "2021" },
  {
    text: "I didn't think there'd bee like... a place as big as this...",
    year: "2021",
  },
  { text: "I can't beelieve you've done this.. heheH", year: "2021" },
  {
    text: "if that's how you guys are treeting me... ha ha... oh dear that's so bad",
    year: "2021",
  },
  { text: "chat and I, wheat have to think about it...", year: "2021" },
  { text: "Puns need to grow organically. No chemicals added.", year: "2021" },
  { text: "Something came in fur you... haha... get the pun..?", year: "2021" },
  {
    text: "You never miss a beat! Yeah, cus I never have a dead beat...",
    year: "2021",
  },
  { text: "Are you INA trouble?", year: "2021" },
  { text: "You could say we're blueing through the messages...", year: "2021" },
  {
    text: "Streamers... are paper... streamers are kami... streamers... are god",
    year: "2021",
  },
  {
    text: "I almost said I'll bee there soon.. but I'm already here..",
    year: "2021",
  },
  { text: "Unbeelievable..", year: "2021" },
  { text: "they bee angry..", year: "2021" },
  {
    text: "just axe! / I wood appreciate that a lot! / You woodn't want to get yourself stuck in there...",
    year: "2021",
  },
  {
    text: "You wood not think that I need more wood... you needn't axe the question...",
    year: "2021",
  },
  { text: "Hololive Altreenative...", year: "2021" },
  { text: "I'm out of leaves! Oh no... I can't beleaf it...", year: "2021" },
  { text: "I woodn't have guessed they wood...", year: "2021" },
  { text: "I can't beleaf it!", year: "2021" },
  { text: "Y'know... it's a-me.. but I'm not Ame...", year: "2021" },
  {
    text: "Let's drop by one of the near ones! Hehe... Nier ones..",
    year: "2021",
  },
  { text: "Oh, the results are really Nier to each other...", year: "2021" },
  { text: "I guess they forgot to Phil you in on the details..", year: "2021" },
  { text: "Combee.. a good combee-nation, I'll say!", year: "2021" },
  { text: "No pan.. but we have a lot of pun", year: "2021" },
  { text: "Do not leaf me! Beleaf in me!", year: "2021" },
  { text: "It's jolly(bee)!", year: "2021" },
  { text: "I sure do see a horse!", year: "2021" },
  { text: "Is it a PUNishment", year: "2022" },
  { text: "You can't spell world domination without INA", year: "2021" },
  { text: "You can't spell determination without INA", year: "2021" },
  { text: "Inafinite Pun Works", year: "2021" },
  {
    text: "Learn Chili Tail? Wouldn't that be like Ice Tail.. cus it's chilly? Ha ha ha ha ha...",
    year: "2023",
  },
  {
    text: "I've never been picked for the spelling bee.. and for good reason",
    year: "2023",
  },
  { text: "you can finally become a bell.. a tako bell!", year: "2023" },
  { text: "I can't be-leaf it!", year: "2023" },
  { text: "Yuul B Alright, heh get it? YUBI Alright...", year: "2021" },
  {
    text: "wood doko.. wood, dogo.. wood no go... wood.. DONKEY",
    year: "2023",
  },
];

type RareQuote = {
  text: string;
  year: string;
  author?: string;
};

const isSameQuote = (
  left: RareQuote | null | undefined,
  right: RareQuote | null | undefined,
) =>
  !!left &&
  !!right &&
  left.text === right.text &&
  left.year === right.year &&
  (left.author ?? "") === (right.author ?? "");

const pickRareQuote = (current?: RareQuote | null): RareQuote => {
  const pool = current
    ? RARE_QUOTES.filter(
        (quote) =>
          quote.text !== current.text ||
          quote.year !== current.year ||
          (quote.author ?? "") !== (current.author ?? ""),
      )
    : RARE_QUOTES;

  return pool[Math.floor(Math.random() * pool.length)] ?? current ?? RARE_QUOTES[0];
};

const maybePickRareQuote = (current?: RareQuote | null) => {
  if (Math.random() >= 0.1) {
    return current ?? null;
  }

  const next = pickRareQuote(current);
  return isSameQuote(current, next) ? pickRareQuote(current) : next;
};

const fitFontSize = (len: number) => Math.max(9, Math.min(22, 1500 / len));

const Quote = (): JSX.Element => {
  const [grayscale, setGrayscale] = useState(false);
  const [elixirKey, setElixirKey] = useState<number | null>(null);
  const [rareQuote, setRareQuote] = useState<RareQuote | null>(null);
  const [gachaBurst, setGachaBurst] = useState(false);

  const handleGacha = useCallback(() => {
    setRareQuote((current) => {
      const nextQuote = maybePickRareQuote(current);

      if (nextQuote && !isSameQuote(current, nextQuote)) {
        setGachaBurst(true);
        window.setTimeout(() => setGachaBurst(false), 3000);
      }

      return nextQuote;
    });
  }, []);

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
          $grayscale={grayscale}
          alt="Ina"
        />
        {elixirKey !== null && (
          <ElixirText key={elixirKey}>Miraculously preserved</ElixirText>
        )}
      </InaImageWrapper>
      <QuoteContent style={grayscale ? { filter: "grayscale(1)" } : {}}>
        {rareQuote ? (
          <QuoteTextBox
            style={{ fontSize: fitFontSize(rareQuote.text.length) }}
          >
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
      <QuoteActions>
        <GachaButton $active={gachaBurst} onClick={handleGacha}>
          Gacha
        </GachaButton>
        <GrayscaleButton onClick={handleElixir}>
          {grayscale
            ? "Give her an elixir of the undying"
            : "Ina saw this button!!"}
        </GrayscaleButton>
      </QuoteActions>
    </QuoteContainer>
  );
};

export default Quote;
