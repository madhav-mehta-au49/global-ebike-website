"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Check, FileText } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { EnergyWave } from "@/components/animations/EnergyWave";
import { models, inr, type BikeModel } from "@/lib/calculator";
import { whatsappLink, siteConfig } from "@/lib/siteConfig";

export default function Packages() {
  const t = useTranslations("Packages");
  const locale = useLocale();
  const notes = t.raw("notes") as string[];
  const payment = t.raw("paymentTerms") as string[];
  const docs = t.raw("docs") as string[];

  const modelName = (m: BikeModel) => (locale === "gu" ? m.nameGu : m.name);
  const tagLabel = (m: BikeModel) =>
    m.tag ? (locale === "gu" ? m.tagGu ?? m.tag : m.tag) : null;

  return (
    <section id="packages" className="solar-grid-bg section-pad bg-white">
      <Container>
        <SectionHeading badge={t("badge")} title={t("title")} subtitle={t("subtitle")} />

        {/* Desktop table */}
        <Reveal className="mt-12">
          <div className="hidden overflow-hidden rounded-[28px] border border-sky-200 bg-white shadow-[var(--shadow-card-soft)] md:block">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-navy-900 text-white">
                  <th className="px-5 py-4 font-heading text-sm font-bold">{t("colModel")}</th>
                  <th className="px-5 py-4 font-heading text-sm font-bold">{t("colRange")}</th>
                  <th className="px-5 py-4 font-heading text-sm font-bold">{t("colBattery")}</th>
                  <th className="px-5 py-4 font-heading text-sm font-bold">{t("colPrice")}</th>
                  <th className="px-5 py-4 font-heading text-sm font-bold">{t("colOffer")}</th>
                  <th className="px-5 py-4" />
                </tr>
              </thead>
              <tbody>
                {models.map((m, i) => {
                  const highlighted = m.tag !== null;
                  return (
                    <tr
                      key={m.id}
                      className={
                        highlighted
                          ? "bg-gold-500/10 border-y-2 border-gold-500/60"
                          : i % 2
                            ? "bg-sky-100/40"
                            : "bg-white"
                      }
                    >
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <div className="relative h-12 w-16 shrink-0 overflow-hidden rounded-xl bg-sky-100/60">
                            <Image
                              src={m.image}
                              alt={m.name}
                              fill
                              sizes="64px"
                              className="object-contain p-1"
                            />
                          </div>
                          <div>
                            <span className="font-heading text-base font-extrabold text-navy-900">
                              {modelName(m)}
                            </span>
                            <span className="mt-0.5 block text-[11px] font-semibold uppercase tracking-wide text-ink/45">
                              {m.category}
                            </span>
                            {tagLabel(m) && (
                              <span className="mt-1 inline-block rounded-full bg-gold-500 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-navy-900">
                                ★ {tagLabel(m)}
                              </span>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-4 text-sm font-semibold text-ink/75">
                        {m.rangeKm} km
                      </td>
                      <td className="px-5 py-4 text-sm font-medium text-ink/75">
                        {m.battery}
                      </td>
                      <td className="px-5 py-4">
                        <span className="text-base font-bold text-ink/80 line-through decoration-red-400/60">
                          {inr(m.price)}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <span className="font-heading text-xl font-extrabold text-green-600">
                          {inr(m.offerPrice)}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-right">
                        <a
                          href={whatsappLink(
                            `Hello VoltRide E-Bikes, I want to book a test ride for the ${m.name} (${m.rangeKm} km range).`
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-gold !px-4 !py-2 !text-xs"
                        >
                          {t("cta")}
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="border-t border-sky-200 bg-navy-900/5 px-6 py-3">
              <EnergyWave />
            </div>
          </div>
        </Reveal>

        {/* Mobile cards */}
        <div className="mt-10 space-y-4 md:hidden">
          {models.map((m) => (
            <Reveal key={m.id}>
              <div
                className={`card relative overflow-hidden p-5 ${
                  m.tag ? "border-2 border-gold-500/70 shadow-[var(--shadow-glow-gold)]" : ""
                }`}
              >
                {tagLabel(m) && (
                  <span className="absolute right-0 top-0 rounded-bl-2xl bg-gold-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-navy-900">
                    ★ {tagLabel(m)}
                  </span>
                )}
                <div className="flex items-center gap-3">
                  <div className="relative h-14 w-20 shrink-0 overflow-hidden rounded-xl bg-sky-100/60">
                    <Image
                      src={m.image}
                      alt={m.name}
                      fill
                      sizes="80px"
                      className="object-contain p-1"
                    />
                  </div>
                  <div>
                    <span className="font-heading text-xl font-extrabold text-navy-900">
                      {modelName(m)}
                    </span>
                    <span className="mt-0.5 block text-[11px] font-semibold uppercase tracking-wide text-ink/45">
                      {m.category} · {m.battery}
                    </span>
                  </div>
                </div>
                <div className="mt-3 flex items-end justify-between rounded-2xl bg-sky-100/60 p-3">
                  <div>
                    <p className="text-[11px] font-semibold text-ink/50">{t("colPrice")}</p>
                    <p className="text-sm font-bold text-ink/70 line-through">{inr(m.price)}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[11px] font-semibold text-green-600">{t("colOffer")}</p>
                    <p className="font-heading text-xl font-extrabold text-green-600">
                      {inr(m.offerPrice)}
                    </p>
                  </div>
                </div>
                <div className="mt-2 flex items-center justify-between text-xs font-semibold text-ink/55">
                  <span>{m.rangeKm} km range</span>
                  <span>{m.motor}</span>
                </div>
                <a
                  href={whatsappLink(
                    `Hello VoltRide E-Bikes, I want to book a test ride for the ${m.name} (${m.rangeKm} km range).`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold mt-3 w-full !py-2.5 !text-xs"
                >
                  {t("cta")}
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Notes */}
        <Reveal className="mt-8">
          <div className="rounded-2xl border border-sky-200 bg-sky-100/50 p-5">
            <ul className="grid gap-2 text-sm text-ink/70 sm:grid-cols-2">
              {notes.map((n) => (
                <li key={n} className="flex items-start gap-2">
                  <Check size={16} className="mt-0.5 shrink-0 text-green-600" />
                  {n}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs font-semibold text-ink/50">
              {t("lastUpdated")}: {siteConfig.pricesLastUpdated}
            </p>
          </div>
        </Reveal>

        {/* Payment + Docs */}
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <Reveal>
            <div className="card h-full p-6">
              <h3 className="font-heading text-base font-bold text-navy-900">
                {t("paymentTitle")}
              </h3>
              <ol className="mt-4 space-y-3">
                {payment.map((step, i) => (
                  <li key={step} className="flex items-center gap-3 text-sm text-ink/75">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy-700 text-xs font-bold text-white">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card h-full p-6">
              <h3 className="flex items-center gap-2 font-heading text-base font-bold text-navy-900">
                <FileText size={18} className="text-gold-500" />
                {t("docsTitle")}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {docs.map((d) => (
                  <span
                    key={d}
                    className="rounded-full bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-700"
                  >
                    {d}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-xs text-ink/50">{t("structureNote")}</p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
