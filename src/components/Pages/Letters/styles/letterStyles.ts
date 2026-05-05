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
export type HoverState    = "idle" | "hovering" | "leaving";

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

export const FrontFace = styled.div<{ $state: EnvelopeState; $hover: HoverState }>`
  width: 100%;
  position: relative;
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.18));

  ${({ $state, $hover }) => {
    if ($state !== "idle" || $hover === "hovering") return css`animation: ${frontExit}  0.25s ease-in           forwards;`;
    if ($hover === "leaving")                        return css`animation: ${frontEnter} 0.25s ease-out 0.25s   both;`;
                                                     return css`animation: ${envelopeFloat} 3s ease-in-out infinite;`;
  }}

  &:hover {
    filter: drop-shadow(0 6px 18px rgba(0, 0, 0, 0.28));
  }

  img {
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

export const BackFace = styled.div<{ $state: EnvelopeState; $hover: HoverState }>`
  position: absolute;
  inset: 0;
  overflow: visible;

  ${({ $state, $hover }) => {
    if ($state === "flipping" || $hover === "hovering") return css`animation: ${backEnter} 0.25s ease-out 0.25s forwards; transform: perspective(900px) rotateY(90deg);`;
    if ($state === "opening" || $state === "open")       return css`transform: perspective(900px) rotateY(0deg);`;
    if ($hover === "leaving")                            return css`animation: ${backExit}  0.25s ease-in  forwards;`;
                                                         return css`transform: perspective(900px) rotateY(90deg); pointer-events: none;`;
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
    css`animation: ${flapSwing} 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;`}

  ${({ $state }) =>
    $state === "open" &&
    css`transform: perspective(700px) rotateX(-180deg);`}
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
    $opening && css`animation: ${sealPop} 0.45s ease forwards;`}
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
  background: var(--text-color, #fff);
  border-radius: 12px;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);
  max-width: 540px;
  width: 100%;
  max-height: 85vh;
  overflow-y: auto;
  position: relative;
  animation: ${modalSlideIn} 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;

  scrollbar-width: thin;
  scrollbar-color: #bb6ad4 transparent;
  &::-webkit-scrollbar { width: 6px; }
  &::-webkit-scrollbar-thumb { background: #b66ad4; border-radius: 3px; }
`;

export const CloseButton = styled.button`
  position: sticky;
  top: 12px;
  float: right;
  margin: 12px 12px 0 0;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 22px;
  line-height: 1;
  color: #795a9b;
  transition: color 0.15s ease, transform 0.15s ease;
  z-index: 10;

  &:hover {
    color: #c0392b;
    transform: scale(1.15);
  }
`;
