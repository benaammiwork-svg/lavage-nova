"use client";

import { useLang } from "@/context/LanguageContext";
import { BRAND, waLink } from "@/lib/constants";

export function FinalCta() {
  const { t } = useLang();
  const wa = waLink("Salut Lavage Nova 👋\nJe souhaite réserver.");

  return (
    <section className="relative overflow-hidden bg-navy px-4 py-16 md:px-6 md:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(43,179,255,0.25),transparent_45%)]" />
      <div className="relative mx-auto max-w-3xl text-center text-white">
        <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">
          {t("cta.title")}
        </h2>
        <p className="mt-3 text-white/70">{t("cta.sub")}</p>
        <p className="mt-4 font-display text-2xl font-extrabold text-cyan md:text-3xl">
          {BRAND.phoneDisplay}
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-wa px-7 py-3.5 font-display text-sm font-bold text-white shadow-nova"
          >
            {t("cta.wa")}
          </a>
          <a
            href={`tel:+${BRAND.phoneE164}`}
            className="rounded-full bg-white px-7 py-3.5 font-display text-sm font-bold text-navy"
          >
            {t("cta.call")}
          </a>
        </div>
      </div>
    </section>
  );
}
