import React from "react";
import { Tribute } from "../../../types";
import { getTakoAvatar } from "../Timeline/ScrollListUtils";
import {
  NoTributesNote,
  TributeAuthor,
  TributeAvatar,
  TributeCard,
  TributeRow,
} from "./styles";

const TributeStrip = ({
  tributes,
  cap,
}: {
  tributes: Tribute[];
  cap: 2 | 3;
}): JSX.Element => {
  const shown = tributes.slice(0, cap);

  if (shown.length === 0) {
    return (
      <NoTributesNote>
        No tributes yet — be the first to send one!
      </NoTributesNote>
    );
  }

  return (
    <TributeRow>
      {shown.map((tribute, i) => (
        <TributeCard
          key={`${tribute.author}-${i}`}
          href={
            tribute.url ??
            (tribute.handle ? `https://x.com/${tribute.handle}` : undefined)
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          <TributeAvatar
            src={getTakoAvatar(tribute.author, i)}
            alt={tribute.author}
          />
          <TributeAuthor>By: {tribute.author}</TributeAuthor>
        </TributeCard>
      ))}
    </TributeRow>
  );
};

export default TributeStrip;
