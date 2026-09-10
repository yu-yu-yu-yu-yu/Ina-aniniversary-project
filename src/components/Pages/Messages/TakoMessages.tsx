import React, { useEffect, useMemo, useRef, useState } from "react";
import { Submission } from "../../../types";
import Masonry from "react-masonry-component";
import { TakoIcon } from "./TakoIcon";
import { SRLWrapper } from "simple-react-lightbox";
import { notifyPlayerReady } from "../../../utils/youtube";
import ShareButton from "../../Common/ShareButton";
import { entrySlug } from "../../../utils/shareLink";
import {
  BubbleImage,
  IFrame,
  MessageCard,
  MessageCardHeader,
  MessageText,
  SubmissionContainer,
} from "./styles";

export const messageSlug = (sub: Submission): string =>
  entrySlug(sub.user, sub.image || sub.message);

interface TakoMessagesProps {
  submissions: Submission[];
  isToggledOnlyImg: boolean;
  isToggledTextOnly: boolean;
  highlightSlug?: string | null;
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
  isToggledOnlyImg,
  isToggledTextOnly,
  highlightSlug,
}: TakoMessagesProps): JSX.Element => {
  const [pulseSlug, setPulseSlug] = useState<string | null>(null);
  const hasMounted = useRef(false);

  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }
    if (highlightSlug == null) {
      window.scrollTo(0, 0);
    }
  }, [highlightSlug]);

  useEffect(() => {
    if (highlightSlug == null) return;
    const el = document.getElementById(`message-${highlightSlug}`);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "center" });
    setPulseSlug(highlightSlug);
    const timer = setTimeout(() => setPulseSlug(null), 1800);
    return () => clearTimeout(timer);
  }, [highlightSlug, submissions]);

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
        const slug = messageSlug(sub);
        return (
          <SubmissionContainer
            key={i}
            id={`message-${slug}`}
            style={
              pulseSlug === slug
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
                <div style={{ marginLeft: "auto" }}>
                  <ShareButton slug={slug} label="Copy link to this message" />
                </div>
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
