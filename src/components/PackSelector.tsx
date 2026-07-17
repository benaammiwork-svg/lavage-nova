"use client";

import Image from "next/image";
import {
  Bike,
  Car,
  CircleDot,
  LayoutDashboard,
  SprayCan,
  Wind,
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
    <section
      id="services"
      className="scroll-mt-24 bg-white px-4 py-14 sm:py-16 md:px-6 md:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={t("pricing.eyebrow")}
          title={t("pricing.title")}
          subtitle={t("pricing.sub")}
        />

        <div className="mt-10 grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {VEHICLES.map((v) => (
            <article
              key={v.id}
              className="flex flex-col overflow-hidden rounded-2xl bg-foam ring-1 ring-navy/8 transition hover:ring-cyan/40 sm:rounded-[1.5rem]"
            >
              {/* Photo fully visible — no text overlay */}
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-navy/5">
                <Image
                  src={v.image}
                  alt={vehicleTitle(v.id)}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-lg font-extrabold text-navy sm:text-xl">
                      {vehicleTitle(v.id)}
                    </h3>
                    {lang !== "ar" && (
                      <p className="mt-0.5 text-xs text-muted">
                        {t(`vehicle.${v.id}.ar`)}
                      </p>
                    )}
                  </div>
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-cyan ring-1 ring-navy/8">
                    {v.id === "moto" ? (
                      <Bike className="h-4 w-4" />
                    ) : (
                      <Car className="h-4 w-4" />
                    )}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {v.id === "moto" ? t("vehicle.moto.desc") : t("vehicle.desc")}
                </p>

                <p className="mt-4 font-display text-3xl font-extrabold text-navy sm:text-4xl">
                  {v.priceFrom && (
                    <span className="me-2 align-middle text-xs font-bold uppercase tracking-wide text-cyan sm:text-sm">
                      {t("pricing.from")}
                    </span>
                  )}
                  {v.price}
                  <span className="ms-1 text-sm font-bold text-muted">
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

        <div className="mt-10 rounded-2xl bg-foam p-5 ring-1 ring-navy/8 sm:mt-12 sm:rounded-[1.5rem] sm:p-8">
          <h3 className="text-center font-display text-base font-extrabold text-navy sm:text-lg">
            {t("pricing.includesTitle")}
          </h3>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {INCLUDES.map((key) => {
              const Icon = INC_ICONS[key];
              return (
                <li
                  key={key}
                  className="flex items-center gap-3 rounded-xl bg-white px-3 py-3 sm:rounded-2xl sm:px-4"
                >
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cyan/15 text-cyan sm:h-10 sm:w-10">
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </span>
                  <span className="font-display text-xs font-semibold text-navy sm:text-sm">
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
