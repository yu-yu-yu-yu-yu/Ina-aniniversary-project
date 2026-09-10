import React from "react";
import { Tribute } from "../../../types";
import { getTakoAvatar } from "../Timeline/ScrollListUtils";
import ShareButton from "../../Common/ShareButton";
import { entrySlug } from "../../../utils/shareLink";
import {
  TributeAuthor,
  TributeAvatar,
  TributeCard,
  TributeRow,
} from "./styles";

const TributeStrip = ({
  tributes,
  activeIndex,
  onSelect,
  momentSlug,
}: {
  tributes: Tribute[];
  activeIndex: number;
  onSelect: (index: number) => void;
  momentSlug: string;
}): JSX.Element => {
  return (
    <TributeRow>
      {tributes.map((tribute, i) => (
        <div key={`${tribute.author}-${i}`} style={{ position: "relative" }}>
          <TributeCard
            type="button"
            $active={activeIndex === i + 1}
            onClick={() => onSelect(i + 1)}
            title={`View tribute by ${tribute.author}`}
          >
            <TributeAvatar
              $active={activeIndex === i + 1}
              src={getTakoAvatar(tribute.author, i)}
              alt={tribute.author}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = getTakoAvatar(null, i);
              }}
            />
            <TributeAuthor>{tribute.author}</TributeAuthor>
          </TributeCard>
          <div
            style={{
              position: "absolute",
              top: -4,
              right: -4,
              transform: "scale(0.75)",
            }}
          >
            <ShareButton
              slug={`${momentSlug}-t-${entrySlug(tribute.author)}`}
              label={`Copy link to ${tribute.author}'s tribute`}
            />
          </div>
        </div>
      ))}
    </TributeRow>
  );
};

export default TributeStrip;
