import React, { useLayoutEffect, useState, useEffect, useCallback, useRef } from "react";
import ReactDOM from "react-dom";
import { Submission } from "../../../types";
import Masonry from "react-masonry-component";
import { TakoIcon } from "./TakoIcon";
import { SRLWrapper } from "simple-react-lightbox";
import {
  BubbleHeader,
  BubbleImage,
  BubbleMessage,
  HeaderText,
  IFrame,
  SubmissionContainer,
  TextBubbleContainer,
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
  Backdrop,
  ModalCard,
  CloseButton,
} from "./styles/letterStyles";

const LETTER = (file: string) => `${process.env.PUBLIC_URL}/letter/${file}`;

const FLIP_MS = 500;
const OPEN_MS = 650;

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

interface LetterModalProps {
  submission: Submission;
  index: number;
  onClose: () => void;
}

const LetterModal = ({ submission, index, onClose }: LetterModalProps) => {
  const { message, user, icon, image, pun } = submission;

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return ReactDOM.createPortal(
    <Backdrop onClick={onClose}>
      <ModalCard onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose} aria-label="Close letter">✕</CloseButton>

        <SubmissionContainer>
          <TextBubbleContainer>
            <BubbleHeader>
              <TakoIcon id={icon} pun={pun} index={index} />
              <HeaderText>{user || "Anonymous Tako"}</HeaderText>
            </BubbleHeader>
            <hr />

            {image && (
              !image.includes("youtube") ? (
                <SRLWrapper options={srlOptions}>
                  {image.includes("mp4") ? (
                    <video width="100%" controls style={{ display: "block" }}>
                      <source src={`${process.env.PUBLIC_URL}/Images/${image}`} type="video/mp4" />
                    </video>
                  ) : (
                    <BubbleImage src={`${process.env.PUBLIC_URL}/Images/${image}`} />
                  )}
                </SRLWrapper>
              ) : (
                <IFrame
                  width="100%"
                  height="315"
                  src={image}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen={true}
                />
              )
            )}

            {message && <BubbleMessage>{message}</BubbleMessage>}
          </TextBubbleContainer>
        </SubmissionContainer>
      </ModalCard>
    </Backdrop>,
    document.body
  );
};

interface EnvelopeCardProps {
  submission: Submission;
  index: number;
}

const EnvelopeCard = ({ submission, index }: EnvelopeCardProps) => {
  const [state, setState]         = useState<EnvelopeState>("idle");
  const [hover, setHover]         = useState<HoverState>("idle");
  const [modalOpen, setModalOpen] = useState(false);
  const leaveTimer = useRef<number | null>(null);
  const { user } = submission;

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

  const handleClick = useCallback(() => {
    if (state !== "idle") return;
    if (leaveTimer.current) { clearTimeout(leaveTimer.current); leaveTimer.current = null; }
    if (hover === "hovering") {
      setState("opening");
      setTimeout(() => { setState("open"); setModalOpen(true); }, OPEN_MS);
    } else {
      setState("flipping");
      setTimeout(() => setState("opening"), FLIP_MS);
      setTimeout(() => { setState("open"); setModalOpen(true); }, FLIP_MS + OPEN_MS);
    }
    setHover("idle");
  }, [state, hover]);

  const handleClose = useCallback(() => {
    setModalOpen(false);
    setState("idle");
    setHover("idle");
  }, []);

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
        </FrontFace>

        <BackFace $state={state} $hover={hover}>
          <img className="base" src={LETTER("letter-back.png")} alt="envelope back" />

          <FlapContainer $state={state}>
            <FlapFrontImg src={LETTER("letter-back-top-front.png")} alt="" />
            <FlapBackImg  src={LETTER("letter-back-top-back.png")}  alt="" />
          </FlapContainer>

          <SealImg src={LETTER("letter-back-seal.png")} $opening={state === "opening"} alt="" />
        </BackFace>
      </CardScene>

      {modalOpen && (
        <LetterModal submission={submission} index={index} onClose={handleClose} />
      )}
    </EnvelopeWrapper>
  );
};

const TakoLetters = ({ submissions }: { submissions: Submission[] }): JSX.Element => {
  useLayoutEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <Masonry
        options={{ gutter: 40, columnWidth: 1, fitWidth: true, transitionDuration: 0 }}
        style={{ margin: "0 auto", paddingTop: "80px" }}
      >
        {submissions.map((submission, i) => (
          <EnvelopeCard key={i} index={i} submission={submission} />
        ))}
      </Masonry>
    </div>
  );
};

export default TakoLetters;
