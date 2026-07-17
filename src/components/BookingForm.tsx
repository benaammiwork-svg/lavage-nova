"use client";

import { FormEvent, type ReactNode, useMemo, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import {
  TIME_SLOTS,
  VEHICLES,
  VehicleId,
  ZONES,
  buildBookingWhatsApp,
  waLink,
} from "@/lib/constants";
import { SectionHeading } from "./SectionHeading";

function makeRef() {
  return `LN-${Date.now().toString(36).toUpperCase().slice(-7)}`;
}

export function BookingForm() {
  const { t, lang } = useLang();
  const [step, setStep] = useState(1);
  const [vehicle, setVehicle] = useState<VehicleId>("normal");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [zone, setZone] = useState<string>(ZONES[0]);
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState<string>(TIME_SLOTS[1]);
  const [note, setNote] = useState("");
  const [ref, setRef] = useState("");
  const [waHref, setWaHref] = useState("");

  const selected = useMemo(
    () => VEHICLES.find((v) => v.id === vehicle)!,
    [vehicle],
  );

  const vLabel =
    lang === "ar"
      ? vehicle === "normal"
        ? t("vehicle.normal.ar")
        : vehicle === "suv"
          ? t("vehicle.suv.ar")
          : t("vehicle.moto.ar")
      : t(`vehicle.${vehicle}`);

  async function finish(e: FormEvent) {
    e.preventDefault();
    const bookingRef = makeRef();
    const payload = {
      name,
      phone,
      zone,
      vehicle: vLabel,
      price: selected.price,
      date: date || "Flexible",
      slot,
      note,
      ref: bookingRef,
      lang,
    };

    try {
      await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch {
      /* WhatsApp remains primary */
    }

    setRef(bookingRef);
    setWaHref(waLink(buildBookingWhatsApp(payload)));
    setStep(3);
  }

  return (
    <section id="reserver" className="scroll-mt-24 bg-foam px-4 py-16 md:px-6 md:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={t("book.eyebrow")}
          title={t("book.title")}
          subtitle={t("book.sub")}
        />

        <div className="mx-auto mt-10 grid max-w-4xl gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[1.75rem] bg-white p-6 shadow-nova ring-1 ring-navy/5 md:p-8">
            <ol className="mb-6 flex gap-2">
              {[1, 2, 3].map((n) => (
                <li
                  key={n}
                  className={`flex-1 rounded-full py-2 text-center font-display text-xs font-bold ${
                    step >= n ? "bg-navy text-white" : "bg-foam text-muted"
                  }`}
                >
                  {n === 1
                    ? t("book.step1")
                    : n === 2
                      ? t("book.step2")
                      : t("book.step3")}
                </li>
              ))}
            </ol>

            {step === 1 && (
              <div className="space-y-3">
                {VEHICLES.map((v) => (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setVehicle(v.id)}
                    className={`flex w-full items-center justify-between rounded-2xl px-4 py-4 text-start transition ${
                      vehicle === v.id
                        ? "bg-navy text-white ring-2 ring-cyan"
                        : "bg-foam text-navy ring-1 ring-navy/5 hover:ring-cyan/50"
                    }`}
                  >
                    <span className="font-display font-bold">
                      {lang === "ar"
                        ? v.id === "normal"
                          ? t("vehicle.normal.ar")
                          : v.id === "suv"
                            ? t("vehicle.suv.ar")
                            : t("vehicle.moto.ar")
                        : t(`vehicle.${v.id}`)}
                    </span>
                    <span className="font-display text-lg font-extrabold">
                      {v.priceFrom ? `${t("pricing.from")} ` : ""}
                      {v.price} {t("pricing.mad")}
                    </span>
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="mt-4 w-full rounded-full bg-cyan py-3.5 font-display text-sm font-bold text-navy"
                >
                  {t("book.next")}
                </button>
              </div>
            )}

            {step === 2 && (
              <form onSubmit={finish} className="space-y-4">
                <Field label={t("book.name")}>
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={inputClass}
                  />
                </Field>
                <Field label={t("book.phone")}>
                  <input
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={inputClass}
                    placeholder="06…"
                  />
                </Field>
                <Field label={t("book.zone")}>
                  <select
                    value={zone}
                    onChange={(e) => setZone(e.target.value)}
                    className={inputClass}
                  >
                    {ZONES.map((z) => (
                      <option key={z} value={z}>
                        {z}
                      </option>
                    ))}
                  </select>
                </Field>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label={t("book.date")}>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className={inputClass}
                    />
                  </Field>
                  <Field label={t("book.slot")}>
                    <select
                      value={slot}
                      onChange={(e) => setSlot(e.target.value)}
                      className={inputClass}
                    >
                      {TIME_SLOTS.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>
                <Field label={t("book.note")}>
                  <textarea
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    className={`${inputClass} min-h-[80px]`}
                  />
                </Field>
                <p className="text-xs text-muted">{t("book.privacy")}</p>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="rounded-full border border-navy/15 px-5 py-3 font-display text-sm font-bold text-navy"
                  >
                    {t("book.back")}
                  </button>
                  <button
                    type="submit"
                    className="flex-1 rounded-full bg-navy py-3 font-display text-sm font-bold text-white"
                  >
                    {t("book.submit")}
                  </button>
                </div>
              </form>
            )}

            {step === 3 && (
              <div className="text-center">
                <CheckCircle2 className="mx-auto h-12 w-12 text-cyan" />
                <h3 className="mt-3 font-display text-2xl font-extrabold text-navy">
                  {t("book.successTitle")}
                </h3>
                <p className="mt-2 text-sm text-muted">
                  {t("book.successText", { ref })}
                </p>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-wa py-3.5 font-display text-sm font-bold text-white"
                >
                  {t("book.openWa")}
                </a>
              </div>
            )}
          </div>

          <aside className="rounded-[1.75rem] bg-navy p-6 text-white md:p-8">
            <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-cyan">
              {t("book.summary")}
            </p>
            <p className="mt-4 font-display text-2xl font-extrabold">{vLabel}</p>
            <p className="mt-2 text-3xl font-extrabold text-cyan">
              {selected.price}{" "}
              <span className="text-base text-white/70">{t("pricing.mad")}</span>
            </p>
            <ul className="mt-6 space-y-2 text-sm text-white/75">
              <li>• {t("vehicle.desc")}</li>
              <li>• WhatsApp</li>
              <li>• Agadir · {zone}</li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="font-display text-xs font-bold uppercase tracking-wider text-navy/70">
        {label}
      </span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}

const inputClass =
  "w-full rounded-2xl border border-navy/10 bg-foam px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-cyan";
