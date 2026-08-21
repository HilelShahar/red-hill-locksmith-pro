import { MapPin } from "lucide-react";
import { suburbs } from "@/lib/site";

export function ServiceAreas({ compact = false }: { compact?: boolean }) {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <p className="eyebrow text-primary">Service Areas</p>
        <h2 className="mt-2 text-3xl sm:text-4xl">Servicing Brisbane &amp; surrounding suburbs</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          We're based in Red Hill and cover the inner north and inner west, the CBD and surrounding
          suburbs. If your suburb isn't listed, give us a call — chances are we can still help.
        </p>

        <ul className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
          {(compact ? suburbs.slice(0, 16) : suburbs).map((s) => (
            <li
              key={s}
              className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2.5 text-sm font-semibold"
            >
              <MapPin className="size-4 shrink-0 text-primary" />
              <span className="truncate">{s}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
