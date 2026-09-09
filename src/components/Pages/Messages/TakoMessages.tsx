import React, { useEffect, useMemo, useState } from "react";
import { Submission } from "../../../types";
import Masonry from "react-masonry-component";
import { TakoIcon } from "./TakoIcon";
import { SRLWrapper } from "simple-react-lightbox";
import { notifyPlayerReady } from "../../../utils/youtube";
import {
  BubbleImage,
  IFrame,
  MessageCard,
  MessageCardHeader,
  MessageText,
  SubmissionContainer,
} from "./styles";

const copyMessageLink = (globalIndex: number): void => {
  const url = `${window.location.origin}${window.location.pathname}#message-${globalIndex}`;
  navigator.clipboard?.writeText(url).catch(() => {});
};

interface TakoMessagesProps {
  submissions: Submission[];
  sourceData: Submission[];
  isToggledOnlyImg: boolean;
  isToggledTextOnly: boolean;
  highlightIndex?: number | null;
}

const options = {
  settings: {
    disablePanzoom: false,
  },
  buttons: {
    showAutoplayButton: false,
    showCloseButton: false,
    showDownloadButton: false,
    showFullscreenButton: false,
    showNextButton: false,
    showPrevButton: false,
    showThumbnailsButton: false,
  },
  thumbnails: {
    showThumbnails: false,
  },
};

const TakoMessages = ({
  submissions,
  sourceData,
  isToggledOnlyImg,
  isToggledTextOnly,
  highlightIndex,
}: TakoMessagesProps): JSX.Element => {
  const [pulseIndex, setPulseIndex] = useState<number | null>(null);

  useEffect(() => {
    if (highlightIndex == null) {
      window.scrollTo(0, 0);
    }
  }, [highlightIndex]);

  useEffect(() => {
    if (highlightIndex == null) return;
    const el = document.getElementById(`message-${highlightIndex}`);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "center" });
    setPulseIndex(highlightIndex);
    const timer = setTimeout(() => setPulseIndex(null), 1800);
    return () => clearTimeout(timer);
  }, [highlightIndex, submissions]);

  const visibleSubmissions = useMemo(() => {
    let filtered = submissions;
    if (isToggledOnlyImg) {
      filtered = filtered.filter((sub) => sub.image);
    }
    if (isToggledTextOnly) {
      filtered = filtered.filter((sub) => sub.message);
    }
    return filtered;
  }, [submissions, isToggledOnlyImg, isToggledTextOnly]);

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
      {visibleSubmissions.map((sub, i) => {
        const { message, user, icon, image, pun, event_date } = sub;
        const globalIndex = sourceData.indexOf(sub);
        return (
          <SubmissionContainer
            key={i}
            id={`message-${globalIndex}`}
            style={
              pulseIndex === globalIndex
                ? {
                    outline: "3px solid var(--light-highlight)",
                    borderRadius: 15,
                  }
                : undefined
            }
          >
            <MessageCard>
              <MessageCardHeader>
                <TakoIcon id={icon} pun={pun} index={i} />
                {user || "Anonymous Tako"}
                <button
                  type="button"
                  onClick={() => copyMessageLink(globalIndex)}
                  title="Copy link to this message"
                  aria-label="Copy link to this message"
                  style={{
                    marginLeft: "auto",
                    background: "none",
                    border: "none",
                    color: "inherit",
                    cursor: "pointer",
                    opacity: 0.8,
                  }}
                >
                  <i className="fa fa-link" aria-hidden="true" />
                </button>
              </MessageCardHeader>
              <div style={{ padding: "0.75rem" }}>
                {!isToggledTextOnly &&
                  image &&
                  (!image.includes("youtube") ? (
                    <SRLWrapper options={options}>
                      {image.includes("mp4") ? (
                        <video width={420} controls>
                          <source
                            src={process.env.PUBLIC_URL + "/artworks/" + image}
                            type="video/mp4"
                          />
                        </video>
                      ) : (
                        <BubbleImage
                          src={process.env.PUBLIC_URL + "/artworks/" + image}
                          loading="lazy"
                          decoding="async"
                        />
                      )}
                    </SRLWrapper>
                  ) : (
                    <IFrame
                      width="100%"
                      height="315"
                      src={`${image}${image.includes("?") ? "&" : "?"}enablejsapi=1`}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen={true}
                      onLoad={(e) => notifyPlayerReady(e.currentTarget)}
                    />
                  ))}
                {(!isToggledOnlyImg || image.includes("mp4")) && (
                  <MessageText>{message}</MessageText>
                )}
                {event_date && (
                  <div
                    style={{
                      textAlign: "right",
                      fontSize: "0.75rem",
                      opacity: 0.6,
                      marginTop: "0.4rem",
                      paddingRight: "0.5rem",
                    }}
                  >
                    {event_date}
                  </div>
                )}
              </div>
            </MessageCard>
          </SubmissionContainer>
        );
      })}
    </Masonry>
  );
};

export default TakoMessages;
