export type Lang = "fr" | "en" | "ar";

export const LANGS: { id: Lang; label: string; short: string }[] = [
  { id: "fr", label: "Français", short: "FR" },
  { id: "en", label: "English", short: "EN" },
  { id: "ar", label: "العربية", short: "ع" },
];

type Dict = Record<string, string>;

const fr: Dict = {
  "nav.services": "Services",
  "nav.beforeAfter": "Avant / Après",
  "nav.zones": "Zones",
  "nav.book": "Réserver",
  "nav.faq": "FAQ",
  "nav.pro": "Pro",

  "hero.eyebrow": "Lavage auto à domicile — Agadir",
  "hero.headline": "Votre voiture, notre passion.",
  "hero.sub":
    "Nous venons chez vous, où que vous soyez à Agadir. Produits premium, service rapide, résultat impeccable.",
  "hero.cta": "Réserver maintenant",
  "hero.ctaSecondary": "Voir les tarifs",
  "hero.badge": "Nous venons chez vous",
  "hero.trust1": "À domicile",
  "hero.trust2": "Produits premium",
  "hero.trust3": "Rapide & efficace",
  "hero.trust4": "Satisfaction garantie",
  "hero.cardTitle": "Intervention à domicile",
  "hero.cardText":
    "Confirmé sous 15 minutes · Créneaux du jour disponibles selon zone",

  "brand.slogan": "Votre voiture, notre passion.",

  "trust.products": "Produits premium",
  "trust.fast": "Rapide & efficace",
  "trust.team": "Soin & protection",
  "trust.come": "À domicile",
  "trust.satisfaction": "Satisfaction garantie",

  "nav.loyalty": "Fidélité",

  "steps.eyebrow": "Comment ça marche",
  "steps.title": "Réservez. On arrive. Vous roulez propre.",
  "steps.sub": "Un parcours simple, pensé pour gagner du temps.",
  "steps.1.t": "Choisissez votre véhicule",
  "steps.1.d": "Voiture, SUV ou moto — tarif clair affiché immédiatement.",
  "steps.2.t": "Indiquez lieu & créneau",
  "steps.2.d": "Quartier à Agadir + horaire qui vous arrange.",
  "steps.3.t": "Confirmation WhatsApp",
  "steps.3.d": "Vous recevez une confirmation. Notre équipe arrive équipée.",

  "pricing.eyebrow": "Tarifs Agadir",
  "pricing.title": "Des prix clairs. Aucune surprise.",
  "pricing.sub":
    "Nettoyage intérieur & extérieur complet inclus. Déplacement à domicile dans Agadir.",
  "pricing.includesTitle": "Ce qui est inclus",
  "pricing.cta": "Choisir & réserver",
  "pricing.mad": "MAD",
  "pricing.from": "À partir de",
  "vehicle.normal": "Voitures normales",
  "vehicle.normal.ar": "سيارات عادية",
  "vehicle.suv": "SUV & 4x4",
  "vehicle.suv.ar": "دفع رباعي و SUV",
  "vehicle.moto": "Moto",
  "vehicle.moto.ar": "دراجة نارية",
  "vehicle.desc": "Nettoyage intérieur & extérieur complet",
  "vehicle.moto.desc": "Nettoyage complet",

  "inc.exterior": "Lavage extérieur à la main",
  "inc.vacuum": "Aspiration intérieure",
  "inc.windows": "Nettoyage des vitres",
  "inc.dashboard": "Nettoyage tableau de bord",
  "inc.tires": "Brillance pneus / jantes",
  "inc.freshener": "Désodorisant intérieur",

  "ba.eyebrow": "Preuve visuelle",
  "ba.title": "Le même véhicule. Avant et après.",
  "ba.sub":
    "Glissez le curseur : même voiture, même angle — seule la propreté change.",
  "ba.before": "Avant",
  "ba.after": "Après",
  "ba.sedan": "Berline",
  "ba.suv": "SUV",
  "ba.moto": "Moto",

  "why.eyebrow": "Pourquoi Lavage Nova",
  "why.title": "Un service pensé pour vous",
  "why.sub":
    "À domicile, produits premium, soin & protection — votre satisfaction est notre priorité.",
  "why.1.t": "À domicile",
  "why.1.d": "Nous venons chez vous, où que vous soyez.",
  "why.2.t": "Produits premium",
  "why.2.d": "Produits professionnels pour un résultat impeccable.",
  "why.3.t": "Soin & protection",
  "why.3.d": "Nous prenons soin de votre voiture comme si c’était la nôtre.",
  "why.4.t": "Rapide & efficace",
  "why.4.d": "Service rapide sans compromis sur la qualité.",
  "why.5.t": "Satisfaction garantie",
  "why.5.d": "Votre satisfaction est notre priorité.",

  "loyalty.eyebrow": "Carte de fidélité",
  "loyalty.title": "5 lavages = 1 offert",
  "loyalty.sub":
    "Chaque lavage compte. Au 6ᵉ passage, c’est cadeau — simple, visible, automatique.",
  "loyalty.formula": "5 LAVAGES = 1 LAVAGE OFFERT !",
  "loyalty.wash": "lavage",
  "loyalty.free": "OFFERT",
  "loyalty.cta": "Je veux ma carte fidélité",

  "zones.eyebrow": "Zones",
  "zones.title": "Nous nous déplaçons partout à Agadir",
  "zones.sub": "Sélectionnez votre quartier pour démarrer la réservation.",
  "zones.cta": "Réserver dans ce quartier",
  "zones.ok": "Disponible",

  "book.eyebrow": "Réservation",
  "book.title": "Réservez votre lavage en 60 secondes",
  "book.sub":
    "Remplissez le formulaire. Vous recevez une confirmation WhatsApp — et nous aussi.",
  "book.step1": "Véhicule",
  "book.step2": "Détails",
  "book.step3": "Confirmation",
  "book.name": "Nom complet",
  "book.phone": "Téléphone",
  "book.zone": "Quartier",
  "book.date": "Date souhaitée",
  "book.slot": "Créneau",
  "book.note": "Note (accès, parking…)",
  "book.next": "Continuer",
  "book.back": "Retour",
  "book.submit": "Confirmer sur WhatsApp",
  "book.successTitle": "Demande prête",
  "book.successText":
    "Référence {ref}. Envoyez le message WhatsApp pour valider — notre équipe confirme sous peu.",
  "book.openWa": "Envoyer sur WhatsApp",
  "book.summary": "Récapitulatif",
  "book.privacy":
    "Vos infos servent uniquement à traiter la réservation. Pas de spam.",
  "book.sending": "Enregistrement…",
  "book.sheetOk": "Réservation enregistrée dans Google Sheets ✔",
  "book.sheetOff": "WhatsApp prêt (Google Sheets non connecté côté serveur)",
  "book.sheetFail": "WhatsApp prêt — enregistrement Sheet à vérifier",

  "pro.title": "Résidences & entreprises",
  "pro.sub":
    "Plusieurs véhicules le même jour ? Tarif groupe et créneau dédié.",
  "pro.cta": "Demander un devis",

  "faq.eyebrow": "FAQ",
  "faq.title": "Questions fréquentes",
  "faq.1.q": "Intervenez-vous vraiment à domicile ?",
  "faq.1.a":
    "Oui. Nous venons à votre domicile, bureau ou résidence dans Agadir, avec tout le matériel nécessaire.",
  "faq.2.q": "Combien de temps dure un lavage ?",
  "faq.2.a":
    "Environ 40 à 70 minutes selon le véhicule et l’état. Les motos sont plus rapides.",
  "faq.3.q": "Que comprend le tarif ?",
  "faq.3.a":
    "Intérieur et extérieur complets : carrosserie, vitres, aspiration, tableau de bord, pneus/jantes et désodorisant.",
  "faq.4.q": "Comment confirmer ma réservation ?",
  "faq.4.a":
    "Après le formulaire, vous envoyez le message WhatsApp. Nous confirmons le créneau rapidement.",
  "faq.5.q": "Quels moyens de paiement ?",
  "faq.5.a": "Espèces ou transfert — précisé à la confirmation.",

  "cta.title": "Appelez-nous maintenant",
  "cta.sub": "Agadir · Nous nous déplaçons partout en ville",
  "cta.wa": "WhatsApp",
  "cta.call": "Appeler",

  "footer.tag": "Lavage auto à domicile — Agadir",
  "footer.nav": "Navigation",
  "footer.contact": "Contact",
  "footer.legal": "Mentions légales",
  "footer.privacy": "Confidentialité",
  "footer.rights": "Tous droits réservés",

  "game.eyebrow": "Expérience",
  "game.title": "Mission Propre",
  "game.sub":
    "Nettoyez les taches pour débloquer un code avantage sur votre prochaine réservation.",
  "game.progress": "Progression",
  "game.spots": "taches",
  "game.done": "Impeccable !",
  "game.code": "Code",
  "game.why": "Un détail qui nous différencie",
  "game.whyText":
    "Un moment interactif avant de réserver — mémorable, utile, et 100 % Nova.",
  "game.cta": "Réserver avec mon code",
  "game.retry": "Rejouer",
  "game.hint": "Nettoyez les 6 taches pour débloquer le code.",

  "lang.label": "Langue",
};

