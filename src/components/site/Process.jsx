import { PhoneCall, BadgeDollarSign, Truck, ShieldCheck } from "lucide-react";

const STEPS = [
  {
    icon: PhoneCall,
    title: "Call or request a quote",
    text: "Tell us the job and your suburb. For anything urgent, calling is always fastest."
  },
  {
    icon: BadgeDollarSign,
    title: "Up-front pricing",
    text: "We quote the price before we start — no hidden call-out surprises. Call-outs from $35."
  },
  {
    icon: Truck,
    title: "We come to you",
    text: "A mobile service covering inner Brisbane, typically arriving in 15–20 minutes."
  },
  {
    icon: ShieldCheck,
    title: "Job done, guaranteed",
    text: "Clean, tidy workmanship backed by our written workmanship guarantee."
  }
];

export default function Process() {
  return (
    <section id="process" className="scroll-mt-16 bg-muted/40 border-y border-border">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">How it works</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Simple, up-front — start to finish
          </h2>
        </div>

        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <li key={step.title} className="relative">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <step.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Step {i + 1}
                </span>
              </div>
              <h3 className="mt-4 text-base font-semibold text-foreground">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}