"use client";

import Image from "next/image";
import {
  Car,
  CircleDot,
  LayoutDashboard,
  SprayCan,
  Wind,
  Bike,
} from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { INCLUDES, VEHICLES, VehicleId } from "@/lib/constants";
import { SectionHeading } from "./SectionHeading";

const INC_ICONS = {
  exterior: Car,
  vacuum: Wind,
  windows: SprayCan,
  dashboard: LayoutDashboard,
  tires: CircleDot,
  freshener: SprayCan,
} as const;

export function PackSelector({
  onSelect,
}: {
  onSelect?: (id: VehicleId) => void;
}) {
  const { t, lang } = useLang();

  function vehicleTitle(id: VehicleId) {
    if (lang === "ar") {
      if (id === "normal") return t("vehicle.normal.ar");
      if (id === "suv") return t("vehicle.suv.ar");
      return t("vehicle.moto.ar");
    }
    return t(`vehicle.${id}`);
  }

  return (
    <section id="services" className="scroll-mt-24 bg-foam px-4 py-16 md:px-6 md:py-22">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={t("pricing.eyebrow")}
          title={t("pricing.title")}
          subtitle={t("pricing.sub")}
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {VEHICLES.map((v) => (
            <article
              key={v.id}
              className="group overflow-hidden rounded-[1.75rem] bg-white shadow-nova ring-1 ring-navy/5 transition hover:-translate-y-1 hover:ring-cyan/40"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={v.image}
                  alt={vehicleTitle(v.id)}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
                <div className="absolute bottom-3 start-3 end-3 flex items-end justify-between gap-2">
                  <div>
                    <p className="font-display text-lg font-extrabold text-white">
                      {vehicleTitle(v.id)}
                    </p>
                    {lang !== "ar" && (
                      <p className="text-xs text-white/70">{t(`vehicle.${v.id}.ar`)}</p>
                    )}
                  </div>
                  {v.id === "moto" ? (
                    <Bike className="h-5 w-5 text-cyan" />
                  ) : (
                    <Car className="h-5 w-5 text-cyan" />
                  )}
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm text-muted">
                  {v.id === "moto" ? t("vehicle.moto.desc") : t("vehicle.desc")}
                </p>
                <p className="mt-4 font-display text-4xl font-extrabold text-navy">
                  {v.priceFrom && (
                    <span className="me-2 text-sm font-bold text-cyan">
                      {t("pricing.from")}
                    </span>
                  )}
                  {v.price}
                  <span className="ms-1 text-base font-bold text-muted">
                    {t("pricing.mad")}
                  </span>
                </p>

                <a
                  href="#reserver"
                  onClick={() => onSelect?.(v.id)}
                  className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-navy px-5 py-3 font-display text-sm font-bold text-white transition hover:bg-navy-deep"
                >
                  {t("pricing.cta")}
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-[1.75rem] bg-white p-6 ring-1 ring-navy/5 md:p-8">
          <h3 className="text-center font-display text-lg font-extrabold text-navy">
            {t("pricing.includesTitle")}
          </h3>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {INCLUDES.map((key) => {
              const Icon = INC_ICONS[key];
              return (
                <li
                  key={key}
                  className="flex items-center gap-3 rounded-2xl bg-foam px-4 py-3"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan/15 text-cyan">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-display text-sm font-semibold text-navy">
                    {t(`inc.${key}`)}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
