import type { Metadata } from "next";
import { Manrope, Plus_Jakarta_Sans, Noto_Sans_Arabic } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { WhatsAppSticky } from "@/components/WhatsAppSticky";
import { LanguageProvider } from "@/context/LanguageContext";
import { BRAND } from "@/lib/constants";
import "./globals.css";

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

const arabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-arabic",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Lavage Nova | Lavage auto à domicile à Agadir",
  description:
    "Service professionnel de lavage auto à domicile à Agadir. Tarifs clairs, réservation WhatsApp. 0659 049 972.",
  openGraph: {
    title: "Lavage Nova — Lavage auto à domicile Agadir",
    description: "Nous venons chez vous. Réservez en 1 minute.",
    locale: "fr_MA",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: BRAND.name,
  description: "Lavage auto à domicile à Agadir",
  telephone: `+${BRAND.phoneE164}`,
  areaServed: "Agadir, Morocco",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Agadir",
    addressCountry: "MA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${display.variable} ${body.variable} ${arabic.variable} min-h-screen bg-white font-body antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider>
          <Navbar />
          <main className="pb-20 md:pb-8">{children}</main>
          <Footer />
          <WhatsAppSticky />
        </LanguageProvider>
      </body>
    </html>
  );
}
