"use client";

export function EnergyWave({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none overflow-hidden ${className}`} aria-hidden>
      <svg viewBox="0 0 400 32" className="h-8 w-full" fill="none">
        <line
          x1="0"
          y1="16"
          x2="400"
          y2="16"
          stroke="#1E5BD8"
          strokeWidth="1"
          strokeOpacity="0.25"
          strokeDasharray="4 4"
        />
        <path
          d="M0,16 Q25,2 50,16 T100,16 T150,16 T200,16 T250,16 T300,16 T350,16 T400,16"
          fill="none"
          stroke="#D9A524"
          strokeWidth="2.5"
          strokeDasharray="8 6"
          className="animate-[energy-dash_1.2s_linear_infinite]"
        />
        <path
          d="M0,16 Q25,28 50,16 T100,16 T150,16 T200,16 T250,16 T300,16 T350,16 T400,16"
          fill="none"
          stroke="#4CC46A"
          strokeWidth="1.5"
          opacity="0.6"
          strokeDasharray="6 4"
        />
        <circle r="3" fill="#F9B417">
          <animateMotion
            dur="3s"
            repeatCount="indefinite"
            path="M0,16 Q25,2 50,16 T100,16 T150,16 T200,16 T250,16 T300,16 T350,16 T400,16"
          />
        </circle>
      </svg>
    </div>
  );
}