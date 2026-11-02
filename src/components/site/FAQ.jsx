import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { HOME_FAQS as FAQS } from "@/lib/seo";

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border-b border-border">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md"
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold text-foreground">{faq.q}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-primary transition-transform ${isOpen ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>
      {isOpen && (
        <p className="pb-5 pr-8 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
      )}
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="scroll-mt-16">
      <div className="mx-auto max-w-3xl px-4 py-14 sm:py-20">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">FAQ</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Frequently asked questions
          </h2>
        </div>

        <div className="mt-8">
          {FAQS.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}