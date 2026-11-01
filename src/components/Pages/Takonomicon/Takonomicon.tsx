import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";
import { useLocation } from "react-router-dom";
import {
  LoreBlock,
  LoreDividerStyle,
  LoreBookText,
  LoreData,
  LoreEntry,
  LoreIllustration,
  LoreStatus,
  LoreSubjectKind,
  LoreText,
} from "../../../types";
import { useFetch } from "../../../hooks/useFetch";
import { NavHome } from "../../Common/Navbar";
import { useTheme } from "../../Common/ThemeProvider";
import { THEME_CHOSEN_KEY } from "../../Common/ThemeSwitcher";
import { ThemeName, themes } from "../../Common/themes";
import { TakoLoading } from "../../Common/TakoLoading";
import ShareButton from "../../Common/ShareButton";
import { LOAD_GROUP, usePaginatedFlow } from "./usePaginatedFlow";
import { usePageTurnSound } from "./usePageTurnSound";
import { useEdgeFlip } from "./useEdgeFlip";
import { use3DTilt } from "./use3DTilt";
import {
  BellIcon,
  BellOffIcon,
  BookmarkIcon,
  GalleryIcon,
  ZoomInIcon,
  ZoomOutIcon,
} from "./icons";
import { dropFirstChar, InlineNode, parseInline, plainText } from "./inline";
import {
  artSrc,
  BOOKMARKS,
  COVER_BACK,
  COVER_FRONT,
  COVER_RATIO,
  DEFAULT_DIVIDER,
  DIVIDER_NONE,
  dividerSrc,
  DOODLES,
  FLIP_CURSORS,
  GALLERY_GROUPS,
  iconSrc,
  missingAssetOnError,
  pickSeeded,
  PLACEHOLDER_COLORS,
  resolveImageSrc,
  SCANNED_DOODLES,
  seededFraction,
  STICKY_NOTES,
} from "./assets";
import {
  BackCoverPage,
  Book,
  BookGlow,
  BookRoot,
  BookStage,
  BookState,
  BookSubtitle,
  ChapterOpener,
  ChromeButtonLayout,
  CornerFlipButton,
  CreditLine,
  CreditRow,
  CreditText,
  DisclaimerBody,
  DisclaimerHeading,
  DisclaimerPage,
  Doodle,
  DropCapLetter,
  EdgeGlow,
  EntryDivider,
  EntryDividerImg,
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
  PageBackdrop,
  PageBreak,
  PageCounter,
  PageJump,
  PageJumpButton,
  PageJumpMenu,
  PageJumpRow,
  PageNumber,
  PageStackWrap,
  Paragraph,
  Pip,
  QuoteBlock,
  Ribbon,
  RibbonArt,
  RibbonPicker,
  RibbonPickerButton,
  RibbonPickerMenu,
  RibbonPickerOption,
  SfxMuteButton,
  ZoomButton,
  GalleryButton,
  GalleryBackdrop,
  GalleryPanel,
  GalleryClose,
  GalleryHeading,
  GalleryGroupTitle,
  GalleryGrid,
  GalleryThumb,
  GalleryFull,
  DoodlePage,
  DoodleCell,
  SongIcon,
  TopBar,
  SongOpenerIcon,
  Spine,
  StandaloneDivider,
  StandaloneDividerTitle,
  StatusBadge,
  StatusMessage,
  StatusPips,
  StickyNoteFrame,
  StickyNoteImg,
  StickyNoteLine,
  StickyNoteText,
  TakodachiCard,
  TakodachiDesc,
  TakodachiImg,
  TakodachiName,
  TitlePage,
  TocList,
  TocPage,
  TocPageNum,
  TocRow,
  TocTitle,
  Viewport,
} from "./styles";

const ICON_THEME: Record<string, ThemeName> = {
  violet: "Violet",
  mekronopsis: "Meconopsis",
  temari: "Temari",
  takotakeover: "TakoTakover",
  "abyssal-hymn": "AbyssalHymn",
  "takodachi-no-uta": "TakodachiNoUta",
};

const DROPCAP_COLOR: Partial<Record<ThemeName, string>> = {
  Violet: "#7b2cbf",
  Meconopsis: "#2a6fd1",
  Temari: "#c62828",
  TakoTakover: "#c4177f",
  AbyssalHymn: "#3b2a78",
  TakodachiNoUta: "#2b2b2b",
};

const iconTheme = (icon: string | undefined): ThemeName | undefined =>
  icon ? ICON_THEME[icon] : undefined;

const PAGE_TURN_ANIMATIONS = ["fade", "type", "slide"] as const;

const BOOKMARK_KEY = "takonomicon-bookmark";

interface Bookmark {
  id: string;
  offset: number;
}

const readBookmark = (): Bookmark | null => {
  const raw = localStorage.getItem(BOOKMARK_KEY);
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed.id === "string") {
      return { id: parsed.id, offset: Number(parsed.offset) || 0 };
    }
    return null;
  } catch {
    return { id: raw, offset: 0 };
  }
};

const ZOOM_LEVEL = 1.6;

const BOOKMARK_ART_KEY = "takonomicon-bookmark-art";

const readBookmarkArt = (): number => {
  try {
    const n = Number(localStorage.getItem(BOOKMARK_ART_KEY));
    return Number.isInteger(n) && n >= 0 && n < BOOKMARKS.length ? n : 0;
  } catch {
    return 0;
  }
};

