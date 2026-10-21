import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { SERVICE_AREA_NAMES, getSuburbByName, suburbPath } from "@/data/suburbs";

export default function ServiceAreas() {
  return (
    <section id="areas" className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Service areas</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Servicing Brisbane &amp; surrounding suburbs
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            We're based in Red Hill and cover the inner north and inner west, the
            CBD and surrounding suburbs. If your suburb isn't listed, give us a
            call — chances are we can still help.
          </p>
        </div>

        <ul className="mt-8 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4">
          {SERVICE_AREA_NAMES.map((s) => {
            const suburb = getSuburbByName(s);
            const className =
              "inline-flex items-center gap-2 rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm font-medium text-foreground";
            return (
              <li key={s}>
                {suburb ? (
                  <Link
                    to={suburbPath(suburb.slug)}
                    className={`${className} w-full hover:border-primary/40`}
                  >
                    <MapPin className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    {s}
                  </Link>
                ) : (
                  <span className={`${className} w-full`}>
                    <MapPin className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    {s}
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}