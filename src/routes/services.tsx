import { createFileRoute } from "@tanstack/react-router";
import { Check, Unlock, KeyRound, Smartphone, Building2, Vault } from "lucide-react";
import { CallButton } from "@/components/site/CallButton";
import { CtaBand } from "@/components/site/CtaBand";
import { TrustBadges } from "@/components/site/TrustBadges";
import { services, type ServiceSlug } from "@/lib/site";

const title = "Locksmith Services Brisbane | Lockouts, Rekeys, Smart Locks";
const description =
  "Emergency lockouts, lock rekeying and replacement, smart lock installation, commercial security systems and safe opening across Brisbane. Licensed and guaranteed.";

export const Route = createFileRoute("/services")({
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
  component: ServicesPage,
});

const icons: Record<ServiceSlug, typeof Unlock> = {
  "emergency-lockout": Unlock,
  "rekeying-replacement": KeyRound,
  "smart-locks": Smartphone,
  "commercial-security": Building2,
  safes: Vault,
};

function ServicesPage() {
  return (
    <>
      <section className="bg-ink py-14 text-ink-foreground">
        <div className="mx-auto max-w-6xl px-4">
          <p className="eyebrow text-primary-foreground/80">Services</p>
          <h1 className="mt-2 text-4xl sm:text-5xl">
            Residential, commercial &amp; automotive locksmithing
          </h1>
          <p className="mt-4 max-w-2xl opacity-90">
            One licensed local locksmith for every lock and security job — from a 2am lockout to a
            full commercial key system. All work guaranteed.
          </p>
          <CallButton className="mt-7" size="lg" />
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="space-y-6">
          {services.map((s) => {
            const Icon = icons[s.slug];
            return (
              <section
                key={s.slug}
                id={s.slug}
                className="shadow-card scroll-mt-32 rounded-2xl border border-border bg-card p-6 sm:p-8"
              >
                <div className="grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
                  <div className="min-w-0">
                    <div className="flex min-w-0 items-center gap-3">
                      <span className="gradient-primary grid size-12 shrink-0 place-items-center rounded-lg text-primary-foreground">
                        <Icon className="size-6" strokeWidth={2.25} />
                      </span>
                      <div className="min-w-0">
                        <h2 className="text-2xl sm:text-3xl">{s.name}</h2>
                        <p className="text-sm font-semibold text-primary">{s.tagline}</p>
                      </div>
                    </div>
                    {s.badge && (
                      <span className="mt-4 inline-flex rounded-full bg-accent px-3 py-1 font-display text-xs font-extrabold uppercase tracking-wider text-accent-foreground">
                        {s.badge}
                      </span>
                    )}
                    <p className="mt-4 text-muted-foreground">{s.description}</p>
                  </div>
                  <div className="rounded-xl bg-secondary p-5">
                    <h3 className="eyebrow text-muted-foreground">Included</h3>
                    <ul className="mt-3 space-y-2 text-sm">
                      {s.points.map((p) => (
                        <li key={p} className="flex items-start gap-2">
                          <Check className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={3} />
                          {p}
                        </li>
                      ))}
                    </ul>
                    <CallButton className="mt-5 w-full" label="Call for this service" />
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>

      <TrustBadges />
      <CtaBand title="Need a locksmith in Brisbane today?" />
    </>
  );
}
