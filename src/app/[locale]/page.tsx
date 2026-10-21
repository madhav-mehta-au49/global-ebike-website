import { setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Ticker from "@/components/layout/Ticker";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/layout/FloatingActions";
import HomeSections from "@/components/sections/home/HomeSections";
import { faqSchema } from "@/lib/seo";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(locale)) }}
      />
      <Ticker />
      <Navbar />
      <main className="flex-1">
        <HomeSections />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}