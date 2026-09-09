import styled, { keyframes, css } from "styled-components";

export const envelopeFloat = keyframes`
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-6px); }
`;

export const frontExit = keyframes`
  0%   { transform: perspective(900px) rotateY(0deg);   }
  100% { transform: perspective(900px) rotateY(-90deg); }
`;

export const frontEnter = keyframes`
  0%   { transform: perspective(900px) rotateY(-90deg); }
  100% { transform: perspective(900px) rotateY(0deg);   }
`;

export const backEnter = keyframes`
  0%   { transform: perspective(900px) rotateY(90deg); }
  100% { transform: perspective(900px) rotateY(0deg);  }
`;

export const backExit = keyframes`
  0%   { transform: perspective(900px) rotateY(0deg);  }
  100% { transform: perspective(900px) rotateY(90deg); }
`;

export const flapSwing = keyframes`
  0%   { transform: perspective(700px) rotateX(0deg);    }
  100% { transform: perspective(700px) rotateX(-180deg); }
`;

export const sealPop = keyframes`
  0%   { opacity: 1; transform: translate(-50%, -50%) scale(1);    }
  30%  { opacity: 1; transform: translate(-50%, -50%) scale(1.12); }
  65%  { opacity: 0; transform: translate(-50%, -50%) scale(0.6);  }
  100% { opacity: 0; transform: translate(-50%, -50%) scale(0);    }
`;

export const backdropFadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

export const modalSlideIn = keyframes`
  from { opacity: 0; transform: translateY(20px) scale(0.96); }
  to   { opacity: 1; transform: translateY(0)    scale(1);    }
`;

export type EnvelopeState = "idle" | "flipping" | "opening" | "open";
export type HoverState = "idle" | "hovering" | "leaving";

export const EnvelopeWrapper = styled.div`
  width: 280px;
  margin-bottom: 8px;
  cursor: pointer;
`;

export const CardScene = styled.div`
  width: 100%;
  position: relative;
  overflow: visible;
`;

export const FrontFace = styled.div<{
  $state: EnvelopeState;
  $hover: HoverState;
}>`
  width: 100%;
  position: relative;
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.18));

  ${({ $state, $hover }) => {
    if ($state !== "idle" || $hover === "hovering")
      return css`
        animation: ${frontExit} 0.25s ease-in forwards;
      `;
    if ($hover === "leaving")
      return css`
        animation: ${frontEnter} 0.25s ease-out 0.25s both;
      `;
    return css`
      animation: ${envelopeFloat} 3s ease-in-out infinite;
    `;
  }}

  &:hover {
    filter: drop-shadow(0 6px 18px rgba(0, 0, 0, 0.28));
  }

  > img:first-child {
    width: 100%;
    display: block;
    border-radius: 6px;
  }
`;

export const NameOverlay = styled.span`
  position: absolute;
  top: 6%;
  left: 6%;
  font-family: Georgia, serif;
  font-size: 14px;
  font-weight: bold;
  color: var(--text-color, #fff);
  text-shadow:
    0 1px 3px rgba(60, 20, 80, 0.85),
    0 0 8px rgba(60, 20, 80, 0.5);
  pointer-events: none;
  max-width: 55%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const BackFace = styled.div<{
  $state: EnvelopeState;
  $hover: HoverState;
}>`
  position: absolute;
  inset: 0;
  overflow: visible;

  ${({ $state, $hover }) => {
    if ($state === "flipping" || $hover === "hovering")
      return css`
        animation: ${backEnter} 0.25s ease-out 0.25s forwards;
        transform: perspective(900px) rotateY(90deg);
      `;
    if ($state === "opening" || $state === "open")
      return css`
        transform: perspective(900px) rotateY(0deg);
      `;
    if ($hover === "leaving")
      return css`
        animation: ${backExit} 0.25s ease-in forwards;
      `;
    return css`
      transform: perspective(900px) rotateY(90deg);
      pointer-events: none;
    `;
  }}

  img.base {
    width: 100%;
    display: block;
    border-radius: 6px;
  }
`;

export const FlapContainer = styled.div<{ $state: EnvelopeState }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  aspect-ratio: 1799 / 627;
  transform-style: preserve-3d;
  transform-origin: top center;

  ${({ $state }) =>
    $state === "opening" &&
    css`
      animation: ${flapSwing} 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    `}

  ${({ $state }) =>
    $state === "open" &&
    css`
      transform: perspective(700px) rotateX(-180deg);
    `}
`;

export const FlapFrontImg = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`;

export const FlapBackImg = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateX(180deg);
`;

export const SealImg = styled.img<{ $opening: boolean }>`
  position: absolute;
  width: 22.2%;
  top: 57.2%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;

  ${({ $opening }) =>
    $opening &&
    css`
      animation: ${sealPop} 0.45s ease forwards;
    `}
`;

export const readSealAppear = keyframes`
  0%   { opacity: 0; transform: scale(0.5); }
  60%  { opacity: 1; transform: scale(1.15); }
  100% { opacity: 1; transform: scale(1); }
`;

export const ReadSealImg = styled.img<{ $visible: boolean }>`
  position: absolute;
  width: 22.2%;
  bottom: 6%;
  right: 4%;
  pointer-events: none;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 0.2s ease;

  ${({ $visible }) =>
    $visible &&
    css`
      animation: ${readSealAppear} 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)
        forwards;
    `}
`;

export const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(3px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${backdropFadeIn} 0.25s ease forwards;
  padding: 24px;
`;

export const ModalCard = styled.div`
  border: 3px solid var(--light-background);
  background: var(--background);
  border-radius: 15px;
  padding: 15px;
  font-family: sans-serif;
  font-size: clamp(18px, 1vw + 0.6vh, 26px);
  line-height: 1.35;

  width: 70vw;
  height: 90vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  animation: ${modalSlideIn} 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;

  img {
    max-width: 100%;
  }

  scrollbar-width: thin;
  scrollbar-color: #bb6ad4 transparent;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #b66ad4;
    border-radius: 3px;
  }
`;

export const ZoomHint = styled.p`
  font-size: 12px;
  color: var(--ink-black);
  text-align: center;
  margin-top: 8px;
  font-style: italic;
  opacity: 0.6;
`;

export const CloseLetterButton = styled.button`
  margin-top: auto;
  padding: 16px;
  width: 100%;
  background: none;
  border: none;
  border-top: 1px solid rgba(180, 106, 212, 0.25);
  cursor: pointer;
  font-size: 15px;
  color: #795a9b;
  transition:
    background 0.15s ease,
    color 0.15s ease;
  flex-shrink: 0;

  &:hover {
    background: rgba(180, 106, 212, 0.1);
    color: #c0392b;
  }
`;

export const ZoomBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 6px 0;
  flex-shrink: 0;
`;

export const ZoomButton = styled.button`
  background: var(--dark-highlight);
  border: 2px solid var(--light-highlight);
  border-radius: 50%;
  width: 1.8em;
  height: 1.8em;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--light-highlight);
  font-size: 1em;
  font-weight: bold;
  line-height: 1;
  transition:
    background 0.2s,
    border-color 0.2s,
    color 0.2s;
  flex-shrink: 0;

  &:hover {
    background: var(--light-highlight);
    color: var(--dark-highlight);
  }

  &:disabled {
    opacity: 0.35;
    cursor: default;
    &:hover {
      background: var(--dark-highlight);
      color: var(--light-highlight);
    }
  }
`;

export const ZoomLabel = styled.span`
  font-size: 13px;
  color: var(--ink-black);
  min-width: 52px;
  text-align: center;
  opacity: 0.7;
  user-select: none;
`;