const DEFAULT_BOOK: LoreBookText = {
  title: "Tako Lore Book",
  subtitle: "A tako theory compendium for re:VISION",
  forewordHeading: "Foreword",
  foreword:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  disclaimerHeading: "Before You Turn the Page",
  disclaimer:
    "Everything within these pages is tako theory, not confirmed lore. Nothing here is official or endorsed until Ina herself says so on stream. Read for fun, not as fact.",
  legendHeading: "How to read the badges",
  statusLabels: {
    confirmed: "Confirmed",
    implied: "Strongly Implied",
    theory: "Theory",
    thought: "Tako Thought",
  },
  statusMeanings: {
    confirmed: "Ina or an official source said it.",
    implied: "Not stated, but the work points at it.",
    theory: "Reasoned from evidence, a leap remains.",
    thought: "A tako had a thought, and it is a good one.",
  },
  contentsHeading: "Contents",
  standaloneHeading: "Standalone Theories",
  creditsHeading: "Credits",
  credits:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit (writers and artists credited here once the real roster is in).",
  tagline:
    "Lorem ipsum dolor sit amet, theory placeholder tagline for this track.",
  pageAspectRatio: COVER_RATIO,
};

const SUBJECT_LABEL: Record<LoreSubjectKind, string> = {
  song: "Song",
  cover: "Cover",
  concert: "Concert",
  mv: "Music Video",
  general: "General",
};

const STATUS_LEVEL: Record<LoreStatus, number> = {
  confirmed: 4,
  implied: 3,
  theory: 2,
  thought: 1,
};

const PIP_SLOTS = [0, 1, 2, 3];

const STATUS_ORDER: LoreStatus[] = [
  "confirmed",
  "implied",
  "theory",
  "thought",
];

const renderInline = (nodes: InlineNode[]): React.ReactNode =>
  nodes.map((node, i) => {
    switch (node.kind) {
      case "bold":
        return <strong key={i}>{renderInline(node.children)}</strong>;
      case "italic":
        return <em key={i}>{renderInline(node.children)}</em>;
      case "link":
        return (
          <a key={i} href={node.href} target="_blank" rel="noopener noreferrer">
            {renderInline(node.children)}
          </a>
        );
      case "text":
      default:
        return node.text;
    }
  });

const DOODLE_PAGE_SIZE = 6;
const DOODLE_PAGES = (() => {
  const pool = [...DOODLES, ...SCANNED_DOODLES]
    .map((doodle) => ({
      doodle,
      order: seededFraction(`doodle-order-${doodle.src}`),
    }))
    .sort((a, b) => a.order - b.order)
    .map(({ doodle }) => doodle);
  const pages: (typeof pool)[] = [];
  for (let i = 0; i < pool.length; i += DOODLE_PAGE_SIZE) {
    pages.push(pool.slice(i, i + DOODLE_PAGE_SIZE));
  }
  return pages;
})();

const md = (text: string): React.ReactNode => renderInline(parseInline(text));

const StatusPill = ({
  status,
  label,
}: {
  status: LoreStatus;
  label: string;
}): JSX.Element => (
  <StatusBadge $status={status}>
    <StatusPips aria-hidden="true">
      {PIP_SLOTS.map((slot) => (
        <Pip key={slot} $filled={slot < STATUS_LEVEL[status]} />
      ))}
    </StatusPips>
    {label}
  </StatusBadge>
);

const StickyNote = ({
  entry,
  label,
}: {
  entry: LoreEntry;
  label: string;
}): JSX.Element | null => {
  if (!entry.status || entry.sticky?.hidden) return null;
  const art =
    entry.sticky?.variant !== undefined
      ? STICKY_NOTES[
          ((entry.sticky.variant % STICKY_NOTES.length) + STICKY_NOTES.length) %
            STICKY_NOTES.length
        ]
      : pickSeeded(entry.id, STICKY_NOTES);
  const seededRotate = (seededFraction(entry.id) - 0.5) * 16;
  const rotate = entry.sticky?.rotate ?? seededRotate;
  return (
    <StickyNoteFrame $rotate={rotate} $side={entry.sticky?.side}>
      <StickyNoteImg
        src={art.src}
        alt=""
        width={art.width}
        height={art.height}
      />
      <StickyNoteText $box={art.box}>
        <StatusPill status={entry.status} label={label} />
        <StickyNoteLine>{entry.subject}</StickyNoteLine>
        {entry.themes && entry.themes.length > 0 && (
          <StickyNoteLine>{entry.themes.join(", ")}</StickyNoteLine>
        )}
      </StickyNoteText>
    </StickyNoteFrame>
  );
};

const EntryTakodachi = ({
  entry,
  images,
}: {
  entry: LoreEntry;
  images: Record<string, string> | undefined;
}): JSX.Element | null => {
  const tako = entry.takodachi;
  const takoSrc = resolveImageSrc(tako?.image, images);
  const sizes = useContext(ImageSizesContext);
  const deferred = !!(takoSrc && sizes?.[takoSrc]);
  if (!tako) return null;
  return (
    <TakodachiCard>
      {tako.image && (
        <TakodachiImg
          src={deferred ? undefined : takoSrc}
          data-lazy-src={deferred ? takoSrc : undefined}
          alt=""
          decoding="async"
          onError={missingAssetOnError(PLACEHOLDER_COLORS.art)}
        />
      )}
      <TakodachiName>{tako.name}</TakodachiName>
      {tako.description && <TakodachiDesc>{tako.description}</TakodachiDesc>}
    </TakodachiCard>
  );
};

