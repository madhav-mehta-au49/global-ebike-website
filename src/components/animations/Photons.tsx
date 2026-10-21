"use client";

import { usePrefersReducedMotion } from "@/lib/hooks/usePrefersReducedMotion";

export function Photons({ count = 8 }: { count?: number }) {
  const reduce = usePrefersReducedMotion();
  if (reduce) return null;
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {Array.from({ length: count }).map((_, i) => {
        const left = 30 + ((i * 137.5) % 55);
        const top = 5 + ((i * 53) % 35);
        const delay = (i % 5) * 0.9;
        const dur = 4.5 + (i % 3);
        return (
          <span
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full bg-gold-300 shadow-[0_0_8px_rgba(255,216,107,0.9)]"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              animation: `photon-drift ${dur}s ease-in ${delay}s infinite`,
            }}
          />
        );
      })}
    </div>
  );
}