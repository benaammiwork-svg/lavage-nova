"use client";

import { Clock3, Home, ShieldCheck, ThumbsUp, Users } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

export function TrustRibbon() {
  const { t } = useLang();
  const items = [
    { icon: ShieldCheck, label: t("trust.products") },
    { icon: Clock3, label: t("trust.fast") },
    { icon: Users, label: t("trust.team") },
    { icon: Home, label: t("trust.come") },
    { icon: ThumbsUp, label: t("trust.satisfaction") },
  ];

  return (
    <section className="border-y border-navy/5 bg-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-5 md:px-6">
        {items.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex min-w-[140px] flex-1 items-center justify-center gap-2.5 text-navy"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-cyan/10 text-cyan">
              <Icon className="h-4 w-4" />
            </span>
            <span className="font-display text-xs font-bold tracking-wide md:text-sm">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
