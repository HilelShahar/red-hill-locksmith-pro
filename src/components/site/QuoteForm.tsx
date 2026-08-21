import { useState } from "react";
import { toast } from "sonner";
import { Send } from "lucide-react";
import { business, services, suburbs } from "@/lib/site";
import { cn } from "@/lib/utils";

type Mode = "quote" | "enquiry";

const fieldClass =
  "mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-3 text-base outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/30";

export function QuoteForm({ mode = "quote", className }: { mode?: Mode; className?: string }) {
  const [sending, setSending] = useState(false);
  const isQuote = mode === "quote";

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setSending(true);

    const subject = isQuote
      ? `Free quote request — ${String(data.get("service") ?? "Locksmith service")}`
      : "Website enquiry";
    const body = [
      `Name: ${data.get("name") ?? ""}`,
      `Phone: ${data.get("phone") ?? ""}`,
      `Email: ${data.get("email") ?? ""}`,
      isQuote ? `Service needed: ${data.get("service") ?? ""}` : null,
      isQuote ? `Suburb: ${data.get("suburb") ?? ""}` : null,
      "",
      String(data.get("message") ?? ""),
    ]
      .filter((line) => line !== null)
      .join("\n");

    window.location.href = `mailto:${business.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    toast.success("Opening your email app", {
      description: `In an emergency, call ${business.phoneDisplay} — we answer 24/7.`,
    });
    form.reset();
    setSending(false);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("shadow-card rounded-2xl border border-border bg-card p-6 sm:p-8", className)}
    >
      <h2 className="text-2xl sm:text-3xl">{isQuote ? "Get a Free Quote" : "General Enquiry"}</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        {isQuote
          ? "Tell us what you need and we'll come back with honest, up-front pricing."
          : "Questions about our services, invoices or bookings? Send us a message."}
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor={`${mode}-name`} className="font-display text-sm font-bold">
            Name
          </label>
          <input id={`${mode}-name`} name="name" required autoComplete="name" className={fieldClass} />
        </div>
        <div className="sm:col-span-1">
          <label htmlFor={`${mode}-phone`} className="font-display text-sm font-bold">
            Phone
          </label>
          <input
            id={`${mode}-phone`}
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            inputMode="tel"
            className={fieldClass}
          />
        </div>

        {isQuote ? (
          <>
            <div>
              <label htmlFor="quote-service" className="font-display text-sm font-bold">
                Service needed
              </label>
              <select id="quote-service" name="service" required defaultValue="" className={fieldClass}>
                <option value="" disabled>
                  Select a service
                </option>
                {services.map((s) => (
                  <option key={s.slug} value={s.name}>
                    {s.name}
                  </option>
                ))}
                <option value="Something else">Something else</option>
              </select>
            </div>
            <div>
              <label htmlFor="quote-suburb" className="font-display text-sm font-bold">
                Suburb / location
              </label>
              <input
                id="quote-suburb"
                name="suburb"
                required
                list="suburb-options"
                placeholder="e.g. Red Hill"
                className={fieldClass}
              />
              <datalist id="suburb-options">
                {suburbs.map((s) => (
                  <option key={s} value={s} />
                ))}
              </datalist>
            </div>
          </>
        ) : (
          <div className="sm:col-span-2">
            <label htmlFor="enquiry-email" className="font-display text-sm font-bold">
              Email
            </label>
            <input
              id="enquiry-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className={fieldClass}
            />
          </div>
        )}

        <div className="sm:col-span-2">
          <label htmlFor={`${mode}-message`} className="font-display text-sm font-bold">
            Message
          </label>
          <textarea
            id={`${mode}-message`}
            name="message"
            rows={4}
            required
            placeholder={
              isQuote
                ? "What's happening? e.g. Front door deadbolt needs rekeying after moving in."
                : "How can we help?"
            }
            className={fieldClass}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={sending}
        className="gradient-primary mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg px-6 py-4 font-display text-lg font-extrabold text-primary-foreground transition-transform active:scale-[0.99] disabled:opacity-60 sm:w-auto"
      >
        <Send className="size-5" strokeWidth={2.5} />
        {isQuote ? "Send Quote Request" : "Send Message"}
      </button>
      <p className="mt-3 text-xs text-muted-foreground">
        Locked out right now? Don't wait — call {business.phoneDisplay}.
      </p>
    </form>
  );
}
