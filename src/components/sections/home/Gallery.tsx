"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { MapPin, CalendarDays, Layers } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { SolarGridDivider } from "@/components/animations/SolarElements";
import { projects } from "@/lib/calculator";
import { cn } from "@/lib/utils";

type Project = {
  id: string;
  model: string;
  modelGu: string;
  area: string;
  areaGu: string;
  month: string;
  year: number;
  rangeKm: number;
  category: string;
  region: string;
  image: string;
  w: number;
  h: number;
};

export default function Gallery() {
  const t = useTranslations("Gallery");
  const filters = t.raw("filters") as string[];
  const locale = useLocale();
  const [active, setActive] = useState(filters[0] ?? "All");

  const allLabel = filters[0] ?? "All";
  const filtered =
    active === allLabel
      ? projects
      : projects.filter((p) => p.region === active || p.category === active);

  return (
    <section id="projects" className="section-pad bg-white">
      <Container>
        <SectionHeading badge={t("badge")} title={t("title")} subtitle={t("subtitle")} />

        <Reveal className="mt-8">
          <div className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-gold-500/15 via-gold-300/20 to-gold-500/15 px-5 py-3 text-center">
            <span className="rounded-full bg-gold-500 p-1.5 text-navy-900">
              <Layers size={14} />
            </span>
            <span className="font-heading text-sm font-bold text-navy-900">
              {t("elevated")}
            </span>
          </div>
        </Reveal>

        <div className="no-scrollbar mt-6 flex gap-2 overflow-x-auto pb-1">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={cn(
                "shrink-0 rounded-full px-4 py-2 font-heading text-xs font-bold transition-colors",
                active === f
                  ? "bg-navy-900 text-gold-300"
                  : "bg-sky-100 text-navy-700 hover:bg-sky-200"
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-8 columns-2 gap-5 lg:columns-3 [&>*]:mb-5">
          {filtered.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.05} className="break-inside-avoid">
              <ProjectCard p={p} locale={locale} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <h3 className="text-center font-heading text-xl font-bold text-navy-900">
            {t("recentTalaja")}
          </h3>
          <div className="mt-6 columns-2 gap-5 lg:columns-3 [&>*]:mb-5">
            {projects
              .filter((p) => p.region === "Talaja")
              .map((p, i) => (
                <Reveal key={p.id} delay={i * 0.08}>
                  <ProjectCard p={p} locale={locale} />
                </Reveal>
              ))}
          </div>
        </Reveal>
      </Container>
      <SolarGridDivider />
    </section>
  );
}

function ProjectCard({ p, locale }: { p: Project; locale: string }) {
  const modelName = locale === "gu" ? p.modelGu : p.model;
  return (
    <div className="group card overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-glow-gold)]">
      <div className="relative w-full overflow-hidden bg-gradient-to-b from-sky-100 to-white">
        <div className="relative" style={{ aspectRatio: `${p.w} / ${p.h}` }}>
          <Image
            src={p.image}
            alt={`${p.area} VoltRide ${p.model} delivery`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="sun-glint pointer-events-none absolute inset-0" />
          <span className="absolute right-2 top-2 rounded-full bg-navy-900/85 px-2.5 py-1 text-[10px] font-bold text-gold-300 backdrop-blur-sm">
            {modelName} · {p.rangeKm} km
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between p-4">
        <div>
          <p className="font-heading text-sm font-bold text-navy-900">
            {locale === "gu" ? p.areaGu : p.area}
          </p>
          <p className="mt-0.5 flex items-center gap-1 text-xs text-ink/55">
            <CalendarDays size={12} />
            {p.month} {p.year} · {modelName}
          </p>
        </div>
        <span className="flex items-center gap-1 rounded-full bg-green-500/10 px-2 py-1 text-[10px] font-bold text-green-700">
          <MapPin size={11} />
          {locale === "gu" ? (p.region === "Talaja" ? "તળાજા" : "ભાવનગર") : p.region}
        </span>
      </div>
      <style jsx>{`
        .sun-glint {
          background: linear-gradient(
            115deg,
            transparent 35%,
            rgba(255, 255, 255, 0.22) 45%,
            transparent 55%
          );
          transform: translateX(-130%);
          transition: transform 1s ease;
        }
        .group:hover .sun-glint {
          transform: translateX(130%);
        }
      `}</style>
    </div>
  );
}
