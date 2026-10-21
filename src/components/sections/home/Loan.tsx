"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Landmark, Building2, Wallet } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/siteConfig";

const bankIcons = [Landmark, Building2, Wallet];

export default function Loan() {
  const t = useTranslations("Loan");
  const steps = t.raw("steps") as string[];
  const [amount, setAmount] = useState("49999");
  const [tenure, setTenure] = useState("24");
  const [rate, setRate] = useState("9");

  const emi = useEmi(Number(amount) || 0, Number(tenure) || 1, Number(rate) || 0);

  return (
    <section id="loan" className="section-pad bg-white">
      <Container>
        <div className="overflow-hidden rounded-[32px] bg-gradient-to-br from-navy-900 via-navy-700 to-navy-900 p-8 text-white md:p-12">
          <SectionHeading
            badge={t("badge")}
            title={t("title")}
            subtitle={t("subtitle")}
            dark
          />
          <div className="mt-3 text-center">
            <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium text-sky-100/70">
              {t("terms")}
            </span>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {siteConfig.loanBanks.map((bank, i) => {
              const Icon = bankIcons[i % bankIcons.length];
              return (
                <span
                  key={bank}
                  className="flex items-center gap-2 rounded-2xl bg-white/10 px-5 py-3 font-heading text-sm font-bold text-white backdrop-blur-sm"
                >
                  <Icon size={18} className="text-gold-300" />
                  {bank}
                </span>
              );
            })}
          </div>

          <div className="mx-auto mt-10 max-w-2xl rounded-[24px] bg-white p-6 text-ink shadow-[var(--shadow-card-lg)] md:p-8">
            <h3 className="text-center font-heading text-lg font-bold text-navy-900">
              {t("emiTitle")}
            </h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              <EmiField label={t("emiAmount")} value={amount} onChange={setAmount} prefix="₹" />
              <EmiField label={t("emiTenure")} value={tenure} onChange={setTenure} suffix="mo" />
              <EmiField label={t("emiRate")} value={rate} onChange={setRate} suffix="%" />
            </div>
            <div className="mt-6 rounded-2xl bg-navy-900 px-5 py-4 text-center">
              <p className="text-[11px] font-bold uppercase tracking-widest text-gold-300">
                {t("emiResult")}
              </p>
              <p className="font-heading text-3xl font-extrabold text-white">
                ₹{Math.round(emi).toLocaleString("en-IN")}
              </p>
            </div>
          </div>

          <div className="mx-auto mt-8 max-w-2xl">
            <h4 className="text-center font-heading text-sm font-bold uppercase tracking-widest text-gold-300">
              {t("stepsTitle")}
            </h4>
            <div className="mt-4 grid gap-3 sm:grid-cols-4">
              {steps.map((s, i) => (
                <div key={s} className="rounded-2xl bg-white/5 p-3 text-center">
                  <span className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-gold-500 font-heading text-xs font-extrabold text-navy-900">
                    {i + 1}
                  </span>
                  <p className="mt-2 text-xs font-semibold text-sky-100/85">{s}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function EmiField({
  label,
  value,
  onChange,
  prefix,
  suffix,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  prefix?: string;
  suffix?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-[11px] font-bold uppercase tracking-wide text-ink/50">
        {label}
      </span>
      <div className="flex items-center overflow-hidden rounded-xl border border-sky-200">
        {prefix && <span className="pl-3 text-sm font-bold text-ink/50">{prefix}</span>}
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-3 py-2.5 text-sm font-bold text-navy-900 outline-none"
        />
        {suffix && <span className="pr-3 text-sm font-bold text-ink/50">{suffix}</span>}
      </div>
    </label>
  );
}

function useEmi(amount: number, tenure: number, rate: number): number {
  const r = rate / 100 / 12;
  if (r === 0) return amount / tenure;
  const p = Math.pow(1 + r, tenure);
  return (amount * r * p) / (p - 1);
}
