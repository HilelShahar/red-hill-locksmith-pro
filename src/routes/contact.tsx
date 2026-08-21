import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, Clock, MapPin, Star, ExternalLink, Building2 } from "lucide-react";
import { CallButton } from "@/components/site/CallButton";
import { QuoteForm } from "@/components/site/QuoteForm";
import { business } from "@/lib/site";

const title = "Contact & Free Quote | Brisbane Locksmith 24/7";
const description =
  "Call Red Hill Security & Locksmith on 0416 807 444 for 24/7 emergency locksmith help in Brisbane, or request a free quote online.";

export const Route = createFileRoute("/contact")({
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
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="bg-ink py-14 text-ink-foreground">
        <div className="mx-auto max-w-6xl px-4">
          <p className="eyebrow text-primary-foreground/80">Contact</p>
          <h1 className="mt-2 text-4xl sm:text-5xl">Call us 24/7 — or request a free quote</h1>
          <p className="mt-4 max-w-2xl opacity-90">
            Locked out? Calling is always fastest. For everything else, send us a message and we'll
            reply with clear pricing.
          </p>
          <CallButton className="mt-7" size="lg" label={`Call Now — ${business.phoneDisplay}`} />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
          <div className="min-w-0">
            <h2 className="text-3xl">Contact details</h2>
            <ul className="mt-6 space-y-5">
              <li className="flex items-start gap-3">
                <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-accent text-accent-foreground">
                  <Phone className="size-5" />
                </span>
                <span className="min-w-0">
                  <span className="block font-display font-extrabold">Phone (24/7)</span>
                  <a
                    href={business.phoneHref}
                    className="text-lg font-bold text-primary underline underline-offset-4"
                  >
                    {business.phoneDisplay}
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-accent text-accent-foreground">
                  <Mail className="size-5" />
                </span>
                <span className="min-w-0">
                  <span className="block font-display font-extrabold">Email</span>
                  <a href={`mailto:${business.email}`} className="break-all underline underline-offset-4">
                    {business.email}
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-accent text-accent-foreground">
                  <Clock className="size-5" />
                </span>
                <span className="min-w-0">
                  <span className="block font-display font-extrabold">Hours</span>
                  {business.hours} — including weekends and public holidays
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-accent text-accent-foreground">
                  <MapPin className="size-5" />
                </span>
                <span className="min-w-0">
                  <span className="block font-display font-extrabold">Service &amp; office address</span>
                  {business.address}
                  <span className="mt-1 block text-sm text-muted-foreground">
                    Not open to the public — we're a mobile service and come to you.
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-accent text-accent-foreground">
                  <Building2 className="size-5" />
                </span>
                <span className="min-w-0">
                  <span className="block font-display font-extrabold">ABN</span>
                  {business.abn}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-accent text-accent-foreground">
                  <Star className="size-5" />
                </span>
                <span className="min-w-0">
                  <span className="block font-display font-extrabold">Google Business Profile</span>
                  <a
                    href={business.googleProfileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 underline underline-offset-4"
                  >
                    View &amp; review us on Google
                    <ExternalLink className="size-4" />
                  </a>
                </span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <QuoteForm mode="quote" />
            <QuoteForm mode="enquiry" />
          </div>
        </div>
      </section>
    </>
  );
}