const EntryDoodle = ({ entry }: { entry: LoreEntry }): JSX.Element | null => {
  if (entry.doodle?.hidden) return null;
  const roll = seededFraction(`${entry.id}-doodle`);
  if (roll > 0.4 && !entry.doodle) return null;
  const art =
    entry.doodle?.variant !== undefined
      ? DOODLES[
          ((entry.doodle.variant % DOODLES.length) + DOODLES.length) %
            DOODLES.length
        ]
      : pickSeeded(`${entry.id}-doodle-src`, DOODLES);
  const seededSide: "left" | "right" = roll < 0.2 ? "left" : "right";
  const side = entry.doodle?.side ?? seededSide;
  const seededRotate = (seededFraction(`${entry.id}-doodle-rot`) - 0.5) * 24;
  const rotate = entry.doodle?.rotate ?? seededRotate;
  return (
    <Doodle
      src={art.src}
      alt=""
      width={art.width}
      height={art.height}
      $side={side}
      $rotate={rotate}
      onError={missingAssetOnError(PLACEHOLDER_COLORS.art)}
    />
  );
};

const DividerArt = ({
  src,
  ...rest
}: { src: string } & React.ComponentProps<
  typeof EntryDivider
>): JSX.Element => (
  <EntryDivider {...rest}>
    <EntryDividerImg
      src={src}
      alt=""
      onError={missingAssetOnError(PLACEHOLDER_COLORS.divider)}
    />
  </EntryDivider>
);

const dividerVars = (
  style: LoreDividerStyle | undefined,
): React.CSSProperties | undefined =>
  style
    ? ({
        "--dx": style.x,
        "--dy": style.y,
        "--ds": style.scale,
        "--dr": style.rotate,
      } as React.CSSProperties)
    : undefined;

const InkText = ({
  text,
  children,
}: {
  text?: string;
  children?: React.ReactNode;
}): JSX.Element => {
  const content = children ?? text;
  return (
    <>
      <span className="ink-size" aria-hidden="true">
        {content}
      </span>
      <span className="ink-face">{content}</span>
    </>
  );
};

interface InkLine {
  text: string;
  left: number;
  top: number;
  height: number;
}

const measureInkLines = (node: Text, host: HTMLElement): InkLine[] => {
  const hostRect = host.getBoundingClientRect();
  const sx = host.offsetWidth ? hostRect.width / host.offsetWidth : 1;
  const sy = host.offsetHeight ? hostRect.height / host.offsetHeight : 1;
  const range = document.createRange();
  const lines: InkLine[] = [];
  const text = node.data;
  for (let i = 0; i < text.length; i++) {
    range.setStart(node, i);
    range.setEnd(node, i + 1);
    const rect = range.getClientRects()[0];
    const last = lines[lines.length - 1];
    if (!rect || rect.width === 0) {
      if (last) last.text += text[i];
      continue;
    }
    const top = (rect.top - hostRect.top) / sy;
    if (last && Math.abs(top - last.top) < last.height / 2) {
      last.text += text[i];
    } else {
      lines.push({
        text: text[i],
        left: (rect.left - hostRect.left) / sx,
        top,
        height: rect.height / sy,
      });
    }
  }
  return lines.map((l) => ({
    text: l.text.trimEnd(),
    left: Math.round(l.left * 10) / 10,
    top: Math.round(l.top * 10) / 10,
    height: Math.round(l.height * 10) / 10,
  }));
};

const InkHeadingText = ({ text }: { text: string }): JSX.Element => {
  const sizerRef = useRef<HTMLSpanElement>(null);
  const updateRef = useRef<() => void>();
  const [lines, setLines] = useState<InkLine[]>([]);

  useLayoutEffect(() => {
    const sizer = sizerRef.current;
    const host = sizer?.parentElement;
    const node = sizer?.firstChild;
    if (!sizer || !host || !(node instanceof Text)) return undefined;
    const update = () => {
      const next = measureInkLines(node, host);
      setLines((prev) =>
        JSON.stringify(prev) === JSON.stringify(next) ? prev : next,
      );
    };
    updateRef.current = update;
    update();
    const observer = new ResizeObserver(update);
    observer.observe(host);
    document.fonts?.addEventListener("loadingdone", update);
    return () => {
      updateRef.current = undefined;
      observer.disconnect();
      document.fonts?.removeEventListener("loadingdone", update);
    };
  }, [text]);

  useLayoutEffect(() => {
    updateRef.current?.();
  });

  return (
    <>
      <span ref={sizerRef} className="ink-text">
        {text}
      </span>
      {lines.map((line, i) => (
        <span
          key={i}
          className="ink-line"
          aria-hidden="true"
          style={{
            left: line.left,
            top: line.top,
            lineHeight: `${line.height}px`,
          }}
        >
          {line.text}
        </span>
      ))}
    </>
  );
};

const DropCap = ({ letter }: { letter: string }): JSX.Element => (
  <DropCapLetter data-dropcap>{letter}</DropCapLetter>
);

type ImageSizes = Record<string, [number, number]>;
const ImageSizesContext = React.createContext<ImageSizes | null>(null);

