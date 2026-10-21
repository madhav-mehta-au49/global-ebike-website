"use client";

import { useTranslations } from "next-intl";
import { Sun } from "@/components/animations/Sun";
import { Photons } from "@/components/animations/Photons";
import { Button, WhatsAppButton } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig, telLink } from "@/lib/siteConfig";

export default function FinalCta() {
  const t = useTranslations("Cta");

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-900 via-navy-700 to-[#7a4a12] py-20">
      <div className="solar-dark-grid pointer-events-none absolute inset-0" />
      <Sun className="right-6 top-8 opacity-80" />
      <Photons count={8} />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-300 via-green-400 to-gold-300" />

      <Container className="relative text-center">
        <h2 className="mx-auto max-w-3xl font-heading text-3xl font-extrabold text-white text-balance sm:text-4xl lg:text-5xl">
          {t("title")}
        </h2>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button href={telLink(siteConfig.phone1)} variant="gold">
            {t("call")}
          </Button>
          <WhatsAppButton />
          <Button href="#contact" variant="ghost-light">
            {t("quote")}
          </Button>
        </div>
      </Container>
    </section>
  );
}