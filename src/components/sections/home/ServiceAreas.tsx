"use client";

import { useTranslations } from "next-intl";
import { Bike, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";

export default function ServiceAreas() {
  const t = useTranslations("Areas");
  const places = t.raw("places") as string[];

  return (
    <section id="areas" className="section-pad bg-white">
      <Container>
        <SectionHeading badge={t("badge")} title={t("title")} subtitle={t("subtitle")} />

        <div className="mt-10 grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="relative h-72 overflow-hidden rounded-[28px] bg-gradient-to-br from-sky-100 to-sky-200 sm:h-80">
              <div className="absolute inset-0 solar-grid-bg" />
              <div className="absolute left-0 right-0 top-1/2 h-1.5 -rotate-6 bg-white/70" />
              <div className="absolute left-0 right-0 top-1/3 h-1 -rotate-3 bg-white/50" />
              <div className="absolute bottom-1/4 left-0 right-0 h-1 rotate-2 bg-white/60" />
              <span className="absolute left-[22%] top-[30%] flex flex-col items-center">
                <MapPin size={30} className="text-gold-500 drop-shadow-[0_0_8px_rgba(249,180,23,0.6)]" />
                <span className="rounded-full bg-navy-900 px-2 py-0.5 text-[10px] font-bold text-white">
                  {t("talaja")}
                </span>
              </span>
              <span className="absolute right-[24%] top-[38%] flex flex-col items-center">
                <MapPin size={30} className="text-green-600" />
                <span className="rounded-full bg-navy-900 px-2 py-0.5 text-[10px] font-bold text-white">
                  {t("bhavnagar")}
                </span>
              </span>
              <span className="absolute left-[45%] bottom-[18%] flex flex-col items-center">
                <MapPin size={24} className="text-blue-500" />
                <span className="rounded-full bg-navy-900 px-2 py-0.5 text-[10px] font-bold text-white">
                  {t("villages")}
                </span>
              </span>
              <span className="absolute right-6 top-5 text-4xl opacity-80">⚡</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-2.5">
              {places.map((p) => (
                <span
                  key={p}
                  className="inline-flex items-center gap-2 rounded-2xl border border-sky-200 bg-sky-100/60 px-4 py-2.5 font-heading text-sm font-semibold text-navy-700 transition-all hover:-translate-y-0.5 hover:border-gold-500/50 hover:shadow-[var(--shadow-glow-gold)]"
                >
                  <Bike size={15} className="text-gold-500" />
                  {p}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
