export const BRAND = {
  name: "Lavage Nova",
  phoneDisplay: "0717 810 660",
  phoneE164: "212717810660",
  city: "Agadir",
} as const;

export const WHATSAPP_BASE = `https://wa.me/${BRAND.phoneE164}`;

/** Aligned with Agadir market + competitor flyer positioning (100 / 150 / 50) */
export type VehicleId = "normal" | "suv" | "moto";

export const VEHICLES: {
  id: VehicleId;
  price: number;
  priceFrom?: boolean;
  image: string;
}[] = [
  {
    id: "normal",
    price: 100,
    image: "/gallery/ba-sedan-after-v2.png",
  },
  {
    id: "suv",
    price: 150,
    image: "/gallery/ba-suv-after.png",
  },
  {
    id: "moto",
    price: 50,
    priceFrom: true,
    image: "/gallery/ba-moto-after.png",
  },
];

export const INCLUDES = [
  "exterior",
  "vacuum",
  "windows",
  "dashboard",
  "tires",
  "freshener",
] as const;

export const ZONES = [
  "Talborjt / Centre",
  "Founty / Marina",
  "Hay Mohammadi",
  "Dakhla",
  "Tilila",
  "Tassila",
  "Anza",
  "Aït Melloul",
  "Autre quartier Agadir",
] as const;

export const GALLERY = [
  {
    id: "sedan",
    before: "/gallery/ba-sedan-before-v2.png",
    after: "/gallery/ba-sedan-after-v2.png",
  },
  {
    id: "suv",
    before: "/gallery/ba-suv-before.png",
    after: "/gallery/ba-suv-after.png",
  },
  {
    id: "moto",
    before: "/gallery/ba-moto-before.png",
    after: "/gallery/ba-moto-after.png",
  },
] as const;

export const TIME_SLOTS = ["08:00–10:00", "10:00–12:00", "14:00–16:00", "16:00–18:00", "18:00–20:00"] as const;

export function waLink(message: string) {
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;
}

export function buildBookingWhatsApp(data: {
  name: string;
  phone: string;
  zone: string;
  vehicle: string;
  price: number;
  date: string;
  slot: string;
  note?: string;
  ref: string;
  lang: string;
}) {
  return [
    `🚗 *Lavage Nova — Nouvelle réservation*`,
    `Ref: ${data.ref}`,
    ``,
    `👤 ${data.name}`,
    `📞 ${data.phone}`,
    `📍 ${data.zone}`,
    `🚘 ${data.vehicle} — ${data.price} MAD`,
    `📅 ${data.date} · ${data.slot}`,
    data.note ? `📝 ${data.note}` : null,
    ``,
    `Lang: ${data.lang}`,
  ]
    .filter(Boolean)
    .join("\n");
}
