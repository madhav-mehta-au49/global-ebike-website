"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { MessageCircle, Package, Zap, BatteryCharging } from "lucide-react";
import { Sun } from "@/components/animations/Sun";
import { Photons } from "@/components/animations/Photons";
import { Button, WhatsAppButton } from "@/components/ui/Button";
import QuoteLeadForm from "@/components/forms/QuoteLeadForm";
import BillToZeroCard from "./BillToZeroCard";

export default function Hero() {
  const t = useTranslations("Hero");
  const chips = t.raw("trustChips") as string[];

  return (
    <section className="relative flex min-h-[calc(100svh-64px)] items-center overflow-hidden bg-navy-900">
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero-ebike.svg"
          alt="VoltRide electric bike in front of the showroom at dusk"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071440]/95 via-[#0B1F5C]/85 to-[#071440]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F5C] via-transparent to-[#071440]/60" />
        <div className="solar-shine pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>

      <div className="solar-dark-grid pointer-events-none absolute inset-0" aria-hidden />
      <Sun className="right-4 top-16 sm:right-10" />
      <Photons count={10} />

      <CitySilhouette />

      <div className="container-px relative z-10 py-12 lg:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="text-center lg:text-left">
            <span className="chip mb-5 bg-gold-500/15 text-gold-300">
              <Zap size={13} />
              {t("badge")}
            </span>
            <h1 className="font-heading text-4xl font-extrabold leading-[1.1] text-white text-balance sm:text-5xl xl:text-6xl">
              {t("title")}
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-sky-100/85 lg:mx-0 sm:text-lg">
              {t("subtitle")}
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <Button href="#contact" icon={<MessageCircle size={18} />}>
                {t("ctaQuote")}
              </Button>
              <WhatsAppButton />
              <Button href="#packages" variant="ghost-light" icon={<Package size={18} />}>
                {t("ctaPackages")}
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
              {chips.map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-2 text-xs font-semibold text-white backdrop-blur-sm"
                >
                  <BatteryCharging size={14} className="text-gold-300" />
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <div className="mx-auto w-full max-w-md space-y-4 lg:mx-0">
            <BillToZeroCard />
            <QuoteLeadForm compact variant="card" />
          </div>
        </div>
      </div>

      <div className="absolute left-4 top-24 z-20 hidden rotate-[-12deg] xl:block">
        <div className="flex h-28 w-28 animate-[float-up_5s_ease-in-out_infinite] flex-col items-center justify-center rounded-full border-2 border-dashed border-gold-400/50 bg-white/5 text-center backdrop-blur-sm">
          <Zap size={22} className="text-gold-300" />
          <span className="mt-1 px-3 text-[9px] font-bold uppercase leading-tight tracking-wider text-gold-200">
            {t("seal")}
          </span>
        </div>
      </div>

      <style jsx>{`
        .solar-shine {
          animation: solar-shine 6s ease-in-out infinite;
        }
        @keyframes solar-shine {
          0%, 100% { transform: translateX(-150%) skewX(-18deg); }
          50%, 60% { transform: translateX(350%) skewX(-18deg); }
        }
      `}</style>
    </section>
  );
}

function CitySilhouette() {
  return (
    <svg
      className="pointer-events-none absolute bottom-0 inset-x-0 h-16 w-full opacity-20"
      viewBox="0 0 1440 80"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden
    >
      {[
        [0, 46, 90],
        [100, 34, 70],
        [180, 52, 110],
        [300, 28, 80],
        [390, 44, 120],
        [520, 36, 90],
        [620, 54, 100],
        [730, 30, 70],
        [810, 46, 120],
        [940, 38, 90],
        [1040, 50, 110],
        [1160, 32, 80],
        [1250, 46, 100],
        [1360, 36, 80],
      ].map(([x, y, w]) => (
        <rect
          key={`${x}-${y}`}
          x={x}
          y={y}
          width={w}
          height={80 - y}
          fill="rgba(255,255,255,0.28)"
        />
      ))}
    </svg>
  );
}
