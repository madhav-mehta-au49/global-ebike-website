import { setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { AreaPageTemplate } from "@/components/sections/areas/AreaPageTemplate";

type Props = { params: Promise<{ locale: string }> };

export default async function TalajaPage({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  const title =
    locale === "gu" ? "તળાજામાં ઈ-બાઈક શોરૂમ" : "E-Bike Showroom in Talaja";
  const subtitle =
    locale === "gu"
      ? "તળાજામાં ઈલેક્ટ્રિક બાઈક શોરૂમ અને સર્વિસ — વોલ્ટરાઇડ ઈ-બાઈક્સ તરફથી ટેસ્ટ રાઇડ, સરળ ફાઇનાન્સ, એક્સચેન્જ બોનસ અને ઘરે સર્વિસ."
      : "Electric bike showroom and service in Talaja — test rides, easy finance, exchange bonus and doorstep service from VoltRide E-Bikes.";

  return (
    <AreaPageTemplate
      locale={locale}
      areaKey="talaja"
      title={title}
      subtitle={subtitle}
      keywords="E-Bike Showroom Talaja | તળાજા ઈ-બાઈક શોરૂમ"
    />
  );
}
