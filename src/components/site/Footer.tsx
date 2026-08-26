import { business } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-6xl px-4 py-6 text-xs opacity-70">
        <p>
          © {new Date().getFullYear()} {business.name}. ABN {business.abn}. Licensed locksmith,
          Queensland. All work guaranteed.
        </p>
      </div>
    </footer>
  );
}
