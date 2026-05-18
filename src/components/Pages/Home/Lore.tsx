import React, { useCallback, useEffect, useState } from "react";
import {
  LoreContainer,
  FlexRow,
  InaVideoContainer,
  InaVideo,
  VideoShuffleButton,
  AnimationCreditsContainer,
  AnimationCredits,
} from "./styles/loreStyles";
import { TextBoxContainer } from "../../../styles/globalStyles";

const TOTAL_VIDEOS = 47;

const VIDEOS = Array.from(
  { length: TOTAL_VIDEOS },
  (_, i) => `valkyrie_illust_vids/val-${i + 1}.mp4`,
);

const getRandomVideo = (currentVideo?: string) => {
  if (VIDEOS.length === 1) return VIDEOS[0];

  let nextVideo = currentVideo;
  while (nextVideo === currentVideo) {
    const index = Math.floor(Math.random() * VIDEOS.length);
    nextVideo = VIDEOS[index];
  }

  return nextVideo;
};

const Lore = (): JSX.Element => {
  const [currentVideo, setCurrentVideo] = useState(() => getRandomVideo());
  const [isVideoReady, setIsVideoReady] = useState(false);

  useEffect(() => {
    setIsVideoReady(false);
  }, [currentVideo]);

  const handleChangeVideo = useCallback(() => {
    setCurrentVideo((video) => getRandomVideo(video));
  }, []);

  const handleCanPlay = useCallback(() => {
    setIsVideoReady(true);
  }, []);

  return (
    <LoreContainer>
      <FlexRow>
        <TextBoxContainer>
          <div className="lore-text">
            <hr />
            <p>
              One day, <b>Ina&apos;nis</b> picked up a <b>strange book</b> and
              then started to gain the power of <b>controlling tentacles</b>. To
              her, <b>tentacles</b> are just a part in her ordinary life; it has
              never been a big deal for her. However, her girly mind does want
              to get them
              <b> dressed up and stay pretty</b>.
            </p>
            <p>
              After gaining power, she started hearing{" "}
              <b>Ancient Whispers and Revelations</b>. Hence, she began her{" "}
              <b>VTuber activities </b> to deliver <b> random sanity checks </b>{" "}
              on humanity, as an <b>ordinary girl</b>.
            </p>
            <hr />
          </div>
        </TextBoxContainer>
        <InaVideoContainer style={{ background: isVideoReady ? "transparent" : "var(--dark-background)" }}>
          <InaVideo
            key={currentVideo}
            autoPlay
            loop
            muted
            preload="auto"
            onCanPlay={handleCanPlay}
            style={{ opacity: isVideoReady ? 1 : 0, transition: "opacity 0.5s ease" }}
          >
            <source
              src={`${process.env.PUBLIC_URL}/${currentVideo}`}
              type="video/mp4"
            />
          </InaVideo>
          <VideoShuffleButton
            type="button"
            onClick={handleChangeVideo}
            aria-label="Change lore video"
            title="Change video"
          >
            <i className="fa fa-refresh" aria-hidden="true" />
          </VideoShuffleButton>
          <AnimationCreditsContainer>
            <AnimationCredits>
              Illustration and Animation: @valkyrie_illust
            </AnimationCredits>
          </AnimationCreditsContainer>
        </InaVideoContainer>
      </FlexRow>
    </LoreContainer>
  );
};

export default Lore;
