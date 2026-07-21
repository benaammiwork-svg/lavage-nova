"use client";

import { Clock3, Droplets, Home, ShieldCheck, ThumbsUp } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

export function TrustRibbon() {
  const { t } = useLang();
  const items = [
    { icon: Home, label: t("trust.come") },
    { icon: Droplets, label: t("trust.products") },
    { icon: ShieldCheck, label: t("trust.team") },
    { icon: Clock3, label: t("trust.fast") },
    { icon: ThumbsUp, label: t("trust.satisfaction") },
  ];

  return (
    <section className="border-y border-navy/5 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-4 md:px-6 md:py-5">
        <div className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-1 scrollbar-none md:mx-0 md:grid md:grid-cols-5 md:gap-4 md:overflow-visible md:px-0 md:pb-0">
          {items.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex min-w-[148px] shrink-0 items-center gap-2.5 rounded-2xl bg-foam px-3 py-3 text-navy md:min-w-0 md:justify-center md:bg-transparent md:px-0 md:py-0"
            >
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan/15 text-cyan md:bg-cyan/10">
                <Icon className="h-4 w-4" />
              </span>
              <span className="font-display text-xs font-bold tracking-wide md:text-sm">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
