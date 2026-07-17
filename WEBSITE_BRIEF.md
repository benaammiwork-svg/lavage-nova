# Lavage Nova — Website Brief & Build Spec

> **Project:** Mobile car wash website (lavage auto à domicile) — Agadir, Morocco  
> **Brand:** Lavage Nova  
> **Phone / WhatsApp:** `070 950 5971`  
> **Language:** French (primary), optional Darija microcopy later  
> **Goal of this file:** Single source of truth for positioning, copy, UX, visuals, booking flow, and the final prompt for the AI coder agent.

---

## 1. Brand identity (follow Instagram + flyer exactly)

### 1.1 Name & lockup
- **Brand:** `Lavage Nova`
- **Wordmark colors:** `Lavage` = Navy · `Nova` = Cyan
- **Descriptor under logo:** `LAVAGE AUTO À DOMICILE` (uppercase, letter-spaced)
- **Logo mark:** Circular navy emblem → white car silhouette + sparkle star above + cyan water swirl below

### 1.2 Official color system (CSS variables)
```css
:root {
  --navy: #0B1F3A;       /* primary text, footer, CTA boxes */
  --navy-deep: #071526;  /* darker bands */
  --cyan: #2BB3FF;       /* accents, "Nova", links, highlights */
  --cyan-soft: #7DD3FF;  /* hover / soft glow */
  --white: #FFFFFF;
  --foam: #F4F8FC;       /* light section backgrounds (not cream) */
  --ink: #0E243B;        /* body text */
  --muted: #5B6B7C;      /* secondary text */
  --success: #25D366;    /* WhatsApp green only for WA buttons */
  --shadow: 0 18px 50px rgba(11, 31, 58, 0.14);
}
```

### 1.3 Typography
- **Display / brand:** Montserrat or Plus Jakarta Sans (bold, modern, not Inter/Roboto/Arial as default identity)
- **Body:** Manrope or Plus Jakarta Sans
- Headlines: tight, confident, short
- Avoid purple gradients, cream serif newspaper looks, neon glow spam

### 1.4 Voice & positioning
**One-line positioning:**  
> Lavage Nova, c’est le lavage auto pro qui vient chez toi à Agadir — rapide, propre, sans file d’attente.

**Brand promise:**  
Tu ne bouges pas. On arrive avec le triporteur. Ta voiture repart impeccable.

**Tone:**
- Warm Moroccan-French, clear, confident
- Premium-but-accessible (not luxury snob, not cheap street flyer)
- Benefit-first, zero jargon
- Always local: Agadir, quartiers, soleil, sable, chaleur

**Words to use:** impeccable, à domicile, on vient chez vous, rapide, pro, sans stress, Agadir  
**Words to avoid:** cheap, discount spam, “#1 mondial”, fake scarcity every 2 seconds

### 1.5 Contact constants
| Channel | Value |
|--------|--------|
| Phone / Call | `070 950 5971` |
| WhatsApp | `https://wa.me/212709505971` (normalize local 070 → 212709505971) |
| Prefill booking text | see §7 |
| City | Agadir & environs |
| Instagram | *(paste official handle when confirmed — match logo/colors from existing IG/flyer)* |

---

## 2. Product reality (what the site must communicate)

- Service is **mobile**: team + **triporteur** comes to home / work / residence
- Core offers: exterior wash, interior clean, careful finishing
- Booking primarily via **WhatsApp** (Morocco conversion reality)
- Website = trust + pricing clarity + easy booking + brand presence
- Later: subscriptions, residences, fleet/B2B

---

## 3. Site map & pages

### Must-have (MVP)
1. **Home** (`/`) — full conversion landing
2. **Services & Tarifs** (`/services`) — packs + what’s included
3. **Zones** (`/zones`) — Agadir neighborhoods
4. **Réalisations** (`/realisations`) — before/after gallery
5. **Résidences & Entreprises** (`/pro`) — group deals
6. **FAQ** (`/faq`)
7. **Contact / Réserver** (`/reserver`) — booking form + WhatsApp CTA
8. **Mentions légales** + **Politique de confidentialité** (simple)

### Nice-to-have (phase 2)
- `/abonnement` — monthly packs
- `/suivi` — client order status (optional code)
- Blog SEO: “lavage auto à domicile Agadir”, “prix lavage voiture Agadir”
- FR/AR toggle (not required for v1)

---

## 4. UX principles (dynamic + friendly)

