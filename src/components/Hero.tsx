"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MessageCircle, Phone } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { BRAND, waLink } from "@/lib/constants";

export function Hero() {
  const { t } = useLang();
  const wa = waLink(
    "Salut Lavage Nova 👋\nJe souhaite réserver un lavage à domicile à Agadir.",
  );

  return (
    <section className="relative overflow-hidden bg-foam">
      {/* Atmosphere — not flat, no overlay on the photo */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -start-24 top-0 h-72 w-72 rounded-full bg-cyan/20 blur-3xl" />
        <div className="absolute -end-16 bottom-0 h-80 w-80 rounded-full bg-navy/10 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-10 sm:py-14 md:px-6 md:py-20">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1 lg:col-span-5"
          >
            <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-navy shadow-sm ring-1 ring-navy/8">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
              {t("hero.eyebrow")}
            </p>

            <h1 className="mt-5 font-display text-[2.4rem] font-extrabold leading-[1.05] tracking-tight text-navy sm:text-5xl lg:text-[3.25rem]">
              Lavage <span className="text-cyan">Nova</span>
            </h1>

            <p className="mt-4 max-w-md font-display text-lg font-semibold leading-snug text-navy/90 sm:text-xl">
              {t("hero.headline")}
            </p>

            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted sm:text-base">
              {t("hero.sub")}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href="#reserver"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-navy px-6 py-3.5 font-display text-sm font-bold text-white shadow-nova transition hover:bg-navy-deep"
              >
                {t("hero.cta")}
                <ArrowRight className="h-4 w-4 rtl:rotate-180" />
              </a>
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-wa px-6 py-3.5 font-display text-sm font-bold text-white transition hover:brightness-105"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full px-4 py-3 font-display text-sm font-bold text-navy/70 underline-offset-4 hover:text-cyan hover:underline sm:no-underline"
              >
                {t("hero.ctaSecondary")}
              </a>
            </div>

            <ul className="mt-8 grid gap-2.5 sm:grid-cols-2">
              {[t("hero.trust1"), t("hero.trust2"), t("hero.trust3"), t("hero.trust4")].map(
                (label) => (
                  <li
                    key={label}
                    className="flex items-center gap-2 text-sm font-medium text-navy/80"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan" />
                    {label}
                  </li>
                ),
              )}
            </ul>
          </motion.div>

          {/* Visual — full photo, info BELOW (never over the image) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="order-1 lg:order-2 lg:col-span-7"
          >
            <div className="overflow-hidden rounded-2xl bg-white shadow-nova ring-1 ring-navy/8 sm:rounded-[1.75rem]">
              <div className="relative aspect-[4/3] w-full sm:aspect-[16/11]">
                <Image
                  src="/brand/triporteur-lavage-nova-branded.png"
                  alt="Lavage Nova — service mobile à Agadir"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Info under the image — always fully visible */}
              <div className="border-t border-navy/5 bg-white px-4 py-4 sm:px-6 sm:py-5">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="min-w-0">
                    <p className="inline-flex rounded-full bg-cyan/15 px-2.5 py-1 font-display text-[11px] font-bold uppercase tracking-wider text-navy">
                      {t("hero.cardTitle")}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {t("hero.cardText")}
                    </p>
                  </div>

                  <div className="flex shrink-0 flex-col gap-2 sm:items-end">
                    <a
                      href={wa}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-wa px-4 py-2.5 font-display text-sm font-bold text-white sm:w-auto"
                    >
                      <MessageCircle className="h-4 w-4" />
                      WhatsApp · {BRAND.phoneDisplay}
                    </a>
                    <a
                      href={`tel:+${BRAND.phoneE164}`}
                      className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-navy/70 hover:text-cyan"
                    >
                      <Phone className="h-3.5 w-3.5" />
                      {t("cta.call")} {BRAND.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
