import Hero from "@/components/sections/hero/Hero";
import StatsBar from "@/components/sections/home/StatsBar";
import WhyUs from "@/components/sections/home/WhyUs";
import Packages from "@/components/sections/home/Packages";
import Bom from "@/components/sections/home/Bom";
import Warranty from "@/components/sections/home/Warranty";
import Services from "@/components/sections/home/Services";
import Subsidy from "@/components/sections/home/Subsidy";
import Calculator from "@/components/sections/home/Calculator";
import Loan from "@/components/sections/home/Loan";
import HowItWorks from "@/components/sections/home/HowItWorks";
import Gallery from "@/components/sections/home/Gallery";
import Awards from "@/components/sections/home/Awards";
import Testimonials from "@/components/sections/home/Testimonials";
import About from "@/components/sections/home/About";
import ServiceAreas from "@/components/sections/home/ServiceAreas";
import Faq from "@/components/sections/home/Faq";
import Contact from "@/components/sections/home/Contact";
import FinalCta from "@/components/sections/home/FinalCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <WhyUs />
      <Packages />
      <Bom />
      <Warranty />
      <Services />
      <Subsidy />
      <Calculator />
      <Loan />
      <HowItWorks />
      <Gallery />
      <Awards />
      <Testimonials />
      <About />
      <ServiceAreas />
      <Faq />
      <Contact />
      <FinalCta />
    </>
  );
}