1. **WhatsApp sticky CTA** always visible on mobile (bottom) + desktop (corner)
2. **One primary action** everywhere: `Réserver sur WhatsApp`
3. Secondary action: `Appeler`
4. **Interactive pack selector** on home + services (pick pack → updates price estimate + WhatsApp message)
5. **Zone checker**: user types/selects quartier → “On intervient ici ✅” / “Bientôt 🔜”
6. **Smooth scroll** section navigation on home
7. **Micro-animations** (tasteful, 2–4 total):
   - Hero brand/logo fade-up
   - Triporteur image gentle parallax or slide-in
   - Foam/bubble soft CSS motion in hero accent (subtle)
   - CTA button hover lift
8. **Mobile-first**: big tap targets, readable type, no tiny cards clutter
9. **Trust strip** near hero: Produits de qualité · Rapide & efficace · Satisfaction garantie
10. **No dashboard feeling** on landing — one composition, brand-first

---

## 5. Visual design system

### Composition rules (landing)
- First viewport = **one composition**: brand + one headline + one short support line + CTA group + dominant visual (branded triporteur / wash action)
- Brand name must be hero-level, not only nav
- Full-bleed or edge-dominant hero visual (not a small inset card image)
- No floating promo stickers on top of hero media
- Cards only where interaction needs a container (pack selector, FAQ accordion, booking fields)
- Atmosphere: navy/cyan water energy + Agadir sun light — use gradients/soft patterns, not flat white only

### Signature motifs
- Circular logo mark
- Soft bubble/foam accents (sparingly)
- Cyan underline / wave divider between sections
- Navy ribbons for trust/footer like the flyer

---

## 6. Image & media plan

### 6.1 Local brand assets (already in repo)
Use these first — they match brand and include logo/name on the triporteur:

| File | Use |
|------|-----|
| `assets/brand-poster-lavage-nova.png` | Brand reference, maybe About/press style block (don’t use whole flyer as website hero layout) |
| `assets/triporteur-lavage-nova-branded.png` | Hero / “On vient chez vous” section — **triporteur with Lavage Nova branding** |
| `assets/triporteur-logo-closeup.png` | About / fleet / trust section — logo close-up on triporteur |

### 6.2 Free stock (Unsplash / Pexels) — complementary
Use for process/details; prefer local branded shots for hero identity.

| Role | Source | URL |
|------|--------|-----|
| Foam wash action | Unsplash | `https://images.unsplash.com/photo-1754296577887-955581147486?auto=format&fit=crop&w=1800&q=80` |
| Blue car soapy close | Unsplash | `https://images.unsplash.com/photo-1754070909068-26c4f40da066?auto=format&fit=crop&w=1600&q=80` |
| Person + foam process | Unsplash | `https://images.unsplash.com/photo-1769641156607-16833781bc16?auto=format&fit=crop&w=1600&q=80` |
| SUV soap suds | Pexels | `https://images.pexels.com/photos/29504457/pexels-photo-29504457.jpeg?auto=compress&cs=tinysrgb&w=1600` |
| Agadir beach atmosphere (subtle section bg / about) | Unsplash (Agadir) | `https://unsplash.com/photos/7MzuWztc8kY` |
| Agadir car + palms lifestyle | Unsplash (Agadir) | `https://unsplash.com/photos/X2RtQV83llY` |

**Attribution:** Unsplash License / Pexels License — keep credits in README if required by hosting.

### 6.3 Image generation rules (future assets)
Any new AI image must include:
1. Exact brand colors navy + cyan  
2. Readable **“Lavage Nova”** wordmark  
3. Circular logo on the **triporteur cargo box**  
4. No wrong phone numbers / no fake Instagram handles burned into image unless approved  
5. Prefer photoreal Agadir light (sun, palms, residential)

### 6.4 Real photo upgrade path
Replace stock ASAP with real:
- Triporteur wrap photos
- Before/after client cars (plate blurred)
- Washer in navy/cyan uniform
- Residence jobs

---

## 7. Full copywriting (French — ready to paste)

### 7.1 Meta SEO
- **Title:** `Lavage Nova | Lavage auto à domicile à Agadir`
- **Description:** `On vient laver votre voiture chez vous à Agadir. Service pro, rapide et impeccable. Réservez sur WhatsApp : 070 950 5971.`
- **H1 priority keywords:** lavage auto à domicile Agadir, lavage voiture Agadir

### 7.2 Navigation
- Accueil · Services · Zones · Réalisations · Pro · FAQ · **Réserver**

### 7.3 Hero (Home)
**Eyebrow (optional, small):** Agadir · Lavage auto à domicile  

**Brand (hero-level):** Lavage Nova  

**Headline:** Votre voiture, notre passion.  

