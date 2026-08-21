import { Phone, FileText } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { business } from "@/lib/site";

export function StickyCallBar() {
  return (
    <>
      {/* Mobile: fixed bottom action bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] backdrop-blur md:hidden">
        <div className="grid grid-cols-[1fr_auto] gap-2">
          <a
            href={business.phoneHref}
            className="gradient-primary flex items-center justify-center gap-2 rounded-lg px-4 py-3.5 font-display text-lg font-extrabold text-primary-foreground"
          >
            <Phone className="size-5 shrink-0" strokeWidth={2.5} />
            Call Now — 24/7
          </a>
          <Link
            to="/contact"
            className="flex shrink-0 items-center justify-center gap-1.5 rounded-lg border-2 border-border px-3 py-3.5 font-display text-sm font-bold text-foreground"
          >
            <FileText className="size-4" />
            Quote
          </Link>
        </div>
      </div>
      {/* Desktop: floating call pill */}
      <a
        href={business.phoneHref}
        className="gradient-primary shadow-lift fixed bottom-6 right-6 z-50 hidden items-center gap-2.5 rounded-full px-6 py-4 font-display text-lg font-extrabold text-primary-foreground transition-transform hover:scale-105 md:inline-flex"
      >
        <Phone className="size-5" strokeWidth={2.5} />
        {business.phoneDisplay}
      </a>
      <div className="h-20 md:h-0" aria-hidden="true" />
    </>
  );
}
