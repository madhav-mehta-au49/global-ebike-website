"use client";

import { MessageCircle, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import { whatsappLink, telLink, siteConfig } from "@/lib/siteConfig";

export default function FloatingActions() {
  const t = useTranslations("MobileBar");

  return (
    <>
      <div className="fixed bottom-6 right-5 z-40 hidden flex-col gap-3 md:flex">
        <a
          href={telLink(siteConfig.phone1)}
          aria-label="Call VoltRide E-Bikes"
          className="flex h-13 w-13 items-center justify-center rounded-full bg-green-600 text-white shadow-[var(--shadow-glow-green)] transition-transform hover:scale-105"
          style={{ width: 52, height: 52 }}
        >
          <Phone size={22} />
        </a>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp VoltRide E-Bikes"
          className="flex items-center justify-center rounded-full bg-[#25D366] text-white shadow-[var(--shadow-glow-green)] transition-transform hover:scale-105 animate-[glow-pulse_2.4s_ease-in-out_infinite]"
          style={{ width: 60, height: 60 }}
        >
          <MessageCircle size={26} />
        </a>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/40 bg-white/95 backdrop-blur-md md:hidden">
        <div className="grid grid-cols-3">
          <a
            href={telLink(siteConfig.phone1)}
            className="flex min-h-[56px] flex-col items-center justify-center gap-0.5 border-r border-navy-700/10 text-navy-700"
          >
            <Phone size={18} />
            <span className="text-[11px] font-bold">{t("call")}</span>
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[56px] flex-col items-center justify-center gap-0.5 border-r border-navy-700/10 text-[#128C7E]"
          >
            <MessageCircle size={18} />
            <span className="text-[11px] font-bold">{t("whatsapp")}</span>
          </a>
          <a
            href="#contact"
            className="flex min-h-[56px] flex-col items-center justify-center gap-0.5 bg-gradient-to-r from-gold-300 to-gold-500 text-navy-900"
          >
            <span className="text-[11px] font-extrabold">{t("quote")}</span>
            <span className="text-[9px] font-medium">Free</span>
          </a>
        </div>
      </div>
    </>
  );
}
