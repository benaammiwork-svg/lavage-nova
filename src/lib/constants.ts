export const BRAND = {
  name: "Lavage Nova",
  phoneDisplay: "0659 049 972",
  phoneE164: "212659049972",
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
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "suv",
    price: 150,
    image:
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "moto",
    price: 50,
    priceFrom: true,
    image:
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=80",
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
    before: "/gallery/ba-sedan-before.png",
    after: "/gallery/ba-sedan-after.png",
  },
  {
    id: "suv",
    before: "/gallery/ba-suv-before.png",
    after: "/gallery/ba-suv-after.png",
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
