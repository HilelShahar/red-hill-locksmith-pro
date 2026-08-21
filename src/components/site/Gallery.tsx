import smartLock from "@/assets/gallery-smart-lock.jpg";
import rekey from "@/assets/gallery-rekey.jpg";
import car from "@/assets/gallery-car.jpg";
import commercial from "@/assets/gallery-commercial.jpg";
import safe from "@/assets/gallery-safe.jpg";

const items = [
  { src: smartLock, alt: "Smart keypad deadbolt installed on a residential front door in Brisbane", caption: "Smart lock install — Paddington" },
  { src: rekey, alt: "Locksmith rekeying a brass door cylinder on a workbench", caption: "Lock rekeying — Ashgrove" },
  { src: car, alt: "Locksmith opening a locked car door at night with a specialist tool", caption: "After-hours car lockout — Milton" },
  { src: commercial, alt: "Commercial glass office door with access control keypad reader", caption: "Access control — Brisbane City" },
  { src: safe, alt: "Open steel home safe with locksmith tools beside it", caption: "Safe opening & service — Newstead" },
];

export function Gallery() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <p className="eyebrow text-primary">Our Work</p>
        <h2 className="mt-2 text-3xl sm:text-4xl">Recent jobs around Brisbane</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          A sample of completed lockouts, rekeys, smart locks, commercial upgrades and safe work.
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li
              key={item.caption}
              className="shadow-card group overflow-hidden rounded-xl border border-border bg-card"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                width={1200}
                height={900}
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <p className="px-4 py-3 font-display text-sm font-bold">{item.caption}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
