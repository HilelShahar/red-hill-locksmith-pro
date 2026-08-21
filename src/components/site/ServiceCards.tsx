import { Link } from "@tanstack/react-router";
import { Unlock, KeyRound, Smartphone, Building2, Vault, ArrowRight } from "lucide-react";
import { services, type ServiceSlug } from "@/lib/site";

const icons: Record<ServiceSlug, typeof Unlock> = {
  "emergency-lockout": Unlock,
  "rekeying-replacement": KeyRound,
  "smart-locks": Smartphone,
  "commercial-security": Building2,
  safes: Vault,
};

export function ServiceCards() {
  return (
    <section className="bg-secondary py-16">
      <div className="mx-auto max-w-6xl px-4">
        <p className="eyebrow text-primary">What We Do</p>
        <h2 className="mt-2 text-3xl sm:text-4xl">Locksmith services for home, business &amp; car</h2>
        <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = icons[s.slug];
            return (
              <li
                key={s.slug}
                className="shadow-card flex flex-col rounded-xl border border-border bg-card p-6"
              >
                <span className="gradient-primary grid size-12 place-items-center rounded-lg text-primary-foreground">
                  <Icon className="size-6" strokeWidth={2.25} />
                </span>
                {s.badge && (
                  <span className="mt-4 inline-flex w-fit rounded-full bg-accent px-3 py-1 font-display text-xs font-extrabold uppercase tracking-wider text-accent-foreground">
                    {s.badge}
                  </span>
                )}
                <h3 className="mt-3 text-xl">{s.name}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{s.description}</p>
                <Link
                  to="/services"
                  hash={s.slug}
                  className="mt-4 inline-flex items-center gap-1.5 font-display text-sm font-extrabold text-primary"
                >
                  Learn more
                  <ArrowRight className="size-4" />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
