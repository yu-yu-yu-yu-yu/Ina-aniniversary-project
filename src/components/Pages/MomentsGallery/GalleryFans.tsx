import React, { useEffect, useRef, useState } from "react";
import { MomentReaction } from "../../../types";
import { getTakoAvatar } from "../Timeline/ScrollListUtils";
import {
  Bubble,
  BubbleText,
  CameraFlash,
  CommenterBubbleWrap,
  FanSprite,
  FloorArea,
  MoreIndicator,
  ReactionName,
} from "./styles";

const ASSET_BASE = `${process.env.PUBLIC_URL}/gallery_assets`;

type FanId =
  | "tako_back"
  | "chumbud_back"
  | "teamate_back"
  | "kfp"
  | "deadbeat"
  | "takostretch"
  | "flowertako"
  | "sstako"
  | "takopoint";

const FAN_FILES: Record<FanId, string> = {
  tako_back: "takomonty_tako_back.png",
  chumbud_back: "takomonty_chumbud_back.png",
  teamate_back: "takomonty_teamate_back.png",
  kfp: "takomonty_kfp_front.png",
  deadbeat: "takomonty_deadbeat_front.png",
  takostretch: "takomonty_takostretch_front.png",
  flowertako: "takomonty_flowertako_front.png",
  sstako: "takomonty_sstako_front.png",
  takopoint: "takomonty_takopoint_front.png",
};

const BACK_POOL: FanId[] = ["tako_back", "chumbud_back", "teamate_back"];
const FLEX_POOL: FanId[] = ["deadbeat", "takostretch", "flowertako", "sstako"];

const MIN_BOTTOM = 0;
const MAX_BOTTOM = 76;
const SCALE_NEAR = 1.25;
const SCALE_FAR = 0.86;

const scaleForDepth = (bottom: number): number => {
  const clamped = Math.min(Math.max(bottom, MIN_BOTTOM), MAX_BOTTOM);
  return SCALE_NEAR + (SCALE_FAR - SCALE_NEAR) * (clamped / MAX_BOTTOM);
};

interface Slot {
  left: number;
  bottom: number;
  flip?: boolean;
}

const BACK_SLOTS: Slot[] = [
  { left: 18, bottom: 68, flip: true },
  { left: 50, bottom: 74, flip: false },
  { left: 82, bottom: 68, flip: false },
];

const REACTOR_SLOTS: Slot[] = [
  { left: 12, bottom: 20, flip: true },
  { left: 50, bottom: 20, flip: false },
  { left: 88, bottom: 20, flip: false },
];

const COMMENTER_CANDIDATE_LEFTS = [12, 23, 34, 45, 56, 67, 78, 88];
const COMMENTER_BOTTOM = 5;

const pickCommenterLefts = (
  occupiedLefts: number[],
  count: number,
): number[] => {
  const chosen: number[] = [];
  const remaining = [...COMMENTER_CANDIDATE_LEFTS];
  for (let i = 0; i < count && remaining.length > 0; i++) {
    const taken = [...occupiedLefts, ...chosen];
    let best = remaining[0];
    let bestDist = -1;
    remaining.forEach((candidate) => {
      const dist =
        taken.length === 0
          ? 100
          : Math.min(...taken.map((t) => Math.abs(t - candidate)));
      if (dist > bestDist) {
        bestDist = dist;
        best = candidate;
      }
    });
    chosen.push(best);
    remaining.splice(remaining.indexOf(best), 1);
  }
  return chosen.sort((a, b) => a - b);
};

const photoSlots = (flip: boolean) => {
  const kfpLeft = flip ? 70 : 30;
  return {
    kfp: { left: kfpLeft, bottom: 2, flip },
    subjects: [
      { left: kfpLeft - 6, bottom: 6, flip: false },
      { left: kfpLeft + 6, bottom: 6, flip: false },
    ] as Slot[],
  };
};

