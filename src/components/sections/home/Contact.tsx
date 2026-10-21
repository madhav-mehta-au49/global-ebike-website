"use client";

import { useLocale, useTranslations } from "next-intl";
import { Phone, MessageCircle, MapPin, Clock, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import QuoteLeadForm from "@/components/forms/QuoteLeadForm";
import { siteConfig, whatsappLink, telLink } from "@/lib/siteConfig";

export default function Contact() {
  const t = useTranslations("Contact");
  const locale = useLocale();

  return (
    <section id="contact" className="solar-grid-bg section-pad">
      <Container>
        <SectionHeading badge={t("badge")} title={t("title")} subtitle={t("subtitle")} />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <QuoteLeadForm variant="card" />
          </Reveal>

          <div className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <Reveal delay={0.05}>
                <ContactCard
                  name={locale === "gu" ? siteConfig.founder.nameGu : siteConfig.founder.name}
                  role={locale === "gu" ? siteConfig.founder.roleGu : siteConfig.founder.role}
                  phone={siteConfig.phone1}
                  call={t("call")}
                  whatsapp={t("whatsapp")}
                />
              </Reveal>
              <Reveal delay={0.1}>
                <ContactCard
                  name={locale === "gu" ? siteConfig.coFounder.nameGu : siteConfig.coFounder.name}
                  role={locale === "gu" ? siteConfig.coFounder.roleGu : siteConfig.coFounder.role}
                  phone={siteConfig.phone2}
                  call={t("call")}
                  whatsapp={t("whatsapp")}
                />
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <div className="card p-5">
                <div className="flex items-start gap-3">
                  <Clock size={18} className="mt-0.5 text-gold-500" />
                  <p className="text-sm font-semibold text-navy-900">
                    {locale === "gu" ? siteConfig.workingHoursGu : siteConfig.workingHours}
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="card overflow-hidden">
                <div className="relative h-56 w-full">
                  <iframe
                    title="VoltRide E-Bikes Showroom - Sukhsagar Complex, Kaliyabid, Bhavnagar"
                    src={siteConfig.mapsEmbed}
                    className="absolute inset-0 h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
                <div className="p-5">
                  <p className="font-heading text-sm font-bold text-navy-900">{t("visitTitle")}</p>
                  <p className="mt-1 text-sm text-ink/65">
                    {locale === "gu" ? siteConfig.addressGu : siteConfig.address}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <a
                      href={siteConfig.mapsDirections}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-gold !py-2.5 !text-xs"
                    >
                      <MapPin size={15} />
                      {t("getDirections")}
                    </a>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="btn-green !py-2.5 !text-xs"
                    >
                      <Mail size={15} />
                      {siteConfig.email}
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ContactCard({
  name,
  role,
  phone,
  call,
  whatsapp,
}: {
  name: string;
  role: string;
  phone: string;
  call: string;
  whatsapp: string;
}) {
  return (
    <div className="card h-full p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-glow-gold)]">
      <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-gold-300 to-gold-500 text-navy-900">
        <Phone size={20} />
      </span>
      <p className="mt-3 font-heading text-sm font-bold text-navy-900">{name}</p>
      <p className="text-xs font-semibold text-gold-500">{role}</p>
      <p className="mt-2 font-heading text-base font-extrabold text-navy-900">{phone}</p>
      <div className="mt-3 flex justify-center gap-2">
        <a
          href={telLink(phone)}
          className="inline-flex items-center gap-1.5 rounded-full bg-green-600 px-3.5 py-2 text-xs font-bold text-white hover:scale-105"
        >
          <Phone size={13} />
          {call}
        </a>
        <a
          href={whatsappLink("Hello VoltRide E-Bikes, I want to book a test ride.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-[#25D366] px-3.5 py-2 text-xs font-bold text-white hover:scale-105"
        >
          <MessageCircle size={13} />
          {whatsapp}
        </a>
      </div>
    </div>
  );
}
