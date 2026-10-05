import { Phone } from "lucide-react";

const PHONE_DISPLAY = "0416 807 444";
const PHONE_TEL = "+61416807444";

export default function MobileCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden">
      <div className="flex border-t border-border bg-background/95 backdrop-blur shadow-[0_-2px_8px_rgba(0,0,0,0.08)]">
        <a
          href={`tel:${PHONE_TEL}`}
          className="flex flex-1 items-center justify-center gap-2 bg-primary py-3.5 text-base font-semibold text-primary-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
          aria-label={`Call ${PHONE_DISPLAY} now`}
        >
          <Phone className="h-5 w-5" aria-hidden="true" />
          Call now — {PHONE_DISPLAY}
        </a>
        <button
          onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
          className="flex flex-1 items-center justify-center py-3.5 text-base font-semibold text-foreground border-l border-border focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
        >
          Get a quote
        </button>
      </div>
    </div>
  );
}