const jitter = (value: number, amount: number): number =>
  value + (Math.random() * 2 - 1) * amount;

type Phase = "idle" | "entering" | "leaving";

interface FanInstance {
  id: FanId;
  slot: Slot;
  dim?: boolean;
  phase: Phase;
}

const shuffle = <T,>(arr: T[]): T[] => {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

const rollFans = (): Omit<FanInstance, "phase">[] => {
  const backCount = 1 + Math.floor(Math.random() * 3);
  const back = shuffle(BACK_POOL)
    .slice(0, backCount)
    .map((id, i) => ({
      id,
      slot: {
        ...BACK_SLOTS[i],
        left: jitter(BACK_SLOTS[i].left, 4),
        bottom: jitter(BACK_SLOTS[i].bottom, 3),
      },
      dim: true,
    }));

  const flip = Math.random() < 0.5;
  const { kfp, subjects } = photoSlots(flip);
  const clusterDx = jitter(0, 5);
  const clusterDy = jitter(0, 2);
  const kfpSlot = {
    ...kfp,
    left: kfp.left + clusterDx,
    bottom: kfp.bottom + clusterDy,
  };
  const subjectSlots = subjects.map((s) => ({
    ...s,
    left: s.left + clusterDx,
    bottom: s.bottom + clusterDy,
  }));
  const shuffledFlex = shuffle(FLEX_POOL);
  const subjectCount = Math.random() < 0.5 ? 1 : 2;
  const subjectIds = shuffledFlex.slice(0, subjectCount);
  const remainingFlex = shuffledFlex.slice(subjectCount);

  const front = [
    { id: "kfp" as FanId, slot: kfpSlot },
    ...subjectIds.map((id, i) => ({ id, slot: subjectSlots[i] })),
  ];

  const reactors = shuffle([...remainingFlex, "takopoint" as FanId])
    .slice(0, REACTOR_SLOTS.length)
    .map((id, i) => ({
      id,
      slot: {
        left: jitter(REACTOR_SLOTS[i].left, 4),
        bottom: jitter(REACTOR_SLOTS[i].bottom, 3),
        flip: id === "takopoint" ? REACTOR_SLOTS[i].flip : false,
      },
    }));

  return [...back, ...front, ...reactors];
};

const withPhase = (fans: Omit<FanInstance, "phase">[], phase: Phase) =>
  fans.map((f) => ({ ...f, phase }));

const GalleryFans = ({
  momentKey,
  reactions,
}: {
  momentKey: string;
  reactions?: MomentReaction[];
}): JSX.Element => {
  const commenterCount = Math.min(3, reactions?.length ?? 0);
  const [fans, setFans] = useState<FanInstance[]>(() =>
    withPhase(rollFans(), "idle"),
  );
  const [commenterLefts, setCommenterLefts] = useState<number[]>(() =>
    pickCommenterLefts(
      fans.map((f) => f.slot.left),
      commenterCount,
    ),
  );

  useEffect(() => {
    const next = rollFans();
    setFans((prev) => {
      const prevIds = new Set(prev.map((f) => f.id));
      const nextIds = new Set(next.map((f) => f.id));
      const merged: FanInstance[] = next.map((f) => ({
        ...f,
        phase: prevIds.has(f.id) ? "idle" : "entering",
      }));
      prev.forEach((f) => {
        if (!nextIds.has(f.id)) merged.push({ ...f, phase: "leaving" });
      });
      return merged;
    });
    setCommenterLefts(
      pickCommenterLefts(
        next.map((f) => f.slot.left),
        commenterCount,
      ),
    );

    let raf2 = 0;
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        setFans((cur) =>
          cur.map((f) =>
            f.phase === "entering" ? { ...f, phase: "idle" } : f,
          ),
        );
      });
    });
    const purge = window.setTimeout(() => {
      setFans((cur) => cur.filter((f) => f.phase !== "leaving"));
    }, 700);

    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      window.clearTimeout(purge);
    };
  }, [momentKey]);

  const commenters = (reactions ?? []).slice(0, commenterCount);
  const bubbleTextRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const scrollAnimRefs = useRef<Record<number, number>>({});
  const [overflowing, setOverflowing] = useState<boolean[]>([]);

  useEffect(() => {
    const next = commenters.map((_, i) => {
      const el = bubbleTextRefs.current[i];
      return !!el && el.scrollHeight - el.clientHeight > 2;
    });
    setOverflowing(next);
  }, [momentKey, commenters.length]);

  const animateScrollTo = (i: number, target: number) => {
    const el = bubbleTextRefs.current[i];
    if (!el) return;
    if (scrollAnimRefs.current[i]) {
      cancelAnimationFrame(scrollAnimRefs.current[i]);
    }
    const start = el.scrollTop;
    const distance = target - start;
    if (Math.abs(distance) < 1) return;
    const duration = Math.min(6000, Math.max(1200, Math.abs(distance) * 35));
    const startTime = performance.now();
    const step = (now: number) => {
      const t = Math.min(1, (now - startTime) / duration);
      el.scrollTop = start + distance * t;
      if (t < 1) {
        scrollAnimRefs.current[i] = requestAnimationFrame(step);
      }
    };
    scrollAnimRefs.current[i] = requestAnimationFrame(step);
  };

  const revealBubble = (i: number) => {
    const el = bubbleTextRefs.current[i];
    if (el) animateScrollTo(i, el.scrollHeight - el.clientHeight);
  };
  const hideBubble = (i: number) => {
    animateScrollTo(i, 0);
  };

  return (
    <FloorArea>
      {fans.map((fan, i) => (
        <FanSprite
          key={fan.id}
          src={`${ASSET_BASE}/${FAN_FILES[fan.id]}`}
          alt=""
          $left={fan.slot.left}
          $bottom={fan.slot.bottom}
          $scale={scaleForDepth(fan.slot.bottom)}
          $flip={!!fan.slot.flip}
          $dim={fan.dim}
          $hidden={fan.phase !== "idle"}
          $delay={i * 0.35}
          $front={fan.id === "kfp"}
        />
      ))}
      {fans
        .filter((f) => f.id === "kfp" && f.phase !== "leaving")
        .map((f) => (
          <CameraFlash
            key="flash"
            $left={f.slot.left}
            $bottom={f.slot.bottom}
            $flip={!!f.slot.flip}
          />
        ))}
      {commenters.map((reaction, i) => {
        const left = commenterLefts[i] ?? 50;
        return (
          <FanSprite
            key={`commenter-${i}`}
            src={getTakoAvatar(reaction.author, i)}
            alt={reaction.author}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = getTakoAvatar(null, i);
            }}
            $left={left}
            $bottom={COMMENTER_BOTTOM}
            $scale={scaleForDepth(COMMENTER_BOTTOM)}
            $flip={false}
            $hidden={false}
            $delay={i * 0.2}
            $interactive
            onMouseEnter={() => revealBubble(i)}
            onMouseLeave={() => hideBubble(i)}
          />
        );
      })}
      {commenters.map((reaction, i) => {
        const left = commenterLefts[i] ?? 50;
        return (
          <CommenterBubbleWrap
            key={`bubble-${i}`}
            $left={left}
            $bottom={COMMENTER_BOTTOM + 55}
            onMouseEnter={() => revealBubble(i)}
            onMouseLeave={() => hideBubble(i)}
          >
            <Bubble>
              <BubbleText
                ref={(el) => {
                  bubbleTextRefs.current[i] = el;
                }}
              >
                {reaction.text}
              </BubbleText>
              {overflowing[i] && <MoreIndicator>···</MoreIndicator>}
            </Bubble>
            <ReactionName>{reaction.author}</ReactionName>
          </CommenterBubbleWrap>
        );
      })}
    </FloorArea>
  );
};

export default GalleryFans;
