"use client";

import { LANGS } from "@/i18n/translations";
import { useLang } from "@/context/LanguageContext";

export function LanguageSwitcher() {
  const { lang, setLang, t } = useLang();

  return (
    <div
      className="inline-flex items-center rounded-full bg-foam p-1 ring-1 ring-navy/10"
      role="group"
      aria-label={t("lang.label")}
    >
      {LANGS.map((l) => (
        <button
          key={l.id}
          type="button"
          onClick={() => setLang(l.id)}
          className={`min-w-[2.25rem] rounded-full px-2.5 py-1.5 font-display text-xs font-bold transition ${
            lang === l.id
              ? "bg-navy text-white shadow-sm"
              : "text-navy/70 hover:text-navy"
          }`}
          aria-pressed={lang === l.id}
        >
          {l.short}
        </button>
      ))}
    </div>
  );
}
