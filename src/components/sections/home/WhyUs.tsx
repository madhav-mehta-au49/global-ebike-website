"use client";

import { useTranslations } from "next-intl";
import {
  BatteryCharging,
  ShieldCheck,
  Wallet,
  Bike,
  Cpu,
  Wrench,
  RefreshCw,
  FileCheck2,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { SolarGridDivider } from "@/components/animations/SolarElements";

type Item = { title: string; desc: string };

const icons = [
  BatteryCharging,
  ShieldCheck,
  Wallet,
  Bike,
  Cpu,
  Wrench,
  RefreshCw,
  FileCheck2,
];

export default function WhyUs() {
  const t = useTranslations("WhyUs");
  const items = t.raw("items") as Item[];

  return (
    <section id="why" className="solar-grid-bg section-pad">
      <Container>
        <SectionHeading badge={t("badge")} title={t("title")} subtitle={t("subtitle")} />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={item.title} delay={i * 0.06}>
                <div className="group card h-full p-6 transition-all duration-300 hover:-translate-y-1 hover:border hover:border-gold-500/50 hover:shadow-[var(--shadow-glow-gold)]">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-300 to-gold-500 text-navy-900 shadow-[var(--shadow-glow-gold)] transition-transform group-hover:scale-110">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-4 font-heading text-base font-bold text-navy-900">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink/65">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
      <SolarGridDivider label={t("badge")} />
    </section>
  );
}
