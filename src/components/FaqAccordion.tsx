"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { SectionHeading } from "./SectionHeading";

export function FaqAccordion() {
  const { t } = useLang();
  const [open, setOpen] = useState<number | null>(0);
  const faqs = [1, 2, 3, 4, 5].map((n) => ({
    q: t(`faq.${n}.q`),
    a: t(`faq.${n}.a`),
  }));

  return (
    <section id="faq" className="scroll-mt-24 bg-white px-4 py-16 md:px-6 md:py-20">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow={t("faq.eyebrow")}
          title={t("faq.title")}
        />
        <div className="mt-10 space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-2xl bg-foam ring-1 ring-navy/5"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-start"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-sm font-bold text-navy md:text-base">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-cyan transition ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="px-5 pb-4 text-sm leading-relaxed text-muted">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
