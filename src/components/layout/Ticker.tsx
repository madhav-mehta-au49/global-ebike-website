"use client";

import { useTranslations } from "next-intl";
import { Sparkles } from "lucide-react";

export default function Ticker() {
  const t = useTranslations("Ticker");
  const items = t.raw("items") as string[];
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden bg-navy-900 py-2 text-white">
      <div className="flex w-max animate-[marquee_22s_linear_infinite]">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex shrink-0 items-center gap-2 px-6 font-heading text-xs font-semibold tracking-wide"
          >
            <Sparkles size={13} className="text-gold-300" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}