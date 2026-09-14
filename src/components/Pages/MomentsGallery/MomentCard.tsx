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
    : `${process.env.PUBLIC_URL}/momentTributes/${slug}/${file}`;

const asUrl = (value: string): string | null => {
  try {
    return new URL(value).href;
  } catch {
    return null;
  }
};

const hostOf = (url: string): string => {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
};

const describeSource = (
  sourceLabel: string | undefined,
  sourceUrl: string,
  fallback: string,
): { text: string; href?: string } => {
  const labelUrl = sourceLabel ? asUrl(sourceLabel) : null;
  if (labelUrl) return { text: hostOf(labelUrl), href: labelUrl };
  const rawUrl = sourceUrl ? asUrl(sourceUrl) : null;
  if (sourceLabel) return { text: sourceLabel, href: rawUrl ?? undefined };
  return { text: fallback, href: rawUrl ?? undefined };
};

const buildViews = (moment: Moment): ExhibitView[] => {
  const ytRef = parseYouTube(moment.sourceUrl);
  const originalSource = describeSource(
    moment.sourceLabel,
    moment.sourceUrl,
    moment.title,
  );
  const originalCredit = {
    creditPrefix: "Original: ",
    creditText: originalSource.text,
    creditHref: originalSource.href,
  };
  const original: ExhibitView = ytRef
    ? {
        kind: "original-video",
        src: toEmbed(moment.sourceUrl),
        label: "Original",
        ...originalCredit,
      }
    : moment.image
      ? {
          kind: "original-image",
          src: moment.image,
          label: "Original",
          ...originalCredit,
        }
      : {
          kind: "original-link",
          src: moment.sourceUrl,
          label: "Original",
          ...originalCredit,
        };

  const tributeViews: ExhibitView[] = moment.tributes
    .slice(0, moment.cap)
    .filter((tribute) => !!tribute.file)
    .map((tribute) => ({
      kind: tribute.kind === "video" ? "tribute-video" : "tribute-image",
      src: resolveTributeSrc(moment.slug, tribute.file as string),
      label: `Tribute by ${tribute.author}`,
      creditPrefix: "Tribute by ",
      creditText: `${tribute.author}${
        tribute.handle ? ` (@${tribute.handle})` : ""
      }`,
      creditHref: tribute.url,
      tribute,
    }));

  return [original, ...tributeViews];
};

const MomentCard = ({ moment }: { moment: Moment }): JSX.Element => {
  const views = buildViews(moment);
  const hasOriginalThumbnail = views[0].kind !== "original-link";
  const [viewIndex, setViewIndex] = useState(() =>
    !hasOriginalThumbnail && views.length > 1 ? 1 : 0,
  );
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  const { reportVideoPlaying } = useMute();
  const view = views[viewIndex] ?? views[0];
  const tributeViews = views.slice(1);
  const imageBroken = failedSrc === view.src;
  const hasVisual = views.some((v) => v.kind !== "original-link");

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
      {hasVisual && (
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
                  onClick={() => setViewIndex(viewIndex === 0 ? 1 : 0)}
                  title={viewIndex === 0 ? "See tributes" : "See original"}
                  aria-label={viewIndex === 0 ? "See tributes" : "See original"}
                >
                  <i className="fa fa-exchange" aria-hidden="true" />
                </ArtworkButton>
                {viewIndex === 0 ? "See tributes" : "See original"}
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
      )}
      <MomentPlacard moment={moment} view={view} />
    </ExhibitLayout>
  );
};

export default MomentCard;
