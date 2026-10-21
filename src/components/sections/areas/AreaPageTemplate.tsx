import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { WhatsAppButton } from "@/components/ui/Button";
import { projects, testimonials } from "@/lib/calculator";
import Image from "next/image";

export async function AreaPageTemplate({
  locale,
  areaKey,
  title,
  subtitle,
  keywords,
}: {
  locale: string;
  areaKey: "talaja" | "bhavnagar";
  title: string;
  subtitle: string;
  keywords: string;
}) {
  const t = await getTranslations({ locale, namespace: "Gallery" });
  const areas = await getTranslations({ locale, namespace: "Areas" });
  const cta = await getTranslations({ locale, namespace: "Cta" });

  const areaProjects = projects.filter((p) =>
    areaKey === "talaja" ? p.region === "Talaja" : p.region === "Bhavnagar"
  );
  const areaReviews = testimonials.filter((r) =>
    areaKey === "talaja" ? r.area === "Talaja" : r.area !== "Talaja"
  );

  return (
    <>
      <PageHero
        badge={keywords}
        title={title}
        subtitle={subtitle}
        ctaLabel={cta("quote")}
        ctaHref="#contact"
      />

      <section className="solar-grid-bg section-pad">
        <Container>
          <SectionHeading
            badge={areas(areaKey)}
            title={t("title")}
            subtitle={t("subtitle")}
          />
          <div className="mt-10 columns-2 gap-5 lg:columns-3 [&>*]:mb-5">
            {areaProjects.map((p, i) => {
              const modelName = locale === "gu" ? p.modelGu : p.model;
              return (
                <Reveal key={p.id} delay={i * 0.05} className="break-inside-avoid">
                  <div className="card overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-glow-gold)]">
                    <div className="relative w-full bg-gradient-to-b from-sky-100 to-white">
                      <div className="relative" style={{ aspectRatio: `${p.w} / ${p.h}` }}>
                        <Image
                          src={p.image}
                          alt={`${p.area} VoltRide ${p.model} delivery`}
                          fill
                          sizes="(max-width: 640px) 100vw, 33vw"
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="font-heading text-sm font-bold text-navy-900">
                        {locale === "gu" ? p.areaGu : p.area} · {modelName}
                      </p>
                      <p className="mt-0.5 text-xs text-ink/55">
                        {p.month} {p.year} · {p.rangeKm} km range
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="section-pad bg-white">
        <Container>
          <SectionHeading badge={t("badge")} title={t("title")} />
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {areaReviews.map((r, i) => (
              <Reveal key={r.id} delay={i * 0.06}>
                <div className="card h-full p-5">
                  <div className="flex gap-1">
                    {Array.from({ length: r.stars }).map((_, s) => (
                      <Star key={s} />
                    ))}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ink/75">
                    {locale === "gu" ? r.textGu : r.text}
                  </p>
                  <p className="mt-3 text-xs font-semibold text-ink/50">
                    {r.initials} · {locale === "gu" ? r.areaGu : r.area} · {r.model}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="contact" className="solar-grid-bg section-pad">
        <Container className="text-center">
          <h2 className="font-heading text-2xl font-extrabold text-navy-900 sm:text-3xl">
            {title}
          </h2>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <WhatsAppButton />
          </div>
        </Container>
      </section>
    </>
  );
}

function Star() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="#F9B417" aria-hidden>
      <path d="M12 2l2.9 6.3 6.9.9-5 4.7 1.2 6.8L12 17.8 5.9 20.7 7.1 13.9 2.1 9.2l6.9-.9L12 2z" />
    </svg>
  );
}
