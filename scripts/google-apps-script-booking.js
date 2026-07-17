/**
 * Lavage Nova — Google Sheets booking receiver
 *
 * SETUP (2 minutes):
 * 1) Create a Google Sheet named "Lavage Nova — Reservations"
 * 2) Extensions → Apps Script
 * 3) Delete any default code, paste THIS entire file
 * 4) Click Deploy → New deployment → Type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5) Copy the Web App URL
 * 6) Put it in .env.local as:
 *    BOOKING_WEBHOOK_URL=https://script.google.com/macros/s/XXXX/exec
 * 7) Restart `npm run dev`
 *
 * On first request, headers are created automatically on the active sheet.
 */

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Received At",
        "Ref",
        "Name",
        "Phone",
        "Zone",
        "Vehicle",
        "Price (MAD)",
        "Date",
        "Slot",
        "Note",
        "Lang",
        "Status",
      ]);
      sheet.getRange(1, 1, 1, 12).setFontWeight("bold");
    }

    sheet.appendRow([
      data.receivedAt || new Date().toISOString(),
      data.ref || "",
      data.name || "",
      data.phone || "",
      data.zone || "",
      data.vehicle || "",
      data.price || "",
      data.date || "",
      data.slot || "",
      data.note || "",
      data.lang || "",
      "New",
    ]);

    return ContentService.createTextOutput(
      JSON.stringify({ ok: true }),
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ ok: false, error: String(err) }),
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService.createTextOutput(
    "Lavage Nova booking webhook is live.",
  );
}
