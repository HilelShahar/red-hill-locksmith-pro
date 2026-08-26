import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { KeyRound, Menu, X, Phone, Clock } from "lucide-react";
import { business, navLinks } from "@/lib/site";
import { smoothScrollToId } from "@/lib/scroll";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full">
      <div className="bg-ink text-ink-foreground">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-1.5 text-xs sm:text-sm">
          <span className="flex min-w-0 items-center gap-1.5">
            <Clock className="size-3.5 shrink-0" />
            <span className="truncate">{business.hours} · Brisbane &amp; inner suburbs</span>
          </span>
          <span className="hidden shrink-0 sm:inline">Call-outs from $35</span>
        </div>
      </div>

      <div className="border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3">
          <Link to="/" className="flex min-w-0 items-center gap-2.5">
            <span className="gradient-primary grid size-11 shrink-0 place-items-center rounded-lg text-primary-foreground">
              <KeyRound className="size-6" strokeWidth={2.5} />
            </span>
            <span className="min-w-0">
              <span className="block truncate font-display text-base font-extrabold leading-tight sm:text-lg">
                Red Hill Security
              </span>
              <span className="block truncate text-xs uppercase tracking-widest text-muted-foreground">
                &amp; Locksmith · Brisbane
              </span>
            </span>
          </Link>

          <div className="flex shrink-0 items-center gap-2">
            <nav className="hidden items-center gap-1 lg:flex">
              {navLinks.map((l) => (
                <Link
                  key={l.label}
                  to={l.to}
                  hash={l.hash}
                  onClick={() => l.hash && smoothScrollToId(l.hash)}
                  activeOptions={{ exact: l.to === "/", includeHash: l.to === "/" }}
                  activeProps={{ className: "bg-accent text-accent-foreground" }}
                  className="rounded-md px-3 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <a
              href={business.phoneHref}
              className="gradient-primary hidden items-center gap-2 rounded-lg px-4 py-2.5 font-display font-extrabold text-primary-foreground sm:inline-flex"
            >
              <Phone className="size-4" strokeWidth={2.5} />
              {business.phoneDisplay}
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="grid size-11 place-items-center rounded-lg border border-border lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="border-t border-border bg-background lg:hidden">
            <div className="mx-auto max-w-6xl px-4 py-2">
              {navLinks.map((l) => (
                <Link
                  key={l.label}
                  to={l.to}
                  hash={l.hash}
                  onClick={() => {
                    setOpen(false);
                    if (l.hash) smoothScrollToId(l.hash);
                  }}
                  activeOptions={{ exact: l.to === "/", includeHash: l.to === "/" }}
                  activeProps={{ className: "text-primary" }}
                  className="block border-b border-border/60 py-3 font-display text-lg font-bold last:border-0"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
