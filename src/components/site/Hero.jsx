import { Phone, Clock, MapPin, ShieldCheck } from "lucide-react";
import { Image } from "@/components/ui/image";

const PHONE_DISPLAY = "0416 807 444";
const PHONE_TEL = "+61416807444";

export default function Hero({ heroImage }) {
  return (
    <section id="top" className="relative bg-foreground text-white">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Golden-hour view of Red Hill, Brisbane with the city skyline in the distance"
          className="h-full w-full object-cover"
          fittingType="fill"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/85 to-foreground/60" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-20 lg:py-28">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            24/7 Emergency Locksmith
          </span>

          <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Locked out? We'll be there in 15–20 minutes.
          </h1>

          <p className="mt-4 text-base leading-relaxed text-white/85 sm:text-lg">
            Fast, friendly and reliable locksmith services across Brisbane,
            provided by a licensed security professional available 24/7
            whenever you need us.
          </p>

          {/* CTAs */}
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-lg transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-foreground"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call now — {PHONE_DISPLAY}
            </a>
            <button
              onClick={() =>
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-white/70 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-foreground"
            >
              Request a quote
            </button>
          </div>

          {/* Quick trust badges */}
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/80">
            <li className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-primary-foreground/90" aria-hidden="true" />
              Experienced &amp; licensed
            </li>
            <li className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary-foreground/90" aria-hidden="true" />
              Brisbane &amp; inner suburbs
            </li>
            <li className="inline-flex items-center gap-2">
              <span className="font-semibold text-white">Call-outs from $35</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}