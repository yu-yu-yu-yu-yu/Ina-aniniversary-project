import React from "react";

const Svg = ({ children }: { children: React.ReactNode }): JSX.Element => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    {children}
  </svg>
);

export const BellIcon = (): JSX.Element => (
  <Svg>
    <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.7 21a2 2 0 0 1-3.4 0" />
  </Svg>
);

export const BellOffIcon = (): JSX.Element => (
  <Svg>
    <path d="M13.7 21a2 2 0 0 1-3.4 0" />
    <path d="M18.6 13c-.4-1.4-.6-3-.6-5a6 6 0 0 0-9.3-5M6.3 6.3A6 6 0 0 0 6 8c0 7-3 9-3 9h14" />
    <path d="M2 2l20 20" />
  </Svg>
);

export const ZoomInIcon = (): JSX.Element => (
  <Svg>
    <circle cx="11" cy="11" r="7" />
    <path d="M21 21l-4.3-4.3" />
    <path d="M11 8v6M8 11h6" />
  </Svg>
);

export const ZoomOutIcon = (): JSX.Element => (
  <Svg>
    <circle cx="11" cy="11" r="7" />
    <path d="M21 21l-4.3-4.3" />
    <path d="M8 11h6" />
  </Svg>
);

export const BookmarkIcon = (): JSX.Element => (
  <Svg>
    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
  </Svg>
);

export const GalleryIcon = (): JSX.Element => (
  <Svg>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <circle cx="9" cy="9" r="2" />
    <path d="M21 15l-5-5L5 21" />
  </Svg>
);
