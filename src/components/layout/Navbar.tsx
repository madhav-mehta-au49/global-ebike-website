"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Menu, X, Globe, Phone } from "lucide-react";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { siteConfig, telLink } from "@/lib/siteConfig";

export default function Navbar() {
  const t = useTranslations("Nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const nextLocale = locale === "gu" ? "en" : "gu";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/", key: "home" },
    { href: "/#about", key: "about" },
    { href: "/#packages", key: "packages" },
    { href: "/#services", key: "services" },
    { href: "/#subsidy", key: "subsidy" },
    { href: "/#calculator", key: "calculator" },
    { href: "/#projects", key: "projects" },
    { href: "/#awards", key: "awards" },
    { href: "/#reviews", key: "reviews" },
    { href: "/#contact", key: "contact" },
  ];

  const toggleLocale = () => {
    const stripped = pathname.replace(/^\/(gu|en)/, "") || "/";
    router.replace(stripped, { locale: nextLocale });
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled ? "glass shadow-[var(--shadow-card-soft)]" : "bg-white/60 backdrop-blur-md"
      )}
    >
      <nav className="container-px flex h-16 items-center justify-between gap-4 lg:h-[72px]">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl shadow-[var(--shadow-glow-gold)]">
            <Image
              src="/images/logo/logo.svg"
              alt="VoltRide E-Bikes logo"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />
          </span>
          <span className="leading-tight">
            <span className="block font-heading text-[15px] font-extrabold text-navy-900">
              VoltRide <span className="text-gold-500">EV</span>
            </span>
            <span className="block text-[10px] font-medium uppercase tracking-wider text-ink/60">
              {locale === "gu" ? "ઈ-બાઈક શોરૂમ" : "Electric Bikes"}
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.key}
              href={l.href}
              className="rounded-full px-3 py-2 font-heading text-[13px] font-semibold text-ink/80 transition-colors hover:bg-navy-700/5 hover:text-navy-900"
            >
              {t(l.key)}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <button
            onClick={toggleLocale}
            className="inline-flex min-h-[48px] items-center gap-1.5 rounded-full border border-navy-700/20 px-4 font-heading text-xs font-bold text-navy-700 transition-colors hover:bg-navy-700/5"
          >
            <Globe size={14} />
            {t("langToggle")}
          </button>
          <Link href="/#contact" className="btn-gold !px-5 !py-2.5 !text-[13px]">
            {t("freeSiteVisit")}
          </Link>
        </div>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-navy-700/15 text-navy-900 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="glass border-t border-white/40 lg:hidden">
          <div className="container-px flex flex-col gap-1 py-4">
            {links.map((l) => (
              <Link
                key={l.key}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 font-heading text-sm font-semibold text-navy-900 hover:bg-navy-700/5"
              >
                {t(l.key)}
              </Link>
            ))}
            <div className="mt-2 flex items-center gap-2">
              <button
                onClick={toggleLocale}
                className="inline-flex min-h-[48px] flex-1 items-center justify-center gap-1.5 rounded-full border border-navy-700/20 font-heading text-sm font-bold text-navy-700"
              >
                <Globe size={15} />
                {t("langToggle")}
              </button>
              <a
                href={telLink(siteConfig.phone1)}
                className="inline-flex min-h-[48px] flex-1 items-center justify-center gap-1.5 rounded-full border border-green-600 font-heading text-sm font-bold text-green-600"
              >
                <Phone size={15} />
                Call
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
