import { createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { CallButton } from "@/components/site/CallButton";
import { ServiceAreas } from "@/components/site/ServiceAreas";
import { CtaBand } from "@/components/site/CtaBand";
import { business, suburbs } from "@/lib/site";

const title = "Service Areas | Locksmith Brisbane Inner North & West";
const description =
  "We service Red Hill, Paddington, Kelvin Grove, Ashgrove, Bardon, Brisbane City, New Farm, Toowong, The Gap and surrounding Brisbane suburbs 24/7.";

export const Route = createFileRoute("/service-areas")({
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
  component: ServiceAreasPage,
});

function ServiceAreasPage() {
  return (
    <>
      <section className="bg-ink py-14 text-ink-foreground">
        <div className="mx-auto max-w-6xl px-4">
          <p className="eyebrow text-primary-foreground/80">Service Areas</p>
          <h1 className="mt-2 text-4xl sm:text-5xl">Locksmith coverage across Brisbane</h1>
          <p className="mt-4 max-w-2xl opacity-90">
            {suburbs.length} suburbs and counting, with an average arrival time of 15–20 minutes
            through the inner north and inner west.
          </p>
          <CallButton className="mt-7" size="lg" />
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4">
          <div className="shadow-card overflow-hidden rounded-2xl border border-border bg-card">
            <div className="relative aspect-[16/9] w-full bg-secondary">
              <svg
                viewBox="0 0 800 450"
                role="img"
                aria-label="Simplified map of Brisbane's inner north and inner west showing our service area around Red Hill"
                className="size-full"
              >
                <rect width="800" height="450" fill="var(--secondary)" />
                <path
                  d="M0 300 C120 260 200 320 300 300 C420 275 470 200 560 190 C660 180 720 240 800 220 L800 450 L0 450 Z"
                  fill="var(--accent)"
                />
                <path
                  d="M60 60 C200 120 260 210 400 240 C520 265 620 340 760 400"
                  fill="none"
                  stroke="var(--primary)"
                  strokeWidth="10"
                  strokeLinecap="round"
                  opacity="0.35"
                />
                <circle cx="320" cy="210" r="150" fill="var(--primary)" opacity="0.1" />
                <circle cx="320" cy="210" r="150" fill="none" stroke="var(--primary)" strokeWidth="3" strokeDasharray="10 8" />
                <circle cx="320" cy="210" r="12" fill="var(--primary)" />
                <text x="344" y="205" fontSize="22" fontWeight="700" fill="var(--foreground)">
                  Red Hill
                </text>
                <text x="344" y="230" fontSize="16" fill="var(--muted-foreground)">
                  Our base — 15–20 min radius
                </text>
                <text x="470" y="330" fontSize="18" fontWeight="700" fill="var(--foreground)">
                  Brisbane CBD
                </text>
                <circle cx="452" cy="325" r="8" fill="var(--foreground)" />
              </svg>
            </div>
            <p className="border-t border-border px-5 py-3 text-sm text-muted-foreground">
              Indicative service area — we regularly travel further across greater Brisbane. Call{" "}
              <a href={business.phoneHref} className="font-semibold text-primary underline underline-offset-4">
                {business.phoneDisplay}
              </a>{" "}
              to confirm your address.
            </p>
          </div>
        </div>
      </section>

      <ServiceAreas />

      <section className="pb-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-2xl border border-border bg-secondary p-6 sm:p-8">
            <h2 className="flex items-center gap-2 text-2xl">
              <MapPin className="size-6 shrink-0 text-primary" />
              Outside these suburbs?
            </h2>
            <p className="mt-3 text-muted-foreground">
              We're often out on jobs across greater Brisbane. Give us a call with your address and
              we'll tell you honestly how quickly we can be there and what it will cost.
            </p>
            <CallButton className="mt-5" />
          </div>
        </div>
      </section>

      <CtaBand title="Need a locksmith in your suburb right now?" />
    </>
  );
}
