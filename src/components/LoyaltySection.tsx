"use client";

import { motion } from "framer-motion";
import { Gift, Sparkles } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { waLink } from "@/lib/constants";

export function LoyaltySection() {
  const { t } = useLang();
  const wa = waLink(
    "Salut Lavage Nova 👋\nJe veux activer la carte de fidélité (5 lavages = 1 offert).",
  );

  const stamps = [1, 2, 3, 4, 5];

  return (
    <section
      id="fidelite"
      className="scroll-mt-24 relative overflow-hidden px-4 py-14 sm:py-16 md:px-6 md:py-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(43,179,255,0.18),_transparent_55%),linear-gradient(180deg,#071526_0%,#0B1F3A_55%,#0E2A4D_100%)]" />
      <div className="pointer-events-none absolute -end-20 top-10 h-64 w-64 rounded-full bg-cyan/20 blur-3xl" />
      <div className="pointer-events-none absolute -start-16 bottom-0 h-56 w-56 rounded-full bg-cyan/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        <div className="text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-cyan-soft backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            {t("loyalty.eyebrow")}
          </p>

          {/* Giant visual equation — readable without reading body copy */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-5">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="flex h-24 w-24 items-center justify-center rounded-3xl bg-white font-display text-5xl font-extrabold text-navy shadow-nova sm:h-28 sm:w-28 sm:text-6xl"
            >
              5
            </motion.div>
            <span className="font-display text-4xl font-extrabold text-cyan sm:text-5xl">
              =
            </span>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative flex h-24 min-w-[7.5rem] items-center justify-center gap-2 rounded-3xl bg-cyan px-4 font-display text-4xl font-extrabold text-navy shadow-[0_16px_50px_rgba(43,179,255,0.45)] sm:h-28 sm:min-w-[9rem] sm:text-5xl"
            >
              <Gift className="h-8 w-8 sm:h-10 sm:w-10" />
              1
              <span className="absolute -top-3 end-3 rotate-6 rounded-full bg-white px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-navy shadow">
                {t("loyalty.free")}
              </span>
            </motion.div>
          </div>

          <h2 className="mt-8 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            {t("loyalty.title")}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
            {t("loyalty.sub")}
          </p>
        </div>

        {/* Punch-card visual */}
        <div className="mx-auto mt-10 max-w-3xl rounded-[1.75rem] border border-white/10 bg-white/5 p-5 backdrop-blur-md sm:p-8">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {stamps.map((n, i) => (
              <motion.div
                key={n}
                initial={{ y: 12, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="relative flex h-14 w-14 flex-col items-center justify-center rounded-full border-2 border-dashed border-white/35 bg-navy/40 font-display text-lg font-extrabold text-white/90 sm:h-16 sm:w-16"
              >
                {n}
                <span className="absolute -bottom-5 text-[9px] font-semibold uppercase tracking-wide text-white/45">
                  {t("loyalty.wash")}
                </span>
              </motion.div>
            ))}

            <span className="mx-1 hidden font-display text-2xl font-bold text-cyan sm:inline">
              →
            </span>

            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="relative mt-6 flex h-16 w-16 flex-col items-center justify-center rounded-full bg-cyan font-display text-sm font-extrabold text-navy shadow-[0_0_0_6px_rgba(43,179,255,0.25)] sm:mt-0 sm:h-[4.5rem] sm:w-[4.5rem] sm:text-base"
            >
              <Gift className="mb-0.5 h-5 w-5" />
              {t("loyalty.free")}
            </motion.div>
          </div>

          <p className="mt-10 text-center font-display text-lg font-bold text-white sm:text-xl">
            {t("loyalty.formula")}
          </p>

          <div className="mt-6 flex justify-center">
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-white px-6 py-3.5 font-display text-sm font-bold text-navy transition hover:bg-cyan"
            >
              {t("loyalty.cta")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
