import React from "react";
import { Tribute } from "../../../types";
import { getTakoAvatar } from "../Timeline/ScrollListUtils";
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
}: {
  tributes: Tribute[];
  activeIndex: number;
  onSelect: (index: number) => void;
}): JSX.Element => {
  return (
    <TributeRow>
      {tributes.map((tribute, i) => (
        <TributeCard
          key={`${tribute.author}-${i}`}
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
      ))}
    </TributeRow>
  );
};

export default TributeStrip;
