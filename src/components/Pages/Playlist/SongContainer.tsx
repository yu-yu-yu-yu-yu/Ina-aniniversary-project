import React, { useState } from "react";
import { SongData, Performance, deriveArchiveStatus } from "../../../types/song";
import {
  BubbleHeader,
  BubbleImage,
  BubbleSong,
  HeaderText,
  IFrame,
  SongGrid,
  SongCard,
  SongCardMedia,
  SongCardInfo,
  SongTag,
  SongTagRow,
  VersionSubtitle,
  playlistFilterColors,
} from "./styles/styles";

interface SongContainerProps {
  SongData: SongData[];
}

const perfLabel = (p: Performance): string => {
  if (p.label) return p.label;
  if (p.name) return p.name;
  if (p.context === "karaoke") return "Karaoke";
  if (p.context === "concert") return "Concert";
  if (p.context === "cover") return "Cover";
  return "Release";
};

const perfTagColor = (p: Performance): string =>
  playlistFilterColors[p.name ? "concert" : p.context] ?? playlistFilterColors["concert"];

const SongCardEntry = ({ song }: { song: SongData }): JSX.Element => {
  const linkedPerfs = song.performances.filter((p) => p.link);
  const [showOriginal, setShowOriginal] = useState(false);

  const hasInaVersion      = linkedPerfs.length > 0;
  const hasOriginalVersion = !!song.originalSongLink;
  const canToggle          = hasInaVersion && hasOriginalVersion;

  const effectiveShowOriginal = showOriginal || !hasInaVersion;
  const currentPerf = linkedPerfs[0];

  const toEmbed = (url: string): string => {
    const match = url.match(/[?&]v=([^&]+)/);
    return match ? `https://www.youtube.com/embed/${match[1]}` : url;
  };

  const currentLink = effectiveShowOriginal
    ? (song.originalSongLink ? toEmbed(song.originalSongLink) : undefined)
    : currentPerf?.link;

  const showVersionButton = hasInaVersion || hasOriginalVersion;

  const versionLabel = canToggle
    ? (effectiveShowOriginal ? "Original ver." : "Ina ver.")
    : (hasOriginalVersion ? "Original ver." : "Ina ver.");

  const archiveStatus = deriveArchiveStatus(song);
  const displayPerfs  = song.performances.filter((p) => p.context !== "release");

  const renderMedia = (link: string) => {
    if (!link.includes("youtube")) {
      if (link.includes("mp4")) {
        return (
          <video style={{ width: "100%", height: "100%", objectFit: "cover" }} controls>
            <source src={process.env.PUBLIC_URL + "/songLinks/" + link} type="video/mp4" />
          </video>
        );
      }
      return <BubbleImage src={process.env.PUBLIC_URL + "/songLinks/" + link} alt={song.songName} />;
    }
    return (
      <IFrame
        src={link}
        title={song.songName}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen={true}
      />
    );
  };

  return (
    <SongCard>
      {currentLink && <SongCardMedia>{renderMedia(currentLink)}</SongCardMedia>}
      <SongCardInfo>
        <BubbleHeader>
          <HeaderText>{song.songName}</HeaderText>
          {showVersionButton && (
            <VersionSubtitle
              canToggle={canToggle}
              onClick={canToggle ? () => setShowOriginal((o) => !o) : undefined}
            >
              {versionLabel}
            </VersionSubtitle>
          )}
        </BubbleHeader>

        {song.songInfo && (
          <BubbleSong>
            {song.originalSongLink
              ? <a href={song.originalSongLink} target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "underline" }}>{song.songInfo}</a>
              : song.songInfo}
          </BubbleSong>
        )}
        {song.coverInfo && <BubbleSong>{song.coverInfo}</BubbleSong>}

<SongTagRow>
          {song.origin === "Ina's original" && (
            <SongTag tagColor={playlistFilterColors["Ina's original"]}>Ina&apos;s Original</SongTag>
          )}
          {song.origin === "Hololive's original" && (
            <SongTag tagColor={playlistFilterColors["Hololive's original"]}>Hololive&apos;s Original</SongTag>
          )}
          {displayPerfs.map((p, i) => (
            <SongTag key={i} tagColor={perfTagColor(p)}>{perfLabel(p)}</SongTag>
          ))}
          {archiveStatus !== "unarchived" && (
            <SongTag tagColor={playlistFilterColors[archiveStatus]}>{archiveStatus}</SongTag>
          )}
          {song.collab !== "solo" && (
            <SongTag tagColor={playlistFilterColors[song.collab]}>{song.collab}</SongTag>
          )}
        </SongTagRow>
      </SongCardInfo>
    </SongCard>
  );
};

const SongContainer = ({ SongData }: SongContainerProps): JSX.Element => (
  <SongGrid>
    {SongData.map((song, i) => (
      <SongCardEntry key={`${song.songName}${i}`} song={song} />
    ))}
  </SongGrid>
);

export default SongContainer;
