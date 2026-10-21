"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/lib/hooks/usePrefersReducedMotion";

export function WarrantyBar({ years, max = 5 }: { years: number; max?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = usePrefersReducedMotion();
  const pct = Math.max(10, Math.min(100, (years / max) * 100));

  useEffect(() => {
    if (reduce && ref.current) {
      ref.current.style.transform = `scaleX(${pct / 100})`;
    }
  }, [reduce, pct]);

  return (
    <div>
      <div className="flex items-center justify-between text-[11px] font-bold">
        <span className="text-navy-700">{years} {years === 1 ? "Year" : "Years"}</span>
        <span className="text-green-600">Covered</span>
      </div>
      <div className="mt-1.5 h-3 overflow-hidden rounded-full bg-sky-200/60">
        <motion.div
          ref={ref}
          className="relative h-full rounded-full bg-gradient-to-r from-green-500 to-gold-400"
          initial={reduce ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          style={{ transformOrigin: "left", width: `${pct}%` }}
        >
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </motion.div>
      </div>
    </div>
  );
}
