"use client";

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { Phone, MessageCircle, Target, Eye } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { siteConfig, whatsappLink, telLink } from "@/lib/siteConfig";

export default function About() {
  const t = useTranslations("About");
  const locale = useLocale();
  const values = t.raw("values") as string[];

  return (
    <section id="about" className="solar-grid-bg section-pad">
      <Container>
        <SectionHeading badge={t("badge")} title={t("title")} />

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="overflow-hidden rounded-[28px] bg-gradient-to-b from-sky-100 to-white shadow-[var(--shadow-card-lg)]">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src="/images/about/about-showroom.svg"
                    alt="VoltRide E-Bikes showroom interior in Bhavnagar"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain p-2"
                    priority
                  />
                </div>
              </div>
              <div className="glass absolute -bottom-5 -right-3 rounded-2xl px-5 py-3 shadow-[var(--shadow-card-soft)] sm:-right-5">
                <p className="font-heading text-2xl font-extrabold text-navy-900">
                  500+
                </p>
                <p className="text-xs font-semibold text-ink/60">Deliveries</p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <h3 className="font-heading text-2xl font-bold text-navy-900">
                {t("storyTitle")}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-ink/70">{t("story")}</p>
            </Reveal>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Reveal delay={0.05}>
                <div className="card h-full p-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-500/15 text-gold-500">
                    <Target size={20} />
                  </span>
                  <h4 className="mt-3 font-heading text-sm font-bold text-navy-900">
                    {t("missionTitle")}
                  </h4>
                  <p className="mt-1 text-sm text-ink/65">{t("mission")}</p>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="card h-full p-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500/15 text-green-600">
                    <Eye size={20} />
                  </span>
                  <h4 className="mt-3 font-heading text-sm font-bold text-navy-900">
                    {t("visionTitle")}
                  </h4>
                  <p className="mt-1 text-sm text-ink/65">{t("vision")}</p>
                </div>
              </Reveal>
            </div>
            <Reveal className="mt-6">
              <div className="flex flex-wrap gap-2">
                {values.map((v) => (
                  <span
                    key={v}
                    className="rounded-full bg-navy-700/10 px-4 py-2 font-heading text-sm font-bold text-navy-700"
                  >
                    {v}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal className="mt-16">
          <h3 className="text-center font-heading text-2xl font-bold text-navy-900">
            {t("foundersTitle")}
          </h3>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <FounderCard
              name={locale === "gu" ? siteConfig.founder.nameGu : siteConfig.founder.name}
              role={locale === "gu" ? siteConfig.founder.roleGu : siteConfig.founder.role}
              bio={t("founder1Bio")}
              phone={siteConfig.phone1}
              call={t("call")}
              whatsapp={t("whatsapp")}
              image="/images/founders/founder.svg"
            />
            <FounderCard
              name={locale === "gu" ? siteConfig.coFounder.nameGu : siteConfig.coFounder.name}
              role={locale === "gu" ? siteConfig.coFounder.roleGu : siteConfig.coFounder.role}
              bio={t("founder2Bio")}
              phone={siteConfig.phone2}
              call={t("call")}
              whatsapp={t("whatsapp")}
              image="/images/founders/co-founder.svg"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function FounderCard({
  name,
  role,
  bio,
  phone,
  call,
  whatsapp,
  image,
}: {
  name: string;
  role: string;
  bio: string;
  phone: string;
  call: string;
  whatsapp: string;
  image: string;
}) {
  return (
    <div className="card group flex h-full flex-col items-center p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-glow-gold)]">
      <div className="relative">
        <div className="animate-[ray-rotate_18s_linear_infinite] absolute -inset-2 rounded-full border border-dashed border-gold-500/40" />
        <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-gold-400/50 shadow-[var(--shadow-glow-gold)]">
          <Image
            src={image}
            alt={name}
            fill
            sizes="128px"
            className="object-cover"
          />
        </div>
      </div>
      <h4 className="mt-4 font-heading text-lg font-bold text-navy-900">{name}</h4>
      <p className="text-sm font-semibold text-gold-500">{role}</p>
      <p className="mt-2 max-w-xs text-sm text-ink/65">{bio}</p>
      <div className="mt-4 flex gap-2">
        <a
          href={telLink(phone)}
          className="inline-flex items-center gap-1.5 rounded-full bg-green-600 px-4 py-2 text-xs font-bold text-white transition-transform hover:scale-105"
        >
          <Phone size={14} />
          {call}
        </a>
        <a
          href={whatsappLink("Hello VoltRide E-Bikes, I want to book a test ride.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-[#25D366] px-4 py-2 text-xs font-bold text-white transition-transform hover:scale-105"
        >
          <MessageCircle size={14} />
          {whatsapp}
        </a>
      </div>
    </div>
  );
}
