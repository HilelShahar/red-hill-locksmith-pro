import SiteLayout from "@/components/site/SiteLayout";
import Hero from "@/components/site/Hero";
import TrustBar from "@/components/site/TrustBar";
import Brands from "@/components/site/Brands";
import Services from "@/components/site/Services";
import Process from "@/components/site/Process";
import ServiceAreas from "@/components/site/ServiceAreas";
import Reviews from "@/components/site/Reviews";
import FAQ from "@/components/site/FAQ";
import ContactSection from "@/components/site/ContactSection";
import PageSeo from "@/components/site/PageSeo";
import { HERO_IMAGE } from "@/lib/site";
import { getPageMeta } from "@/lib/seo";
import { useMemo } from "react";

export default function Home() {
  const meta = useMemo(() => getPageMeta("/"), []);

  return (
    <SiteLayout>
      <PageSeo
        title={meta.title}
        description={meta.description}
        path={meta.path}
        jsonLd={meta.jsonLd}
      />
      <Hero heroImage={HERO_IMAGE} />
      <TrustBar />
      <Services />
      <Brands />
      <Process />
      <ServiceAreas />
      <Reviews />
      <FAQ />
      <ContactSection />
    </SiteLayout>
  );
}