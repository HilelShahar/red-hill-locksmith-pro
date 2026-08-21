import { createFileRoute } from "@tanstack/react-router";
import { Star, ExternalLink } from "lucide-react";
import { CallButton } from "@/components/site/CallButton";
import { Testimonials } from "@/components/site/Testimonials";
import { Gallery } from "@/components/site/Gallery";
import { CtaBand } from "@/components/site/CtaBand";
import { business, testimonials } from "@/lib/site";

const title = "Reviews | Red Hill Security & Locksmith Brisbane";
const description =
  "Read reviews from Brisbane homeowners, drivers and businesses who called Red Hill Security & Locksmith for fast, honest, guaranteed locksmith work.";

export const Route = createFileRoute("/reviews")({
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
  component: ReviewsPage,
});

function ReviewsPage() {
  const average = (
    testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length
  ).toFixed(1);

  return (
    <>
      <section className="bg-ink py-14 text-ink-foreground">
        <div className="mx-auto max-w-6xl px-4">
          <p className="eyebrow text-primary-foreground/80">Reviews</p>
          <h1 className="mt-2 text-4xl sm:text-5xl">Trusted by Brisbane locals</h1>
          <div className="mt-5 flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-6 fill-primary text-primary" />
              ))}
            </span>
            <span className="font-display text-2xl font-extrabold">{average} / 5</span>
            <span className="opacity-80">from {testimonials.length} customer reviews</span>
          </div>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <CallButton size="lg" />
            <a
              href={business.googleProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-ink-foreground/60 px-7 py-4 font-display text-lg font-extrabold"
            >
              Leave a Google review
              <ExternalLink className="size-5" />
            </a>
          </div>
        </div>
      </section>

      <Testimonials />
      <Gallery />
      <CtaBand title="Join hundreds of happy Brisbane customers" />
    </>
  );
}
