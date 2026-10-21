import { setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { AreaPageTemplate } from "@/components/sections/areas/AreaPageTemplate";

type Props = { params: Promise<{ locale: string }> };

export default async function BhavnagarPage({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  const title =
    locale === "gu" ? "ભાવનગરમાં ઈ-બાઈક શોરૂમ" : "E-Bike Showroom in Bhavnagar";
  const subtitle =
    locale === "gu"
      ? "ભાવનગરમાં વોલ્ટરાઇડ ઈ-બાઈક્સ શોરૂમ — 60–110 કિમી રેન્જ મોડેલ, મફત ટેસ્ટ રાઇડ, 0% ડાઉન પેમેન્ટ EMI અને આફ્ટર-સેલ્સ સર્વિસ."
      : "VoltRide E-Bikes showroom in Bhavnagar — 60–110 km range models, free test ride, 0% down payment EMI and after-sales service.";

  return (
    <AreaPageTemplate
      locale={locale}
      areaKey="bhavnagar"
      title={title}
      subtitle={subtitle}
      keywords="E-Bike Showroom Bhavnagar | ભાવનગર ઈ-બાઈક શોરૂમ"
    />
  );
}
