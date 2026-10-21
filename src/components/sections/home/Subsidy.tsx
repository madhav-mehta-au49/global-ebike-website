"use client";

import { useTranslations } from "next-intl";
import { RefreshCw, Building2, Gift, Check, Info } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { SolarGridDivider } from "@/components/animations/SolarElements";
import { offers } from "@/lib/siteConfig";

export default function Subsidy() {
  const t = useTranslations("Subsidy");
  const requirements = t.raw("requirements") as string[];
  const steps = t.raw("steps") as string[];

  const slabs = [
    { label: t("slab1"), amount: offers.exchange, icon: RefreshCw, max: false },
    { label: t("slab2"), amount: offers.corporate, icon: Building2, max: false },
    { label: t("slab3"), amount: offers.festive, icon: Gift, max: true },
  ];

  return (
    <section id="subsidy" className="section-pad bg-white">
      <Container>
        <SectionHeading badge={t("badge")} title={t("title")} subtitle={t("subtitle")} />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {slabs.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div
                className={`card relative h-full p-6 text-center transition-all duration-300 hover:-translate-y-1 ${
                  s.max
                    ? "border-2 border-gold-500/70 shadow-[var(--shadow-glow-gold)]"
                    : ""
                }`}
              >
                {s.max && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-navy-900">
                    {t("maxTag")}
                  </span>
                )}
                <span
                  className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl ${
                    s.max
                      ? "bg-gradient-to-br from-gold-300 to-gold-500 text-navy-900"
                      : "bg-navy-700/10 text-navy-700"
                  }`}
                >
                  <s.icon size={26} />
                </span>
                <h3 className="mt-4 font-heading text-lg font-bold text-navy-900">{s.label}</h3>
                <p className="mt-1 font-heading text-3xl font-extrabold text-green-600">
                  ₹{s.amount.toLocaleString("en-IN")}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="card h-full p-6">
              <h3 className="font-heading text-base font-bold text-navy-900">
                {t("requirementsTitle")}
              </h3>
              <ul className="mt-4 space-y-3">
                {requirements.map((r) => (
                  <li key={r} className="flex items-center gap-3 text-sm text-ink/75">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-green-500/15 text-green-600">
                      <Check size={15} />
                    </span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-[24px] bg-navy-900 p-6 text-white">
              <div className="flex items-start gap-3">
                <Info size={20} className="mt-0.5 shrink-0 text-gold-300" />
                <p className="text-sm leading-relaxed text-sky-100/85">{t("note")}</p>
              </div>
              <p className="mt-4 border-t border-white/10 pt-3 text-xs text-sky-100/50">
                {t("disclaimer")}
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-10">
          <h3 className="text-center font-heading text-xl font-bold text-navy-900">
            {t("stepsTitle")}
          </h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, i) => (
              <div key={step} className="relative rounded-2xl bg-sky-100/60 p-4 text-center">
                <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-gold-300 to-gold-500 font-heading text-sm font-extrabold text-navy-900">
                  {i + 1}
                </span>
                <p className="mt-3 text-sm font-semibold text-navy-900">{step}</p>
                {i < steps.length - 1 && (
                  <span className="absolute -right-3 top-1/2 hidden h-px w-6 -translate-y-1/2 bg-gradient-to-r from-gold-500 to-transparent lg:block" />
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
      <SolarGridDivider />
    </section>
  );
}
