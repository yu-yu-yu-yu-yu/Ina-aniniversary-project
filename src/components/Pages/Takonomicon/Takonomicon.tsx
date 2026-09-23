import React, { useEffect, useMemo, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  LoreBlock,
  LoreEntry,
  LoreStatus,
  LoreSubjectKind,
  LoreText,
} from "../../../types";
import { useFetch } from "../../../hooks/useFetch";
import { NavHome } from "../../Common/Navbar";
import { TakoLoading } from "../../Common/TakoLoading";
import ShareButton from "../../Common/ShareButton";
import { usePaginatedFlow } from "./usePaginatedFlow";
import { usePageTurnSound } from "./usePageTurnSound";
import { useEdgeFlip } from "./useEdgeFlip";
import {
  artSrc,
  concealOnError,
  COVER_BACK,
  COVER_FRONT,
  DIVIDER,
  dropCapSrc,
  FLIP_CURSOR,
  iconSrc,
} from "./assets";
import {
  BackCoverPage,
  Book,
  BookGlow,
  BookRoot,
  BookStage,
  BookState,
  BookSubtitle,
  BookTitle,
  ChromeButtonLayout,
  CornerFlipButton,
  CreditRow,
  CreditText,
  DisclaimerBody,
  DisclaimerHeading,
  DisclaimerPage,
  DropCapImg,
  DropCapLetter,
  EdgeGlow,
  EntryDivider,
  EntryHeader,
  EntrySection,
  EntrySubject,
  EntryTitle,
  FlipCursor,
  Flow,
  Heading,
  HomeOverlay,
  IllustrationFrame,
  Leaf,
  LegendList,
  LegendRow,
  LegendText,
  LoadingOverlay,
  PageCounter,
  PageNumber,
  Paragraph,
  QuoteBlock,
  Ribbon,
  SfxMuteButton,
  SongIcon,
  SongOpenerIcon,
  SongOpenerPage,
  Spine,
  StandaloneDivider,
  StandaloneDividerTitle,
  StatusBadge,
  StatusMessage,
  StatusPips,
  TitlePage,
  TocList,
  TocPage,
  TocPageNum,
  TocRow,
  TocTitle,
  Viewport,
} from "./styles";

const BOOKMARK_KEY = "takonomicon-bookmark";

const FULL_DISCLAIMER =
  "Everything within these pages is tako theory, not confirmed lore. Nothing here is official or endorsed until Ina herself says so on stream. Read for fun, not as fact.";

const FOREWORD =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const SONG_TAGLINE =
  "Lorem ipsum dolor sit amet, theory placeholder tagline for this track.";

const CREDITS =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit (writers and artists credited here once the real roster is in).";

const SUBJECT_LABEL: Record<LoreSubjectKind, string> = {
  song: "Song",
  mv: "Music Video",
  general: "General",
};

const STATUS_LABEL: Record<LoreStatus, string> = {
  confirmed: "Confirmed",
  implied: "Strongly Implied",
  theory: "Theory",
  thought: "Tako Thought",
};

const STATUS_PIPS: Record<LoreStatus, string> = {
  confirmed: "●●●●",
  implied: "●●●○",
  theory: "●●○○",
  thought: "●○○○",
};

const STATUS_ORDER: LoreStatus[] = [
  "confirmed",
  "implied",
  "theory",
  "thought",
];

const STATUS_MEANING: Record<LoreStatus, string> = {
  confirmed: "Ina or an official source said it.",
  implied: "Not stated, but the work points at it.",
  theory: "Reasoned from evidence, a leap remains.",
  thought: "A tako had a thought, and it is a good one.",
};

const StatusPill = ({ status }: { status: LoreStatus }): JSX.Element => (
  <StatusBadge $status={status}>
    <StatusPips>{STATUS_PIPS[status]}</StatusPips>
    {STATUS_LABEL[status]}
  </StatusBadge>
);

const DropCap = ({ letter }: { letter: string }): JSX.Element => {
  const [broken, setBroken] = useState(false);
  if (broken) return <DropCapLetter>{letter}</DropCapLetter>;
  return (
    <DropCapImg
      src={dropCapSrc(letter)}
      alt=""
      onError={() => setBroken(true)}
    />
  );
};

