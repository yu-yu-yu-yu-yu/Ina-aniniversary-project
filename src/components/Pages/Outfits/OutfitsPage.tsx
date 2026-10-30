import React from "react";
import { Banner } from "./Banner";
import { Navbar, NavHome, NavHelp } from "../../Common/Navbar";
import { OutfitsPageContainer } from "./styles/BannerStyle";
import { CompactNavTitle } from "../../../styles/globalStyles";
import { PageBgm } from "../../Common/PageBgm";

const OutfitsPage = (): JSX.Element => {
  return (
    <OutfitsPageContainer>
      <PageBgm src="/Vanilla.mp3" />
      <Navbar style={{ alignItems: "center" }}>
        <NavHome />
        <CompactNavTitle>Ina Ina Outfit!</CompactNavTitle>
        <NavHelp label="Show outfits usage hint">
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
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
                  The box below the carousel shows the artist and source stream
                  for the centered outfit
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
        </NavHelp>
      </Navbar>
      <Banner />
    </OutfitsPageContainer>
  );
};

export default OutfitsPage;
