import { Link } from "@tanstack/react-router";
import { KeyRound, Phone, Mail, MapPin, Clock, Star } from "lucide-react";
import { business, navLinks, services, suburbs } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex min-w-0 items-center gap-2.5">
              <span className="gradient-primary grid size-10 shrink-0 place-items-center rounded-lg">
                <KeyRound className="size-5" strokeWidth={2.5} />
              </span>
              <span className="font-display text-lg font-extrabold leading-tight">
                Red Hill Security
                <span className="block text-xs font-semibold uppercase tracking-widest opacity-70">
                  &amp; Locksmith
                </span>
              </span>
            </div>
            <p className="mt-4 text-sm opacity-80">
              Licensed Brisbane locksmith for homes, businesses and vehicles. Fast response, honest
              pricing, all work guaranteed.
            </p>
            <a
              href={business.googleProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold underline decoration-primary decoration-2 underline-offset-4"
            >
              <Star className="size-4 fill-current" />
              Our Google Business Profile
            </a>
          </div>

          <div>
            <h3 className="eyebrow opacity-70">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={business.phoneHref} className="flex items-start gap-2 font-bold">
                  <Phone className="mt-0.5 size-4 shrink-0" />
                  {business.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${business.email}`} className="flex items-start gap-2 break-all opacity-85">
                  <Mail className="mt-0.5 size-4 shrink-0" />
                  {business.email}
                </a>
              </li>
              <li className="flex items-start gap-2 opacity-85">
                <Clock className="mt-0.5 size-4 shrink-0" />
                {business.hours}
              </li>
              <li className="flex items-start gap-2 opacity-85">
                <MapPin className="mt-0.5 size-4 shrink-0" />
                <span>
                  {business.address}
                  <span className="block opacity-70">
                    Service &amp; office address — not open to the public
                  </span>
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="eyebrow opacity-70">Services</h3>
            <ul className="mt-4 space-y-2 text-sm opacity-85">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to="/services" hash={s.slug} className="hover:underline">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="eyebrow mt-6 opacity-70">Pages</h3>
            <ul className="mt-3 space-y-2 text-sm opacity-85">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:underline">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow opacity-70">Service Areas</h3>
            <p className="mt-4 text-sm leading-relaxed opacity-80">{suburbs.join(" · ")}</p>
            <Link
              to="/service-areas"
              className="mt-3 inline-block text-sm font-semibold underline decoration-primary decoration-2 underline-offset-4"
            >
              See all suburbs
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs opacity-70">
          <p>
            © {new Date().getFullYear()} {business.name}. ABN {business.abn}. Licensed locksmith,
            Queensland. All work guaranteed.
          </p>
        </div>
      </div>
    </footer>
  );
}
