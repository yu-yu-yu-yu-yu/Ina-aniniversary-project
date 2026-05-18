import React, { createContext, useContext, useState, useEffect } from "react";
import styled from "styled-components";

export const MuteButton = styled.button`
  position: fixed;
  left: 24px;
  bottom: 24px;
  z-index: 1000;
  background: rgba(255,255,255,0.8);
  border: var(--ink-black) 2px solid;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px #0002;
  cursor: pointer;
  font-size: 1.7rem;
`;

const MuteContext = createContext<{
  muted: boolean;
  toggleMute: () => void;
  videoPlaying: boolean;
  reportVideoPlaying: (playing: boolean) => void;
}>({ muted: false, toggleMute: () => {}, videoPlaying: false, reportVideoPlaying: () => {} });

export const useMute = () => useContext(MuteContext);

export const MuteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userMuted, setUserMuted] = useState(false);
  const [ytPlaying, setYtPlaying] = useState(false);

  const muted = userMuted || ytPlaying;
  const toggleMute = () => setUserMuted((m) => !m);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      try {
        const data = typeof event.data === "string" ? JSON.parse(event.data) : event.data;
        if (data?.event === "onStateChange") {
          setYtPlaying(data.info === 1);
        }
      } catch (_) { /* non-YouTube messages are not valid JSON or have no event field */ }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <MuteContext.Provider value={{ muted, toggleMute, videoPlaying: ytPlaying, reportVideoPlaying: setYtPlaying }}>
      {children}
      <MuteButton onClick={toggleMute} title={muted ? "Unmute BGM" : "Mute BGM"}>
        {muted ? "🔇" : "🔊"}
      </MuteButton>
    </MuteContext.Provider>
  );
};