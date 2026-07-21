"use client";

import Image from "next/image";
import {
  Clock3,
  Droplets,
  Home,
  ShieldCheck,
  ThumbsUp,
} from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { SectionHeading } from "./SectionHeading";

export function WhyNova() {
  const { t } = useLang();
  const points = [
    { icon: Home, title: t("why.1.t"), text: t("why.1.d") },
    { icon: Droplets, title: t("why.2.t"), text: t("why.2.d") },
    { icon: ShieldCheck, title: t("why.3.t"), text: t("why.3.d") },
    { icon: Clock3, title: t("why.4.t"), text: t("why.4.d") },
    { icon: ThumbsUp, title: t("why.5.t"), text: t("why.5.d") },
  ];

  return (
    <section className="bg-white px-4 py-14 sm:py-16 md:px-6 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col items-center rounded-[2rem] bg-foam p-8 ring-1 ring-navy/5 sm:p-10">
            <Image
              src="/brand/logo-lavage-nova.png"
              alt="Lavage Nova"
              width={280}
              height={280}
              className="h-auto w-48 object-contain sm:w-56"
            />
            <p className="mt-4 text-center font-display text-base italic text-navy/70">
              “{t("brand.slogan")}”
            </p>
          </div>

          <div>
            <SectionHeading
              align="left"
              eyebrow={t("why.eyebrow")}
              title={t("why.title")}
              subtitle={t("why.sub")}
            />
            <ul className="mt-8 space-y-3">
              {points.map(({ icon: Icon, title, text }) => (
                <li
                  key={title}
                  className="flex gap-3 rounded-2xl bg-foam px-4 py-3.5 ring-1 ring-navy/5"
                >
                  <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan/15 text-cyan">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-display text-sm font-extrabold uppercase tracking-wide text-navy">
                      {title}
                    </span>
                    <span className="mt-0.5 block text-sm text-muted">{text}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
