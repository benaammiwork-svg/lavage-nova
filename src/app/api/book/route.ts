import { NextResponse } from "next/server";

type BookingBody = {
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
};

/**
 * Stores booking locally (demo) and optionally forwards to a Google Sheets /
 * Make.com / Zapier webhook if BOOKING_WEBHOOK_URL is set in .env.local
 *
 * Recommended ops setup for Morocco:
 * 1) Primary: WhatsApp message opened by the client (instant notify)
 * 2) Optional: webhook → Google Sheet for tracking
 */
export async function POST(req: Request) {
  try {
    const body = (await req.json()) as BookingBody;

    if (!body?.name || !body?.phone || !body?.zone || !body?.vehicle) {
      return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
    }

    const record = {
      ...body,
      receivedAt: new Date().toISOString(),
    };

    const webhook = process.env.BOOKING_WEBHOOK_URL;
    if (webhook) {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(record),
      });
    }

    // Always ok for demo — WhatsApp remains the confirmation channel
    return NextResponse.json({ ok: true, ref: body.ref, webhook: Boolean(webhook) });
  } catch {
    return NextResponse.json({ ok: false, error: "server_error" }, { status: 500 });
  }
}
