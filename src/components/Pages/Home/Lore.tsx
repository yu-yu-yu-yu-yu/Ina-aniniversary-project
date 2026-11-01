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
import { useTheme } from "../../Common/ThemeProvider";
import { ThemeName } from "../../../types";

const TOTAL_VIDEOS = 70;

const VIDEOS = Array.from(
  { length: TOTAL_VIDEOS },
  (_, i) => `valkyrie_illust_vids/val-${i + 1}.mp4`,
);

const FAVORITE_WEIGHT = 5;

const THEME_FAVORITES: Partial<Record<ThemeName, number[]>> = {
  Violet: [3, 8, 14, 54, 69],
  Temari: [18, 29, 51],
  Meconopsis: [6, 41, 53],
  TakoTakover: [25, 31, 40, 42, 50],
  AbyssalHymn: [1, 22, 32, 43, 60, 68, 70],
};

const getRandomVideo = (theme: ThemeName, currentVideo?: string) => {
  if (VIDEOS.length === 1) return VIDEOS[0];

  const favorites = THEME_FAVORITES[theme] ?? [];
  const pool = VIDEOS.filter((v) => v !== currentVideo).flatMap((v) => {
    const n = Number(v.match(/val-(\d+)\.mp4$/)?.[1]);
    return favorites.includes(n) ? Array(FAVORITE_WEIGHT).fill(v) : [v];
  });
  return pool[Math.floor(Math.random() * pool.length)];
};

const Lore = (): JSX.Element => {
  const { theme } = useTheme();
  const [currentVideo, setCurrentVideo] = useState(() => getRandomVideo(theme));
  const [isVideoReady, setIsVideoReady] = useState(false);

  useEffect(() => {
    setIsVideoReady(false);
  }, [currentVideo]);

  const handleChangeVideo = useCallback(() => {
    setCurrentVideo((video) => getRandomVideo(theme, video));
  }, [theme]);

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
        <InaVideoContainer
          style={{
            background: isVideoReady ? "transparent" : "var(--dark-background)",
          }}
        >
          <InaVideo
            key={currentVideo}
            autoPlay
            loop
            muted
            preload="auto"
            onCanPlay={handleCanPlay}
            style={{
              opacity: isVideoReady ? 1 : 0,
              transition: "opacity 0.5s ease",
            }}
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