const en: Dict = {
  "nav.services": "Services",
  "nav.beforeAfter": "Before / After",
  "nav.zones": "Areas",
  "nav.book": "Book",
  "nav.faq": "FAQ",
  "nav.pro": "Business",

  "hero.eyebrow": "Mobile car wash — Agadir",
  "hero.headline": "Your car, our passion.",
  "hero.sub":
    "We come to you, wherever you are in Agadir. Premium products, fast service, spotless results.",
  "hero.cta": "Book now",
  "hero.ctaSecondary": "See pricing",
  "hero.badge": "We come to you",
  "hero.trust1": "At home",
  "hero.trust2": "Premium products",
  "hero.trust3": "Fast & efficient",
  "hero.trust4": "Satisfaction guaranteed",
  "hero.cardTitle": "At-home service",
  "hero.cardText": "Confirmed within 15 minutes · Same-day slots by area",

  "brand.slogan": "Your car, our passion.",

  "trust.products": "Premium products",
  "trust.fast": "Fast & efficient",
  "trust.team": "Care & protection",
  "trust.come": "At home",
  "trust.satisfaction": "Satisfaction guaranteed",

  "nav.loyalty": "Rewards",

  "steps.eyebrow": "How it works",
  "steps.title": "Book. We arrive. You drive clean.",
  "steps.sub": "A simple flow designed to save your time.",
  "steps.1.t": "Choose your vehicle",
  "steps.1.d": "Car, SUV or motorcycle — clear price shown instantly.",
  "steps.2.t": "Set location & time",
  "steps.2.d": "Your Agadir neighborhood + preferred slot.",
  "steps.3.t": "WhatsApp confirmation",
  "steps.3.d": "You get confirmation. Our team arrives ready.",

  "pricing.eyebrow": "Agadir pricing",
  "pricing.title": "Clear prices. No surprises.",
  "pricing.sub":
    "Full interior & exterior cleaning included. Home visit across Agadir.",
  "pricing.includesTitle": "What’s included",
  "pricing.cta": "Select & book",
  "pricing.mad": "MAD",
  "pricing.from": "From",
  "vehicle.normal": "Standard cars",
  "vehicle.normal.ar": "Regular cars",
  "vehicle.suv": "SUV & 4x4",
  "vehicle.suv.ar": "SUV & 4x4",
  "vehicle.moto": "Motorcycle",
  "vehicle.moto.ar": "Motorcycle",
  "vehicle.desc": "Complete interior & exterior cleaning",
  "vehicle.moto.desc": "Complete cleaning",

  "inc.exterior": "Hand exterior wash",
  "inc.vacuum": "Interior vacuum",
  "inc.windows": "Window cleaning",
  "inc.dashboard": "Dashboard cleaning",
  "inc.tires": "Tire & rim shine",
  "inc.freshener": "Interior freshener",

  "ba.eyebrow": "Visual proof",
  "ba.title": "The same vehicle. Before and after.",
  "ba.sub":
    "Drag the slider: same car, same angle — only the cleanliness changes.",
  "ba.before": "Before",
  "ba.after": "After",
  "ba.sedan": "Sedan",
  "ba.suv": "SUV",
  "ba.moto": "Motorcycle",

  "why.eyebrow": "Why Lavage Nova",
  "why.title": "A service built for you",
  "why.sub":
    "At home, premium products, care & protection — your satisfaction comes first.",
  "why.1.t": "At home",
  "why.1.d": "We come to you, wherever you are.",
  "why.2.t": "Premium products",
  "why.2.d": "Professional products for a flawless finish.",
  "why.3.t": "Care & protection",
  "why.3.d": "We treat your car like it was our own.",
  "why.4.t": "Fast & efficient",
  "why.4.d": "Quick service with no compromise on quality.",
  "why.5.t": "Satisfaction guaranteed",
  "why.5.d": "Your satisfaction is our priority.",

  "loyalty.eyebrow": "Loyalty card",
  "loyalty.title": "5 washes = 1 free",
  "loyalty.sub":
    "Every wash counts. On the 6th visit, it’s on us — simple and automatic.",
  "loyalty.formula": "5 WASHES = 1 FREE WASH!",
  "loyalty.wash": "wash",
  "loyalty.free": "FREE",
  "loyalty.cta": "Get my loyalty card",

  "zones.eyebrow": "Coverage",
  "zones.title": "We move across Agadir",
  "zones.sub": "Select your neighborhood to start booking.",
  "zones.cta": "Book in this area",
  "zones.ok": "Available",

  "book.eyebrow": "Booking",
  "book.title": "Book your wash in 60 seconds",
  "book.sub":
    "Fill the form. You get a WhatsApp confirmation — and so do we.",
  "book.step1": "Vehicle",
  "book.step2": "Details",
  "book.step3": "Confirm",
  "book.name": "Full name",
  "book.phone": "Phone",
  "book.zone": "Neighborhood",
  "book.date": "Preferred date",
  "book.slot": "Time slot",
  "book.note": "Note (access, parking…)",
  "book.next": "Continue",
  "book.back": "Back",
  "book.submit": "Confirm on WhatsApp",
  "book.successTitle": "Request ready",
  "book.successText":
    "Reference {ref}. Send the WhatsApp message to validate — our team confirms shortly.",
  "book.openWa": "Send on WhatsApp",
  "book.summary": "Summary",
  "book.privacy": "Your info is only used to process the booking. No spam.",
  "book.sending": "Saving…",
  "book.sheetOk": "Booking saved to Google Sheets ✔",
  "book.sheetOff": "WhatsApp ready (Google Sheets not connected on server)",
  "book.sheetFail": "WhatsApp ready — Sheet save needs checking",

  "pro.title": "Residences & businesses",
  "pro.sub": "Several vehicles same day? Group rate and dedicated slot.",
  "pro.cta": "Request a quote",

  "faq.eyebrow": "FAQ",
  "faq.title": "Frequently asked questions",
  "faq.1.q": "Do you really come to my place?",
  "faq.1.a":
    "Yes. We come to your home, office or residence in Agadir with all equipment.",
  "faq.2.q": "How long does a wash take?",
  "faq.2.a":
    "About 40–70 minutes depending on vehicle and condition. Motorcycles are faster.",
  "faq.3.q": "What’s included in the price?",
  "faq.3.a":
    "Full interior & exterior: body, windows, vacuum, dashboard, tires/rims and freshener.",
  "faq.4.q": "How do I confirm my booking?",
  "faq.4.a":
    "After the form, send the WhatsApp message. We confirm your slot quickly.",
  "faq.5.q": "Payment methods?",
  "faq.5.a": "Cash or bank transfer — confirmed when we book you.",

  "cta.title": "Call us now",
  "cta.sub": "Agadir · We operate across the city",
  "cta.wa": "WhatsApp",
  "cta.call": "Call",

  "footer.tag": "Mobile car wash — Agadir",
  "footer.nav": "Navigation",
  "footer.contact": "Contact",
  "footer.legal": "Legal notice",
  "footer.privacy": "Privacy",
  "footer.rights": "All rights reserved",

  "game.eyebrow": "Experience",
  "game.title": "Clean Mission",
  "game.sub":
    "Clear the spots to unlock a perk code for your next booking.",
  "game.progress": "Progress",
  "game.spots": "spots",
  "game.done": "Spotless!",
  "game.code": "Code",
  "game.why": "A detail that sets us apart",
  "game.whyText":
    "An interactive moment before booking — memorable, useful, pure Nova.",
  "game.cta": "Book with my code",
  "game.retry": "Play again",
  "game.hint": "Clean all 6 spots to unlock the code.",

  "lang.label": "Language",
};

