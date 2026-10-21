"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { WarrantyBar } from "@/components/ui/WarrantyBar";

type Item = { years: number; title: string; desc: string };

export default function Warranty() {
  const t = useTranslations("Warranty");
  const items = t.raw("items") as Item[];

  return (
    <section id="warranty" className="section-pad bg-white">
      <Container>
        <SectionHeading badge={t("badge")} title={t("title")} subtitle={t("subtitle")} />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="card h-full p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-glow-green)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-500/10 text-green-600">
                  <ShieldIcon />
                </div>
                <h3 className="mt-4 font-heading text-sm font-bold text-navy-900">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-ink/65">{item.desc}</p>
                <div className="mt-4">
                  <WarrantyBar years={item.years} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ShieldIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3l7 3v6c0 4.4-3 7.5-7 9-4-1.5-7-4.6-7-9V6l7-3z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="M8.5 12l2.4 2.4 4.6-4.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}