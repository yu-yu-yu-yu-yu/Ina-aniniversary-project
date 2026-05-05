export interface FloatingTakoData {
  key: number;
  left: number;
  tako: number;
  bottom: number;
  createdAt: number;
}

export interface FloatingBalloonData {
  key: number;
  left: number;
  balloonFile: string;
  bottom: number;
  createdAt: number;
  swayOffset: number;
}
