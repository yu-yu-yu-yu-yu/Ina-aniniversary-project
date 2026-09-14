import React, { useEffect, useState } from "react";
import { SRLWrapper } from "simple-react-lightbox";
import { WahrldEntry } from "../../../types";
import { getTakoAvatar } from "../Timeline/ScrollListUtils";
import { getFlagImgSrc, VOID_FLAG } from "../../../utils/flags";
import { useMute } from "../../Common/MuteButton";
import ShareButton from "../../Common/ShareButton";
import {
  EntryAvatar,
  EntryCardWrapper,
  EntryFlag,
  EntryHeader,
  EntryMedia,
  EntryMessage,
  EntryUser,
  SocialsLink,
} from "./styles";

const lightboxOptions = {
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
};

export const getEntryAvatar = (
  icon: string | undefined,
  user: string,
  index: number,
): string =>
  icon
    ? `${process.env.PUBLIC_URL}/takos/${encodeURIComponent(icon)}`
    : getTakoAvatar(user, index);

const WahrldCard = ({
  entry,
  index,
  slug,
}: {
  entry: WahrldEntry;
  index: number;
  slug: string;
}): JSX.Element => {
  const { reportVideoPlaying } = useMute();
  const [loadError, setLoadError] = useState(false);
  const [flagError, setFlagError] = useState(false);
  const [mediaAspect, setMediaAspect] = useState<number | null>(null);
  const flagSrc = getFlagImgSrc(entry.country);
  const cardMaxWidth =
    mediaAspect !== null && mediaAspect < 1 ? 480 : undefined;
  const socialLabel = entry.socials
    ? (() => {
        try {
          const url = new URL(entry.socials);
          const handle = url.pathname.replace(/^\//, "").replace(/\/$/, "");
          return handle ? `@${handle}` : "Social link";
        } catch {
          return "Social link";
        }
      })()
    : "";
  const mediaSrc = entry.file
    ? `${process.env.PUBLIC_URL}/wahrldSubmissions/${entry.file}`
    : "";

  useEffect(() => {
    setLoadError(false);
    setMediaAspect(null);
  }, [entry.file]);

  useEffect(() => {
    if (entry.kind !== "video") return;
    return () => reportVideoPlaying(false);
  }, [entry.kind, entry.file, reportVideoPlaying]);

  return (
    <EntryCardWrapper $maxWidth={cardMaxWidth}>
      <EntryMedia $aspect={!loadError ? mediaAspect : null}>
        {entry.kind === "video" ? (
          <video
            controls
            preload="none"
            onLoadedMetadata={(event) => {
              const { videoWidth, videoHeight } = event.currentTarget;
              if (videoWidth && videoHeight) {
                setMediaAspect(videoWidth / videoHeight);
              }
            }}
            onPlay={() => reportVideoPlaying(true)}
            onPause={() => reportVideoPlaying(false)}
            onEnded={() => reportVideoPlaying(false)}
            onError={() => {
              console.error(`WAHrld video failed to load: ${entry.file}`);
              setLoadError(true);
            }}
          >
            <source src={mediaSrc} type="video/mp4" />
          </video>
        ) : loadError || !mediaSrc ? (
          <div
            role="alert"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: 180,
              padding: "1rem",
              color: "var(--light-highlight)",
              textAlign: "center",
            }}
          >
            {entry.file
              ? `Could not load image: ${entry.file}`
              : "This submission is missing its file asset."}
          </div>
        ) : (
          <SRLWrapper options={lightboxOptions}>
            <img
              src={mediaSrc}
              alt={entry.user}
              onLoad={(event) => {
                const { naturalWidth, naturalHeight } = event.currentTarget;
                if (naturalWidth && naturalHeight) {
                  setMediaAspect(naturalWidth / naturalHeight);
                }
              }}
              onError={(event) => {
                event.currentTarget.onerror = null;
                console.error(`WAHrld image failed to load: ${entry.file}`);
                setLoadError(true);
              }}
            />
          </SRLWrapper>
        )}
      </EntryMedia>
      <EntryHeader>
        <EntryAvatar
          src={getEntryAvatar(entry.icon, entry.user, index)}
          alt={entry.user}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = getTakoAvatar(null, index);
          }}
        />
        <EntryUser>{entry.user}</EntryUser>
        {flagSrc && !flagError ? (
          <EntryFlag
            as="img"
            src={flagSrc}
            alt={entry.country}
            onError={() => setFlagError(true)}
          />
        ) : (
          <EntryFlag role="img" aria-label={entry.country || "The Void"}>
            {VOID_FLAG}
          </EntryFlag>
        )}
        <ShareButton slug={slug} label="Copy link to this submission" />
      </EntryHeader>
      {entry.message && <EntryMessage>{entry.message}</EntryMessage>}
      {entry.socials && (
        <SocialsLink
          href={entry.socials}
          target="_blank"
          rel="noopener noreferrer"
        >
          {socialLabel}
        </SocialsLink>
      )}
    </EntryCardWrapper>
  );
};

export default WahrldCard;
