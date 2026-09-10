import React, { useState } from "react";
import { Banner } from "./Banner";
import { Navbar, NavHome, HintButton, HintPopover } from "../../Common/Navbar";
import { OutfitsPageContainer } from "./styles/BannerStyle";
import { CompactNavTitle } from "../../../styles/globalStyles";
import { useMute } from "../../Common/MuteButton";
import { useAudio } from "../../../hooks/useAudio";

const OutfitsPage = (): JSX.Element => {
  const { muted } = useMute();
  const audioRef = useAudio({ muted, autoPlay: true });
  const [hintOpen, setHintOpen] = useState(false);

  return (
    <OutfitsPageContainer>
      <audio
        ref={audioRef}
        src={process.env.PUBLIC_URL + "/Vanilla.mp3"}
        loop
        preload="auto"
        style={{ display: "none" }}
      />
      <Navbar style={{ alignItems: "center" }}>
        <NavHome />
        <CompactNavTitle>Ina Ina Outfit!</CompactNavTitle>
        <div style={{ flex: "0 0 auto", position: "relative" }}>
          <HintButton
            aria-label="Show outfits usage hint"
            onClick={() => setHintOpen((v) => !v)}
            title="Show outfits usage hint"
          >
            <i className="fa fa-question-circle" aria-hidden="true" /> Help
          </HintButton>
          {hintOpen && (
            <HintPopover onClick={() => setHintOpen(false)}>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 10 }}
              >
                <section>
                  <div
                    style={{
                      fontWeight: 700,
                      marginBottom: 5,
                      paddingBottom: 3,
                      borderBottom: "1px solid var(--light-highlight)",
                    }}
                  >
                    Outfit Banner
                  </div>
                  <ul style={{ margin: 0, paddingLeft: 16, lineHeight: 1.65 }}>
                    <li>Drag or use the ‹ › arrows to browse outfits</li>
                    <li>Click a side outfit to bring it forward</li>
                    <li>Click the centered outfit to open it full-size</li>
                    <li>
                      The box below the carousel shows the artist and source
                      stream for the centered outfit
                    </li>
                    <li>
                      Cards with multiple artworks show two small buttons at the
                      bottom-right corner:
                      <ul style={{ paddingLeft: 14, marginTop: 3 }}>
                        <li>
                          <b>⇄</b> : manually cycle to the next artwork
                        </li>
                        <li>
                          <b>⏸ / ▶</b> : pause or resume the 3 s auto-swap
                        </li>
                      </ul>
                    </li>
                  </ul>
                </section>
                <div
                  style={{
                    textAlign: "center",
                    opacity: 0.45,
                    fontSize: "0.88em",
                  }}
                >
                  Click anywhere to close
                </div>
              </div>
            </HintPopover>
          )}
        </div>
      </Navbar>
      <Banner />
    </OutfitsPageContainer>
  );
};

export default OutfitsPage;
