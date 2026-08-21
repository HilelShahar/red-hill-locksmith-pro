import { Clock, Timer, BadgeCheck, ShieldCheck, DollarSign, Smile } from "lucide-react";
import { sellingPoints } from "@/lib/site";

const icons = {
  clock: Clock,
  timer: Timer,
  badge: BadgeCheck,
  shield: ShieldCheck,
  dollar: DollarSign,
  smile: Smile,
} as const;

export function SellingPoints() {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-6xl px-4">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sellingPoints.map((p) => {
            const Icon = icons[p.icon];
            return (
              <li
                key={p.title}
                className="shadow-card flex items-start gap-4 rounded-xl border border-border bg-card p-5"
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-lg bg-accent text-accent-foreground">
                  <Icon className="size-6" strokeWidth={2.25} />
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-lg font-extrabold leading-tight">
                    {p.title}
                  </span>
                  <span className="mt-1 block text-sm text-muted-foreground">{p.text}</span>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
