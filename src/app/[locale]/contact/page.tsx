import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { PageHero } from "@/components/ui/PageHero";
import ContactSection from "@/components/sections/home/Contact";
import FinalCta from "@/components/sections/home/FinalCta";

type Props = { params: Promise<{ locale: string }> };

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Contact" });
  const cta = await getTranslations({ locale, namespace: "Cta" });

  return (
    <>
      <PageHero
        badge={t("badge")}
        title={t("title")}
        subtitle={t("subtitle")}
        ctaLabel={cta("call")}
        ctaHref="tel:+919876543210"
      />
      <ContactSection />
      <FinalCta />
    </>
  );
}