**Support:** Un lavage professionnel à domicile — on arrive avec notre triporteur, vous ne bougez pas.  

**Primary CTA:** Réserver sur WhatsApp  
**Secondary CTA:** Voir les tarifs  

**Badge:** Nous venons chez vous  

**Trust row:** Produits de qualité · Rapide & efficace · Satisfaction garantie  

### 7.4 How it works
**Title:** Simple comme 1, 2, 3  
**Subtitle:** Réserver un lavage Nova, c’est plus rapide que de chercher une place en station.

1. **Tu réserves** — WhatsApp ou formulaire (quartier, pack, créneau)  
2. **On arrive** — notre triporteur Lavage Nova se gare chez toi  
3. **Tu roules propre** — finition soignée, photos avant/après, tu valides  

### 7.5 Services / Packs (suggested starter prices — editable)
> Note: confirm final MAD prices before launch. Structure matters more than exact numbers.

#### Pack Express — Extérieur
- **Price idea:** `from 80–120 MAD` (citadine → SUV adjust)
- **Includes:** pré-rinçage, mousse, lavage carrosserie, jantes, séchage, vitres extérieures
- **Time:** ~30–40 min
- **CTA label:** Je veux l’Express

#### Pack Complet — Extérieur + Intérieur
- **Price idea:** `from 150–220 MAD`
- **Includes:** Express + aspirateur, plastiques, tableau de bord, vitres intérieures, parfum léger
- **Time:** ~50–70 min
- **CTA label:** Je veux le Complet
- **Highlight:** Le plus demandé

#### Pack Nova Premium — Finition soignée
- **Price idea:** `from 230–320 MAD`
- **Includes:** Complet + finition pneus/jantes, détail contours, lustrage léger / protection selon option
- **Time:** ~70–90 min
- **CTA label:** Je veux le Premium

#### Add-ons
- Moteur (sur devis)
- Sièges tissu / taches
- Canapé / other? *(only if you actually offer — else omit)*
- Abonnement 4 lavages / mois (−10 to −15%)

**Services section title:** Nos services  
**Support:** Extérieur, intérieur, finition — le niveau que tu choisis, la qualité Nova à chaque fois.

### 7.6 Why Nova
**Title:** Pourquoi Lavage Nova ?  
Bullets:
- **On vient chez vous** — villa, immeuble, bureau, résidence  
- **Équipe équipée** — triporteur pro, matériel & produits soignés  
- **Résultat visible** — avant/après à chaque intervention  
- **Agadir-first** — créneaux adaptés à la chaleur et à votre rythme  
- **Réservation claire** — WhatsApp, confirmation, suivi simple  

### 7.7 Zones
**Title:** Où intervenons-nous ?  
**Support:** On couvre Agadir quartier par quartier — dis-nous où tu es.

Suggested zones (toggle available / soon):
- Centre / Talborjt
- Founty / Marina
- Hay Mohammadi
- Dakhla
- Tilila
- Tassila
- Anza
- Aït Melloul *(soon / on request)*
- Taghazout / Tamraght *(on request / fee)*

**Microcopy:** Ton quartier n’est pas listé ? Envoie-nous un WhatsApp — on te dit tout de suite.

### 7.8 Réalisations
**Title:** Le avant / après qui parle tout seul  
**Support:** Pas de photos stock pour te vendre du rêve — on montre le vrai travail Nova.  
*(Until real photos exist: use foam/detail stock + clearly labeled “exemples de rendu” and replace ASAP.)*

### 7.9 Pro / Résidences
**Title:** Résidences, Airbnb & entreprises  
**Support:** Un matin, plusieurs voitures, un seul déplacement — tarif groupe.

Offers:
- **Résidence:** −10% à −15% dès 5 voitures le même créneau  
- **Flotte / société:** planning hebdo + facture  
- **Hôtes Airbnb / locations:** voiture propre avant check-in client  

**CTA:** Demander un devis Pro sur WhatsApp  

### 7.10 Abonnement (section or page)
**Title:** La voiture propre, en mode automatique  
**Support:** 4 passages / mois, créneau prioritaire, prix préférentiel.  
**CTA:** Parler abonnement  

### 7.11 Testimonials (placeholders — replace with real)
> “Ils sont venus à Founty en 30 minutes. Voiture nickel, sans que je bouge.” — Sara  
> “Enfin un lavage à domicile sérieux à Agadir. WhatsApp simple, résultat propre.” — Youssef  
> “On a booké 8 voitures pour la résidence. Organisation top.” — Syndic  

### 7.12 FAQ
1. **Vous venez vraiment chez moi ?**  
   Oui. Notre triporteur Lavage Nova se déplace à votre domicile, travail ou résidence dans nos zones Agadir.
