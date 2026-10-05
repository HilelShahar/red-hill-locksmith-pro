import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import TrustBar from "@/components/site/TrustBar";
import Brands from "@/components/site/Brands";
import Services from "@/components/site/Services";
import Process from "@/components/site/Process";
import ServiceAreas from "@/components/site/ServiceAreas";
import Reviews from "@/components/site/Reviews";
import FAQ from "@/components/site/FAQ";
import ContactSection from "@/components/site/ContactSection";
import Footer from "@/components/site/Footer";
import MobileCallBar from "@/components/site/MobileCallBar";

const HERO_IMAGE = "/images/hero.jpg";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero heroImage={HERO_IMAGE} />
        <TrustBar />
        <Services />
        <Brands />
        <Process />
        <ServiceAreas />
        <Reviews />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
      <MobileCallBar />
      {/* Spacer so the fixed mobile bar doesn't cover footer content */}
      <div className="h-14 sm:hidden" aria-hidden="true" />
    </div>
  );
}