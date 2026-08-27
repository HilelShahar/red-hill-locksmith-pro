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
