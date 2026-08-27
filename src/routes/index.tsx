import { createFileRoute } from "@tanstack/react-router";
import { Clock, MapPin, ShieldCheck, Star } from "lucide-react";
import heroImage from "@/assets/hero-locksmith.jpg";
import { CallButton } from "@/components/site/CallButton";
import { SellingPoints } from "@/components/site/SellingPoints";
import { ServiceCards } from "@/components/site/ServiceCards";
import { ServiceAreas } from "@/components/site/ServiceAreas";
import { Testimonials } from "@/components/site/Testimonials";
// import { Gallery } from "@/components/site/Gallery";
import { TrustBadges } from "@/components/site/TrustBadges";
import { CtaBand } from "@/components/site/CtaBand";
import { QuoteForm } from "@/components/site/QuoteForm";
import { QuoteLink, quoteSectionId } from "@/components/site/QuoteLink";
import { business } from "@/lib/site";

const title = "Brisbane Locksmith 24/7 | Red Hill Security & Locksmith";
const description =
  "Locked out? Licensed Brisbane locksmith arriving in 15-20 minutes. 24/7 emergency lockouts, rekeying, smart locks, safes. Call-outs from $35.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="relative isolate">
        <img
          src={heroImage}
          alt="Licensed Red Hill locksmith working on a residential front door lock in Brisbane"
          width={1600}
          height={1104}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28 lg:py-32">
          <div className="max-w-2xl text-ink-foreground">
            <p className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-1.5 font-display text-xs font-extrabold uppercase tracking-widest text-primary-foreground">
              <Clock className="size-3.5" strokeWidth={3} />
              24/7 Emergency Locksmith
            </p>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl">
              Locked Out? We'll Be There in 15–20 Minutes.
            </h1>
            <p className="mt-5 text-lg opacity-95 sm:text-xl">
            Fast, friendly, and reliable locksmith services across Brisbane, provided by a licensed security professional available 24/7 whenever you need us.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CallButton size="lg" label={`Call Now — ${business.phoneDisplay}`} />
              <QuoteLink className="inline-flex items-center justify-center rounded-lg border-2 border-ink-foreground/60 px-7 py-4 font-display text-lg font-extrabold text-ink-foreground">
                Get a Free Quote
              </QuoteLink>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold">
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="size-4 shrink-0"/> Experienced & licensed
              </li>
              <li className="flex items-center gap-1.5">
                <MapPin className="size-4 shrink-0" /> Brisbane &amp; inner suburbs
              </li>
              <li className="flex items-center gap-1.5">
                <Star className="size-4 shrink-0 fill-current" /> Call-outs from $35
              </li>
            </ul>
          </div>
        </div>
      </section>

      <SellingPoints />
      <ServiceCards />
      <TrustBadges />
      <ServiceAreas compact />
      <Testimonials limit={3} />
      {/* <Gallery /> */}
      <CtaBand />

      <section id={quoteSectionId} className="scroll-mt-28 py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="eyebrow text-primary">Free Quote</p>
            <h2 className="mt-2 text-3xl sm:text-4xl">
              Not an emergency? Get a no-obligation quote.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Tell us the job, your suburb and the best number to reach you. We'll come back with
              clear pricing — no hidden call-out surprises. For anything urgent, calling is always
              fastest.
            </p>
            <dl className="mt-6 space-y-3 text-sm">
              <div>
                <dt className="font-display font-extrabold">Phone (24/7)</dt>
                <dd>
                  <a href={business.phoneHref} className="text-primary underline underline-offset-4">
                    {business.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-display font-extrabold">Email</dt>
                <dd className="break-all">
                  <a href={`mailto:${business.email}`} className="underline underline-offset-4">
                    {business.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-display font-extrabold">Service &amp; office address</dt>
                <dd>
                  {business.address}
                  <span className="mt-1 block text-muted-foreground">
                    Not open to the public — we're a mobile service and come to you.
                  </span>
                </dd>
              </div>
              <div>
                <dt className="font-display font-extrabold">ABN</dt>
                <dd>{business.abn}</dd>
              </div>
            </dl>
          </div>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
