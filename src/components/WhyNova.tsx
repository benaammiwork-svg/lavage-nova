"use client";

import Image from "next/image";
import { useLang } from "@/context/LanguageContext";
import { SectionHeading } from "./SectionHeading";

export function WhyNova() {
  const { t } = useLang();
  const points = [t("why.1"), t("why.2"), t("why.3"), t("why.4"), t("why.5")];

  return (
    <section className="bg-white px-4 py-16 md:px-6 md:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
        <div className="relative overflow-hidden rounded-[2rem] shadow-nova ring-1 ring-navy/10">
          <Image
            src="/brand/triporteur-logo-closeup.png"
            alt="Lavage Nova"
            width={1000}
            height={750}
            className="h-auto w-full object-cover"
          />
        </div>
        <div>
          <SectionHeading
            align="left"
            eyebrow={t("why.eyebrow")}
            title={t("why.title")}
            subtitle={t("why.sub")}
          />
          <ul className="mt-8 space-y-3">
            {points.map((p) => (
              <li
                key={p}
                className="flex gap-3 rounded-2xl bg-foam px-4 py-3 text-sm font-medium text-navy ring-1 ring-navy/5"
              >
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-cyan" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
