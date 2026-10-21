"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { motion, useReducedMotion } from "framer-motion";
import { Fuel, TrendingDown } from "lucide-react";

const PETROL_COST = 3200;
const EV_COST = 180;

export default function BillToZeroCard() {
  const t = useTranslations("Hero");
  const reduce = useReducedMotion();
  const [amount, setAmount] = useState(PETROL_COST);

  useEffect(() => {
    if (reduce) return;
    let raf = 0;
    let start = 0;
    const cycle = 6000;
    const tick = (now: number) => {
      if (!start) start = now;
      const p = ((now - start) % cycle) / cycle;
      const eased = p < 0.6 ? 1 - Math.pow(1 - p / 0.6, 2) : 0;
      const a = Math.round(EV_COST + eased * (PETROL_COST - EV_COST));
      setAmount(a);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduce]);

  const finalAmount = reduce ? EV_COST : amount;
  const finalSaved = PETROL_COST - finalAmount;

  return (
    <div className="glass rounded-[24px] p-5 shadow-[var(--shadow-card-lg)]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-navy-700/10 text-navy-700">
            <Fuel size={18} />
          </span>
          <span className="font-heading text-sm font-bold text-navy-900">
            {t("billCardTitle")}
          </span>
        </div>
        <span className="rounded-full bg-green-500/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-green-600">
          EV
        </span>
      </div>

      <div className="mt-4 text-center">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-ink/40">
          {t("billCardFrom")}
        </p>
        <div className="my-1 flex items-center justify-center gap-2 text-ink/30">
          <TrendingDown size={18} />
          <span className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-gold-500 to-green-400" />
        </div>
        <p className="font-heading text-5xl font-extrabold tabular-nums text-navy-900">
          ₹{finalAmount.toLocaleString("en-IN")}
        </p>
      </div>

      <motion.div
        className="mt-4 rounded-2xl bg-green-500/10 px-4 py-3 text-center"
        animate={reduce ? {} : { scale: [1, 1.02, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <p className="text-[11px] font-bold uppercase tracking-widest text-green-600">
          {t("billCardSaved")}
        </p>
        <p className="font-heading text-2xl font-extrabold text-green-600">
          ₹{finalSaved.toLocaleString("en-IN")}
        </p>
      </motion.div>
    </div>
  );
}
