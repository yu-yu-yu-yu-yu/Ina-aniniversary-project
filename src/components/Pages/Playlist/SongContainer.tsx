import React, { useState, useEffect, useMemo } from "react";
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

const toEmbed = (url: string): string => {
  const match = url.match(/[?&]v=([^&]+)/);
  return match ? `https://www.youtube.com/embed/${match[1]}` : url;
};

const toWatch = (url: string): string => {
  const videoMatch = url.match(/youtube\.com\/embed\/([^?&#]+)/);
  if (!videoMatch) return url;
  const startMatch = url.match(/[?&]start=(\d+)/);
  const base = `https://www.youtube.com/watch?v=${videoMatch[1]}`;
  return startMatch ? `${base}&t=${startMatch[1]}` : base;
};

const CONTEXT_LABEL: Record<string, string> = {
  karaoke:  "Karaoke",
  concert:  "Concert",
  cover:    "Cover",
  release:  "Release",
  featured: "Featured",
  banana:   "Banana",
};

const perfLabel = (p: Performance): string => {
  if (p.label) return p.label;
  const contextLabel = CONTEXT_LABEL[p.context] ?? p.context;
  return p.name ? `${contextLabel} · ${p.name}` : contextLabel;
};

const perfTagColor = (p: Performance): string =>
  playlistFilterColors[p.name ? "concert" : p.context] ?? playlistFilterColors["concert"];

const SongCardEntry = ({ song, globalShowOriginal = false }: { song: SongData; globalShowOriginal?: boolean }): JSX.Element => {
  const linkedPerfs = song.performances.filter((p) => p.link);

  const slots = useMemo(() => [
    ...linkedPerfs.map((p) => ({ link: p.link!, label: perfLabel(p), isOriginal: false })),
    ...(song.originalSongLink
      ? [{ link: toEmbed(song.originalSongLink), label: "Original ver.", isOriginal: true }]
      : []),
  ], [song]);

  const [slotIndex, setSlotIndex] = useState(0);

  useEffect(() => {
    if (globalShowOriginal) {
      const idx = slots.findIndex((s) => s.isOriginal);
      setSlotIndex(idx >= 0 ? idx : 0);
    } else {
      const idx = slots.findIndex((s) => !s.isOriginal);
      setSlotIndex(idx >= 0 ? idx : 0);
    }
  }, [globalShowOriginal, slots]);

  const currentSlot  = slots[slotIndex] ?? null;
  const canCycle     = slots.length > 1;
  const currentLink  = currentSlot?.link ?? null;
  const versionLabel = currentSlot?.label ?? "";

  const handleVersionClick = () => {
    if (!canCycle) return;
    setSlotIndex((prev) => (prev + 1) % slots.length);
  };

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
          {slots.length > 0 && (
            <VersionSubtitle
              canToggle={canCycle}
              onClick={canCycle ? handleVersionClick : undefined}
            >
              {canCycle ? <><i className="fa fa-chevron-left" /> {versionLabel} <i className="fa fa-chevron-right" /></> : versionLabel}
            </VersionSubtitle>
          )}
        </BubbleHeader>

        {song.songInfo && (
          <BubbleSong>
            {song.originalSongLink
              ? <a href={toWatch(song.originalSongLink)} target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "underline" }}>{song.songInfo}</a>
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
          {linkedPerfs.length === 0 && (
            <SongTag tagColor={playlistFilterColors["unarchived"]}>Unarchived</SongTag>
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
