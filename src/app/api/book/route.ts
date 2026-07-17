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
 * Receives a booking and appends it to Google Sheets via Apps Script webhook.
 * Set BOOKING_WEBHOOK_URL in .env.local (see scripts/google-apps-script-booking.js).
 */
export async function POST(req: Request) {
  try {
    const body = (await req.json()) as BookingBody;

    if (!body?.name || !body?.phone || !body?.zone || !body?.vehicle) {
      return NextResponse.json(
        { ok: false, error: "missing_fields" },
        { status: 400 },
      );
    }

    const record = {
      ...body,
      note: body.note || "",
      receivedAt: new Date().toISOString(),
    };

    const webhook = process.env.BOOKING_WEBHOOK_URL?.trim();
    let sheetOk = false;
    let sheetError: string | null = null;

    if (!webhook) {
      return NextResponse.json({
        ok: true,
        ref: body.ref,
        sheet: false,
        warning: "BOOKING_WEBHOOK_URL not configured",
      });
    }

    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(record),
        redirect: "follow",
      });

      // Apps Script often returns 200 with text/JSON after redirect
      sheetOk = res.ok;
      if (!res.ok) {
        sheetError = `webhook_status_${res.status}`;
      }
    } catch (err) {
      sheetError = err instanceof Error ? err.message : "webhook_failed";
    }

    return NextResponse.json({
      ok: true,
      ref: body.ref,
      sheet: sheetOk,
      sheetError,
    });
  } catch {
    return NextResponse.json({ ok: false, error: "server_error" }, { status: 500 });
  }
}
