import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Phone,
  Clock,
  MapPin,
  ShieldCheck,
  ArrowRight,
  Lock,
  KeyRound,
  Smartphone,
  Wrench,
  Car,
  Archive,
  ChevronDown,
} from "lucide-react";
import { Image } from "@/components/ui/image";
import SuburbPageHeader from "@/components/site/SuburbPageHeader";
import SuburbPageFooter from "@/components/site/SuburbPageFooter";
import TrustBar from "@/components/site/TrustBar";
import ContactSection from "@/components/site/ContactSection";
import MobileCallBar from "@/components/site/MobileCallBar";
import PageSeo from "@/components/site/PageSeo";
import PageNotFound from "@/lib/PageNotFound";
import { EMAIL, HERO_IMAGE, PHONE_DISPLAY, PHONE_TEL, SITE_URL } from "@/lib/site";
import { SUBURB_NAME_BY_SLUG, SUBURB_PAGES } from "@/data/suburbs";

const SERVICE_ICONS = {
  lockouts: Lock,
  "car-lockouts": Car,
  rekeying: KeyRound,
  replacement: Lock,
  repairs: Wrench,
  "smart-locks": Smartphone,
  safes: Archive,
};

function buildJsonLd(suburb) {
  const url = `${SITE_URL}/locksmith-${suburb.slug}`;
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "Locksmith",
      name: "Red Hill Security & Locksmith",
      url,
      telephone: PHONE_TEL,
      email: EMAIL,
      image: `${SITE_URL}${HERO_IMAGE}`,
      priceRange: "$$",
      areaServed: {
        "@type": "Place",
        name: `${suburb.name}, QLD ${suburb.postcode}`,
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Red Hill",
        addressRegion: "QLD",
        postalCode: "4059",
        addressCountry: "AU",
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `Mobile locksmith in ${suburb.name}`,
      serviceType: "Locksmith",
      url,
      areaServed: {
        "@type": "Place",
        name: `${suburb.name}, QLD ${suburb.postcode}`,
      },
      provider: {
        "@type": "Locksmith",
        name: "Red Hill Security & Locksmith",
        telephone: PHONE_TEL,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Red Hill",
          addressRegion: "QLD",
          postalCode: "4059",
          addressCountry: "AU",
        },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: suburb.h1,
          item: url,
        },
      ],
    },
  ];

  if (suburb.faqs?.length) {
    data.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: suburb.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    });
  }

  return data;
}

