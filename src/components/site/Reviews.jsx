import { useState, useRef, useEffect } from "react";
import { Star, ExternalLink, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { REVIEWS } from "./reviewsData";

const GOOGLE_LINK =
  "https://www.google.com/search?q=Red+Hill+Security+%26+Locksmith+Brisbane";

export default function Reviews() {
  const trackRef = useRef(null);
  const pausedRef = useRef(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (i) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(REVIEWS.length - 1, i));
    const card = track.children[clamped];
    if (card) track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: "smooth" });
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const card = track.children[0];
      if (!card) return;
      const step = card.offsetWidth;
      setActiveIndex(Math.round(track.scrollLeft / step));
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  // Auto-advance the carousel, pausing while the mouse hovers a review
  useEffect(() => {
    const id = setInterval(() => {
      if (pausedRef.current) return;
      setActiveIndex((prev) => {
        const next = prev + 1 >= REVIEWS.length ? 0 : prev + 1;
        scrollToIndex(next);
        return next;
      });
    }, 4000);
    return () => clearInterval(id);
  }, []);

  const prevDisabled = activeIndex === 0;
  const nextDisabled = activeIndex === REVIEWS.length - 1;

  return (
    <section id="reviews" className="scroll-mt-16 bg-muted/40 border-y border-border">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Reviews</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              What Brisbane locals say
            </h2>
            <div className="mt-3 flex items-center gap-2">
              <span className="flex gap-0.5 text-primary" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </span>
              <span className="text-sm font-semibold text-foreground">5.0 / 5</span>
              <span className="text-sm text-muted-foreground">· from 50 Google reviews</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={GOOGLE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
            >
              Read our Google reviews
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
            <div className="hidden sm:flex items-center gap-2">
              <CarouselButton
                onClick={() => scrollToIndex(activeIndex - 1)}
                disabled={prevDisabled}
                label="Previous review"
              />
              <CarouselButton
                onClick={() => scrollToIndex(activeIndex + 1)}
                disabled={nextDisabled}
                label="Next review"
              />
            </div>
          </div>
        </div>

        <div
          ref={trackRef}
          className="mt-8 flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label="Customer reviews carousel"
          onMouseEnter={() => (pausedRef.current = true)}
          onMouseLeave={() => (pausedRef.current = false)}
          onTouchStart={() => (pausedRef.current = true)}
          onTouchEnd={() => (pausedRef.current = false)}
        >
          {REVIEWS.map((r, i) => (
            <figure
              key={i}
              aria-hidden={i !== activeIndex}
              className="relative flex w-[86%] flex-none snap-center flex-col rounded-xl border border-border bg-background p-6 shadow-sm sm:w-[calc(50%-10px)] sm:p-8 lg:w-[calc(33.333%-14px)]"
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 text-primary/15" aria-hidden="true" />
              <div className="flex gap-0.5 text-primary" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-current" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-[15px] font-medium leading-relaxed text-foreground/90 sm:text-base">
                "{r.quote}"
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary" aria-hidden="true">
                  {r.name.charAt(0)}
                </span>
                <span className="text-sm font-semibold text-foreground">
                  {r.name}
                  <span className="block font-normal text-muted-foreground">Google review</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between sm:hidden">
          <CarouselButton
            onClick={() => scrollToIndex(activeIndex - 1)}
            disabled={prevDisabled}
            label="Previous review"
          />
          <span className="text-sm font-medium tabular-nums text-muted-foreground" aria-live="polite">
            {activeIndex + 1} / {REVIEWS.length}
          </span>
          <CarouselButton
            onClick={() => scrollToIndex(activeIndex + 1)}
            disabled={nextDisabled}
            label="Next review"
          />
        </div>
      </div>
    </section>
  );
}

function CarouselButton({ onClick, disabled, label }) {
  const Icon = label === "Previous review" ? ChevronLeft : ChevronRight;
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-sm transition hover:border-primary/50 hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-40 disabled:cursor-not-allowed"
      aria-label={label}
    >
      <Icon className="h-5 w-5" aria-hidden="true" />
    </button>
  );
}