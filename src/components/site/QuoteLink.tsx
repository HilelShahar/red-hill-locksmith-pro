import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { smoothScrollToId } from "@/lib/scroll";

export const quoteSectionId = "quote";

export function QuoteLink({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link
      to="/"
      hash={quoteSectionId}
      activeOptions={{ includeHash: true }}
      onClick={() => smoothScrollToId(quoteSectionId)}
      className={className}
    >
      {children}
    </Link>
  );
}