const renderBlock = (
  block: LoreBlock,
  key: number,
  dropCapLetter?: string,
): JSX.Element | null => {
  switch (block.type) {
    case "heading":
      return <Heading key={key}>{block.text}</Heading>;
    case "quote":
      return (
        <QuoteBlock key={key}>
          {block.text}
          {block.cite && <cite>{block.cite}</cite>}
        </QuoteBlock>
      );
    case "illustration":
      return (
        <IllustrationFrame key={key}>
          <img
            src={block.src ?? artSrc(block.slot)}
            alt={block.alt ?? ""}
            decoding="async"
            onError={concealOnError}
          />
          {block.artist && (
            <figcaption>
              Art by{" "}
              {block.artistLink ? (
                <a
                  href={block.artistLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {block.artist}
                </a>
              ) : (
                block.artist
              )}
            </figcaption>
          )}
        </IllustrationFrame>
      );
    case "text":
    default:
      return (
        <Paragraph key={key}>
          {dropCapLetter && <DropCap letter={dropCapLetter} />}
          {dropCapLetter ? block.text.slice(1) : block.text}
        </Paragraph>
      );
  }
};

const EntryBlock = ({
  entry,
  first,
  registerRef,
}: {
  entry: LoreEntry;
  first: boolean;
  registerRef: (id: string, el: HTMLElement | null) => void;
}): JSX.Element => {
  const firstText = entry.body.find(
    (block): block is LoreText => block.type === "text",
  );
  const dropCapLetter = firstText?.text?.[0]?.toUpperCase();

  return (
    <EntrySection
      id={entry.id}
      ref={(el: HTMLElement | null) => registerRef(entry.id, el)}
    >
      {!first && <EntryDivider src={DIVIDER} alt="" onError={concealOnError} />}
      <EntryHeader>
        <SongIcon
          src={iconSrc(entry.subject)}
          alt=""
          onError={concealOnError}
        />
        <EntrySubject>
          {SUBJECT_LABEL[entry.subjectKind]}: {entry.subject}
        </EntrySubject>
        <EntryTitle>{entry.title}</EntryTitle>
        <CreditRow>
          <CreditText>
            By{" "}
            {entry.authorLink ? (
              <a
                href={entry.authorLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {entry.author}
              </a>
            ) : (
              entry.author
            )}
          </CreditText>
          {entry.status && <StatusPill status={entry.status} />}
          <ShareButton slug={entry.id} label="Copy link to this theory" />
        </CreditRow>
      </EntryHeader>
      {entry.body.map((block, i) =>
        renderBlock(block, i, block === firstText ? dropCapLetter : undefined),
      )}
    </EntrySection>
  );
};

const Takonomicon = (): JSX.Element => {
  const { data, loading, error } = useFetch<LoreEntry[]>(
    `${process.env.PUBLIC_URL}/data/takonomiconData.json`,
  );

  const entries = useMemo(() => data ?? [], [data]);
  const mainEntries = useMemo(
    () => entries.filter((entry) => entry.section === "main"),
    [entries],
  );
  const standaloneEntries = useMemo(
    () => entries.filter((entry) => entry.section === "standalone"),
    [entries],
  );
  const orderedEntries = useMemo(
    () => [...mainEntries, ...standaloneEntries],
    [mainEntries, standaloneEntries],
  );
  const songGroups = useMemo(() => {
    const bySubject = new Map<string, LoreEntry[]>();
    mainEntries.forEach((entry) => {
      const list = bySubject.get(entry.subject) ?? [];
      list.push(entry);
      bySubject.set(entry.subject, list);
    });
    return Array.from(bySubject.entries());
  }, [mainEntries]);

  const {
    play: playPageTurn,
    muted: sfxMuted,
    toggleMuted: toggleSfxMuted,
  } = usePageTurnSound();

  const {
    frameRef,
    flowRef,
    page,
    pageCount,
    pagesPerSpread,
    pageWidth,
    pageHeight,
    mobile,
    measured,
    next,
    prev,
    turnTo,
    pageOf,
    hasUserNavigated,
  } = usePaginatedFlow(playPageTurn);

  const bookState: BookState = useMemo(() => {
    if (page === 0) return "closed-front";
    if (page + pagesPerSpread >= pageCount) return "closed-back";
    return "open";
  }, [page, pagesPerSpread, pageCount]);

  const canPrev = page > 0;
  const canNext = page + pagesPerSpread < pageCount;

  const {
    active: edgeFlipActive,
    bookElRef,
    cursorRef,
    edge,
    onMouseMove: onBookMouseMove,
    onMouseLeave: onBookMouseLeave,
    onClick: onBookClick,
  } = useEdgeFlip({ mobile, canPrev, canNext, onPrev: prev, onNext: next });

  const { hash } = useLocation();
  const entryRefs = useRef<Record<string, HTMLElement | null>>({});
  const [tocPages, setTocPages] = useState<Record<string, number>>({});

  const registerRef = (id: string, el: HTMLElement | null) => {
    entryRefs.current[id] = el;
  };

  useEffect(() => {
    if (hasUserNavigated.current || pageCount <= 1) return;
    const slug = hash.replace("#", "");
    const target = entryRefs.current[slug] ?? null;
    if (target) {
      turnTo(pageOf(target), false);
      return;
    }
    const savedId = localStorage.getItem(BOOKMARK_KEY);
    const saved = savedId ? entryRefs.current[savedId] : null;
    if (saved) turnTo(pageOf(saved), false);
  }, [hash, pageCount, pageOf, turnTo, hasUserNavigated]);

  useEffect(() => {
    if (pageCount <= 1) return;
    const lastRead = [...orderedEntries]
      .reverse()
      .find((entry) => pageOf(entryRefs.current[entry.id]) <= page);
    if (lastRead) localStorage.setItem(BOOKMARK_KEY, lastRead.id);
  }, [page, pageCount, pageOf, orderedEntries]);

  useEffect(() => {
    if (pageCount <= 1) return;
    const resolved: Record<string, number> = {};
    orderedEntries.forEach((entry) => {
      const el = entryRefs.current[entry.id];
      if (el) resolved[entry.id] = pageOf(el);
    });
    setTocPages(resolved);
  }, [pageCount, pageOf, orderedEntries]);

  const bookmarkedId = localStorage.getItem(BOOKMARK_KEY);
  const jumpToBookmark = () => {
    const target = bookmarkedId ? entryRefs.current[bookmarkedId] : null;
    if (target) turnTo(pageOf(target), true, true);
  };

  return (
    <BookRoot>
      <ChromeButtonLayout />
      <HomeOverlay>
        <NavHome />
      </HomeOverlay>
      <SfxMuteButton
        onClick={toggleSfxMuted}
        title={sfxMuted ? "Unmute page sounds" : "Mute page sounds"}
      >
        {sfxMuted ? "🔕" : "🔔"}
      </SfxMuteButton>
      {loading ? (
        <TakoLoading fullPage />
      ) : error ? (
        <StatusMessage>
          Error loading the lore book: {error.message}
        </StatusMessage>
      ) : (
        <BookStage
          $hideCursor={!!edge}
          onMouseMove={onBookMouseMove}
          onMouseLeave={onBookMouseLeave}
          onClick={onBookClick}
        >
          {!measured && (
            <LoadingOverlay>
              <TakoLoading fullPage />
            </LoadingOverlay>
          )}
          <BookGlow $width={pageWidth * pagesPerSpread} />
          {edgeFlipActive && (
            <FlipCursor
              ref={cursorRef}
              src={FLIP_CURSOR}
              alt=""
              $side={edge === "right" ? "right" : "left"}
              $visible={!!edge}
            />
          )}
          <Book
            $mobile={mobile}
            $bookState={bookState}
            $pageWidth={pageWidth}
            ref={frameRef}
          >
            <Leaf ref={bookElRef} $width={pageWidth * pagesPerSpread}>
              {edgeFlipActive && (
                <>
                  <EdgeGlow $side="left" $active={edge === "left"} />
                  <EdgeGlow $side="right" $active={edge === "right"} />
                </>
              )}
              {pagesPerSpread === 2 && <Spine />}
              <Ribbon
                $visible={!!bookmarkedId}
                onClick={jumpToBookmark}
                aria-label="Jump to your bookmark"
              />
              <Viewport>
                <Flow
                  ref={flowRef}
                  $pageWidth={pageWidth}
                  $pageHeight={pageHeight}
                >
                  <TitlePage $cover={COVER_FRONT}>
                    <BookTitle>Tako Lore Book</BookTitle>
                    <BookSubtitle>
                      A tako theory compendium for re:VISION
                    </BookSubtitle>
                  </TitlePage>
                  <DisclaimerPage>
                    <DisclaimerHeading>Foreword</DisclaimerHeading>
                    <DisclaimerBody>{FOREWORD}</DisclaimerBody>
                  </DisclaimerPage>
                  <DisclaimerPage>
                    <DisclaimerHeading>
                      Before You Turn the Page
                    </DisclaimerHeading>
                    <DisclaimerBody>{FULL_DISCLAIMER}</DisclaimerBody>
                    <DisclaimerHeading>
                      How to read the badges
                    </DisclaimerHeading>
                    <LegendList>
                      {STATUS_ORDER.map((status) => (
                        <LegendRow key={status}>
                          <StatusPill status={status} />
                          <LegendText>{STATUS_MEANING[status]}</LegendText>
                        </LegendRow>
                      ))}
                    </LegendList>
                  </DisclaimerPage>
                  <TocPage>
                    <DisclaimerHeading>Contents</DisclaimerHeading>
                    <TocList>
                      {orderedEntries.map((entry) => (
                        <TocRow
                          key={entry.id}
                          onClick={() =>
                            turnTo(tocPages[entry.id] ?? 0, true, true)
                          }
                        >
                          <TocTitle>{entry.title}</TocTitle>
                          <TocPageNum>
                            {tocPages[entry.id] !== undefined
                              ? tocPages[entry.id] + 1
                              : ""}
                          </TocPageNum>
                        </TocRow>
                      ))}
                    </TocList>
                  </TocPage>
                  {songGroups.map(([subject, songEntries]) => (
                    <React.Fragment key={subject}>
                      <SongOpenerPage>
                        <SongOpenerIcon
                          src={iconSrc(subject)}
                          alt=""
                          onError={concealOnError}
                        />
                        <StandaloneDividerTitle>
                          {subject}
                        </StandaloneDividerTitle>
                        <BookSubtitle>{SONG_TAGLINE}</BookSubtitle>
                      </SongOpenerPage>
                      {songEntries.map((entry, i) => (
                        <EntryBlock
                          key={entry.id}
                          entry={entry}
                          first={i === 0}
                          registerRef={registerRef}
                        />
                      ))}
                    </React.Fragment>
                  ))}
                  {standaloneEntries.length > 0 && (
                    <StandaloneDivider>
                      <StandaloneDividerTitle>
                        Standalone Theories
                      </StandaloneDividerTitle>
                    </StandaloneDivider>
                  )}
                  {standaloneEntries.map((entry, i) => (
                    <EntryBlock
                      key={entry.id}
                      entry={entry}
                      first={i === 0}
                      registerRef={registerRef}
                    />
                  ))}
                  <DisclaimerPage>
                    <DisclaimerHeading>Credits</DisclaimerHeading>
                    <DisclaimerBody>{CREDITS}</DisclaimerBody>
                  </DisclaimerPage>
                  <BackCoverPage $src={COVER_BACK} />
                </Flow>
              </Viewport>
              {pagesPerSpread === 2 ? (
                <>
                  <PageNumber $corner="left">{page + 1}</PageNumber>
                  <PageNumber $corner="right">{page + 2}</PageNumber>
                </>
              ) : (
                <PageNumber $corner="right">{page + 1}</PageNumber>
              )}
            </Leaf>
          </Book>
          <PageCounter>
            {page + 1} / {pageCount}
          </PageCounter>
          <CornerFlipButton
            $side="left"
            onClick={prev}
            disabled={!canPrev}
            aria-label="Previous page"
          >
            <i className="fa fa-chevron-left" aria-hidden="true" />
          </CornerFlipButton>
          <CornerFlipButton
            $side="right"
            onClick={next}
            disabled={!canNext}
            aria-label="Next page"
          >
            <i className="fa fa-chevron-right" aria-hidden="true" />
          </CornerFlipButton>
        </BookStage>
      )}
    </BookRoot>
  );
};

export default Takonomicon;
