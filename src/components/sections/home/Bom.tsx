"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { materials } from "@/lib/calculator";
import { whatsappLink } from "@/lib/siteConfig";

export default function Bom() {
  const t = useTranslations("Bom");
  const brands = ["LG", "Bosch", "MRF"];

  return (
    <section id="bom" className="solar-grid-bg section-pad">
      <Container>
        <SectionHeading badge={t("badge")} title={t("title")} subtitle={t("subtitle")} />

        <Reveal className="mt-12">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {materials.map((m) => (
              <div
                key={m.id}
                className="group card overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-glow-gold)]"
              >
                <div className="relative h-36 overflow-hidden bg-gradient-to-b from-sky-100 to-white p-2 sm:h-40">
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 22vw"
                    className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="solar-shine-overlay pointer-events-none absolute inset-0" />
                </div>
                <div className="p-4">
                  <h3 className="font-heading text-sm font-bold text-navy-900">{m.name}</h3>
                  <p className="mt-1 text-xs font-medium text-green-700">{m.brand}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-8">
          <div className="flex flex-col items-center justify-between gap-4 rounded-3xl bg-navy-900 px-6 py-5 text-white md:flex-row">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-gold-300">
                {t("trustedBrands")}:
              </span>
              {brands.map((b) => (
                <span
                  key={b}
                  className="rounded-full bg-white/10 px-4 py-2 font-heading text-sm font-bold text-white"
                >
                  {b}
                </span>
              ))}
            </div>
            <a
              href={whatsappLink("Hello VoltRide E-Bikes, please send me the full specifications and price list.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold !py-2.5 !text-xs"
            >
              {t("cta")}
            </a>
          </div>
        </Reveal>

        <style jsx>{`
          .solar-shine-overlay {
            background: linear-gradient(
              105deg,
              transparent 40%,
              rgba(255, 255, 255, 0.25) 50%,
              transparent 60%
            );
            transform: translateX(-120%);
            transition: transform 0.9s ease;
          }
          .group:hover .solar-shine-overlay {
            transform: translateX(120%);
          }
        `}</style>
      </Container>
    </section>
  );
}
