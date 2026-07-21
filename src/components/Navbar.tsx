"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLang } from "@/context/LanguageContext";
import { BRAND, waLink } from "@/lib/constants";

export function Navbar() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const wa = waLink("Salut Lavage Nova 👋\nJe souhaite réserver un lavage à Agadir.");

  const links = [
    { href: "/#services", label: t("nav.services") },
    { href: "/#avant-apres", label: t("nav.beforeAfter") },
    { href: "/#fidelite", label: t("nav.loyalty") },
    { href: "/#reserver", label: t("nav.book") },
    { href: "/#faq", label: t("nav.faq") },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-white/40 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 md:px-6">
        <Logo size="sm" showTagline={false} />

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-display text-sm font-semibold text-navy/75 transition hover:text-cyan"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <a
            href={`tel:+${BRAND.phoneE164}`}
            className="hidden items-center gap-1.5 rounded-full px-3 py-2 text-sm font-semibold text-navy hover:bg-foam md:inline-flex"
          >
            <Phone className="h-4 w-4 text-cyan" />
            {BRAND.phoneDisplay}
          </a>
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-navy px-4 py-2.5 font-display text-sm font-bold text-white shadow-nova transition hover:bg-navy-deep sm:inline-flex"
          >
            {t("nav.book")}
          </a>
          <button
            type="button"
            className="inline-flex rounded-xl p-2 text-navy lg:hidden"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-navy/5 bg-white px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-2">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 font-display font-semibold text-navy hover:bg-foam"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-wa px-4 py-3 text-center font-display font-bold text-white"
            >
              WhatsApp · {BRAND.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
