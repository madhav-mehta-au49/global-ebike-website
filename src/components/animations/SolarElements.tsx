import { cn } from "@/lib/utils";

export function SolarGridDivider({
  label,
  className,
}: {
  label?: string;
  className?: string;
}) {
  return (
    <div className={cn("relative flex items-center justify-center py-6", className)}>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-navy-700/30 to-gold-500/40" />
      <div className="mx-4 inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-white px-4 py-1.5 shadow-sm">
        <MiniPanel />
        {label && (
          <span className="font-heading text-[11px] font-bold uppercase tracking-wider text-navy-700">
            {label}
          </span>
        )}
        <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
      </div>
      <div className="h-px flex-1 bg-gradient-to-r from-gold-500/40 via-navy-700/30 to-transparent" />
    </div>
  );
}

export function MiniPanel({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className={cn("text-gold-500", className)}
    >
      <rect x="3" y="5" width="15" height="14" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M20 10v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 8l-3 5h3l-1 3 4-5h-3z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    </svg>
  );
}

export function SolarPanelIcon({ className }: { className?: string }) {
  return <MiniPanel className={className} />;
}