const ar: Dict = {
  "nav.services": "الخدمات",
  "nav.beforeAfter": "قبل / بعد",
  "nav.zones": "المناطق",
  "nav.book": "احجز",
  "nav.faq": "أسئلة",
  "nav.pro": "شركات",

  "hero.eyebrow": "غسيل سيارات متنقل — أكادير",
  "hero.headline": "سيارتك، شغفنا.",
  "hero.sub":
    "نأتي إليكم أينما كنتم في أكادير. منتجات ممتازة، خدمة سريعة، نتيجة مثالية.",
  "hero.cta": "احجز الآن",
  "hero.ctaSecondary": "عرض الأسعار",
  "hero.badge": "نأتي إليكم",
  "hero.trust1": "في موقعكم",
  "hero.trust2": "منتجات ممتازة",
  "hero.trust3": "سريع وفعال",
  "hero.trust4": "رضا مضمون",
  "hero.cardTitle": "خدمة في موقعكم",
  "hero.cardText": "تأكيد خلال 15 دقيقة · مواعيد حسب المنطقة",

  "brand.slogan": "سيارتك، شغفنا.",

  "trust.products": "منتجات ممتازة",
  "trust.fast": "سريع وفعال",
  "trust.team": "عناية وحماية",
  "trust.come": "في موقعكم",
  "trust.satisfaction": "رضا مضمون",

  "nav.loyalty": "الولاء",

  "steps.eyebrow": "كيف تعمل الخدمة",
  "steps.title": "احجز. نصل. تقود سيارة نظيفة.",
  "steps.sub": "مسار بسيط يوفر وقتكم.",
  "steps.1.t": "اختاروا نوع المركبة",
  "steps.1.d": "سيارة، SUV أو دراجة — السعر واضح فوراً.",
  "steps.2.t": "المكان والوقت",
  "steps.2.d": "حيكم في أكادير + الموعد المناسب.",
  "steps.3.t": "تأكيد عبر واتساب",
  "steps.3.d": "تصلكم التأكيدات. فريقنا يصل جاهزاً.",

  "pricing.eyebrow": "أسعار أكادير",
  "pricing.title": "أسعار واضحة. بلا مفاجآت.",
  "pricing.sub":
    "تنظيف داخلي وخارجي كامل مشمول. نتنقل إليكم في أكادير.",
  "pricing.includesTitle": "ما الذي يشمله السعر",
  "pricing.cta": "اختيار وحجز",
  "pricing.mad": "درهم",
  "pricing.from": "ابتداءً من",
  "vehicle.normal": "سيارات عادية",
  "vehicle.normal.ar": "سيارات عادية",
  "vehicle.suv": "SUV و دفع رباعي",
  "vehicle.suv.ar": "دفع رباعي و SUV",
  "vehicle.moto": "دراجة نارية",
  "vehicle.moto.ar": "دراجة نارية",
  "vehicle.desc": "تنظيف داخلي وخارجي كامل",
  "vehicle.moto.desc": "تنظيف كامل",

  "inc.exterior": "غسيل خارجي يدوي",
  "inc.vacuum": "شفط داخلي",
  "inc.windows": "تنظيف الزجاج",
  "inc.dashboard": "تنظيف لوحة القيادة",
  "inc.tires": "لمعان الإطارات والجنوط",
  "inc.freshener": "معطر داخلي",

  "ba.eyebrow": "دليل بصري",
  "ba.title": "نفس السيارة. قبل وبعد.",
  "ba.sub": "حرّك الشريط: نفس السيارة ونفس الزاوية — النظافة فقط تتغير.",
  "ba.before": "قبل",
  "ba.after": "بعد",
  "ba.sedan": "سيدان",
  "ba.suv": "SUV",
  "ba.moto": "دراجة نارية",

  "why.eyebrow": "لماذا Lavage Nova",
  "why.title": "خدمة مصممة لكم",
  "why.sub":
    "في موقعكم، منتجات ممتازة، عناية وحماية — رضاكم أولويتنا.",
  "why.1.t": "في موقعكم",
  "why.1.d": "نأتي إليكم أينما كنتم.",
  "why.2.t": "منتجات ممتازة",
  "why.2.d": "منتجات احترافية لنتيجة مثالية.",
  "why.3.t": "عناية وحماية",
  "why.3.d": "نعتني بسيارتكم كما لو كانت سيارتنا.",
  "why.4.t": "سريع وفعال",
  "why.4.d": "خدمة سريعة دون التنازل عن الجودة.",
  "why.5.t": "رضا مضمون",
  "why.5.d": "رضاكم هو أولويتنا.",

  "loyalty.eyebrow": "بطاقة الولاء",
  "loyalty.title": "5 غسلات = 1 مجاناً",
  "loyalty.sub":
    "كل غسلة تُحسب. في الزيارة السادسة تكون مجانية — بسيط وواضح.",
  "loyalty.formula": "5 غسلات = غسلة مجانية!",
  "loyalty.wash": "غسلة",
  "loyalty.free": "مجاناً",
  "loyalty.cta": "أريد بطاقة الولاء",

  "zones.eyebrow": "التغطية",
  "zones.title": "نتنقل في كل أكادير",
  "zones.sub": "اختاروا حيكم لبدء الحجز.",
  "zones.cta": "احجز في هذا الحي",
  "zones.ok": "متاح",

  "book.eyebrow": "الحجز",
  "book.title": "احجزوا غسيلكم في 60 ثانية",
  "book.sub": "املؤوا النموذج. يصلكم تأكيد واتساب — ونحن أيضاً.",
  "book.step1": "المركبة",
  "book.step2": "التفاصيل",
  "book.step3": "التأكيد",
  "book.name": "الاسم الكامل",
  "book.phone": "الهاتف",
  "book.zone": "الحي",
  "book.date": "التاريخ المفضل",
  "book.slot": "الوقت",
  "book.note": "ملاحظة (الدخول، موقف…)",
  "book.next": "متابعة",
  "book.back": "رجوع",
  "book.submit": "تأكيد عبر واتساب",
  "book.successTitle": "الطلب جاهز",
  "book.successText":
    "المرجع {ref}. أرسلوا رسالة واتساب للتأكيد — فريقنا يرد قريباً.",
  "book.openWa": "إرسال عبر واتساب",
  "book.summary": "الملخص",
  "book.privacy": "بياناتكم تُستخدم فقط لمعالجة الحجز. بلا رسائل مزعجة.",
  "book.sending": "جاري الحفظ…",
  "book.sheetOk": "تم حفظ الحجز في Google Sheets ✔",
  "book.sheetOff": "واتساب جاهز (Google Sheets غير متصل على السيرفر)",
  "book.sheetFail": "واتساب جاهز — تحقق من حفظ الـ Sheet",

  "pro.title": "الإقامات والشركات",
  "pro.sub": "عدة سيارات في نفس اليوم؟ سعر جماعي وموعد مخصص.",
  "pro.cta": "طلب عرض سعر",

  "faq.eyebrow": "أسئلة شائعة",
  "faq.title": "الأسئلة المتكررة",
  "faq.1.q": "هل تأتون فعلاً إلى موقعي؟",
  "faq.1.a":
    "نعم. نأتي إلى المنزل أو المكتب أو الإقامة في أكادير بكل التجهيزات.",
  "faq.2.q": "كم يستغرق الغسيل؟",
  "faq.2.a":
    "حوالي 40 إلى 70 دقيقة حسب المركبة وحالتها. الدراجات أسرع.",
  "faq.3.q": "ماذا يشمل السعر؟",
  "faq.3.a":
    "داخلي وخارجي كامل: الهيكل، الزجاج، الشفط، لوحة القيادة، الإطارات ومعطر.",
  "faq.4.q": "كيف أؤكد حجزي؟",
  "faq.4.a":
    "بعد النموذج ترسلون واتساب. نؤكد الموعد بسرعة.",
  "faq.5.q": "طرق الدفع؟",
  "faq.5.a": "نقداً أو تحويل — يُحدد عند التأكيد.",

  "cta.title": "اتصلوا بنا الآن",
  "cta.sub": "أكادير · نتنقل في كل المدينة",
  "cta.wa": "واتساب",
  "cta.call": "اتصال",

  "footer.tag": "غسيل سيارات متنقل — أكادير",
  "footer.nav": "التنقل",
  "footer.contact": "تواصل",
  "footer.legal": "إشعارات قانونية",
  "footer.privacy": "الخصوصية",
  "footer.rights": "جميع الحقوق محفوظة",

  "game.eyebrow": "تجربة",
  "game.title": "مهمة النظافة",
  "game.sub": "نظّفوا البقع لفتح رمز ميزة لحجزكم القادم.",
  "game.progress": "التقدم",
  "game.spots": "بقع",
  "game.done": "نتيجة مثالية!",
  "game.code": "الرمز",
  "game.why": "تفاصيل تميزنا",
  "game.whyText": "لحظة تفاعلية قبل الحجز — ممتعة ومفيدة.",
  "game.cta": "احجز بالرمز",
  "game.retry": "إعادة اللعب",
  "game.hint": "نظّفوا 6 بقع لفتح الرمز.",

  "lang.label": "اللغة",
};

export const dictionaries: Record<Lang, Dict> = { fr, en, ar };

export function t(lang: Lang, key: string, vars?: Record<string, string>) {
  let value = dictionaries[lang][key] ?? dictionaries.fr[key] ?? key;
  if (vars) {
    for (const [k, v] of Object.entries(vars)) {
      value = value.replace(`{${k}}`, v);
    }
  }
  return value;
}
