"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Phone, MapPin, Clock, Sun, Bike } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { siteConfig, telLink } from "@/lib/siteConfig";

export default function Footer() {
  const t = useTranslations("Footer");
  const locale = useLocale();
  const isEn = locale === "en";

  const quick = [
    { href: "/#packages", label: isEn ? "Models" : "મોડેલ" },
    { href: "/#subsidy", label: isEn ? "Offers" : "ઓફર" },
    { href: "/#calculator", label: isEn ? "Calculator" : "કેલ્ક્યુલેટર" },
    { href: "/#projects", label: isEn ? "Gallery" : "ગેલેરી" },
    { href: "/#contact", label: isEn ? "Contact" : "સંપર્ક" },
  ];

  const areas = useTranslations("Areas");
  const places = areas.raw("places") as string[];

  return (
    <footer className="relative overflow-hidden bg-navy-900 pb-24 text-white md:pb-0">
      <div className="pointer-events-none absolute inset-0 solar-dark-grid" aria-hidden />
      {stars.map((s, i) => (
        <span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-gold-300"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            opacity: 0.6,
            animation: `twinkle ${2 + (i % 3)}s ease-in-out ${i * 0.3}s infinite`,
          }}
        />
      ))}
      <div className="pointer-events-none absolute -bottom-10 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full border border-gold-500/15 bg-gradient-to-t from-gold-500/10 to-transparent" aria-hidden>
        <div className="absolute bottom-0 left-1/2 flex h-10 w-24 -translate-x-1/2 items-end justify-center rounded-t-full border-x-2 border-t-2 border-gold-400/30 bg-gradient-to-t from-navy-900 to-gold-500/20">
          <Sun size={20} className="text-gold-300" />
        </div>
      </div>

      <div className="container-px relative pt-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl shadow-[var(--shadow-glow-gold)]">
                <Image
                  src="/images/logo/logo.svg"
                  alt="VoltRide E-Bikes logo"
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain"
                />
              </span>
              <span className="font-heading text-lg font-extrabold text-white">
                VoltRide <span className="text-gold-400">EV</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-sky-100/70">
              {t("about")}
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-gold-500 hover:text-navy-900"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-gold-500 hover:text-navy-900"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-gold-500 hover:text-navy-900"
                aria-label="YouTube"
              >
                <YoutubeIcon />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-widest text-gold-300">
              {t("quickLinks")}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {quick.map((q) => (
                <li key={q.href}>
                  <Link href={q.href} className="text-sm text-sky-100/75 transition-colors hover:text-gold-300">
                    {q.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-widest text-gold-300">
              {t("contact")}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-sky-100/75">
              <li>
                <a href={telLink(siteConfig.phone1)} className="flex items-start gap-2 hover:text-gold-300">
                  <Phone size={16} className="mt-0.5 shrink-0 text-gold-400" />
                  {locale === "gu" ? siteConfig.founder.nameGu : siteConfig.founder.name}: {siteConfig.phone1}
                </a>
              </li>
              <li>
                <a href={telLink(siteConfig.phone2)} className="flex items-start gap-2 hover:text-gold-300">
                  <Phone size={16} className="mt-0.5 shrink-0 text-gold-400" />
                  {locale === "gu" ? siteConfig.coFounder.nameGu : siteConfig.coFounder.name}: {siteConfig.phone2}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold-400" />
                <span className="leading-relaxed">
                  {locale === "gu" ? siteConfig.addressGu : siteConfig.address}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={16} className="mt-0.5 shrink-0 text-gold-400" />
                <span>{locale === "gu" ? siteConfig.workingHoursGu : siteConfig.workingHours}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-widest text-gold-300">
              {t("areas")}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {places.map((p) => (
                <span
                  key={p}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-sky-100/80"
                >
                  <Bike size={13} className="text-gold-400" />
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-center text-xs text-sky-100/50 md:flex-row md:text-left">
          <p>
            © {siteConfig.copyrightYear} VoltRide E-Bikes. {t("rights")}
          </p>
          <p>
            Developed &amp; Maintained by{" "}
            <span className="font-semibold text-gold-300">Madhav Mehta</span> &amp;{" "}
            <span className="font-semibold text-gold-300">Kedar Bhatt</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

const stars = Array.from({ length: 24 }, (_, i) => ({
  left: (i * 41) % 100,
  top: (i * 29) % 60,
}));

function FacebookIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5h1.3V4.9c-.2 0-.9-.1-1.7-.1-1.7 0-2.9 1-2.9 2.9V11H9.4v3h2.4v7h1.7z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8c1.6.4 7.8.4 7.8.4s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8zM10 15.2V8.8L15.5 12 10 15.2z" />
    </svg>
  );
}
