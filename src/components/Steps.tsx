"use client";

import { useLang } from "@/context/LanguageContext";
import { SectionHeading } from "./SectionHeading";

export function Steps() {
  const { t } = useLang();
  const steps = [
    { t: t("steps.1.t"), d: t("steps.1.d") },
    { t: t("steps.2.t"), d: t("steps.2.d") },
    { t: t("steps.3.t"), d: t("steps.3.d") },
  ];

  return (
    <section className="bg-white px-4 py-16 md:px-6 md:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={t("steps.eyebrow")}
          title={t("steps.title")}
          subtitle={t("steps.sub")}
        />
        <ol className="mt-12 grid gap-5 md:grid-cols-3">
          {steps.map((s, i) => (
            <li
              key={s.t}
              className="relative overflow-hidden rounded-[1.75rem] border border-navy/5 bg-foam p-6"
            >
              <span className="font-display text-5xl font-extrabold text-cyan/25">
                0{i + 1}
              </span>
              <h3 className="mt-2 font-display text-xl font-bold text-navy">
                {s.t}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
