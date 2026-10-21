import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { PageHero } from "@/components/ui/PageHero";
import PackagesSection from "@/components/sections/home/Packages";

type Props = { params: Promise<{ locale: string }> };

export default async function PackagesPage({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Packages" });
  const cta = await getTranslations({ locale, namespace: "Cta" });

  return (
    <>
      <PageHero
        badge={t("badge")}
        title={t("title")}
        subtitle={t("subtitle")}
        ctaLabel={cta("quote")}
        ctaHref="#contact"
      />
      <PackagesSection />
    </>
  );
}