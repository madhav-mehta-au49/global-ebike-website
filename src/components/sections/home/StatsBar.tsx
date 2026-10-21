"use client";

import { useTranslations } from "next-intl";
import { Counter } from "@/components/animations/Counter";
import { Reveal } from "@/components/animations/Reveal";
import { Container } from "@/components/ui/Container";

type StatItem = { value: number; suffix: string; label: string; prefix?: string };

export default function StatsBar() {
  const t = useTranslations("Stats");
  const items = t.raw("items") as StatItem[];

  return (
    <section className="relative -mt-6 z-20">
      <Container>
        <Reveal>
          <div className="glass grid grid-cols-2 gap-y-8 rounded-[28px] px-6 py-8 shadow-[var(--shadow-card-lg)] sm:grid-cols-3 lg:grid-cols-5">
            {items.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-heading text-3xl font-extrabold text-navy-900 sm:text-4xl">
                  <Counter
                    value={s.value}
                    prefix={s.prefix ?? ""}
                    suffix={s.suffix ?? ""}
                  />
                </div>
                <div className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-ink/60 sm:text-xs">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}