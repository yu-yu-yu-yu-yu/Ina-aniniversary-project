import React from "react";
import { Moment, MomentCategory } from "../../../types";
import { getTakoAvatar } from "../Timeline/ScrollListUtils";
import { ExhibitView } from "./exhibitView";
import {
  CopyLinkButton,
  PlacardCard,
  PlacardContext,
  PlacardCredit,
  PlacardMeta,
  PlacardReactionAvatar,
  PlacardReactionList,
  PlacardReactionRow,
  PlacardTitle,
} from "./styles";
import { useFitText } from "./useFitText";

const CATEGORY_LABEL: Record<MomentCategory, string> = {
  milestone: "Ina's Milestones",
  myth: "Myth Moments",
  funny: "Funny Moments",
};

const copyMomentLink = (slug: string) => {
  const url = `${window.location.origin}${window.location.pathname}#${slug}`;
  navigator.clipboard?.writeText(url).catch(() => {});
};

const MomentPlacard = ({
  moment,
  view,
}: {
  moment: Moment;
  view: ExhibitView;
}): JSX.Element => {
  const contextRef = useFitText<HTMLParagraphElement>([moment.slug]);

  return (
    <PlacardCard>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 6,
          overflow: "hidden",
          height: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: 8,
            flexShrink: 0,
          }}
        >
          <PlacardTitle>{moment.title}</PlacardTitle>
          <CopyLinkButton
            onClick={() => copyMomentLink(moment.slug)}
            title="Copy link to this moment"
            aria-label="Copy link to this moment"
          >
            <i className="fa fa-link" aria-hidden="true" />
          </CopyLinkButton>
        </div>
        <PlacardMeta>
          {moment.date} · {CATEGORY_LABEL[moment.category]}
        </PlacardMeta>
        <PlacardContext ref={contextRef}>{moment.context}</PlacardContext>
        <PlacardCredit>{view.credit}</PlacardCredit>
        {!!moment.reactions?.length && (
          <PlacardReactionList>
            {moment.reactions.map((reaction, i) => (
              <PlacardReactionRow key={`${reaction.author}-${i}`}>
                <PlacardReactionAvatar
                  src={getTakoAvatar(reaction.author, i)}
                  alt={reaction.author}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = getTakoAvatar(null, i);
                  }}
                />
                <span>{reaction.text}</span>
              </PlacardReactionRow>
            ))}
          </PlacardReactionList>
        )}
      </div>
    </PlacardCard>
  );
};

export default MomentPlacard;
