import React, { useState, useEffect, useCallback, useRef } from "react";
import ReactDOM from "react-dom";
import { LetterEntry } from "../../../types";
import Masonry from "react-masonry-component";
import { TakoIcon } from "./TakoIcon";
import { SRLWrapper } from "simple-react-lightbox";
import {
  BubbleHeader,
  BubbleImage,
  HeaderText,
} from "./styles/styles";
import {
  EnvelopeState,
  HoverState,
  EnvelopeWrapper,
  CardScene,
  FrontFace,
  NameOverlay,
  BackFace,
  FlapContainer,
  FlapFrontImg,
  FlapBackImg,
  SealImg,
  ReadSealImg,
  Backdrop,
  ModalCard,
  CloseLetterButton,
  ZoomBar,
  ZoomButton,
  ZoomLabel,
} from "./styles/letterStyles";

const LETTER = (file: string) => `${process.env.PUBLIC_URL}/letterAssets/${file}`;

const FLIP_MS = 500;
const OPEN_MS = 650;
const ANIM_TOTAL_MS = 950;

const srlOptions = {
  settings: { disablePanzoom: false },
  buttons: {
    showAutoplayButton: false,
    showCloseButton: false,
    showDownloadButton: false,
    showFullscreenButton: false,
    showNextButton: false,
    showPrevButton: false,
    showThumbnailsButton: false,
  },
  thumbnails: { showThumbnails: false },
};

const ZOOM_MIN = 100;
const ZOOM_MAX = 200;
const ZOOM_STEP = 25;

const LS_KEY = (index: number) => `letter_read_${index}`;

const CenterAnimOverlay = ({ submission }: { submission: LetterEntry }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return ReactDOM.createPortal(
    <Backdrop style={{ cursor: "default" }}>
      <div style={{ width: "280px", position: "relative", pointerEvents: "none" }}>
        <img src={LETTER("letter-back.png")} style={{ width: "100%", display: "block", borderRadius: "6px" }} alt="" />
        <FlapContainer $state="opening">
          <FlapFrontImg src={LETTER("letter-back-top-front.png")} alt="" />
          <FlapBackImg  src={LETTER("letter-back-top-back.png")}  alt="" />
        </FlapContainer>
        <SealImg src={LETTER("letter-back-seal.png")} $opening={true} alt="" />
      </div>
    </Backdrop>,
    document.body
  );
};

interface LetterModalProps {
  submission: LetterEntry;
  index: number;
  total: number;
  zoom: number;
  onZoomChange: (z: number) => void;
  onClose: () => void;
  onNavigate: (from: number, delta: number) => void;
}

const LetterModal = ({ submission, index, total, zoom, onZoomChange, onClose, onNavigate }: LetterModalProps) => {
  const { user, icon, image } = submission;
  const hasPrev = index > 0;
  const hasNext = index < total - 1;

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape")      onClose();
      if (e.key === "ArrowLeft")   onNavigate(index, -1);
      if (e.key === "ArrowRight")  onNavigate(index,  1);
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose, onNavigate, index]);

  const modalWidth = `min(${Math.max(70, zoom / 2 + 12)}vw, 96vw)`;

  return ReactDOM.createPortal(
    <Backdrop onClick={onClose}>
      <ModalCard onClick={(e) => e.stopPropagation()} style={{ width: modalWidth, overflowX: "auto" }}>
        <ZoomBar>
          <ZoomButton onClick={() => onNavigate(index, -1)} disabled={!hasPrev} title="Previous letter">←</ZoomButton>
          <ZoomButton onClick={() => onZoomChange(Math.max(ZOOM_MIN, zoom - ZOOM_STEP))} disabled={zoom <= ZOOM_MIN} title="Zoom out">−</ZoomButton>
          <ZoomLabel>Zoom {zoom}%</ZoomLabel>
          <ZoomButton onClick={() => onZoomChange(Math.min(ZOOM_MAX, zoom + ZOOM_STEP))} disabled={zoom >= ZOOM_MAX} title="Zoom in">+</ZoomButton>
          <ZoomButton onClick={() => onNavigate(index, 1)} disabled={!hasNext} title="Next letter">→</ZoomButton>
        </ZoomBar>

        <hr style={{ margin: "4px 0 8px" }} />

        {image && (
          <SRLWrapper options={srlOptions}>
            {image.includes("mp4") ? (
              <video style={{ display: "block", width: `${zoom / 2}vw`, margin: "0 auto" }} controls>
                <source src={`${process.env.PUBLIC_URL}/letters/${image}`} type="video/mp4" />
              </video>
            ) : (
              <BubbleImage
                src={`${process.env.PUBLIC_URL}/letters/${image}`}
                style={{ width: `${zoom / 2}vw` }}
              />
            )}
          </SRLWrapper>
        )}

        <hr style={{ margin: "8px 0 4px" }} />

        <BubbleHeader>
          <TakoIcon id={icon} index={index} />
          <HeaderText>{user || "Anonymous Tako"}</HeaderText>
        </BubbleHeader>

        <CloseLetterButton onClick={onClose}>Close letter</CloseLetterButton>
      </ModalCard>
    </Backdrop>,
    document.body
  );
};