2. **Combien de temps ça prend ?**  
   Environ 30 à 90 minutes selon le pack et le véhicule.
3. **Faut-il une arrivée d’eau / électricité ?**  
   Indiquez votre situation en réservant — on s’adapte (précisez dans WhatsApp).
4. **Comment je paie ?**  
   Espèces ou transfert — on confirme au moment de la réservation.
5. **Puis-je réserver pour demain matin ?**  
   Oui selon disponibilités. Plus tôt vous réservez, mieux c’est.
6. **SUV / 4x4 / utilitaire ?**  
   Oui, tarif ajusté selon taille.
7. **Et s’il y a le mistral / sable ?**  
   On peut reporter proprement si les conditions empêchent une belle finition.

### 7.13 Final CTA band
**Title:** Ta voiture mérite mieux qu’une station bondée.  
**Support:** Envoie ton quartier + pack — on te confirme le créneau.  
**CTA:** WhatsApp · 070 950 5971  

### 7.14 Footer
- Logo + “Lavage auto à domicile — Agadir”
- Links: Services, Zones, FAQ, Contact
- Phone + WhatsApp
- Instagram
- © Lavage Nova

### 7.15 WhatsApp prefilled messages
**Generic:**
```
Salut Lavage Nova 👋
Je veux réserver un lavage à domicile à Agadir.
Quartier :
Pack : Express / Complet / Premium
Type de voiture :
Jour / heure souhaités :
```

**After pack selected (dynamic):**
```
Salut Lavage Nova 👋
Je réserve le pack {PACK} ({PRICE_HINT}).
Quartier : {ZONE}
Voiture : {CAR}
Créneau : {DATETIME}
```

---

## 8. Home page section order (recommended)

1. Sticky nav + brand
2. Hero (brand + headline + CTAs + triporteur visual)
3. Trust ribbon (3 icons from flyer)
4. How it works (3 steps)
5. Packs / interactive pricing
6. Why Nova + triporteur logo close-up
7. Zones checker
8. Réalisations (gallery)
9. Pro / résidences teaser
10. Testimonials
11. FAQ accordion
12. Final CTA
13. Footer
14. Mobile sticky WhatsApp bar

---

## 9. Booking & order management (website → ops)

### 9.1 Public booking (website)
**Primary:** WhatsApp deep link with prefilled message  
**Secondary:** Form on `/reserver` fields:
- Nom
- Téléphone
- Quartier (select)
- Pack
- Type véhicule (citadine / berline / SUV / other)
- Date souhaitée
- Heure préférée (Matin / Après-midi / Souple)
- Note (accès parking, étage, etc.)
- Consent contact

**On submit:**
- Show success state
- Also offer “Continuer sur WhatsApp” with same data prefilled
- Store lead: Formspree / Getform / Google Apps Script → Google Sheet **or** Supabase table `leads`

### 9.2 Internal ops (not public UI in MVP — document for owners)
Statuses: `New → Confirmed → Assigned → On the way → Washing → Done → Paid`

Sheet/DB columns:
`date, time, client, phone, zone, car, pack, price, washer, status, photo_proof_url, paid, notes`

Rules:
- Brand WhatsApp number owned by founders (not washer)
- Washer gets assigned jobs only
- Payment verified by founders
- Photo proof before closing job

*(Optional phase 2: private `/admin` with password or Notion embed.)*

---

## 10. Technical recommendations

### Stack (recommended)
- **Next.js** (App Router) + **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (light animations)
- Deploy: **Vercel**
- Forms: WhatsApp links + simple API route email/sheet
- Icons: lucide-react
- Fonts: `next/font` (Montserrat / Plus Jakarta Sans)

### Alternative (lighter)
- Vite + React + Tailwind if they want simpler hosting

### Performance / SEO
- OG image using branded triporteur
- LocalBusiness JSON-LD (Agadir, phone, areaServed)
- Lazy-load gallery
- Compress images (`next/image`)
- Semantic headings, French `lang="fr"`

### Accessibility
- Contrast navy/cyan on white checked
- Focus states
- Aria labels on icon buttons
- WhatsApp link announces purpose

### Analytics
- Meta Pixel optional
- Google Analytics optional
- Track CTA clicks: `wa_click`, `call_click`, `pack_select`

---

## 11. Component inventory for coder

