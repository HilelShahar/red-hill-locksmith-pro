import { KeyRound, Phone, Mail, MapPin } from "lucide-react";
import { Image } from "@/components/ui/image";

const SPAAL_LOGO = "/images/spaal.png";

const PHONE_DISPLAY = "0416 807 444";
const PHONE_TEL = "+61416807444";
const EMAIL = "info@redhillsecuritylocksmith.com.au";
const ADDRESS = "Red Hill QLD 4059";
const ABN = "12 693 068 457";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white/80">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <KeyRound className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="leading-tight">
                <span className="block text-sm font-bold text-white">Red Hill Security</span>
                <span className="block text-[11px] font-medium uppercase tracking-wider text-white/60">
                  &amp; Locksmith · Brisbane
                </span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/70 max-w-xs">
              Mobile locksmith servicing Red Hill, inner Brisbane and
              surrounding suburbs. Available 24/7.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <div className="h-14 w-14 shrink-0">
                <Image
                  src={SPAAL_LOGO}
                  alt="SPAAL – Security Providers Association of Australia Ltd member"
                  className="h-full w-full object-contain"
                  fittingType="fit"
                />
              </div>
              <p className="text-xs leading-snug text-white/60">
                Member — SPAAL
                <span className="block text-[11px] text-white/40">
                  Security Providers Association of Australia Ltd
                </span>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={`tel:${PHONE_TEL}`} className="inline-flex items-center gap-2 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded">
                  <Phone className="h-4 w-4 text-primary-foreground/80" aria-hidden="true" />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded">
                  <Mail className="h-4 w-4 text-primary-foreground/80" aria-hidden="true" />
                  {EMAIL}
                </a>
              </li>
              <li className="inline-flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-primary-foreground/80" aria-hidden="true" />
                <span>{ADDRESS}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Quick links</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                { label: "Services", href: "#services" },
                { label: "How it works", href: "#process" },
                { label: "Service areas", href: "#areas" },
                { label: "Reviews", href: "#reviews" },
                { label: "FAQ", href: "#faq" },
                { label: "Get a quote", href: "#contact" }
              ].map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => document.querySelector(l.href)?.scrollIntoView({ behavior: "smooth" })}
                    className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Red Hill Security &amp; Locksmith. ABN {ABN}.</p>
          <p>Licensed Queensland security professional · Fully insured · Workmanship guaranteed</p>
        </div>
      </div>
    </footer>
  );
}