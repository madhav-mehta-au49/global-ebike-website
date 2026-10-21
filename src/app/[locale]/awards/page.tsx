import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { PageHero } from "@/components/ui/PageHero";
import AwardsSection from "@/components/sections/home/Awards";

type Props = { params: Promise<{ locale: string }> };

export default async function AwardsPage({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Awards" });
  const cta = await getTranslations({ locale, namespace: "Cta" });

  return (
    <>
      <PageHero
        badge={t("badge")}
        title={t("title")}
        ctaLabel={cta("quote")}
        ctaHref="#contact"
        image="/images/awards/events/award-ceremony.svg"
      />
      <AwardsSection />
    </>
  );
}