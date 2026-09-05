import React from "react";
import { Moment } from "../../../types";
import { parseYouTube, toEmbed } from "../../../utils/youtube";
import TributeStrip from "./TributeStrip";
import {
  CopyLinkButton,
  MomentCardWrapper,
  MomentContext,
  MomentDate,
  MomentSource,
  MomentSourceLink,
  MomentTitle,
} from "./styles";

const copyMomentLink = (slug: string) => {
  const url = `${window.location.origin}${window.location.pathname}#${slug}`;
  navigator.clipboard?.writeText(url).catch(() => {});
};

const MomentCard = ({ moment }: { moment: Moment }): JSX.Element => {
  const isVideo = parseYouTube(moment.sourceUrl) !== null;

  return (
    <MomentCardWrapper>
      <MomentTitle>{moment.title}</MomentTitle>
      <MomentDate>{moment.date}</MomentDate>
      {isVideo ? (
        <MomentSource>
          <iframe
            src={toEmbed(moment.sourceUrl)}
            title={moment.sourceLabel || moment.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ width: "100%", height: "100%", border: 0 }}
          />
        </MomentSource>
      ) : (
        <MomentSourceLink
          href={moment.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {moment.sourceLabel || "View the original"}
        </MomentSourceLink>
      )}
      <MomentContext>{moment.context}</MomentContext>
      <TributeStrip tributes={moment.tributes} cap={moment.cap} />
      <CopyLinkButton
        onClick={() => copyMomentLink(moment.slug)}
        title="Copy link to this moment"
      >
        <i className="fa fa-link" aria-hidden="true" /> Copy link
      </CopyLinkButton>
    </MomentCardWrapper>
  );
};

export default MomentCard;
