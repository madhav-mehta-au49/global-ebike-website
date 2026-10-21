"use client";

import { useTranslations } from "next-intl";
import { CalendarCheck, Bike, Wallet, FileCheck2, KeyRound, Wrench } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";

const icons = [CalendarCheck, Bike, Wallet, FileCheck2, KeyRound, Wrench];

export default function HowItWorks() {
  const t = useTranslations("HowItWorks");
  const steps = t.raw("steps") as string[];

  return (
    <section id="process" className="solar-grid-bg section-pad">
      <Container>
        <SectionHeading badge={t("badge")} title={t("title")} subtitle={t("subtitle")} />

        <div className="mt-12">
          <div className="relative hidden lg:block">
            <div className="absolute left-0 right-0 top-7 h-0.5 bg-gradient-to-r from-navy-700/20 via-gold-500/60 to-green-400/50" />
            <div className="relative grid grid-cols-6 gap-4">
              {steps.map((step, i) => {
                const Icon = icons[i % icons.length];
                return (
                  <Reveal key={step} delay={i * 0.1}>
                    <div className="flex flex-col items-center text-center">
                      <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-navy-900 text-gold-300 shadow-[var(--shadow-glow-gold)]">
                        <Icon size={22} />
                        <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-gold-500 font-heading text-[11px] font-extrabold text-navy-900">
                          {i + 1}
                        </span>
                      </div>
                      <p className="mt-3 max-w-[160px] text-sm font-semibold text-navy-900">
                        {step}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          <div className="space-y-0 lg:hidden">
            {steps.map((step, i) => {
              const Icon = icons[i % icons.length];
              return (
                <Reveal key={step} delay={i * 0.05}>
                  <div className="relative flex gap-4 pb-6">
                    {i < steps.length - 1 && (
                      <span className="absolute left-[27px] top-14 h-[calc(100%-3rem)] w-0.5 bg-gradient-to-b from-gold-500/60 to-green-400/40" />
                    )}
                    <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-navy-900 text-gold-300 shadow-[var(--shadow-glow-gold)]">
                      <Icon size={22} />
                      <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-gold-500 font-heading text-[11px] font-extrabold text-navy-900">
                        {i + 1}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <p className="text-sm font-semibold text-navy-900">{step}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
