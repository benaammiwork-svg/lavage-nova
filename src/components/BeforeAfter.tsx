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
    <div className="overflow-hidden rounded-[1.75rem] bg-navy shadow-nova ring-1 ring-navy/10">
      <div className="relative aspect-[16/10] select-none">
        {/* After (clean) as base */}
        <Image
          src={after}
          alt={`${label} — ${t("ba.after")}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 800px"
          priority
        />
        {/* Before (dirty) clipped — same framing */}
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
          <div className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white font-display text-sm font-extrabold text-navy shadow-nova">
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

        <span className="absolute start-3 top-3 rounded-full bg-navy/85 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
          {t("ba.before")}
        </span>
        <span className="absolute end-3 top-3 rounded-full bg-cyan px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-navy">
          {t("ba.after")}
        </span>
      </div>
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
      className="scroll-mt-24 bg-white px-4 py-16 md:px-6 md:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={t("ba.eyebrow")}
          title={t("ba.title")}
          subtitle={t("ba.sub")}
        />

        <div className="mx-auto mt-8 flex max-w-lg flex-wrap justify-center gap-2">
          {GALLERY.map((g, i) => (
            <button
              key={g.id}
              type="button"
              onClick={() => setActive(i)}
              className={`rounded-full px-5 py-2 font-display text-sm font-bold transition ${
                active === i
                  ? "bg-navy text-white"
                  : "bg-foam text-navy ring-1 ring-navy/10"
              }`}
            >
              {t(`ba.${g.id}`)}
            </button>
          ))}
        </div>

        <div className="mx-auto mt-8 max-w-4xl">
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
