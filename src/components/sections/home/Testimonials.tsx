"use client";

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { testimonials } from "@/lib/calculator";

export default function Testimonials() {
  const t = useTranslations("Testimonials");
  const locale = useLocale();

  return (
    <section id="reviews" className="relative overflow-hidden bg-navy-900 py-20">
      <div className="absolute inset-0 opacity-25">
        <Image
          src="/images/projects/bike-2.svg"
          alt=""
          fill
          sizes="100vw"
          className="scale-110 object-cover blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071440]/90 via-[#0B1F5C]/80 to-[#071440]/90" />
      </div>

      <Container className="relative">
        <SectionHeading badge={t("badge")} title={t("title")} dark />

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((r, i) => (
            <Reveal key={r.id} delay={i * 0.08}>
              <div className="glass-dark h-full rounded-[24px] p-6 transition-transform duration-300 hover:-translate-y-1">
                <div className="flex gap-1">
                  {Array.from({ length: r.stars }).map((_, s) => (
                    <Star key={s} size={15} className="fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-sky-100/90">
                  <Quote size={14} className="mr-1 inline text-gold-300" />
                  {locale === "gu" ? r.textGu : r.text}
                </p>
                <div className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-500 font-heading text-xs font-extrabold text-navy-900">
                    {r.initials}
                  </span>
                  <div>
                    <p className="font-heading text-sm font-bold text-white">{r.initials}</p>
                    <p className="text-xs text-sky-100/60">
                      {locale === "gu" ? r.areaGu : r.area} · {r.model}{" "}
                      {t("systemLabel").toLowerCase()}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 text-center">
          <div className="glass-dark inline-flex items-center gap-3 rounded-full px-6 py-3">
            <span className="font-heading text-2xl font-extrabold text-gold-300">4.9</span>
            <span className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} size={16} className="fill-gold-400 text-gold-400" />
              ))}
            </span>
            <span className="text-sm text-sky-100/75">{t("ratingLabel")}</span>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
