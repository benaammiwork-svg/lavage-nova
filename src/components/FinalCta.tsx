"use client";

import { MessageCircle, Phone } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { BRAND, waLink } from "@/lib/constants";

export function FinalCta() {
  const { t } = useLang();
  const wa = waLink("Salut Lavage Nova 👋\nJe souhaite réserver.");

  return (
    <section className="bg-foam px-4 py-14 md:px-6 md:py-20">
      <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl bg-navy px-5 py-10 text-center text-white shadow-nova sm:rounded-[2rem] sm:px-10 sm:py-14">
        <h2 className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl">
          {t("cta.title")}
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm text-white/70 sm:text-base">
          {t("cta.sub")}
        </p>
        <p className="mt-5 font-display text-2xl font-extrabold text-cyan sm:text-3xl">
          {BRAND.phoneDisplay}
        </p>
        <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-wa px-7 py-3.5 font-display text-sm font-bold text-white"
          >
            <MessageCircle className="h-4 w-4" />
            {t("cta.wa")}
          </a>
          <a
            href={`tel:+${BRAND.phoneE164}`}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 font-display text-sm font-bold text-navy"
          >
            <Phone className="h-4 w-4" />
            {t("cta.call")}
          </a>
        </div>
      </div>
    </section>
  );
}
