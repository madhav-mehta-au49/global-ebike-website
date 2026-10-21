import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "chip bg-navy-700/10 font-heading uppercase tracking-widest text-navy-700",
        className
      )}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  dark = false,
  className,
}: {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {badge && (
        <span
          className={cn(
            "mb-3 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 font-heading text-xs font-bold uppercase tracking-widest",
            dark
              ? "bg-gold-500/15 text-gold-300"
              : "bg-navy-700/10 text-navy-700"
          )}
        >
          <SunMark />
          {badge}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl font-bold leading-tight text-balance sm:text-4xl lg:text-[44px]",
          dark ? "text-white" : "text-navy-900"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            dark ? "text-sky-100/80" : "text-ink/70"
          )}
        >
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-gold-300 to-gold-500",
          align === "left" && "mx-0"
        )}
      />
    </div>
  );
}

function SunMark() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="4.5" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9L17 7M7 17l-2.1 2.1" />
      </g>
    </svg>
  );
}