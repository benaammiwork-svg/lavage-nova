"use client";

import Image from "next/image";
import { useState } from "react";
import { useLang } from "@/context/LanguageContext";
import { GALLERY } from "@/lib/constants";
import { SectionHeading } from "./SectionHeading";

function SameCarSlider({
  before,
  after,
  label,
}: {
  before: string;
  after: string;
  label: string;
}) {
  const { t } = useLang();
  const [pos, setPos] = useState(50);

  return (
    <div className="overflow-hidden rounded-2xl bg-navy shadow-nova ring-1 ring-navy/10 sm:rounded-[1.75rem]">
      <div className="relative aspect-[4/3] select-none touch-pan-y sm:aspect-[16/10]">
        <Image
          src={after}
          alt={`${label} — ${t("ba.after")}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 800px"
          priority
        />
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <Image
            src={before}
            alt={`${label} — ${t("ba.before")}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>

        <div
          className="pointer-events-none absolute inset-y-0 z-10 w-0.5 bg-white shadow-[0_0_20px_rgba(0,0,0,0.35)]"
          style={{ left: `${pos}%` }}
        >
          <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white font-display text-sm font-extrabold text-navy shadow-nova sm:h-11 sm:w-11">
            ↔
          </div>
        </div>

        <input
          type="range"
          min={2}
          max={98}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label={`${t("ba.before")} / ${t("ba.after")} — ${label}`}
          className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
        />

        <span className="absolute start-2 top-2 rounded-full bg-navy/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white sm:start-3 sm:top-3 sm:px-3 sm:text-[11px]">
          {t("ba.before")}
        </span>
        <span className="absolute end-2 top-2 rounded-full bg-cyan px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-navy sm:end-3 sm:top-3 sm:px-3 sm:text-[11px]">
          {t("ba.after")}
        </span>
      </div>

      <p className="bg-white px-4 py-3 text-center text-xs font-semibold text-navy/70 sm:text-sm">
        {label}
      </p>
    </div>
  );
}

export function BeforeAfter() {
  const { t } = useLang();
  const [active, setActive] = useState(0);
  const item = GALLERY[active];

  return (
    <section
      id="avant-apres"
      className="scroll-mt-24 bg-foam px-4 py-14 sm:py-16 md:px-6 md:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={t("ba.eyebrow")}
          title={t("ba.title")}
          subtitle={t("ba.sub")}
        />

        <div className="mx-auto mt-8 flex max-w-lg gap-2 overflow-x-auto pb-1 scrollbar-none sm:flex-wrap sm:justify-center sm:overflow-visible">
          {GALLERY.map((g, i) => (
            <button
              key={g.id}
              type="button"
              onClick={() => setActive(i)}
              className={`shrink-0 rounded-full px-5 py-2.5 font-display text-sm font-bold transition ${
                active === i
                  ? "bg-navy text-white"
                  : "bg-white text-navy ring-1 ring-navy/10"
              }`}
            >
              {t(`ba.${g.id}`)}
            </button>
          ))}
        </div>

        <div className="mx-auto mt-6 max-w-4xl sm:mt-8">
          <SameCarSlider
            key={item.id}
            before={item.before}
            after={item.after}
            label={t(`ba.${item.id}`)}
          />
        </div>
      </div>
    </section>
  );
}