export default function SuburbLocksmithPage() {
  const { pathname } = useLocation();
  const slug = pathname.replace(/^\/locksmith-/, "").replace(/\/$/, "");
  const suburb = SUBURB_PAGES[slug];
  const jsonLd = useMemo(() => (suburb ? buildJsonLd(suburb) : []), [suburb]);

  if (!suburb) {
    return <PageNotFound />;
  }

  const path = `/locksmith-${suburb.slug}`;

  return (
    <div className="min-h-screen bg-background">
      <PageSeo
        title={suburb.title}
        description={suburb.description}
        path={path}
        jsonLd={jsonLd}
      />
      <SuburbPageHeader />
      <main>
        <section id="top" className="relative bg-foreground text-white">
          <div className="absolute inset-0">
            <Image
              src={HERO_IMAGE}
              alt="Inner Brisbane hillside suburbs looking toward the city skyline"
              className="h-full w-full object-cover"
              fittingType="fill"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/85 to-foreground/60" />
          </div>

          <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-20 lg:py-28">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
                <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                {suburb.heroEyebrow}
              </span>

              <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                {suburb.h1}
              </h1>

              <p className="mt-4 text-base leading-relaxed text-white/85 sm:text-lg">
                {suburb.heroLead}
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-lg transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-foreground"
                >
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  {suburb.primaryCta}
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-white/70 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-foreground"
                >
                  {suburb.secondaryCta}
                </a>
              </div>

              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/80">
                <li className="inline-flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-primary-foreground/90" aria-hidden="true" />
                  Experienced &amp; licensed
                </li>
                <li className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary-foreground/90" aria-hidden="true" />
                  Mobile service from Red Hill
                </li>
                <li className="inline-flex items-center gap-2">
                  <span className="font-semibold text-white">Call-outs from $35</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <TrustBar />

        <section className="scroll-mt-16">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              {suburb.name} {suburb.postcode}
            </p>
            <h2 className="mt-2 max-w-2xl text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {suburb.introHeading}
            </h2>
            <div className="mt-5 max-w-3xl space-y-4 text-base leading-relaxed text-muted-foreground">
              {suburb.intro.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
            <p className="mt-6 text-sm text-foreground">
              See all locksmith services on the{" "}
              <a href="/#services" className="font-semibold text-primary hover:underline">
                main services section
              </a>
              , or go straight to{" "}
              <a href="#contact" className="font-semibold text-primary hover:underline">
                the quote form
              </a>
              .
            </p>
          </div>
        </section>

        <section id="local-services" className="scroll-mt-16 bg-muted/40 border-y border-border">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">What we do</p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                {suburb.servicesHeading}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {suburb.servicesIntro}
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {suburb.services.map((service) => {
                const Icon = SERVICE_ICONS[service.id] || Lock;
                return (
                <article
                  key={service.id}
                  className="group flex flex-col rounded-xl border border-border bg-background p-6 transition hover:border-primary/40 hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.text}</p>
                  <a
                    href="#contact"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                  >
                    Request this service
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </article>
                );
              })}
            </div>
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
            <div className="grid gap-6 md:grid-cols-2">
              <article className="rounded-xl border border-border bg-background p-6 sm:p-8">
                <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                  {suburb.residentialHeading}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {suburb.residential}
                </p>
              </article>
              <article className="rounded-xl border border-border bg-background p-6 sm:p-8">
                <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                  {suburb.commercialHeading}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {suburb.commercial}
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-muted/40 border-y border-border">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {suburb.nearbyHeading}
            </h2>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted-foreground">
              {suburb.nearbyIntro}
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4">
              {suburb.nearby.map((nearbySlug) => {
                const name = SUBURB_NAME_BY_SLUG[nearbySlug];
                const hasPage = Boolean(SUBURB_PAGES[nearbySlug]);
                return (
                  <li key={nearbySlug}>
                    {hasPage ? (
                      <Link
                        to={`/locksmith-${nearbySlug}`}
                        className="inline-flex w-full items-center gap-2 rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm font-medium text-foreground hover:border-primary/40"
                      >
                        <MapPin className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                        {name}
                      </Link>
                    ) : (
                      <span className="inline-flex w-full items-center gap-2 rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm font-medium text-foreground">
                        <MapPin className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                        {name}
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
            <p className="mt-6 text-sm text-muted-foreground">
              Full coverage list is on the{" "}
              <a href="/#areas" className="font-semibold text-primary hover:underline">
                service areas
              </a>{" "}
              section of the homepage.
            </p>
          </div>
        </section>

        {suburb.faqs?.length > 0 && (
          <section className="scroll-mt-16">
            <div className="mx-auto max-w-3xl px-4 py-14 sm:py-20">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Questions before we come to {suburb.name}
              </h2>
              <div className="mt-8">
                {suburb.faqs.map((faq) => (
                  <details key={faq.q} className="group border-b border-border">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-left text-base font-semibold text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md [&::-webkit-details-marker]:hidden">
                      {faq.q}
                      <ChevronDown className="h-5 w-5 shrink-0 text-primary transition-transform group-open:rotate-180" aria-hidden="true" />
                    </summary>
                    <p className="pb-5 pr-8 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="bg-foreground text-white">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{suburb.ctaHeading}</h2>
              <p className="mt-3 text-base leading-relaxed text-white/80">{suburb.ctaText}</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-lg transition hover:brightness-110"
                >
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  Call now — {PHONE_DISPLAY}
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-white/70 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-white/10"
                >
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </section>

        <ContactSection defaultLocation={suburb.name} />
      </main>
      <SuburbPageFooter />
      <MobileCallBar />
      <div className="h-14 sm:hidden" aria-hidden="true" />
    </div>
  );
}