const IllustrationBlock = ({
  block,
  images,
}: {
  block: LoreIllustration;
  images: Record<string, string> | undefined;
}): JSX.Element => {
  const src = resolveImageSrc(
    block.src ?? (block.slot ? artSrc(block.slot) : undefined),
    images,
  );
  const sizes = useContext(ImageSizesContext);
  const size = src ? sizes?.[src] : undefined;
  const deferred = !!size;
  return (
    <IllustrationFrame
      $float={block.float}
      $width={block.width}
      style={
        size
          ? ({ "--ar": size[0] / size[1] } as React.CSSProperties)
          : undefined
      }
    >
      <img
        src={deferred ? undefined : src}
        data-lazy-src={deferred ? src : undefined}
        style={
          size
            ? {
                aspectRatio: `${size[0]} / ${size[1]}`,
                ...(block.float ? null : { width: size[0] }),
              }
            : undefined
        }
        alt={block.alt ?? ""}
        decoding="async"
        onLoad={(e) => {
          const img = e.currentTarget;
          if (img.naturalHeight)
            img.parentElement?.style.setProperty(
              "--ar",
              String(img.naturalWidth / img.naturalHeight),
            );
        }}
        onError={missingAssetOnError(PLACEHOLDER_COLORS.art)}
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
};

const renderBlock = (
  block: LoreBlock,
  key: number,
  images: Record<string, string> | undefined,
  dividerKey: string,
  dropCapLetter?: string,
): JSX.Element | null => {
  switch (block.type) {
    case "divider": {
      const blockDivider = block.divider ?? dividerKey;
      if (blockDivider === DIVIDER_NONE) return null;
      return (
        <DividerArt
          key={key}
          src={dividerSrc(blockDivider)}
          style={dividerVars(block)}
        />
      );
    }
    case "heading":
      return (
        <Heading key={key}>
          <InkHeadingText text={block.text} />
        </Heading>
      );
    case "quote":
      return (
        <QuoteBlock key={key}>
          {md(block.text)}
          {block.cite && <cite>{block.cite}</cite>}
        </QuoteBlock>
      );
    case "pagebreak":
      return <PageBreak key={key} />;
    case "illustration":
      return <IllustrationBlock key={key} block={block} images={images} />;
    case "text":
    default: {
      const nodes = parseInline(block.text);
      return (
        <Paragraph key={key}>
          {dropCapLetter && <DropCap letter={dropCapLetter} />}
          {renderInline(dropCapLetter ? dropFirstChar(nodes) : nodes)}
        </Paragraph>
      );
    }
  }
};

const EntryBlock = React.memo(function EntryBlock({
  entry,
  first,
  images,
  statusLabel,
  registerRef,
  opener,
}: {
  entry: LoreEntry;
  first: boolean;
  images: Record<string, string> | undefined;
  statusLabel: string;
  registerRef: (id: string, el: HTMLElement | null) => void;
  opener?: { subject: string; tagline: string };
}): JSX.Element {
  const firstText = entry.body.find(
    (block): block is LoreText =>
      block.type === "text" &&
      /^\p{L}/u.test(plainText(parseInline(block.text)).trimStart()),
  );
  const dropCapLetter = firstText
    ? plainText(parseInline(firstText.text)).trimStart()[0].toUpperCase()
    : undefined;

  const dividerKey = entry.divider ?? entry.icon ?? DEFAULT_DIVIDER;
  const frameTheme = iconTheme(entry.icon);
  const frameStyle = frameTheme
    ? ({
        "--frame-color": themes[frameTheme]["--title-stroke"],
        "--dropcap-color": DROPCAP_COLOR[frameTheme],
      } as React.CSSProperties)
    : undefined;

  return (
    <EntrySection
      id={entry.id}
      style={frameStyle}
      ref={(el: HTMLElement | null) => registerRef(entry.id, el)}
    >
      {opener && (
        <ChapterOpener>
          {entry.icon && (
            <SongOpenerIcon
              src={iconSrc(entry.icon)}
              alt=""
              onError={missingAssetOnError(PLACEHOLDER_COLORS.icon)}
            />
          )}
          <StandaloneDividerTitle>
            <InkText text={opener.subject} />
          </StandaloneDividerTitle>
          <BookSubtitle>{md(opener.tagline)}</BookSubtitle>
        </ChapterOpener>
      )}
      {!first && dividerKey !== DIVIDER_NONE && (
        <DividerArt
          src={dividerSrc(dividerKey)}
          style={dividerVars(entry.dividerStyle)}
        />
      )}
      <EntryHeader>
        {entry.icon && (
          <SongIcon
            src={iconSrc(entry.icon)}
            alt=""
            onError={missingAssetOnError(PLACEHOLDER_COLORS.icon)}
          />
        )}
        <EntrySubject>
          <InkText
            text={`${SUBJECT_LABEL[entry.subjectKind]}: ${entry.subject}`}
          />
        </EntrySubject>
        <EntryTitle>
          <InkText text={entry.title} />
        </EntryTitle>
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
          <ShareButton slug={entry.id} label="Copy link to this theory" />
        </CreditRow>
      </EntryHeader>
      <StickyNote entry={entry} label={statusLabel} />
      <EntryDoodle entry={entry} />
      <EntryTakodachi entry={entry} images={images} />
      {entry.body.map((block, i) =>
        renderBlock(
          block,
          i,
          images,
          dividerKey,
          block === firstText ? dropCapLetter : undefined,
        ),
      )}
    </EntrySection>
  );
});

const BOOK_TILT_RANGE = 0.8;

const Takonomicon = (): JSX.Element => {
  const { data, loading, error } = useFetch<LoreData>(
    `${process.env.PUBLIC_URL}/data/takonomiconData.json`,
  );

  const { data: sizes, loading: sizesLoading } = useFetch<ImageSizes>(
    `${process.env.PUBLIC_URL}/data/takonomiconImageSizes.json`,
  );

  const bookTilt = useMemo(
    () => (Math.random() - 0.5) * 2 * BOOK_TILT_RANGE,
    [],
  );

  const book = data?.book ?? DEFAULT_BOOK;
  const images = data?.images;
  const entries = useMemo(() => data?.entries ?? [], [data]);
  const mainEntries = useMemo(
    () => entries.filter((entry) => entry.section === "main"),
    [entries],
  );
  const standaloneEntries = useMemo(
    () => entries.filter((entry) => entry.section === "standalone"),
    [entries],
  );
  const songGroups = useMemo(() => {
    const groups: [string, LoreEntry[]][] = [];
    mainEntries.forEach((entry) => {
      const last = groups[groups.length - 1];
      if (last && last[0] === entry.subject) last[1].push(entry);
      else groups.push([entry.subject, [entry]]);
    });
    return groups;
  }, [mainEntries]);
  const orderedEntries = useMemo(
    () => [
      ...songGroups.flatMap(([, songEntries]) => songEntries),
      ...standaloneEntries,
    ],
    [songGroups, standaloneEntries],
  );

  const {
    play: playPageTurn,
    muted: sfxMuted,
    toggleMuted: toggleSfxMuted,
  } = usePageTurnSound();

  const [zoomed, setZoomed] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryView, setGalleryView] = useState<string | null>(null);
  useEffect(() => {
    if (!galleryOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (galleryView) setGalleryView(null);
      else setGalleryOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [galleryOpen, galleryView]);

  const {
    frameRef,
    flowRef: hookFlowRef,
    page,
    pageCount,
    pagesPerSpread,
    pageWidth,
    pageHeight,
    layoutWidth,
    layoutHeight,
    scale,
    mobile,
    measured,
    layoutVersion,
    next,
    prev,
    turnTo,
    pageOf,
    hasUserNavigated,
  } = usePaginatedFlow(playPageTurn, COVER_RATIO, zoomed ? ZOOM_LEVEL : 1);

  const flowNodeRef = useRef<HTMLDivElement | null>(null);
  const flowRef = useCallback(
    (node: HTMLDivElement | null) => {
      flowNodeRef.current = node;
      hookFlowRef(node);
    },
    [hookFlowRef],
  );

  const [loadLimit, setLoadLimit] = useState(LOAD_GROUP);
  useEffect(() => {
    const flow = flowNodeRef.current;
    if (pageWidth <= 0 || !flow) return;
    const need = Math.max(
      loadLimit,
      (Math.floor(page / LOAD_GROUP) + 1) * LOAD_GROUP,
    );
    if (need !== loadLimit) {
      setLoadLimit(need);
      return;
    }
    flow
      .querySelectorAll<HTMLImageElement>("img[data-lazy-src]")
      .forEach((img) => {
        if (pageOf(img) >= loadLimit) return;
        img.setAttribute("data-lazy-pending", "");
        img.src = img.dataset.lazySrc ?? "";
        img.removeAttribute("data-lazy-src");
      });
    const pending = Array.from(
      flow.querySelectorAll<HTMLImageElement>("img[data-lazy-pending]"),
    ).filter((img) => !img.complete);
    if (loadLimit >= pageCount) return;
    let cancelled = false;
    Promise.all(
      pending.map(
        (img) =>
          new Promise((resolve) => {
            img.addEventListener("load", resolve, { once: true });
            img.addEventListener("error", resolve, { once: true });
          }),
      ),
    ).then(() => {
      if (!cancelled) setLoadLimit((l) => l + LOAD_GROUP);
    });
    return () => {
      cancelled = true;
    };
  }, [pageWidth, layoutVersion, page, pageCount, loadLimit, pageOf]);

  const scaleRef = useRef(scale);
  scaleRef.current = scale;
  const prevPageRef = useRef<number | null>(null);
  useEffect(() => {
    const prev = prevPageRef.current;
    prevPageRef.current = page;
    const node = flowNodeRef.current;
    if (prev === null || prev === page || !measured || !node) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const kind =
      PAGE_TURN_ANIMATIONS[
        Math.floor(Math.random() * PAGE_TURN_ANIMATIONS.length)
      ];
    const dx = page > prev ? 14 : -14;
    const animation =
      kind === "fade"
        ? node.animate([{ opacity: 0.35 }, { opacity: 1 }], {
            duration: 200,
            easing: "ease-out",
          })
        : kind === "type"
          ? node.animate(
              [
                { clipPath: "inset(0 100% 0 0)" },
                { clipPath: "inset(0 0 0 0)" },
              ],
              { duration: 320, easing: "steps(14)" },
            )
          : node.animate(
              [
                {
                  opacity: 0.35,
                  transform: `translateX(${dx}px) scale(${scaleRef.current})`,
                },
                { opacity: 1, transform: `scale(${scaleRef.current})` },
              ],
              { duration: 240, easing: "ease-out" },
            );
    return () => animation.cancel();
  }, [page, measured]);

  const bookState: BookState = useMemo(() => {
    if (page === 0) return "closed-front";
    if (page + pagesPerSpread >= pageCount) return "closed-back";
    return "open";
  }, [page, pagesPerSpread, pageCount]);

  const contentPages = Math.max(pageCount - 2, 1);
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
    onTouchStart: onBookTouchStart,
    onTouchEnd: onBookTouchEnd,
    onTouchCancel: onBookTouchCancel,
  } = useEdgeFlip({
    mobile,
    canPrev,
    canNext,
    onPrev: prev,
    onNext: next,
    disabled: zoomed,
  });

  const {
    tiltX,
    tiltY,
    onMouseMove: onStackMouseMove,
    onMouseLeave: onStackMouseLeave,
  } = use3DTilt(!mobile && !zoomed && bookState !== "open");

  const { setTheme } = useTheme();
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const chosen =
      localStorage.getItem(THEME_CHOSEN_KEY) === "1" ||
      (stored !== null && stored !== "Standard");
    if (!chosen) setTheme("AbyssalHymn");
  }, [setTheme]);

  const [cursorIndex, setCursorIndex] = useState(0);
  useEffect(() => {
    if (edge) setCursorIndex(Math.floor(Math.random() * FLIP_CURSORS.length));
  }, [edge]);

  const [bookmarkArt, setBookmarkArt] = useState(readBookmarkArt);
  const [pickerOpen, setPickerOpen] = useState(false);
  const [jumpOpen, setJumpOpen] = useState(false);
  const jumpRef = useRef<HTMLDivElement>(null);
  const tocRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!jumpOpen) return;
    const close = (e: MouseEvent) => {
      if (!jumpRef.current?.contains(e.target as Node)) setJumpOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [jumpOpen]);
  const pickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pickerOpen) return;
    const close = (e: MouseEvent) => {
      if (!pickerRef.current?.contains(e.target as Node)) setPickerOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [pickerOpen]);

  const chooseBookmarkArt = (index: number) => {
    setBookmarkArt(index);
    setPickerOpen(false);
    try {
      localStorage.setItem(BOOKMARK_ART_KEY, String(index));
    } catch {
      return;
    }
  };

  const { hash, search } = useLocation();
  const entryRefs = useRef<Record<string, HTMLElement | null>>({});
  const [tocPages, setTocPages] = useState<Record<string, number>>({});

  const registerRef = useCallback((id: string, el: HTMLElement | null) => {
    entryRefs.current[id] = el;
  }, []);

  const [bookmark, setBookmark] = useState<Bookmark | null>(readBookmark);

  useEffect(() => {
    if (hasUserNavigated.current || pageCount <= 1 || !measured) return;
    const pageParam = new URLSearchParams(search).get("page");
    if (pageParam !== null && pageParam.trim() !== "") {
      const n = Number(pageParam);
      if (Number.isFinite(n)) {
        turnTo(Math.min(Math.max(Math.round(n), 0), pageCount - 1), false);
        return;
      }
    }
    const slug = hash.replace("#", "");
    const target = entryRefs.current[slug] ?? null;
    if (target) {
      turnTo(pageOf(target), false);
      return;
    }
    if (!bookmark) return;
    const saved = entryRefs.current[bookmark.id];
    if (saved) turnTo(pageOf(saved) + bookmark.offset, false);
  }, [
    hash,
    search,
    pageCount,
    measured,
    pageOf,
    turnTo,
    hasUserNavigated,
    bookmark,
  ]);

  useEffect(() => {
    if (pageCount <= 1 || !measured) return;
    const resolved: Record<string, number> = {};
    orderedEntries.forEach((entry) => {
      const el = entryRefs.current[entry.id];
      if (el) resolved[entry.id] = pageOf(el);
    });
    setTocPages(resolved);
  }, [pageCount, measured, layoutVersion, pageOf, orderedEntries]);

  const currentEntryId = useMemo(() => {
    if (pageCount <= 1) return null;
    const found = [...orderedEntries]
      .reverse()
      .find((entry) => pageOf(entryRefs.current[entry.id]) <= page);
    return found?.id ?? null;
  }, [page, pageCount, layoutVersion, pageOf, orderedEntries]);

  const currentTheme = useMemo(
    () =>
      iconTheme(
        orderedEntries.find((entry) => entry.id === currentEntryId)?.icon,
      ),
    [currentEntryId, orderedEntries],
  );

  useEffect(() => {
    if (currentTheme) setTheme(currentTheme);
  }, [currentTheme, setTheme]);

  const handleJumpSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = Number(new FormData(e.currentTarget).get("page"));
    if (!Number.isFinite(value)) return;
    turnTo(Math.min(Math.max(Math.round(value), 1), contentPages), true, true);
    setJumpOpen(false);
  };

  const handleJumpToIndex = () => {
    turnTo(pageOf(tocRef.current), true, true);
    setJumpOpen(false);
  };

  const bookmarkPage = useMemo(() => {
    if (!bookmark || pageCount <= 1) return null;
    const el = entryRefs.current[bookmark.id];
    if (!el) return null;
    return pageOf(el) + bookmark.offset;
  }, [bookmark, pageCount, layoutVersion, pageOf]);

  const onBookmarkedSpread =
    bookmarkPage !== null &&
    bookmarkPage >= page &&
    bookmarkPage < page + pagesPerSpread;

  const showRibbon = bookState === "open" && !!currentEntryId;

  const ribbonLabel = !bookmark
    ? "Bookmark this page"
    : onBookmarkedSpread
      ? "Remove bookmark"
      : "Jump to your bookmark";

  const [justPlaced, setJustPlaced] = useState(false);

  const handleBookmarkClick = () => {
    if (bookmark && onBookmarkedSpread) {
      setBookmark(null);
      localStorage.removeItem(BOOKMARK_KEY);
      return;
    }
    if (bookmark) {
      if (bookmarkPage !== null) turnTo(bookmarkPage, true, true);
      return;
    }
    if (!currentEntryId) return;
    const anchor = entryRefs.current[currentEntryId];
    if (!anchor) return;
    const next: Bookmark = {
      id: currentEntryId,
      offset: page - pageOf(anchor),
    };
    setBookmark(next);
    localStorage.setItem(BOOKMARK_KEY, JSON.stringify(next));
    setJustPlaced(true);
  };

  return (
    <ImageSizesContext.Provider value={sizes}>
      <BookRoot>
        <ChromeButtonLayout />
        <TopBar>
          <HomeOverlay>
            <NavHome />
          </HomeOverlay>
          <SfxMuteButton
            onClick={toggleSfxMuted}
            title={sfxMuted ? "Unmute page sounds" : "Mute page sounds"}
          >
            {sfxMuted ? <BellOffIcon /> : <BellIcon />}
          </SfxMuteButton>
          <RibbonPicker ref={pickerRef}>
            <RibbonPickerButton
              onClick={() => setPickerOpen((open) => !open)}
              title="Choose bookmark"
              aria-haspopup="true"
              aria-expanded={pickerOpen}
            >
              <BookmarkIcon />
            </RibbonPickerButton>
            {pickerOpen && (
              <RibbonPickerMenu>
                {BOOKMARKS.map((art, i) => (
                  <RibbonPickerOption
                    key={art.src}
                    $src={art.src}
                    $ratio={art.ratio}
                    $active={i === bookmarkArt}
                    onClick={() => chooseBookmarkArt(i)}
                    aria-label={art.label}
                    aria-pressed={i === bookmarkArt}
                  />
                ))}
              </RibbonPickerMenu>
            )}
          </RibbonPicker>
          <ZoomButton
            onClick={() => setZoomed((on) => !on)}
            title={zoomed ? "Zoom out" : "Zoom in"}
            aria-pressed={zoomed}
          >
            {zoomed ? <ZoomOutIcon /> : <ZoomInIcon />}
          </ZoomButton>
          <GalleryButton
            onClick={() => setGalleryOpen(true)}
            title="Artwork gallery"
            aria-label="Artwork gallery"
          >
            <GalleryIcon />
          </GalleryButton>
          {galleryOpen && (
            <GalleryBackdrop
              onClick={() => {
                if (galleryView) setGalleryView(null);
                else setGalleryOpen(false);
              }}
            >
              {galleryView ? (
                <GalleryFull src={galleryView} alt="" />
              ) : (
                <GalleryPanel onClick={(e) => e.stopPropagation()}>
                  <GalleryClose
                    aria-label="Close gallery"
                    onClick={() => setGalleryOpen(false)}
                  >
                    ×
                  </GalleryClose>
                  <GalleryHeading>Artwork gallery</GalleryHeading>
                  {GALLERY_GROUPS.map((group) => (
                    <section key={group.title}>
                      <GalleryGroupTitle>{group.title}</GalleryGroupTitle>
                      <GalleryGrid>
                        {group.items.map((item) => (
                          <GalleryThumb
                            key={item.src}
                            title={item.label}
                            onClick={() => setGalleryView(item.src)}
                          >
                            <img
                              src={item.src}
                              alt={item.label}
                              loading="lazy"
                            />
                          </GalleryThumb>
                        ))}
                      </GalleryGrid>
                    </section>
                  ))}
                </GalleryPanel>
              )}
            </GalleryBackdrop>
          )}
          <PageJump ref={jumpRef}>
            <PageCounter
              onClick={() => setJumpOpen((open) => !open)}
              title="Jump to page"
              aria-haspopup="true"
              aria-expanded={jumpOpen}
            >
              {page === 0 ? "Cover" : page >= pageCount - 1 ? "Back" : page} /{" "}
              {contentPages}
            </PageCounter>
            {jumpOpen && (
              <PageJumpMenu>
                <PageJumpRow onSubmit={handleJumpSubmit}>
                  <label htmlFor="jump-page">Page</label>
                  <input
                    id="jump-page"
                    name="page"
                    type="number"
                    min={1}
                    max={contentPages}
                    defaultValue={Math.min(Math.max(page, 1), contentPages)}
                    autoFocus
                  />
                  <PageJumpButton type="submit">Go</PageJumpButton>
                </PageJumpRow>
                <PageJumpButton type="button" onClick={handleJumpToIndex}>
                  Back to index
                </PageJumpButton>
              </PageJumpMenu>
            )}
          </PageJump>
        </TopBar>
        {loading || sizesLoading ? (
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
            onTouchStart={onBookTouchStart}
            onTouchEnd={onBookTouchEnd}
            onTouchCancel={onBookTouchCancel}
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
                src={FLIP_CURSORS[cursorIndex]}
                alt=""
                $side={edge === "right" ? "right" : "left"}
                $visible={!!edge}
              />
            )}
            <Book
              $mobile={mobile}
              $bookState={bookState}
              $pageWidth={pageWidth}
              $tilt={bookTilt}
              $zoomed={zoomed}
              ref={frameRef}
            >
              <PageStackWrap
                $tiltX={tiltX}
                $tiltY={tiltY}
                $zoomed={zoomed}
                onMouseMove={onStackMouseMove}
                onMouseLeave={onStackMouseLeave}
              >
                <Leaf
                  ref={bookElRef}
                  $width={pageWidth * pagesPerSpread}
                  $height={pageHeight}
                  $zoomed={zoomed}
                >
                  {edgeFlipActive && (
                    <>
                      <EdgeGlow $side="left" $active={edge === "left"} />
                      <EdgeGlow $side="right" $active={edge === "right"} />
                    </>
                  )}
                  {pagesPerSpread === 2 && <Spine />}
                  <Viewport>
                    <PageBackdrop
                      $pageWidth={pageWidth}
                      $pageHeight={pageHeight}
                      $pageCount={pageCount}
                      $offset={page * pageWidth}
                    />
                    <Flow
                      ref={flowRef}
                      $layoutWidth={layoutWidth}
                      $layoutHeight={layoutHeight}
                      $spread={pagesPerSpread}
                      $scale={scale}
                      $typography={book.typography}
                    >
                      <TitlePage
                        $cover={COVER_FRONT}
                        role="img"
                        aria-label={book.title}
                      />
                      <DisclaimerPage>
                        <DisclaimerHeading>
                          <InkText text={book.forewordHeading} />
                        </DisclaimerHeading>
                        <CreditLine>{md(book.foreword)}</CreditLine>
                      </DisclaimerPage>
                      <DisclaimerPage>
                        <DisclaimerHeading>
                          <InkText text={book.disclaimerHeading} />
                        </DisclaimerHeading>
                        <DisclaimerBody>{md(book.disclaimer)}</DisclaimerBody>
                        <DisclaimerHeading>
                          <InkText text={book.legendHeading} />
                        </DisclaimerHeading>
                        <LegendList>
                          {STATUS_ORDER.map((status) => (
                            <LegendRow key={status}>
                              <StatusPill
                                status={status}
                                label={book.statusLabels[status]}
                              />
                              <LegendText>
                                {md(book.statusMeanings[status])}
                              </LegendText>
                            </LegendRow>
                          ))}
                        </LegendList>
                      </DisclaimerPage>
                      <TocPage ref={tocRef}>
                        <DisclaimerHeading>
                          <InkText text={book.contentsHeading} />
                        </DisclaimerHeading>
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
                                  ? tocPages[entry.id]
                                  : ""}
                              </TocPageNum>
                            </TocRow>
                          ))}
                        </TocList>
                      </TocPage>
                      {songGroups.map(([subject, songEntries]) => (
                        <React.Fragment key={songEntries[0].id}>
                          {songEntries.map((entry, i) => (
                            <EntryBlock
                              key={entry.id}
                              entry={entry}
                              first={i === 0}
                              images={images}
                              statusLabel={
                                book.statusLabels[entry.status ?? "thought"]
                              }
                              registerRef={registerRef}
                              opener={
                                i === 0
                                  ? {
                                      subject,
                                      tagline:
                                        book.taglines?.[subject] ??
                                        book.tagline,
                                    }
                                  : undefined
                              }
                            />
                          ))}
                        </React.Fragment>
                      ))}
                      {standaloneEntries.length > 0 && (
                        <StandaloneDivider>
                          <StandaloneDividerTitle>
                            <InkText text={book.standaloneHeading} />
                          </StandaloneDividerTitle>
                        </StandaloneDivider>
                      )}
                      {standaloneEntries.map((entry, i) => (
                        <EntryBlock
                          key={entry.id}
                          entry={entry}
                          first={i === 0}
                          images={images}
                          statusLabel={
                            book.statusLabels[entry.status ?? "thought"]
                          }
                          registerRef={registerRef}
                        />
                      ))}
                      {book.credits.split("||").map((creditPage, pageIndex) => (
                        <DisclaimerPage key={pageIndex}>
                          {pageIndex === 0 && (
                            <DisclaimerHeading>
                              <InkText text={book.creditsHeading} />
                            </DisclaimerHeading>
                          )}
                          {creditPage.split("|").map((line, lineIndex) => (
                            <CreditLine
                              key={lineIndex}
                              $heading={/^[*][*][^*]+[*][*]$/.test(line.trim())}
                            >
                              {md(line.trim())}
                            </CreditLine>
                          ))}
                        </DisclaimerPage>
                      ))}
                      {DOODLE_PAGES.map((cells, pageIndex) => (
                        <DoodlePage key={`doodles-${pageIndex}`}>
                          {cells.map((doodle, cellIndex) => {
                            const seed = `doodle-page-${pageIndex}-${cellIndex}`;
                            return (
                              <DoodleCell
                                key={doodle.src}
                                style={
                                  {
                                    "--dx": `${(seededFraction(seed + "-x") - 0.5) * 20}%`,
                                    "--dy": `${(seededFraction(seed + "-y") - 0.5) * 20}%`,
                                    "--rot": `${(seededFraction(seed + "-r") - 0.5) * 30}deg`,
                                  } as React.CSSProperties
                                }
                              >
                                <img src={doodle.src} alt="" loading="lazy" />
                              </DoodleCell>
                            );
                          })}
                        </DoodlePage>
                      ))}
                      <BackCoverPage $src={COVER_BACK} />
                    </Flow>
                  </Viewport>
                  {pagesPerSpread === 2 ? (
                    <>
                      <PageNumber $corner="left">{page}</PageNumber>
                      <PageNumber $corner="right">{page + 1}</PageNumber>
                    </>
                  ) : (
                    bookState === "open" && (
                      <PageNumber $corner="right">{page}</PageNumber>
                    )
                  )}
                </Leaf>
                {showRibbon && (
                  <Ribbon
                    $hasBookmark={!!bookmark}
                    $revealed={onBookmarkedSpread}
                    $justPlaced={justPlaced}
                    $mobile={mobile}
                    onAnimationEnd={() => setJustPlaced(false)}
                    onClick={handleBookmarkClick}
                    aria-label={ribbonLabel}
                    aria-pressed={!!bookmark}
                  >
                    <RibbonArt
                      $src={BOOKMARKS[bookmarkArt].src}
                      $ratio={BOOKMARKS[bookmarkArt].ratio}
                    />
                  </Ribbon>
                )}
              </PageStackWrap>
            </Book>
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
    </ImageSizesContext.Provider>
  );
};

export default Takonomicon;
