import React, { useState } from "react";
import { Navbar, NavHome, NavHelp } from "../../Common/Navbar";
import {
  PageContainer,
  NavTitle,
  Grid,
  Card,
  Thumbnail,
  CollageTitle,
  Description,
  ModalBackdrop,
  ModalImg,
} from "./styles";
import { PageBgm } from "../../Common/PageBgm";

const collages = [
  {
    src: process.env.PUBLIC_URL + "/takollage.png",
    title: "Tako Takollage 4th Anniversary",
    description:
      "A takollage made of takos, was made during the 4th anniversary.",
  },
  {
    src: process.env.PUBLIC_URL + "/EvermoreCollage.png",
    title: "Evermore Collage",
    description:
      "A collage celebrating Ina's Evermore 3D live, made out of her streams thumbnails!",
  },
  {
    src: process.env.PUBLIC_URL + "/inaversary6collage.png",
    title: "Ina's 6th Anniversary Collage",
    description:
      "A collage shaped like a giant 6, made of moments from Ina's 6th anniversary year.",
  },
];

const CollagePage = () => {
  const [modalSrc, setModalSrc] = useState<string | null>(null);
  return (
    <PageContainer>
      <Navbar>
        <NavHome />
        <NavTitle>Collages</NavTitle>
        <NavHelp label="Show collages usage hint">
          <p>Click a collage to open it full-size.</p>
        </NavHelp>
      </Navbar>
      <PageBgm src="/ensolarado.mp3" />
      <Grid>
        {collages.map((c, i) => (
          <Card key={i}>
            <Thumbnail
              src={c.src}
              alt={c.title}
              onClick={() => setModalSrc(c.src)}
            />
            <CollageTitle>{c.title}</CollageTitle>
            <Description>{c.description}</Description>
          </Card>
        ))}
      </Grid>
      {modalSrc && (
        <>
          <ModalBackdrop onClick={() => setModalSrc(null)} />
          <ModalImg
            src={modalSrc}
            alt="Collage"
            onClick={() => setModalSrc(null)}
          />
        </>
      )}
    </PageContainer>
  );
};

export default CollagePage;
