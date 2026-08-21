import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { business } from "@/lib/site";

type Props = {
  className?: string;
  label?: string;
  size?: "md" | "lg";
  variant?: "primary" | "ink" | "outline";
};

export function CallButton({ className, label, size = "md", variant = "primary" }: Props) {
  return (
    <a
      href={business.phoneHref}
      aria-label={`Call ${business.name} on ${business.phoneDisplay}`}
      className={cn(
        "inline-flex items-center justify-center gap-2.5 rounded-lg font-display font-extrabold tracking-tight transition-transform active:scale-[0.98]",
        size === "lg" ? "px-7 py-4 text-lg" : "px-5 py-3 text-base",
        variant === "primary" && "gradient-primary text-primary-foreground shadow-lift hover:brightness-110",
        variant === "ink" && "bg-ink text-ink-foreground hover:bg-ink/90",
        variant === "outline" &&
          "border-2 border-primary bg-background text-primary hover:bg-accent",
        className,
      )}
    >
      <Phone className="size-5 shrink-0" strokeWidth={2.5} />
      <span className="whitespace-nowrap">{label ?? `Call ${business.phoneDisplay}`}</span>
    </a>
  );
}
