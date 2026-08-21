import { BadgeCheck, ShieldCheck, Award, FileCheck } from "lucide-react";

const badges = [
  { icon: BadgeCheck, label: "Licensed Locksmith", sub: "QLD licence" },
  { icon: ShieldCheck, label: "Fully Insured", sub: "Public liability" },
  { icon: Award, label: "Industry Member", sub: "Association" },
  { icon: FileCheck, label: "Work Guaranteed", sub: "Written guarantee" },
];

export function TrustBadges() {
  return (
    <section className="border-y border-border bg-secondary py-10">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="eyebrow text-center text-muted-foreground">
          Licensed · Insured · Guaranteed
        </h2>
        <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {badges.map((b) => (
            <li
              key={b.label}
              className="flex flex-col items-center gap-2 rounded-xl border border-dashed border-border bg-background px-4 py-5 text-center"
            >
              <b.icon className="size-8 text-primary" strokeWidth={2} />
              <span className="font-display text-sm font-extrabold leading-tight">{b.label}</span>
              <span className="text-xs text-muted-foreground">{b.sub}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-center text-xs text-muted-foreground">
          Licensing, insurance and association logos to be added here.
        </p>
      </div>
    </section>
  );
}
