"use client";

import { useState } from "react";
import { MapPinned } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { ZONES } from "@/lib/constants";
import { SectionHeading } from "./SectionHeading";

export function ZoneChecker() {
  const { t } = useLang();
  const [selected, setSelected] = useState<string>(ZONES[0]);

  return (
    <section id="zones" className="scroll-mt-24 bg-foam px-4 py-16 md:px-6 md:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={t("zones.eyebrow")}
          title={t("zones.title")}
          subtitle={t("zones.sub")}
        />
        <div className="mx-auto mt-10 max-w-2xl rounded-[1.75rem] bg-white p-6 shadow-nova ring-1 ring-navy/5">
          <div className="flex flex-wrap gap-2">
            {ZONES.map((z) => (
              <button
                key={z}
                type="button"
                onClick={() => setSelected(z)}
                className={`rounded-full px-3 py-1.5 text-xs font-bold transition ${
                  selected === z
                    ? "bg-navy text-white"
                    : "bg-foam text-navy ring-1 ring-navy/10"
                }`}
              >
                {z}
              </button>
            ))}
          </div>
          <div className="mt-6 flex items-start gap-3 rounded-2xl bg-foam p-4">
            <MapPinned className="mt-0.5 h-5 w-5 text-cyan" />
            <div>
              <p className="font-display font-bold text-navy">{selected}</p>
              <p className="mt-1 text-sm text-muted">{t("zones.ok")}</p>
            </div>
          </div>
          <a
            href="#reserver"
            className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-navy px-5 py-3.5 font-display text-sm font-bold text-white"
          >
            {t("zones.cta")}
          </a>
        </div>
      </div>
    </section>
  );
}
