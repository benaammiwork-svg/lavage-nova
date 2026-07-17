"use client";

import { Building2 } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { waLink } from "@/lib/constants";

export function ProBanner() {
  const { t } = useLang();
  const wa = waLink(
    "Salut Lavage Nova 👋\nJe souhaite un devis Pro / Résidence à Agadir.",
  );

  return (
    <section className="px-4 py-10 md:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy to-navy-deep px-6 py-8 text-white md:flex-row md:items-center md:px-10">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-cyan/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-cyan">
            <Building2 className="h-3.5 w-3.5" />
            Pro
          </div>
          <h2 className="mt-3 font-display text-2xl font-extrabold md:text-3xl">
            {t("pro.title")}
          </h2>
          <p className="mt-2 text-sm text-white/75 md:text-base">{t("pro.sub")}</p>
        </div>
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 rounded-full bg-cyan px-6 py-3.5 font-display text-sm font-bold text-navy transition hover:bg-cyan-soft"
        >
          {t("pro.cta")}
        </a>
      </div>
    </section>
  );
}
