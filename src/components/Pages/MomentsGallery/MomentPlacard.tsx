import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Moment, MomentCategory } from "../../../types";
import { getTakoAvatar } from "../Timeline/ScrollListUtils";
import ShareButton from "../../Common/ShareButton";
import { entrySlug } from "../../../utils/shareLink";
import { ExhibitView } from "./exhibitView";
import {
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

const MomentPlacard = ({
  moment,
  view,
}: {
  moment: Moment;
  view: ExhibitView;
}): JSX.Element => {
  const contextRef = useFitText<HTMLParagraphElement>([moment.slug], {
    min: 12,
    max: 22,
  });

  const reactionSlug = (author: string, i: number) =>
    `${moment.slug}-r-${entrySlug(author)}-${i}`;

  const { hash } = useLocation();
  const [pulseSlug, setPulseSlug] = useState<string | null>(null);

  useEffect(() => {
    if (!hash) return;
    const slug = hash.replace("#", "");
    setPulseSlug(slug);
    const timer = setTimeout(() => setPulseSlug(null), 1800);
    return () => clearTimeout(timer);
  }, [hash]);

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
          <ShareButton slug={moment.slug} label="Copy link to this moment" />
        </div>
        <PlacardMeta>
          {moment.date} · {CATEGORY_LABEL[moment.category]}
        </PlacardMeta>
        <PlacardContext ref={contextRef}>{moment.context}</PlacardContext>
        <PlacardCredit>{view.credit}</PlacardCredit>
        {!!moment.reactions?.length && (
          <PlacardReactionList>
            {moment.reactions.map((reaction, i) => {
              const slug = reactionSlug(reaction.author, i);
              return (
                <PlacardReactionRow
                  key={slug}
                  id={slug}
                  style={
                    pulseSlug === slug
                      ? { outline: "3px solid var(--light-highlight)" }
                      : undefined
                  }
                >
                  <PlacardReactionAvatar
                    src={getTakoAvatar(reaction.author, i)}
                    alt={reaction.author}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = getTakoAvatar(null, i);
                    }}
                  />
                  <span>{reaction.text}</span>
                  <ShareButton
                    slug={slug}
                    label={`Copy link to ${reaction.author}'s reaction`}
                  />
                </PlacardReactionRow>
              );
            })}
          </PlacardReactionList>
        )}
      </div>
    </PlacardCard>
  );
};

export default MomentPlacard;
