import {
  Lock,
  KeyRound,
  Smartphone,
  Archive,
  ArrowRight,
  DoorOpen,
  Fence,
  Mail,
  DoorClosed,
  ShieldAlert,
  ClipboardList,
  Building2,
  Wrench
} from "lucide-react";

export const SERVICES = [
  {
    id: "emergency-lockout",
    icon: Lock,
    title: "Emergency Lockout Service",
    available: "Available 24/7",
    text: "Locked out of your house, car or shop? For a car, we unlock the vehicle only. We're on the road around the clock and typically reach inner-Brisbane addresses in 15–20 minutes. Non-destructive entry wherever possible, so your locks keep working afterwards."
  },
  {
    id: "rekeying-replacement",
    icon: KeyRound,
    title: "Lock Rekeying & Lock Replacement",
    text: "Moved house, lost a key or had a tenant change? Rekeying makes old keys useless while keeping your existing hardware. Where locks are worn or insecure, we supply and fit quality replacements."
  },
  {
    id: "smart-locks",
    icon: Smartphone,
    title: "Smart Lock Installation",
    text: "Keypad, fingerprint and app-controlled locks supplied, installed and configured. We advise on the right model for your door type, then set up codes and access for your household or team."
  },
  {
    id: "safes",
    icon: Archive,
    title: "Safe Opening & Safe Installation",
    text: "Forgotten combination or a jammed safe? We provide safe opening and installation services for domestic and commercial properties, then supply and bolt down new safes in the right spot for security and insurance."
  },
  {
    id: "broken-key-extraction",
    icon: Wrench,
    title: "Broken Key Extraction",
    text: "We remove a key that has snapped off in the lock. If the lock cannot be saved, we quote a replacement before fitting one."
  },
  {
    id: "sliding-door-locks",
    icon: DoorOpen,
    title: "Sliding Door Locks",
    text: "We supply and fit locks for sliding doors, and replace a lock that no longer secures the door."
  },
  {
    id: "gate-locks",
    icon: Fence,
    title: "Gate Locks",
    text: "We fit and replace locks on gates, including a lock that has failed or no longer keeps the gate shut."
  },
  {
    id: "deadlocks",
    icon: Lock,
    title: "Deadlocks",
    text: "We supply and fit deadlocks, and replace a deadlock that is worn, damaged or no longer locking properly."
  },
  {
    id: "digital-lock-repairs",
    icon: Smartphone,
    title: "Digital Lock Repairs and Resetting",
    text: "We repair digital locks and reset codes or access when a lock has failed or the codes need to change."
  },
  {
    id: "mailbox-locks",
    icon: Mail,
    title: "Mailbox Locks",
    text: "We fit and replace mailbox locks, including a lock that is jammed or no longer holds."
  },
  {
    id: "door-closers",
    icon: DoorClosed,
    title: "Door Closers",
    text: "We supply and fit door closers so a door shuts and latches as it should."
  },
  {
    id: "burglary-damage-repairs",
    icon: ShieldAlert,
    title: "Burglary Damage Repairs",
    text: "After a break-in, we repair the damaged lock and door hardware and make the entry secure again."
  },
  {
    id: "home-security-assessments",
    icon: ClipboardList,
    title: "Home Security Assessments",
    text: "We look over the home's doors and locks and tell you what should be rekeyed, repaired or replaced."
  },
  {
    id: "commercial-lock-replacement",
    icon: Building2,
    title: "Commercial Lock Replacement",
    text: "We replace locks on shops, offices and other commercial doors, and quote the hardware before we fit it."
  },
  {
    id: "rekeying-between-tenants",
    icon: KeyRound,
    title: "Rekeying Between Tenants",
    text: "When a tenant moves out, we rekey the locks so the previous keys no longer work."
  }
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">What we do</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Residential and commercial locksmith services, plus car lockouts
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            From emergency lockouts to smart lock upgrades — only the services we
            provide in the field, backed by a workmanship guarantee.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {SERVICES.map((s) => (
            <article
              key={s.id}
              className="group flex flex-col rounded-xl border border-border bg-background p-6 transition hover:border-primary/40 hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <s.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{s.title}</h3>
              </div>
              {s.available && (
                <span className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                  {s.available}
                </span>
              )}
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              <button
                onClick={() =>
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
                }
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
              >
                Request this service
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}