"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Sparkles } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { BRAND, waLink } from "@/lib/constants";

export function Hero() {
  const { t } = useLang();
  const wa = waLink(
    "Salut Lavage Nova 👋\nJe souhaite réserver un lavage à domicile à Agadir.",
  );

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_85%_20%,rgba(43,179,255,0.28),transparent_55%),linear-gradient(160deg,#071526_0%,#0B1F3A_45%,#123458_100%)]" />
      <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:22px_22px]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-6 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="text-white"
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-soft backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            {t("hero.eyebrow")}
          </p>

          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] tracking-tight md:text-5xl lg:text-[3.4rem]">
            <span className="text-white">Lavage </span>
            <span className="text-cyan">Nova</span>
          </h1>

          <p className="mt-4 max-w-xl font-display text-xl font-semibold text-white/95 md:text-2xl">
            {t("hero.headline")}
          </p>

          <p className="mt-4 max-w-lg text-base leading-relaxed text-white/70 md:text-lg">
            {t("hero.sub")}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#reserver"
              className="inline-flex rounded-full bg-cyan px-7 py-3.5 font-display text-sm font-bold text-navy shadow-[0_12px_40px_rgba(43,179,255,0.35)] transition hover:bg-cyan-soft"
            >
              {t("hero.cta")}
            </a>
            <a
              href="#services"
              className="inline-flex rounded-full border border-white/25 bg-white/5 px-7 py-3.5 font-display text-sm font-bold text-white backdrop-blur transition hover:bg-white/10"
            >
              {t("hero.ctaSecondary")}
            </a>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[t("hero.trust1"), t("hero.trust2"), t("hero.trust3"), t("hero.trust4")].map(
              (label) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-center backdrop-blur"
                >
                  <ShieldCheck className="mx-auto h-4 w-4 text-cyan" />
                  <p className="mt-1.5 font-display text-[11px] font-bold leading-tight text-white/90">
                    {label}
                  </p>
                </div>
              ),
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.08 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[2rem] shadow-[0_30px_80px_rgba(0,0,0,0.45)] ring-1 ring-white/15">
            <Image
              src="/brand/triporteur-lavage-nova-branded.png"
              alt="Lavage Nova — service mobile à Agadir"
              width={1200}
              height={900}
              priority
              className="h-auto w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 start-0 end-0 p-5 md:p-6">
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
                <p className="font-display text-sm font-bold text-white">
                  {t("hero.cardTitle")}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-white/75">
                  {t("hero.cardText")}
                </p>
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex text-xs font-bold text-cyan"
                >
                  WhatsApp · {BRAND.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
