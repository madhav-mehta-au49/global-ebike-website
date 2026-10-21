import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import AboutSection from "@/components/sections/home/About";

type Props = { params: Promise<{ locale: string }> };

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "About" });
  const cta = await getTranslations({ locale, namespace: "Cta" });

  return (
    <>
      <PageHero
        badge={t("badge")}
        title={t("title")}
        ctaLabel={cta("quote")}
        ctaHref="#contact"
        image="/images/about/about-showroom.svg"
      />
      <AboutSection />
      <section id="contact" className="solar-grid-bg section-pad">
        <Container>
          <SectionHeading badge={t("badge")} title={t("title")} />
          <div className="mt-8 text-center">
            <a href="#contact" className="btn-gold">
              {cta("quote")}
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}