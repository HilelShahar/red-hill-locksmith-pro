import { CallButton } from "./CallButton";
import { QuoteLink } from "./QuoteLink";

export function CtaBand({
  title = "Locked out or need a lock sorted today?",
  text = "Call now for immediate help, or request a free quote and we'll get straight back to you.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="gradient-primary py-14 text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
        <div className="min-w-0">
          <h2 className="text-3xl sm:text-4xl">{title}</h2>
          <p className="mt-3 max-w-2xl opacity-90">{text}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
          <CallButton variant="ink" size="lg" />
          <QuoteLink className="inline-flex items-center justify-center rounded-lg border-2 border-primary-foreground/70 px-7 py-4 font-display text-lg font-extrabold">
            Get a Free Quote
          </QuoteLink>
        </div>
      </div>
    </section>
  );
}
