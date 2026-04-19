import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAudio } from "../../../hooks/useAudio";
import { useMute } from "../../Common/MuteButton";
import { Navbar } from "../../Common/Navbar";
import {
  Title,
  Grid,
  Card,
  Thumbnail,
  CollageTitle,
  Description,
  ModalBackdrop,
  ModalImg
} from "./styles";

const collages = [
  {
    src: process.env.PUBLIC_URL + "/takollage.png",
    title: "Tako Takollage 4th Anniversary",
    description: "A takollage made of takos, was made during the 4th anniversary.",
  },
  {
    src: process.env.PUBLIC_URL + "/EvermoreCollage.png",
    title: "Evermore Collage",
    description: "A collage celebrating Ina's Evermore 3D live, made out of her streams thumbnails!",
  },
];


const CollagePage = () => {
  const [modalSrc, setModalSrc] = useState<string | null>(null);
  const { muted } = useMute();
  const audioRef = useAudio({ muted, autoPlay: true });
  return (
    <div>
      <Navbar>
        <NavLink exact to="/">
          <i className="fa fa-angle-left" /> {`Return`}
        </NavLink>
        <Title>Collages</Title>
      </Navbar>
      <audio
        ref={audioRef}
        src={process.env.PUBLIC_URL + "/ensolarado.mp3"}
        loop
        preload="auto"
        style={{ display: "none" }}
      />
      <Grid>
        {collages.map((c, i) => (
          <Card key={i}>
            <Thumbnail src={c.src} alt={c.title} onClick={() => setModalSrc(c.src)} />
            <CollageTitle>{c.title}</CollageTitle>
            <Description>{c.description}</Description>
          </Card>
        ))}
      </Grid>
      {modalSrc && (
        <>
          <ModalBackdrop onClick={() => setModalSrc(null)} />
          <ModalImg src={modalSrc} alt="Collage" onClick={() => setModalSrc(null)} />
        </>
      )}
    </div>
  );
};

export default CollagePage;