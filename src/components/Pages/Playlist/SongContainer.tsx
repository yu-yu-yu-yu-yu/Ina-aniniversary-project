import React, { useState, useEffect } from "react";
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
  showOriginal?: boolean;
}

const perfLabel = (p: Performance): string => {
  if (p.label) return p.label;
  const contextLabel =
    p.context === "karaoke" ? "Karaoke"
    : p.context === "concert" ? "Concert"
    : p.context === "cover" ? "Cover"
    : "Release";
  return p.name ? `${contextLabel} · ${p.name}` : contextLabel;
};

const perfTagColor = (p: Performance): string =>
  playlistFilterColors[p.name ? "concert" : p.context] ?? playlistFilterColors["concert"];

const SongCardEntry = ({ song, globalShowOriginal = false }: { song: SongData; globalShowOriginal?: boolean }): JSX.Element => {
  const linkedPerfs = song.performances.filter((p) => p.link);
  const [localOverride, setLocalOverride] = useState<boolean | null>(null);

  useEffect(() => { setLocalOverride(null); }, [globalShowOriginal]);

  const hasInaVersion      = linkedPerfs.length > 0;
  const hasOriginalVersion = !!song.originalSongLink;
  const canToggle          = hasInaVersion && hasOriginalVersion;

  const showOriginal = localOverride ?? globalShowOriginal;
  const effectiveShowOriginal = showOriginal || !hasInaVersion;
  const currentPerf = linkedPerfs[0];

  const toEmbed = (url: string): string => {
    const match = url.match(/[?&]v=([^&]+)/);
    return match ? `https://www.youtube.com/embed/${match[1]}` : url;
  };

  const inaLink  = currentPerf?.link;
  const origLink = song.originalSongLink ? toEmbed(song.originalSongLink) : undefined;
  const currentLink = effectiveShowOriginal
    ? (origLink ?? inaLink)
    : (inaLink ?? origLink);

  const showVersionButton = hasInaVersion || hasOriginalVersion;

  const versionLabel = canToggle
    ? (effectiveShowOriginal ? "Original ver." : "Ina ver.")
    : (hasOriginalVersion ? "Original ver." : "Ina ver.");

  const archiveStatus = deriveArchiveStatus(song);
  const displayPerfs = (() => {
    const seen = new Set<string>();
    return song.performances.filter((p) => {
      if (p.context === "release") return false;
      const label = perfLabel(p);
      if (seen.has(label)) return false;
      seen.add(label);
      return true;
    });
  })();

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
              onClick={canToggle ? () => setLocalOverride(!effectiveShowOriginal) : undefined}
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

const SongContainer = ({ SongData, showOriginal }: SongContainerProps): JSX.Element => (
  <SongGrid>
    {SongData.map((song, i) => (
      <SongCardEntry key={`${song.songName}${i}`} song={song} globalShowOriginal={showOriginal} />
    ))}
  </SongGrid>
);

export default SongContainer;
