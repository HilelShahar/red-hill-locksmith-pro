import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { CallButton } from "@/components/site/CallButton";
import { SellingPoints } from "@/components/site/SellingPoints";
import { TrustBadges } from "@/components/site/TrustBadges";
import { CtaBand } from "@/components/site/CtaBand";
import heroImage from "@/assets/hero-locksmith.jpg";
import { business } from "@/lib/site";

const title = "About Us | Licensed Brisbane Locksmith in Red Hill";
const description =
  "Red Hill Security & Locksmith is a licensed, local Brisbane locksmith known for 15-20 minute arrival times, honest pricing and guaranteed workmanship.";

export const Route = createFileRoute("/about")({
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
  component: AboutPage,
});

const promises = [
  "Fully licensed Queensland locksmith",
  "Clear pricing quoted before we start work",
  "Call-out fees starting from $35",
  "Non-destructive entry wherever possible",
  "All work backed by our guarantee",
  "Available 24 hours, 7 days a week",
];

function AboutPage() {
  return (
    <>
      <section className="bg-ink py-14 text-ink-foreground">
        <div className="mx-auto max-w-6xl px-4">
          <p className="eyebrow text-primary-foreground/80">About Us</p>
          <h1 className="mt-2 text-4xl sm:text-5xl">Your local, licensed Brisbane locksmith</h1>
          <p className="mt-4 max-w-2xl opacity-90">
            Based in Red Hill, trusted across Brisbane's inner north, inner west and CBD.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2 lg:items-center">
          <div className="min-w-0">
            <h2 className="text-3xl sm:text-4xl">Fast, honest, and properly qualified</h2>
            <div className="mt-4 space-y-4 text-muted-foreground">
              <p>
                {business.name} is a licensed locksmith business serving homes, businesses and
                vehicles right across Brisbane. We built this business on two simple things: turning
                up quickly, and charging what we quoted.
              </p>
              <p>
                Most of our work starts with a phone call from someone who's locked out, moving into
                a new place, or worried about security after a break-in. We answer around the clock,
                give you a straight answer on price, and typically reach inner-Brisbane addresses in
                15–20 minutes.
              </p>
              <p>
                From rekeying a single deadbolt to designing a restricted key system for a
                commercial site, every job is completed to Australian standards and fully
                guaranteed. Our Red Hill address is a service and office base only — we come to you.
              </p>
            </div>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {promises.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm font-semibold">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={3} />
                  {p}
                </li>
              ))}
            </ul>
            <CallButton className="mt-7" size="lg" />
          </div>
          <img
            src={heroImage}
            alt="Red Hill locksmith fitting a lock on a Brisbane home's front door"
            loading="lazy"
            width={1600}
            height={1104}
            className="shadow-card w-full rounded-2xl object-cover"
          />
        </div>
      </section>

      <SellingPoints />
      <TrustBadges />
      <CtaBand title="Talk to a licensed locksmith now" />
    </>
  );
}
