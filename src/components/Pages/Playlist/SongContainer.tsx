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
} from "./styles/styles";

interface SongContainerProps {
  SongData: SongData[];
}

const SongContainer = ({ SongData }: SongContainerProps): JSX.Element => {
  return (
    <SongGrid>
      {SongData.map(({ songLink, songInfo, coverInfo, songName, type, archived, collab }, i) => (
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
            {songInfo && <BubbleSong>{songInfo}</BubbleSong>}
            {coverInfo && <BubbleSong>{coverInfo}</BubbleSong>}
            <SongTagRow>
              {type && <SongTag>{type}</SongTag>}
              {archived && archived !== "unarchived" && <SongTag>{archived}</SongTag>}
              {collab && <SongTag>{collab}</SongTag>}
            </SongTagRow>
          </SongCardInfo>
        </SongCard>
      ))}
    </SongGrid>
  );
};

export default SongContainer;
