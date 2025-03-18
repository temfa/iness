import React from "react";

export const PlaySvg = () => {
  return (
    <svg width="39" height="38" viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="19.5" cy="19" r="19" fill="#3D0A2C" />
      <mask id="mask0_130_12" maskUnits="userSpaceOnUse" x="8" y="9" width="22" height="22">
        <path
          d="M19 30C24.523 30 29 25.523 29 20C29 14.477 24.523 10 19 10C13.477 10 9 14.477 9 20C9 25.523 13.477 30 19 30Z"
          fill="white"
          stroke="white"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="M17 20V16.536L20 18.268L23 20L20 21.732L17 23.464V20Z" fill="black" stroke="black" strokeWidth="2" strokeLinejoin="round" />
      </mask>
      <g mask="url(#mask0_130_12)">
        <path d="M7 8H31V32H7V8Z" fill="white" />
      </g>
    </svg>
  );
};
