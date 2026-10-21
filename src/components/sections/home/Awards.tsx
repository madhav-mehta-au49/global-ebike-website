"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Star, BadgeCheck, Newspaper } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animations/Reveal";
import { Photons } from "@/components/animations/Photons";
import { awards } from "@/lib/calculator";

export default function Awards() {
  const t = useTranslations("Awards");

  return (
    <section id="awards" className="solar-dark-grid relative overflow-hidden bg-navy-900 py-20">
      <Photons count={12} />
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-gold-300"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 23) % 100}%`,
              animation: `twinkle ${2 + (i % 3)}s ease-in-out ${i * 0.25}s infinite`,
            }}
          />
        ))}
      </div>

      <Container className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative mx-auto flex max-w-sm items-center justify-center">
            <div className="animate-[ray-rotate_20s_linear_infinite] absolute -inset-4 rounded-full border-2 border-dashed border-gold-500/30" />
            <div className="animate-[ray-rotate_14s_linear_infinite_reverse] absolute -inset-8 rounded-full border border-dashed border-gold-500/20" />
            <div className="relative overflow-hidden rounded-full border-4 border-gold-500/40 shadow-[var(--shadow-glow-gold-lg)]">
              <Image
                src={awards.trophy}
                alt="Best EV Showroom 2026 trophy awarded to VoltRide E-Bikes"
                width={320}
                height={320}
                className="h-56 w-56 rounded-full object-cover sm:h-64 sm:w-64"
              />
              <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-gold-300/30" />
            </div>
          </div>

          <div className="text-center lg:text-left">
            <span className="chip bg-gold-500/15 text-gold-300">
              <Star size={13} className="fill-current" />
              {t("badge")}
            </span>
            <h2 className="mt-4 font-heading text-3xl font-bold text-white sm:text-4xl">
              {t("title")}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-sky-100/85 sm:text-lg">
              {t("awardText")}
            </p>
            <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold-500 px-5 py-2.5 font-heading text-sm font-extrabold text-navy-900 shadow-[var(--shadow-glow-gold)]">
              <BadgeCheck size={17} />
              {t("badgeText")}
            </span>
          </div>
        </div>

        <Reveal className="mt-14">
          <h3 className="text-center font-heading text-xl font-bold text-gold-300">
            {t("eventPhotos")}
          </h3>
          <div className="mx-auto mt-6 max-w-5xl">
            <div
              className="grid w-full grid-cols-[1fr_1fr_0.96fr] grid-rows-[1.05fr_0.95fr] gap-4"
              style={{ aspectRatio: "3 / 2" }}
            >
              <AwardPhoto
                photo={awards.eventPhotos[2]}
                className="col-span-2 row-span-1"
                alt="VoltRide award ceremony"
              />
              <AwardPhoto
                photo={awards.eventPhotos[3]}
                className="col-start-3 row-span-2"
                alt="VoltRide showroom event photo 4"
              />
              <AwardPhoto
                photo={awards.eventPhotos[0]}
                className="col-start-1 row-start-2"
                alt="VoltRide showroom event photo 1"
              />
              <AwardPhoto
                photo={awards.eventPhotos[1]}
                className="col-start-2 row-start-2"
                alt="VoltRide showroom event photo 2"
              />
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-10">
          <h3 className="flex items-center justify-center gap-2 text-center font-heading text-xl font-bold text-gold-300">
            <Newspaper size={20} />
            {t("newspaper")}
          </h3>
          <div className="mt-6 flex flex-wrap items-stretch justify-center gap-4">
            {awards.newspaperAds.map((ad, i) => (
              <div key={ad.src} className="w-40 sm:w-44">
                <div className="relative w-full overflow-hidden rounded-xl border border-white/10 bg-white">
                  <div className="relative" style={{ aspectRatio: `${ad.w} / ${ad.h}` }}>
                    <Image
                      src={ad.src}
                      alt={`EV showroom newspaper ad ${i + 1} for VoltRide E-Bikes`}
                      fill
                      sizes="176px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function AwardPhoto({
  photo,
  className = "",
  alt,
}: {
  photo: { src: string; w: number; h: number };
  className?: string;
  alt: string;
}) {
  return (
    <div
      className={`group relative min-h-0 min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-navy-800 ${className}`}
    >
      <Image
        src={photo.src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 65vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
  );
}
