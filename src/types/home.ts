export interface FloatingTakoData {
  key: number;
  left: number;
  tako: number;
  bottom: number;
  createdAt: number;
}

export interface AudioContextType {
  isMuted: boolean;
  setMuted: (muted: boolean) => void;
}
