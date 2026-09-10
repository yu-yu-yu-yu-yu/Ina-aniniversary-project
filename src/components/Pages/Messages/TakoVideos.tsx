import React, { useEffect, useLayoutEffect, useState } from "react";
import { Submission } from "../../../types";
import Masonry from "react-masonry-component";
import { TakoIcon } from "./TakoIcon";
import { notifyPlayerReady } from "../../../utils/youtube";
import ShareButton from "../../Common/ShareButton";
import { entrySlug } from "../../../utils/shareLink";
import {
  IFrame,
  MessageCard,
  MessageCardHeader,
  MessageText,
  SubmissionContainer,
} from "./styles";

export const videoSlug = (sub: Submission): string =>
  entrySlug(sub.user, sub.image);

interface TakoMessagesProps {
  submissions: Submission[];
  isToggledOnlyImg: boolean;
  isToggledTextOnly: boolean;
  highlightSlug?: string | null;
}

const TakoMessages = ({
  submissions,
  highlightSlug,
}: TakoMessagesProps): JSX.Element => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [pulseSlug, setPulseSlug] = useState<string | null>(null);

  useEffect(() => {
    if (highlightSlug == null) return;
    const el = document.getElementById(`video-${highlightSlug}`);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "center" });
    setPulseSlug(highlightSlug);
    const timer = setTimeout(() => setPulseSlug(null), 1800);
    return () => clearTimeout(timer);
  }, [highlightSlug, submissions]);

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
      {submissions.map((entry, i) => {
        const { message, user, icon, image, pun, sub } = entry;
        const slug = videoSlug(entry);
        return (
          <SubmissionContainer
            key={i}
            id={`video-${slug}`}
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
                  <ShareButton slug={slug} label="Copy link to this video" />
                </div>
              </MessageCardHeader>
              <div style={{ padding: "0.75rem" }}>
                {image.includes("http") ? (
                  <IFrame
                    width="100%"
                    height="315"
                    src={image}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen={true}
                    onLoad={(e) => notifyPlayerReady(e.currentTarget)}
                  />
                ) : (
                  <>
                    <MessageText>{image}</MessageText>
                    <hr />
                  </>
                )}
                {sub && (
                  <>
                    <MessageText>{sub}</MessageText>
                    <hr />
                  </>
                )}
                <MessageText>{message}</MessageText>
              </div>
            </MessageCard>
          </SubmissionContainer>
        );
      })}
    </Masonry>
  );
};

export default TakoMessages;