interface EnvelopeCardProps {
  submission: LetterEntry;
  index: number;
  isOpen: boolean;
  onOpen: (index: number) => void;
}

const EnvelopeCard = ({ submission, index, isOpen, onOpen }: EnvelopeCardProps) => {
  const [state, setState]   = useState<EnvelopeState>("idle");
  const [hover, setHover]   = useState<HoverState>("idle");
  const [isRead, setIsRead] = useState(() => localStorage.getItem(LS_KEY(index)) === "1");
  const leaveTimer = useRef<number | null>(null);
  const { user } = submission;

  useEffect(() => {
    if (isOpen && localStorage.getItem(LS_KEY(index)) === "1") setIsRead(true);
  }, [isOpen, index]);

  useEffect(() => {
    if (!isOpen && state === "open") setState("idle");
  }, [isOpen]);

  const handleMouseEnter = useCallback(() => {
    if (state !== "idle") return;
    if (leaveTimer.current) { clearTimeout(leaveTimer.current); leaveTimer.current = null; }
    setHover("hovering");
  }, [state]);

  const handleMouseLeave = useCallback(() => {
    if (state !== "idle") return;
    setHover("leaving");
    leaveTimer.current = window.setTimeout(() => {
      setHover("idle");
      leaveTimer.current = null;
    }, 500);
  }, [state]);

  const markRead = useCallback(() => {
    localStorage.setItem(LS_KEY(index), "1");
    setIsRead(true);
  }, [index]);

  const handleClick = useCallback(() => {
    if (state !== "idle") return;
    if (leaveTimer.current) { clearTimeout(leaveTimer.current); leaveTimer.current = null; }
    if (hover === "hovering") {
      setState("opening");
      setTimeout(() => { setState("open"); onOpen(index); markRead(); }, OPEN_MS);
    } else {
      setState("flipping");
      setTimeout(() => setState("opening"), FLIP_MS);
      setTimeout(() => { setState("open"); onOpen(index); markRead(); }, FLIP_MS + OPEN_MS);
    }
    setHover("idle");
  }, [state, hover, onOpen, index, markRead]);

  return (
    <EnvelopeWrapper
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CardScene>
        <FrontFace $state={state} $hover={hover}>
          <img src={LETTER("letter-front.png")} alt="envelope front" />
          <NameOverlay>{user || "Anonymous Tako"}</NameOverlay>
          <ReadSealImg
            src={LETTER("letter-back-seal.png")}
            $visible={isRead}
            alt="read seal"
          />
        </FrontFace>

        <BackFace $state={state} $hover={hover}>
          <img className="base" src={LETTER("letter-back.png")} alt="envelope back" />
          <FlapContainer $state={state}>
            <FlapFrontImg src={LETTER("letter-back-top-front.png")} alt="" />
            <FlapBackImg  src={LETTER("letter-back-top-back.png")}  alt="" />
          </FlapContainer>
          {!isRead && <SealImg src={LETTER("letter-back-seal.png")} $opening={state === "opening"} alt="" />}
        </BackFace>
      </CardScene>
    </EnvelopeWrapper>
  );
};

const TakoLetters = ({ submissions }: { submissions: LetterEntry[] }): JSX.Element => {
  const [zoom, setZoom]           = useState(100);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [animIndex, setAnimIndex] = useState<number | null>(null);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleOpen = useCallback((idx: number) => {
    setOpenIndex(idx);
  }, []);

  const handleClose = useCallback(() => {
    setOpenIndex(null);
  }, []);

  const handleNavigate = useCallback((from: number, delta: number) => {
    const next = from + delta;
    if (next < 0 || next >= submissions.length) return;

    const alreadyRead = localStorage.getItem(LS_KEY(next)) === "1";
    setOpenIndex(null);

    if (alreadyRead) {
      setOpenIndex(next);
    } else {
      localStorage.setItem(LS_KEY(next), "1");
      setAnimIndex(next);
      setTimeout(() => {
        setAnimIndex(null);
        setOpenIndex(next);
      }, ANIM_TOTAL_MS);
    }
  }, [submissions.length]);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", width: "100%", padding: "0 20px", boxSizing: "border-box" }}>
        <Masonry
          options={{ gutter: 40, columnWidth: 1, fitWidth: true, transitionDuration: 0 }}
          style={{ margin: "0 auto", paddingTop: "80px" }}
        >
          {submissions.map((submission, i) => (
            <EnvelopeCard
              key={i}
              index={i}
              submission={submission}
              isOpen={openIndex === i}
              onOpen={handleOpen}
            />
          ))}
        </Masonry>
      </div>

      {openIndex !== null && (
        <LetterModal
          key={openIndex}
          submission={submissions[openIndex]}
          index={openIndex}
          total={submissions.length}
          zoom={zoom}
          onZoomChange={setZoom}
          onClose={handleClose}
          onNavigate={handleNavigate}
        />
      )}

      {animIndex !== null && (
        <CenterAnimOverlay submission={submissions[animIndex]} />
      )}
    </>
  );
};

export default TakoLetters;
