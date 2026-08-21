import { Star, ExternalLink } from "lucide-react";
import { business, testimonials } from "@/lib/site";

function Stars({ rating }: { rating: number }) {
  return (
    <span className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={i < rating ? "size-4 fill-primary text-primary" : "size-4 text-border"}
        />
      ))}
    </span>
  );
}

export function Testimonials({ limit }: { limit?: number }) {
  const items = limit ? testimonials.slice(0, limit) : testimonials;

  return (
    <section className="bg-secondary py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
          <div className="min-w-0">
            <p className="eyebrow text-primary">Reviews</p>
            <h2 className="mt-2 text-3xl sm:text-4xl">What Brisbane locals say</h2>
          </div>
          <a
            href={business.googleProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-display font-bold text-primary underline decoration-2 underline-offset-4"
          >
            Read our Google reviews
            <ExternalLink className="size-4" />
          </a>
        </div>

        <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((t) => (
            <li
              key={t.name}
              className="shadow-card flex flex-col rounded-xl border border-border bg-card p-6"
            >
              <Stars rating={t.rating} />
              <blockquote className="mt-3 flex-1 text-[0.975rem] leading-relaxed">
                “{t.text}”
              </blockquote>
              <p className="mt-4 font-display text-sm font-extrabold">
                {t.name}
                <span className="ml-1 font-sans font-medium text-muted-foreground">
                  · {t.suburb}
                </span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
