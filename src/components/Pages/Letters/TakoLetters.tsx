import React, { useLayoutEffect, useState, useEffect, useCallback } from "react";
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
import styled, { keyframes, css } from "styled-components";

interface TakoMessagesProps {
  submissions: Submission[];
  isToggledOnlyImg: boolean;
  isToggledTextOnly: boolean;
}

const options = {
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

const lidOpen = keyframes`
  0%   { transform: rotateX(0deg); }
  100% { transform: rotateX(-180deg); }
`;

const envelopeFloat = keyframes`
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-5px); }
`;

const backdropFadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const modalSlideIn = keyframes`
  from { opacity: 0; transform: translateY(20px) scale(0.96); }
  to   { opacity: 1; transform: translateY(0)    scale(1);    }
`;

const EnvelopeWrapper = styled.div`
  width: 280px;
  margin-bottom: 8px;
  cursor: pointer;
  position: relative;
`;

const EnvelopeSVGWrapper = styled.div<{ $opened: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.2s ease;

  svg {
    filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.18));
    animation: ${({ $opened }) =>
      $opened
        ? "none"
        : css`${envelopeFloat} 3s ease-in-out infinite`};
  }

  &:hover svg {
    filter: drop-shadow(0 6px 18px rgba(0, 0, 0, 0.28));
  }
`;

const LidGroup = styled.g<{ $opened: boolean }>`
  transform-origin: top center;
  transform-box: fill-box;
  animation: ${({ $opened }) =>
    $opened
      ? css`${lidOpen} 0.4s ease forwards`
      : "none"};
`;

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(3px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${backdropFadeIn} 0.25s ease forwards;
  padding: 24px;
`;

const ModalCard = styled.div`
  background: var(--text-color, #fff);
  border-radius: 12px;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);
  max-width: 540px;
  width: 100%;
  max-height: 85vh;
  overflow-y: auto;
  position: relative;
  animation: ${modalSlideIn} 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;

  scrollbar-width: thin;
  scrollbar-color: #bb6ad4 transparent;
  &::-webkit-scrollbar { width: 6px; }
  &::-webkit-scrollbar-thumb { background: #b66ad4; border-radius: 3px; }
`;

const CloseButton = styled.button`
  position: sticky;
  top: 12px;
  float: right;
  margin: 12px 12px 0 0;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 22px;
  line-height: 1;
  color: #795a9b;
  transition: color 0.15s ease, transform 0.15s ease;
  z-index: 10;

  &:hover {
    color: #c0392b;
    transform: scale(1.15);
  }
`;

const EnvelopeSVG = ({ opened, sender }: { opened: boolean; sender: string }) => (
  <svg width="280" height="175" viewBox="0 0 280 175" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="40" width="276" height="133" rx="6" fill="#ebe0f5" stroke="#a46ad4" strokeWidth="2" />
    <polygon points="2,45 2,173 138,105" fill="#dfb7e8" stroke="#b46ad4" strokeWidth="1" />
    <polygon points="278,45 278,173 142,105" fill="#cba8dc" stroke="#bf6ad4" strokeWidth="1" />
    <polygon points="2,173 278,173 140,100" fill="#ecccf0" stroke="#bd6ad4" strokeWidth="1.5" />

    <LidGroup $opened={opened}>
      <polygon
        points="2,42 278,42 140,118"
        fill={opened ? "#b77ac8" : "#ce9ae0"}
        stroke="#b16ad4"
        strokeWidth="1.5"
      />
    </LidGroup>

    {!opened && (
      <g transform="translate(140,118)">
        <circle r="18" fill="#c0982b" stroke="#926321" strokeWidth="1.5" />
        <text
          textAnchor="middle"
          dominantBaseline="central"
          fontSize="14"
          fill="#f9ebea"
          fontFamily="Georgia, serif"
          fontWeight="bold"
          letterSpacing="1"
        >
          🐙
        </text>
      </g>
    )}

    <text x="20" y="90" fontSize="10" fill="#5a6a9b" fontFamily="Georgia, serif" opacity="0.7">
      From:
    </text>
    <text x="20" y="104" fontSize="12" fill="#2a346b" fontFamily="Georgia, serif" fontWeight="bold">
      {sender.length > 22 ? sender.slice(0, 22) + "…" : sender}
    </text>
  </svg>
);

interface LetterModalProps {
  submission: Submission;
  index: number;
  isToggledOnlyImg: boolean;
  isToggledTextOnly: boolean;
  onClose: () => void;
}

const LetterModal = ({ submission, index, isToggledOnlyImg, isToggledTextOnly, onClose }: LetterModalProps) => {
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

            {!isToggledTextOnly &&
              image &&
              (!image.includes("youtube") ? (
                <SRLWrapper options={options}>
                  {image.includes("mp4") ? (
                    <video width="100%" controls style={{ display: "block" }}>
                      <source src={process.env.PUBLIC_URL + "/Images/" + image} type="video/mp4" />
                    </video>
                  ) : (
                    <BubbleImage src={process.env.PUBLIC_URL + "/Images/" + image} />
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
              ))}

            {(!isToggledOnlyImg || image.includes("mp4")) && (
              <BubbleMessage>{message}</BubbleMessage>
            )}
          </TextBubbleContainer>
        </SubmissionContainer>
      </ModalCard>
    </Backdrop>,
    document.body
  );
};

const EnvelopeCard = ({
  submission,
  index,
  isToggledOnlyImg,
  isToggledTextOnly,
}: {
  submission: Submission;
  index: number;
  isToggledOnlyImg: boolean;
  isToggledTextOnly: boolean;
}) => {
  const [opened, setOpened] = useState(false);
  const { user } = submission;

  const handleClose = useCallback(() => setOpened(false), []);

  return (
    <EnvelopeWrapper>
      <EnvelopeSVGWrapper $opened={opened} onClick={() => setOpened(true)}>
        <EnvelopeSVG opened={opened} sender={user || "Anonymous Tako"} />
      </EnvelopeSVGWrapper>

      {opened && (
        <LetterModal
          submission={submission}
          index={index}
          isToggledOnlyImg={isToggledOnlyImg}
          isToggledTextOnly={isToggledTextOnly}
          onClose={handleClose}
        />
      )}
    </EnvelopeWrapper>
  );
};

const TakoLetters = ({
  submissions,
  isToggledOnlyImg,
  isToggledTextOnly,
}: TakoMessagesProps): JSX.Element => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isToggledOnlyImg) {
    submissions = submissions.filter((sub) => sub.image);
  }

  return (
    <Masonry
      options={{
        gutter: 40,
        columnWidth: 1,
        fitWidth: true,
        transitionDuration: 0,
      }}
      style={{ margin: "0 auto" }}
    >
      {submissions.map((submission, i) => (
        <EnvelopeCard
          key={i}
          index={i}
          submission={submission}
          isToggledOnlyImg={isToggledOnlyImg}
          isToggledTextOnly={isToggledTextOnly}
        />
      ))}
    </Masonry>
  );
};

export default TakoLetters;