import React from 'react';

interface StopwatchSVGProps {
  width?: number;
  height?: number;
  className?: string;
}

const StopwatchSVG: React.FC<StopwatchSVGProps> = ({
  width = 64,
  height = 64,
  className,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Base Circle (white) */}
    <circle
      cx="32"
      cy="34"
      r="24"
      fill="#FFFFFF"
      stroke="#000000"
      strokeWidth="2"
    />

    {/* Top Crown */}
    <rect
      x="28"
      y="4"
      width="8"
      height="10"
      rx="2"
      fill="#FFFFFF"
      stroke="#000000"
      strokeWidth="2"
    />

    {/* Left Button */}
    <rect
      x="12"
      y="16"
      width="8"
      height="4"
      rx="1"
      fill="#FFFFFF"
      stroke="#000000"
      strokeWidth="2"
    />

    {/* Right Button */}
    <rect
      x="44"
      y="16"
      width="8"
      height="4"
      rx="1"
      fill="#FFFFFF"
      stroke="#000000"
      strokeWidth="2"
    />

    {/* Tick Marks */}
    {Array.from({ length: 12 }).map((_, i) => {
      const angle = (i * 360) / 12 - 90; // start at 12 o'clock
      const rad = (angle * Math.PI) / 180;
      const innerX = 32 + Math.cos(rad) * 20;
      const innerY = 34 + Math.sin(rad) * 20;
      const outerX = 32 + Math.cos(rad) * 23;
      const outerY = 34 + Math.sin(rad) * 23;
      return (
        <line
          key={i}
          x1={innerX}
          y1={innerY}
          x2={outerX}
          y2={outerY}
          stroke="#000000"
          strokeWidth={2}
        />
      );
    })}

    {/* Center Dot */}
    <circle cx="32" cy="34" r="2" fill="#000000" />

    {/* Hour Hand */}
    <line
      x1="32"
      y1="34"
      x2="32"
      y2="22"
      stroke="#000000"
      strokeWidth={3}
      strokeLinecap="round"
    />

    {/* Minute Hand */}
    <line
      x1="32"
      y1="34"
      x2="42"
      y2="34"
      stroke="#000000"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </svg>
);

export default StopwatchSVG;