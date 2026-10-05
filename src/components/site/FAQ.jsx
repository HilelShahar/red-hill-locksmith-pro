import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "What areas do you cover?",
    a: "We're based in Red Hill and cover the inner north and inner west, the CBD and surrounding suburbs — including Paddington, Ashgrove, Kelvin Grove, Milton and more. If your suburb isn't listed, give us a call and chances are we can still help."
  },
  {
    q: "How quickly can you get here?",
    a: "We typically reach inner-Brisbane addresses in 15–20 minutes. Arrival times can vary with traffic and current demand, so we'll give you an honest estimate when you call."
  },
  {
    q: "How much do call-outs cost?",
    a: "Call-outs start from $35. We quote honest, up-front pricing before we start, so there are no hidden surprises. The final price depends on the job and the hardware involved."
  },
  {
    q: "Do I need to come to you?",
    a: "No — we're a mobile service and come to you. Our Red Hill address is a base of operations, not open to the public."
  },
  {
    q: "Can you open my lock without damaging it?",
    a: "Wherever possible we use non-destructive entry techniques so your existing locks keep working afterwards. If a lock does need to be replaced, we'll explain why before proceeding."
  },
  {
    q: "What hours are you available?",
    a: "We're available 24/7 — day, night, weekends and public holidays."
  }
];

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