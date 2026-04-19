import React, { createContext, useContext, useState } from "react";
import styled from "styled-components";

export const MuteButton = styled.button`
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 1000;
  background: rgba(255,255,255,0.8);
  border: none;
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
}>({ muted: false, toggleMute: () => {} });

export const useMute = () => useContext(MuteContext);

export const MuteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [muted, setMuted] = useState(false);
  const toggleMute = () => setMuted((m) => !m);

  return (
    <MuteContext.Provider value={{ muted, toggleMute }}>
      {children}
      <MuteButton onClick={toggleMute} title={muted ? "Unmute BGM" : "Mute BGM"}>
        {muted ? "🔇" : "🔊"}
      </MuteButton>
    </MuteContext.Provider>
  );
};