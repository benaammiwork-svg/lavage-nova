"use client";

import Link from "next/link";
import { Logo } from "./Logo";
import { useLang } from "@/context/LanguageContext";
import { BRAND, waLink } from "@/lib/constants";

export function Footer() {
  const { t } = useLang();

  return (
    <footer className="bg-navy-wave text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:px-6">
        <div>
          <Logo href="/" showTagline variant="light" size="md" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/75">
            {t("footer.tag")}
          </p>
        </div>
        <div>
          <p className="font-display text-sm font-bold uppercase tracking-wider text-cyan">
            {t("footer.nav")}
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>
              <Link href="/#services" className="hover:text-white">
                {t("nav.services")}
              </Link>
            </li>
            <li>
              <Link href="/#avant-apres" className="hover:text-white">
                {t("nav.beforeAfter")}
              </Link>
            </li>
            <li>
              <Link href="/#fidelite" className="hover:text-white">
                {t("nav.loyalty")}
              </Link>
            </li>
            <li>
              <Link href="/#reserver" className="hover:text-white">
                {t("nav.book")}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-display text-sm font-bold uppercase tracking-wider text-cyan">
            {t("footer.contact")}
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>
              <a href={`tel:+${BRAND.phoneE164}`} className="hover:text-white">
                {BRAND.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={waLink("Salut Lavage Nova 👋")}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                WhatsApp & Appels
              </a>
            </li>
            <li>
              <a
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Instagram @{BRAND.instagram}
              </a>
            </li>
            <li>Agadir</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-white/55 md:px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 sm:flex-row sm:text-start">
          <p>
            © {new Date().getFullYear()} Lavage Nova — {t("footer.rights")}
          </p>
          <div className="flex gap-4">
            <Link href="/mentions-legales" className="hover:text-white">
              {t("footer.legal")}
            </Link>
            <Link href="/confidentialite" className="hover:text-white">
              {t("footer.privacy")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
