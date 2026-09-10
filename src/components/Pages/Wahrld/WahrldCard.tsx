import React from "react";
import { WahrldEntry } from "../../../types";
import { getTakoAvatar } from "../Timeline/ScrollListUtils";
import { getFlagSrc, VOID_BADGE } from "../../../utils/flags";
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

export const getEntryAvatar = (
  icon: string | undefined,
  index: number,
): string =>
  icon
    ? `${process.env.PUBLIC_URL}/takos/${encodeURIComponent(icon)}`
    : getTakoAvatar(null, index);

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

  return (
    <EntryCardWrapper>
      <EntryMedia>
        {entry.kind === "video" ? (
          <video
            controls
            preload="none"
            onPlay={() => reportVideoPlaying(true)}
            onPause={() => reportVideoPlaying(false)}
            onEnded={() => reportVideoPlaying(false)}
          >
            <source
              src={`${process.env.PUBLIC_URL}/wahrldSubmissions/${entry.file}`}
              type="video/mp4"
            />
          </video>
        ) : (
          <img
            src={`${process.env.PUBLIC_URL}/wahrldSubmissions/${entry.file}`}
            alt={entry.user}
          />
        )}
      </EntryMedia>
      <EntryHeader>
        <EntryAvatar
          src={getEntryAvatar(entry.icon, index)}
          alt={entry.user}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = getTakoAvatar(null, index);
          }}
        />
        <EntryUser>{entry.user}</EntryUser>
        <EntryFlag
          src={getFlagSrc(entry.country)}
          alt={entry.country || "The Void"}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = VOID_BADGE;
          }}
        />
        <ShareButton slug={slug} label="Copy link to this submission" />
      </EntryHeader>
      {entry.message && <EntryMessage>{entry.message}</EntryMessage>}
      {entry.socials && (
        <SocialsLink
          href={entry.socials}
          target="_blank"
          rel="noopener noreferrer"
        >
          {entry.socials}
        </SocialsLink>
      )}
    </EntryCardWrapper>
  );
};

export default WahrldCard;
