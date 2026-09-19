import React, { useState } from "react";
import { CreditEntry } from "../../../types";
import creditsData from "./credits.json";
import outfitsData from "../Outfits/outfits.json";
import FloatingTakos from "../Home/FloatingTakos";
import { Navbar, NavHome } from "../../Common/Navbar";
import { NavTitle } from "../../../styles/globalStyles";
import { TAKO_COUNT } from "../../../constants/takos";
import { useMute } from "../../Common/MuteButton";
import { useAudio } from "../../../hooks/useAudio";
import {
  CreditsBoard,
  CreditsSection,
  CreditTitle,
  PeopleList,
  PersonLink,
  PersonName,
  TakoCountNote,
  CreditsNote,
  CreditsDivider,
  TakoCountTrigger,
  TakoListBackdrop,
  TakoListModal,
  TakoListHeader,
  TakoListClose,
  TakoListBody,
  TakoNameChip,
} from "./styles/styles";

const credits = creditsData as CreditEntry[];

interface NamedEntry {
  user?: string;
}
interface AuthoredEntry {
  author?: string;
}
interface ArtistEntry {
  artist?: string;
}
interface MomentEntry {
  tributes?: { author?: string }[];
  reactions?: { author?: string }[];
}

const NAME_SOURCES = [
  `${process.env.PUBLIC_URL}/data/letterData.json`,
  `${process.env.PUBLIC_URL}/data/messageData.json`,
  `${process.env.PUBLIC_URL}/data/video.json`,
  `${process.env.PUBLIC_URL}/data/wahrldData.json`,
  `${process.env.PUBLIC_URL}/data/TakoEntries.json`,
  `${process.env.PUBLIC_URL}/data/momentsData.json`,
];

const collectNames = (
  letters: NamedEntry[],
  messages: NamedEntry[],
  videos: NamedEntry[],
  wahrld: NamedEntry[],
  takodex: AuthoredEntry[],
  moments: MomentEntry[],
  outfits: ArtistEntry[],
): string[] => {
  const raw: (string | undefined)[] = [
    ...letters.map((e) => e.user),
    ...messages.map((e) => e.user),
    ...videos.map((e) => e.user),
    ...wahrld.map((e) => e.user),
    ...takodex.map((e) => e.author),
    ...outfits.map((e) => e.artist),
    ...moments.flatMap((m) => [
      ...(m.tributes ?? []).map((t) => t.author),
      ...(m.reactions ?? []).map((r) => r.author),
    ]),
  ];

  const seen = new Map<string, string>();
  raw.forEach((name) => {
    const trimmed = name?.trim();
    if (!trimmed) return;
    const key = trimmed.toLowerCase();
    if (!seen.has(key)) seen.set(key, trimmed);
  });
  return Array.from(seen.values()).sort((a, b) =>
    a.localeCompare(b, undefined, { sensitivity: "base" }),
  );
};

const CreditsPage = (): JSX.Element => {
  const { muted } = useMute();
  const audioRef = useAudio({ muted, autoPlay: true });
  const [takoListOpen, setTakoListOpen] = useState(false);
  const [takoNames, setTakoNames] = useState<string[] | null>(null);
  const [takoNamesError, setTakoNamesError] = useState(false);

  const openTakoList = async () => {
    setTakoListOpen(true);
    if (takoNames || takoNamesError) return;
    try {
      const [letters, messages, videos, wahrld, takodex, moments] =
        await Promise.all(
          NAME_SOURCES.map((url) => fetch(url).then((r) => r.json())),
        );
      setTakoNames(
        collectNames(
          letters,
          messages,
          videos,
          wahrld,
          takodex,
          moments,
          outfitsData as ArtistEntry[],
        ),
      );
    } catch {
      setTakoNamesError(true);
    }
  };

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        background: "var(--background)",
      }}
    >
      <audio
        ref={audioRef}
        src={process.env.PUBLIC_URL + "/昼寝のススメ.mp3"}
        loop
        preload="auto"
        style={{ display: "none" }}
      />
      <Navbar>
        <NavHome />
        <NavTitle>Credits</NavTitle>
      </Navbar>
      <FloatingTakos freeFloat zIndex={1} />
      <CreditsBoard>
        {credits.map((entry, i) => (
          <React.Fragment key={i}>
            {i > 0 && <CreditsDivider />}
            <CreditsSection>
              <CreditTitle>{entry.title}</CreditTitle>
              <PeopleList>
                {entry.people.map((person, j) =>
                  person.url ? (
                    <PersonLink
                      key={j}
                      href={person.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {person.name}
                    </PersonLink>
                  ) : entry.showTakoCount ? (
                    <TakoCountTrigger key={j} onClick={openTakoList}>
                      {person.name}
                    </TakoCountTrigger>
                  ) : (
                    <PersonName key={j}>{person.name}</PersonName>
                  ),
                )}
              </PeopleList>
              {entry.showTakoCount && (
                <TakoCountNote>
                  More than {TAKO_COUNT} takodachis!
                </TakoCountNote>
              )}
            </CreditsSection>
          </React.Fragment>
        ))}
        <CreditsNote>
          Thanks to all the amazing takos who shared their art, sent messages,
          wrote letters, or simply cheered from the sidelines!
        </CreditsNote>
      </CreditsBoard>
      {takoListOpen && (
        <>
          <TakoListBackdrop onClick={() => setTakoListOpen(false)} />
          <TakoListModal>
            <TakoListHeader>
              <CreditTitle>Takodachis</CreditTitle>
              <TakoListClose
                onClick={() => setTakoListOpen(false)}
                aria-label="Close"
              >
                &times;
              </TakoListClose>
            </TakoListHeader>
            <TakoListBody>
              {takoNamesError ? (
                <PersonName>Couldn&apos;t load the list, sorry!</PersonName>
              ) : !takoNames ? (
                <PersonName>Loading...</PersonName>
              ) : (
                takoNames.map((name) => (
                  <TakoNameChip key={name}>{name}</TakoNameChip>
                ))
              )}
            </TakoListBody>
          </TakoListModal>
        </>
      )}
    </div>
  );
};

export default CreditsPage;
