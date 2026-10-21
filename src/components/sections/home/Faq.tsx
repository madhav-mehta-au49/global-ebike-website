"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { cn } from "@/lib/utils";

type FaqItem = { q: string; a: string; qGu: string; aGu: string };
import faqData from "@/content/faq.json";

export default function Faq() {
  const t = useTranslations("Faq");
  const locale = useLocale();
  const [open, setOpen] = useState<number | null>(0);
  const items = faqData.faq as FaqItem[];

  return (
    <section id="faq" className="solar-grid-bg section-pad">
      <Container>
        <SectionHeading badge={t("badge")} title={t("title")} subtitle={t("subtitle")} />

        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={i * 0.04}>
                <div
                  className={cn(
                    "card overflow-hidden transition-shadow",
                    isOpen && "shadow-[var(--shadow-glow-gold)]"
                  )}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-heading text-sm font-bold text-navy-900 sm:text-base">
                      {locale === "gu" ? item.qGu : item.q}
                    </span>
                    <ChevronDown
                      size={20}
                      className={cn(
                        "shrink-0 text-gold-500 transition-transform",
                        isOpen && "rotate-180"
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "grid transition-all duration-300",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="border-t border-sky-200 px-5 py-4 text-sm leading-relaxed text-ink/70">
                        {locale === "gu" ? item.aGu : item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}