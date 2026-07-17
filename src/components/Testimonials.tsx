"use client";

import { useLang } from "@/context/LanguageContext";
import { SectionHeading } from "./SectionHeading";

const ITEMS = {
  fr: [
    {
      name: "Sara · Founty",
      text: "Ponctuels, pro, voiture impeccable. Réservation WhatsApp ultra simple.",
    },
    {
      name: "Youssef · Talborjt",
      text: "Enfin un service sérieux à Agadir. Tarif clair, résultat propre.",
    },
    {
      name: "Amine · Tilila",
      text: "On a booké plusieurs voitures pour la résidence. Organisation au top.",
    },
  ],
  en: [
    {
      name: "Sara · Founty",
      text: "On time, professional, spotless car. WhatsApp booking was effortless.",
    },
    {
      name: "Youssef · Talborjt",
      text: "Finally a serious service in Agadir. Clear price, clean result.",
    },
    {
      name: "Amine · Tilila",
      text: "Booked several cars for our residence. Smooth organization.",
    },
  ],
  ar: [
    {
      name: "سارة · فونتي",
      text: "التزام بالموعد، عمل احترافي، سيارة لامعة. الحجز عبر واتساب سهل جداً.",
    },
    {
      name: "يوسف · تالبورت",
      text: "أخيراً خدمة جدية في أكادير. سعر واضح ونتيجة نظيفة.",
    },
    {
      name: "أمين · تليلة",
      text: "حجزنا عدة سيارات للإقامة. تنظيم ممتاز.",
    },
  ],
};

export function Testimonials() {
  const { lang } = useLang();
  const list = ITEMS[lang];

  return (
    <section className="bg-foam px-4 py-16 md:px-6 md:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Lavage Nova"
          title={
            lang === "ar"
              ? "آراء الزبناء"
              : lang === "en"
                ? "What clients say"
                : "Ce que disent nos clients"
          }
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {list.map((item) => (
            <blockquote
              key={item.name}
              className="rounded-[1.75rem] bg-white p-6 shadow-sm ring-1 ring-navy/5"
            >
              <p className="text-sm leading-relaxed text-navy/90">“{item.text}”</p>
              <footer className="mt-4 font-display text-sm font-bold text-cyan">
                {item.name}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
