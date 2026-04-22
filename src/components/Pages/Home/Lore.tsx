import React from "react";
import { LoreContainer, FlexRow, LoreTextContainer, InaVideoContainer, InaVideo, AnimationCreditsContainer, AnimationCredits } from "./styles/loreStyles";

const Lore = (): JSX.Element => (
  <LoreContainer>
    <FlexRow>
      <LoreTextContainer>
        <div className="lore-text">
          <hr />
          <p>
            One day, <b>Ina&apos;nis</b> picked up a <b>strange book</b> and then
            started to gain the power of <b>controlling tentacles</b>. To her,
            <b>tentacles</b> are just a part in her ordinary life; it has never
            been a big deal for her. However, her girly mind does want to get them
            <b> dressed up and stay pretty</b>.
          </p>
          <p>
            After gaining power, she started hearing{" "}
            <b>Ancient Whispers and Revelations</b>. Hence, she began her{" "}
            <b>VTuber activities </b> to deliver <b> random sanity checks </b> on
            humanity, as an <b>ordinary girl</b>.
          </p>
          <hr />
        </div>
      </LoreTextContainer>
      <InaVideoContainer>
        <InaVideo
          autoPlay
          loop
          muted
          poster={`${process.env.PUBLIC_URL}/InaHoodie.png`}
        >
          <source
            src={`${process.env.PUBLIC_URL}/InaHoodie.webm`}
            type="video/webm"
          />
        </InaVideo>
        <AnimationCreditsContainer>
          <AnimationCredits>
            Illustration: @ninomaeinanis
            <br /> Spine 2D Animation: @Shikabashi
          </AnimationCredits>
        </AnimationCreditsContainer>
      </InaVideoContainer>
    </FlexRow>
  </LoreContainer>
);

export default Lore;
