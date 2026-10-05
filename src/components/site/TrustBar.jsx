import { Clock, MapPin, BadgeCheck, DollarSign, Smile } from "lucide-react";

const ITEMS = [
  { icon: Clock, title: "24/7 Emergency", text: "Day, night, weekends & public holidays." },
  { icon: MapPin, title: "15–20 Min Arrival", text: "Average across inner Brisbane." },
  { icon: BadgeCheck, title: "Fully Licensed", text: "Licensed Queensland security professional." },
  { icon: DollarSign, title: "Call-outs From $35", text: "Honest, transparent pricing quoted up front." },
  { icon: Smile, title: "Friendly & Professional", text: "Respectful service and clean, tidy workmanship." }
];

export default function TrustBar() {
  return (
    <section aria-label="Why choose us" className="bg-muted/40 border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:py-12">
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {ITEMS.map((item) => (
            <li
              key={item.title}
              className="group flex flex-col items-center justify-start gap-2 rounded-lg bg-background p-4 text-center border border-border transition-all duration-300 md:gap-3 md:hover:border-primary/40 md:hover:shadow-lg md:hover:shadow-black/5 md:hover:-translate-y-1"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-300 md:group-hover:bg-primary md:group-hover:text-primary-foreground">
                <item.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-sm font-semibold text-foreground">{item.title}</span>
              <span className="text-xs leading-relaxed text-muted-foreground transition-all duration-300 md:max-h-0 md:opacity-0 md:group-hover:max-h-20 md:group-hover:opacity-100 md:overflow-hidden">
                {item.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}