- `Navbar` (logo mark + wordmark + CTA)
- `Hero`
- `TrustRibbon`
- `Steps`
- `PackCard` + `PackSelector` (stateful)
- `ZoneChecker`
- `GalleryBeforeAfter`
- `ProBanner`
- `Testimonials`
- `FaqAccordion`
- `BookingForm`
- `WhatsAppSticky`
- `Footer`
- `Button` variants: primary navy, cyan accent, WhatsApp green
- `SectionHeading`
- `Logo` SVG component (recreate from mark)

**Recreate logo as SVG** from the circular mark (don’t rely only on raster). Keep PNG/SVG of lockup in `/public/brand/`.

---

## 12. Content placeholders to replace before real launch

- [ ] Final pack prices in MAD  
- [ ] Exact service zones list  
- [ ] Official Instagram URL  
- [ ] Real before/after photos  
- [ ] Legal entity / ICE if needed on mentions  
- [ ] Water/electricity policy confirmed  

---

## 13. Acceptance criteria (definition of done)

- [ ] Brand colors & logo match flyer/IG  
- [ ] Hero shows **Lavage Nova** strongly + branded triporteur visual  
- [ ] WhatsApp `070 950 5971` works with prefilled message  
- [ ] Pack selector changes WhatsApp text dynamically  
- [ ] Mobile sticky CTA works  
- [ ] Pages load fast, responsive, French copy as written  
- [ ] No purple AI-template aesthetic; navy/cyan system respected  
- [ ] SEO title/description set  
- [ ] Legal pages present  

---

## 14. Prompt for your AI coder agent

Copy everything below the line into a new Cursor agent chat **inside this repo**.

---

```text
You are my coding agent. Build the full marketing website for **Lavage Nova** (mobile car wash / lavage auto à domicile in Agadir, Morocco) using the specification file `WEBSITE_BRIEF.md` as the single source of truth.

## Hard requirements
1. Read and follow `WEBSITE_BRIEF.md` completely (brand, colors, copy, sitemap, UX, components, booking).
2. Stack: Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion. Deploy-ready for Vercel.
3. Brand colors MUST match the brief: navy `#0B1F3A`, cyan `#2BB3FF`, white, foam `#F4F8FC`. Wordmark: “Lavage” navy, “Nova” cyan.
4. Recreate the circular logo as an SVG component + use assets in `/assets` and `/public/brand`:
   - `assets/triporteur-lavage-nova-branded.png` (hero / coming-to-you)
   - `assets/triporteur-logo-closeup.png` (about/trust)
   - `assets/brand-poster-lavage-nova.png` (brand reference only; do NOT recreate the flyer as the webpage layout)
5. Phone/WhatsApp: 070 950 5971 → `https://wa.me/212709505971` with prefilled French booking message. Sticky WhatsApp CTA on mobile.
6. Interactive pack selector that updates price hint + WhatsApp prefilled text.
7. Zone checker for Agadir neighborhoods.
8. French copy exactly from the brief (you may tighten spacing/line breaks, not the meaning).
9. Design rules from the brief: brand-first hero, one composition first viewport, full-bleed/dominant visual, no generic purple AI aesthetic, expressive fonts (Montserrat or Plus Jakarta Sans via next/font), subtle 2–4 motions, cards only when needed for interaction.
10. Include pages: Home, Services, Zones, Réalisations, Pro, FAQ, Réserver, Mentions légales, Confidentialité.
11. Add LocalBusiness JSON-LD, proper metadata, `lang="fr"`, responsive mobile-first UI, accessible buttons/links.
12. Use listed Unsplash/Pexels URLs only as secondary gallery/process images; branded triporteur assets must lead the hero identity.
13. Create a clean README with run instructions (`npm install`, `npm run dev`) and a short checklist of placeholders (prices, Instagram handle, real before/after).
14. Do not invent a different brand name. Do not put wrong phone numbers on the site.

## Process
- First scaffold the Next.js app in this repo root (or `web/` if you must — prefer root unless conflicts).
- Implement design system tokens from the brief.
- Build shared layout + components, then pages.
- Wire WhatsApp + booking form (form can POST to a simple API route that logs/stores lead; WhatsApp remains primary CTA).
- Polish animations and mobile UX.
- Run the dev server and fix obvious issues.

Start now by reading `WEBSITE_BRIEF.md`, then implement the website end-to-end.
```

---

## 15. Owner notes (you + friend)

- Keep WhatsApp Business number under your control.
- Replace stock gallery with real Agadir jobs ASAP — trust skyrockets.
- Put vinyl wrap of logo on the real triporteur to match the generated visuals.
- Confirm prices before ads.
- When Instagram handle is ready, add it to nav/footer and this brief.

---

**End of brief.**  
Built for Lavage Nova — Agadir.
