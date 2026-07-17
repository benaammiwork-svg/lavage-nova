# Lavage Nova — Website

Marketing site for **Lavage Nova**, mobile car wash in Agadir.

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Connect Google Sheets (reservations)

Every booking is sent to `/api/book`, which appends a row to your Google Sheet.

1. Create a Google Sheet (e.g. `Lavage Nova — Reservations`)
2. **Extensions → Apps Script**
3. Paste the code from `scripts/google-apps-script-booking.js`
4. **Deploy → New deployment → Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Copy the Web App URL
6. Create `.env.local` in the project root:

```env
BOOKING_WEBHOOK_URL=https://script.google.com/macros/s/XXXX/exec
```

7. Restart the dev server (`npm run dev`)

Columns created automatically: Received At, Ref, Name, Phone, Zone, Vehicle, Price, Date, Slot, Note, Lang, Status.

WhatsApp confirmation still opens after submit (instant notify on your phone).

## Brand

- Lavage Nova — navy `#0B1F3A` + cyan `#2BB3FF`
- WhatsApp: `0659 049 972`
- Languages: FR (default) / EN / AR

## Spec

See `WEBSITE_BRIEF.md`.
