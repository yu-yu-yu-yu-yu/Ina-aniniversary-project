import React from "react";
import { SongData } from "../../../types/song";
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
  playlistFilterColors,
} from "./styles/styles";

interface SongContainerProps {
  SongData: SongData[];
}

const SongContainer = ({ SongData }: SongContainerProps): JSX.Element => {
  return (
    <SongGrid>
      {SongData.map(({ songLink, songInfo, originalSongLink, coverInfo, songName, type, archived, collab }, i) => (
        <SongCard key={i}>
          {songLink && (
            <SongCardMedia>
              {!songLink.includes("youtube") ? (
                songLink.includes("mp4") ? (
                  <video style={{ width: "100%", height: "100%", objectFit: "cover" }} controls>
                    <source
                      src={process.env.PUBLIC_URL + "/songLinks/" + songLink}
                      type="video/mp4"
                    />
                  </video>
                ) : (
                  <BubbleImage
                    src={process.env.PUBLIC_URL + "/songLinks/" + songLink}
                    alt={songName}
                  />
                )
              ) : (
                <IFrame
                  src={songLink}
                  title={songName || "YouTube video player"}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen={true}
                />
              )}
            </SongCardMedia>
          )}
          <SongCardInfo>
            <BubbleHeader>
              <HeaderText>{songName || "Song Placeholder"}</HeaderText>
            </BubbleHeader>
            {songInfo && (
              <BubbleSong>
                {originalSongLink
                  ? <a href={originalSongLink} target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "underline" }}>{songInfo}</a>
                  : songInfo}
              </BubbleSong>
            )}
            {coverInfo && <BubbleSong>{coverInfo}</BubbleSong>}
            <SongTagRow>
              {type && <SongTag tagColor={playlistFilterColors[type]}>{type}</SongTag>}
              {archived && archived !== "unarchived" && <SongTag tagColor={playlistFilterColors[archived]}>{archived}</SongTag>}
              {collab && <SongTag tagColor={playlistFilterColors[collab]}>{collab}</SongTag>}
            </SongTagRow>
          </SongCardInfo>
        </SongCard>
      ))}
    </SongGrid>
  );
};

export default SongContainer;
