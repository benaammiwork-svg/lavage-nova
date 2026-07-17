"use client";

import { useMemo, useState } from "react";
import { Sparkles, Trophy } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { waLink } from "@/lib/constants";
import { SectionHeading } from "./SectionHeading";

const SPOTS = [
  { id: 1, top: "28%", left: "22%", size: 44 },
  { id: 2, top: "42%", left: "48%", size: 36 },
  { id: 3, top: "58%", left: "30%", size: 40 },
  { id: 4, top: "35%", left: "68%", size: 38 },
  { id: 5, top: "62%", left: "62%", size: 42 },
  { id: 6, top: "48%", left: "78%", size: 34 },
];

export function DirtGame() {
  const { t } = useLang();
  const [cleaned, setCleaned] = useState<number[]>([]);
  const done = cleaned.length === SPOTS.length;
  const code = useMemo(() => (done ? "NOVA-PROPRE10" : ""), [done]);
  const progress = Math.round((cleaned.length / SPOTS.length) * 100);
  const wa = waLink(
    `Salut Lavage Nova 👋\nJe réserve un lavage.\nCode: ${code || "—"}`,
  );

  return (
    <section id="jeu" className="scroll-mt-24 bg-navy-wave px-4 py-16 md:px-6 md:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          light
          eyebrow={t("game.eyebrow")}
          title={t("game.title")}
          subtitle={t("game.sub")}
        />

        <div className="mx-auto mt-10 grid max-w-4xl gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="relative overflow-hidden rounded-[2rem] bg-white/5 p-4 ring-1 ring-white/10">
            <div className="mb-3 flex items-center justify-between text-sm text-white/80">
              <span className="font-display font-bold">
                {t("game.progress")} {progress}%
              </span>
              <span>
                {cleaned.length}/{SPOTS.length} {t("game.spots")}
              </span>
            </div>

            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-[radial-gradient(circle_at_30%_40%,#3d5a78,transparent_55%),linear-gradient(160deg,#2a455f,#13283f)]">
              <div className="absolute inset-x-[10%] bottom-[18%] top-[30%] rounded-[40%] bg-gradient-to-b from-slate-300/90 to-slate-500/90" />
              <div className="absolute bottom-[12%] left-[18%] h-10 w-14 rounded-full bg-navy-deep/80" />
              <div className="absolute bottom-[12%] right-[18%] h-10 w-14 rounded-full bg-navy-deep/80" />

              {!done &&
                SPOTS.map((spot) =>
                  cleaned.includes(spot.id) ? null : (
                    <button
                      key={spot.id}
                      type="button"
                      onClick={() =>
                        setCleaned((prev) =>
                          prev.includes(spot.id) ? prev : [...prev, spot.id],
                        )
                      }
                      className="absolute z-10 rounded-full bg-[radial-gradient(circle_at_30%_30%,#6b4f2a,#2c2114)] shadow-lg ring-2 ring-amber-700/40 transition hover:scale-110"
                      style={{
                        top: spot.top,
                        left: spot.left,
                        width: spot.size,
                        height: spot.size,
                      }}
                      aria-label="clean"
                    />
                  ),
                )}

              {done && (
                <div className="absolute inset-0 flex items-center justify-center bg-navy/50 backdrop-blur-[2px]">
                  <div className="rounded-2xl bg-white px-6 py-5 text-center shadow-nova">
                    <Trophy className="mx-auto h-8 w-8 text-cyan" />
                    <p className="mt-2 font-display text-lg font-extrabold text-navy">
                      {t("game.done")}
                    </p>
                    <p className="mt-1 text-sm text-muted">
                      {t("game.code")}:{" "}
                      <span className="font-bold text-cyan">{code}</span>
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-cyan transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-[2rem] bg-white/5 p-6 text-white ring-1 ring-white/10">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan/20 text-cyan">
              <Sparkles className="h-6 w-6" />
            </div>
            <h3 className="mt-4 font-display text-2xl font-extrabold">
              {t("game.why")}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/75">
              {t("game.whyText")}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {done ? (
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-wa px-5 py-3 font-display text-sm font-bold text-white"
                >
                  {t("game.cta")}
                </a>
              ) : (
                <p className="text-sm text-cyan-soft">{t("game.hint")}</p>
              )}
              <button
                type="button"
                onClick={() => setCleaned([])}
                className="rounded-full border border-white/20 px-5 py-3 font-display text-sm font-bold text-white hover:bg-white/10"
              >
                {t("game.retry")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
