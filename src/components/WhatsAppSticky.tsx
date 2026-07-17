"use client";

import { MessageCircle } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { waLink } from "@/lib/constants";

export function WhatsAppSticky() {
  const { t } = useLang();
  const href = waLink("Salut Lavage Nova 👋\nJe souhaite réserver.");

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 z-50 inline-flex items-center gap-2 rounded-full bg-wa px-4 py-3 font-display text-sm font-bold text-white shadow-nova transition hover:scale-[1.03] end-4 md:bottom-6 md:end-6"
      aria-label={t("cta.wa")}
    >
      <MessageCircle className="h-5 w-5" />
      <span>{t("cta.wa")}</span>
    </a>
  );
}
