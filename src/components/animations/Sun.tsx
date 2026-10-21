"use client";

import { usePrefersReducedMotion } from "@/lib/hooks/usePrefersReducedMotion";

export function Sun({
  className = "",
  glow = true,
}: {
  className?: string;
  glow?: boolean;
}) {
  const reduce = usePrefersReducedMotion();
  return (
    <div className={`pointer-events-none absolute ${className}`} aria-hidden>
      <div
        className={`relative flex h-28 w-28 items-center justify-center rounded-full sm:h-36 sm:w-36 ${
          glow ? "drop-shadow-[0_0_28px_rgba(249,180,23,0.55)]" : ""
        }`}
      >
        {/* Rotating ray rings */}
        <svg
          viewBox="0 0 200 200"
          className={`absolute inset-0 h-full w-full ${
            reduce ? "" : "animate-[ray-rotate_22s_linear_infinite]"
          }`}
        >
          <circle
            cx="100"
            cy="100"
            r="88"
            fill="none"
            stroke="#D9A524"
            strokeDasharray="6 9"
            strokeWidth="2"
            opacity="0.7"
          />
          <circle
            cx="100"
            cy="100"
            r="72"
            fill="none"
            stroke="#C98A1B"
            strokeDasharray="3 7"
            strokeWidth="1.4"
            opacity="0.5"
          />
        </svg>
        {/* Sun body */}
        <div
          className={`h-16 w-16 rounded-full bg-gradient-to-tr from-[#D9A524] via-[#F9B417] to-[#FFD86B] sm:h-20 sm:w-20 ${
            reduce ? "" : "animate-[sun-pulse_4s_ease-in-out_infinite]"
          }`}
        />
      </div>
    </div>
  );
}