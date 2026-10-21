"use client";

import { useState } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Gauge, TreePine, Fuel, Zap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { WhatsAppButton } from "@/components/ui/Button";
import { calculateCommute, inr } from "@/lib/calculator";
import { usePrefersReducedMotion } from "@/lib/hooks/usePrefersReducedMotion";

export default function Calculator() {
  const t = useTranslations("Calculator");
  const locale = useLocale();
  const reduce = usePrefersReducedMotion();
  const [dailyKm, setDailyKm] = useState("30");
  const [petrolPrice, setPetrolPrice] = useState("96");
  const [electricityRate, setElectricityRate] = useState("8");
  const [result, setResult] = useState(() => calculateCommute(30, 96, 8));

  const run = () => {
    setResult(
      calculateCommute(
        Math.max(0, Number(dailyKm) || 0),
        Math.max(1, Number(petrolPrice) || 96),
        Math.max(1, Number(electricityRate) || 8)
      )
    );
  };

  const r = result;
  const modelName = locale === "gu" ? r.model.nameGu : r.model.name;
  const pct = Math.min(100, (r.model.rangeKm / 110) * 100);

  const rows: { label: string; value: string; key?: string }[] = [
    { label: t("recommended"), value: modelName },
    { label: t("range"), value: `${r.model.rangeKm} km` },
    { label: t("battery"), value: r.model.battery },
    { label: t("monthlyKm"), value: `${r.monthlyKm} km` },
    { label: t("petrolCost"), value: inr(r.petrolCost) },
    { label: t("electricityCost"), value: inr(r.electricityCost) },
    { label: t("monthlySavings"), value: inr(r.monthlySavings), key: "savings" },
    { label: t("payback"), value: r.paybackMonths ? `${r.paybackMonths.toFixed(1)} mo` : "—" },
    { label: t("savings5"), value: inr(r.savings5Years) },
    { label: t("co2"), value: `${r.co2PerYear} kg` },
  ];

  const waText = `Hello VoltRide E-Bikes! My estimated savings:\nDaily commute: ${dailyKm} km\nRecommended: ${r.model.name} (${r.model.rangeKm} km range)\nMonthly petrol cost: ${inr(r.petrolCost)}\nMonthly charging cost: ${inr(r.electricityCost)}\nMonthly savings: ${inr(r.monthlySavings)}\n5-Year savings: ${inr(r.savings5Years)}`;

  return (
    <section id="calculator" className="solar-grid-bg section-pad">
      <Container>
        <SectionHeading badge={t("badge")} title={t("title")} subtitle={t("subtitle")} />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="card p-6 lg:p-8">
              <label className="block">
                <span className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-ink/60">
                  {t("dailyKm")}
                </span>
                <input
                  type="number"
                  value={dailyKm}
                  onChange={(e) => setDailyKm(e.target.value)}
                  placeholder={t("placeholderKm")}
                  className="w-full rounded-2xl border border-sky-200 bg-white px-4 py-3.5 text-lg font-bold text-navy-900 outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/30"
                />
              </label>

              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-ink/60">
                    {t("petrolPrice")}
                  </span>
                  <input
                    type="number"
                    value={petrolPrice}
                    onChange={(e) => setPetrolPrice(e.target.value)}
                    className="w-full rounded-2xl border border-sky-200 bg-white px-4 py-3.5 text-base font-semibold text-navy-900 outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/30"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-ink/60">
                    {t("electricityRate")}
                  </span>
                  <input
                    type="number"
                    value={electricityRate}
                    onChange={(e) => setElectricityRate(e.target.value)}
                    className="w-full rounded-2xl border border-sky-200 bg-white px-4 py-3.5 text-base font-semibold text-navy-900 outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/30"
                  />
                </label>
              </div>

              <button onClick={run} className="btn-gold mt-6 w-full">
                {t("calculate")}
              </button>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-amber-500/10 p-3 text-center">
                  <Fuel size={18} className="mx-auto text-amber-600" />
                  <p className="mt-1 font-heading text-lg font-extrabold text-navy-900">
                    {inr(r.petrolCost)}
                  </p>
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-ink/50">
                    {t("petrolCost")}
                  </p>
                </div>
                <div className="rounded-2xl bg-green-500/10 p-3 text-center">
                  <Zap size={18} className="mx-auto text-green-600" />
                  <p className="mt-1 font-heading text-lg font-extrabold text-navy-900">
                    {inr(r.electricityCost)}
                  </p>
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-ink/50">
                    {t("electricityCost")}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card h-full p-6 lg:p-8">
              <div className="flex flex-col items-center gap-6 sm:flex-row">
                <GaugeDial
                  pct={pct}
                  value={String(r.model.rangeKm)}
                  unit="km"
                  label={t("resultTitle")}
                  reduce={reduce}
                />
                <div className="flex flex-1 items-center gap-4">
                  <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-2xl bg-sky-100/60">
                    <Image
                      src={r.model.image}
                      alt={r.model.name}
                      fill
                      sizes="112px"
                      className="object-contain p-1"
                    />
                  </div>
                  <div>
                    <p className="font-heading text-2xl font-extrabold text-navy-900">
                      {modelName}
                    </p>
                    <p className="text-sm text-ink/60">
                      {t("recommended")} · {r.model.battery}
                    </p>
                    <div className="mt-2 flex items-center gap-2 text-green-600">
                      <TreePine size={16} />
                      <span className="text-xs font-semibold">
                        {t("co2")}: {r.co2PerYear} kg
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {rows.map((row) => (
                  <div
                    key={row.label}
                    className={`rounded-2xl p-3 ${
                      row.key === "savings"
                        ? "bg-gold-500/10 ring-1 ring-gold-500/40"
                        : "bg-sky-100/60"
                    }`}
                  >
                    <p className="text-[10px] font-bold uppercase tracking-wide text-ink/50">
                      {row.label}
                    </p>
                    <p className="mt-0.5 font-heading text-sm font-extrabold text-navy-900">
                      {row.value}
                    </p>
                  </div>
                ))}
              </div>

              <WhatsAppButton message={waText} className="mt-5 w-full">
                {t("sendWhatsapp")}
              </WhatsAppButton>
              <p className="mt-3 text-center text-[11px] text-ink/50">{t("note")}</p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function GaugeDial({
  pct,
  value,
  unit,
  label,
  reduce,
}: {
  pct: number;
  value: string;
  unit: string;
  label: string;
  reduce: boolean;
}) {
  const r = 45;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative h-36 w-36 shrink-0">
      {!reduce && (
        <svg
          className="absolute -inset-2 h-[calc(100%+16px)] w-[calc(100%+16px)] animate-[ray-rotate_16s_linear_infinite]"
          viewBox="0 0 100 100"
        >
          <circle cx="50" cy="50" r="49" fill="none" stroke="#C98A1B" strokeDasharray="4 6" strokeWidth="1" opacity="0.6" />
        </svg>
      )}
      <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
        <circle cx="50" cy="50" r={r} fill="none" stroke="#EAF4FF" strokeWidth="8" />
        <motion.circle
          cx="50"
          cy="50"
          r={r}
          fill="none"
          stroke="url(#gaugeGrad)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={c}
          initial={reduce ? false : { strokeDashoffset: c }}
          whileInView={{ strokeDashoffset: c - (pct / 100) * c }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: "easeOut" }}
        />
        <defs>
          <linearGradient id="gaugeGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#4CC46A" />
            <stop offset="100%" stopColor="#F9B417" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-heading text-2xl font-extrabold text-navy-900">{value}</span>
        <span className="text-[10px] font-bold uppercase text-ink/50">{unit}</span>
      </div>
      <span className="absolute -bottom-1 left-1/2 flex -translate-x-1/2 items-center gap-1 whitespace-nowrap text-[9px] font-semibold text-ink/40">
        <Gauge size={11} />
        {label}
      </span>
    </div>
  );
}
