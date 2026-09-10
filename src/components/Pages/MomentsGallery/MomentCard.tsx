import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Moment } from "../../../types";
import {
  notifyPlayerReady,
  parseYouTube,
  toEmbed,
} from "../../../utils/youtube";
import { entrySlug } from "../../../utils/shareLink";
import { useMute } from "../../Common/MuteButton";
import { ArtworkButton } from "../Outfits/styles/BannerStyle";
import { ExhibitView } from "./exhibitView";
import MomentPlacard from "./MomentPlacard";
import TributeStrip from "./TributeStrip";
import {
  ExhibitLayout,
  ExhibitStageColumn,
  Frame,
  FrameMedia,
  MomentSourceLink,
  SwapRow,
} from "./styles";

const resolveTributeSrc = (slug: string, file: string): string =>
  file.startsWith("http")
    ? file
    : `${process.env.PUBLIC_URL}/moments/${slug}/${file}`;

const buildViews = (moment: Moment): ExhibitView[] => {
  const ytRef = parseYouTube(moment.sourceUrl);
  const originalCredit = `Original: ${moment.sourceLabel || moment.title}`;
  const original: ExhibitView = ytRef
    ? {
        kind: "original-video",
        src: toEmbed(moment.sourceUrl),
        label: "Original",
        credit: originalCredit,
      }
    : moment.image
      ? {
          kind: "original-image",
          src: moment.image,
          label: "Original",
          credit: originalCredit,
        }
      : {
          kind: "original-link",
          src: moment.sourceUrl,
          label: "Original",
          credit: originalCredit,
        };

  const tributeViews: ExhibitView[] = moment.tributes
    .slice(0, moment.cap)
    .filter((tribute) => !!tribute.file)
    .map((tribute) => ({
      kind: tribute.kind === "video" ? "tribute-video" : "tribute-image",
      src: resolveTributeSrc(moment.slug, tribute.file as string),
      label: `Tribute by ${tribute.author}`,
      credit: `Tribute by ${tribute.author}${
        tribute.handle ? ` (@${tribute.handle})` : ""
      }`,
      tribute,
    }));

  return [original, ...tributeViews];
};

const MomentCard = ({ moment }: { moment: Moment }): JSX.Element => {
  const [viewIndex, setViewIndex] = useState(0);
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  const { reportVideoPlaying } = useMute();
  const views = buildViews(moment);
  const view = views[viewIndex] ?? views[0];
  const tributeViews = views.slice(1);
  const imageBroken = failedSrc === view.src;

  useEffect(() => {
    if (view.kind !== "original-video") return;
    return () => reportVideoPlaying(false);
  }, [view.kind, view.src, reportVideoPlaying]);

  const { hash } = useLocation();
  const hasHandledTributeHash = useRef(false);

  useEffect(() => {
    if (hasHandledTributeHash.current || !hash) return;
    const slug = hash.replace("#", "");
    const prefix = `${moment.slug}-t-`;
    if (!slug.startsWith(prefix)) return;
    const authorSlug = slug.slice(prefix.length);
    const idx = tributeViews.findIndex(
      (v) => v.tribute && entrySlug(v.tribute.author) === authorSlug,
    );
    if (idx >= 0) {
      hasHandledTributeHash.current = true;
      setViewIndex(idx + 1);
    }
  }, [hash, moment.slug, tributeViews]);

  return (
    <ExhibitLayout>
      <ExhibitStageColumn>
        <Frame>
          <FrameMedia>
            {view.kind === "original-video" && (
              <iframe
                key={view.src}
                src={view.src}
                title={moment.sourceLabel || moment.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                onLoad={(e) => notifyPlayerReady(e.currentTarget)}
              />
            )}
            {view.kind === "original-image" &&
              (imageBroken ? (
                <MomentSourceLink
                  href={moment.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {moment.sourceLabel || "View the original"}
                </MomentSourceLink>
              ) : (
                <img
                  src={view.src}
                  alt={moment.title}
                  onError={() => setFailedSrc(view.src)}
                />
              ))}
            {view.kind === "original-link" && (
              <MomentSourceLink
                href={view.src}
                target="_blank"
                rel="noopener noreferrer"
              >
                {moment.sourceLabel || "View the original"}
              </MomentSourceLink>
            )}
            {view.kind === "tribute-image" &&
              (imageBroken ? (
                <MomentSourceLink
                  href={view.tribute?.url || view.src}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View tribute by {view.tribute?.author}
                </MomentSourceLink>
              ) : (
                <img
                  src={view.src}
                  alt={view.label}
                  onError={() => setFailedSrc(view.src)}
                />
              ))}
            {view.kind === "tribute-video" && (
              <video src={view.src} controls preload="none" />
            )}
          </FrameMedia>
        </Frame>
        {tributeViews.length > 0 && (
          <>
            <SwapRow>
              <ArtworkButton
                onClick={() => setViewIndex((i) => (i + 1) % views.length)}
                title="Swap between the original and its tributes"
                aria-label="Swap between the original and its tributes"
              >
                <i className="fa fa-exchange" aria-hidden="true" />
              </ArtworkButton>
              {view.label}
            </SwapRow>
            <TributeStrip
              tributes={tributeViews.map((v) => v.tribute!)}
              activeIndex={viewIndex}
              onSelect={setViewIndex}
              momentSlug={moment.slug}
            />
          </>
        )}
      </ExhibitStageColumn>
      <MomentPlacard moment={moment} view={view} />
    </ExhibitLayout>
  );
};

export default MomentCard;
