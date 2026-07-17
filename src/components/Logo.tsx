import Link from "next/link";

type Props = {
  href?: string;
  className?: string;
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "light";
};

export function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      aria-hidden="true"
      role="img"
    >
      <circle cx="32" cy="32" r="32" fill="#0B1F3A" />
      <path
        d="M18 40c2-8 8-14 14-14s12 6 14 14"
        fill="none"
        stroke="#2BB3FF"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M20 38h24l-2.2-7.2a4 4 0 0 0-3.8-2.8H26a4 4 0 0 0-3.8 2.8L20 38Z"
        fill="#fff"
      />
      <circle cx="24.5" cy="39.5" r="2.6" fill="#0B1F3A" />
      <circle cx="39.5" cy="39.5" r="2.6" fill="#0B1F3A" />
      <path
        d="M32 12l1.4 3.2L37 16.2l-2.8 2.2.9 3.6L32 20.2l-3.1 1.8.9-3.6-2.8-2.2 3.6-1z"
        fill="#fff"
      />
    </svg>
  );
}

export function Logo({
  href = "/",
  className = "",
  showTagline = true,
  size = "md",
  variant = "default",
}: Props) {
  const title =
    size === "lg" ? "text-2xl" : size === "sm" ? "text-lg" : "text-xl";
  const mark = size === "lg" ? "h-12 w-12" : size === "sm" ? "h-9 w-9" : "h-10 w-10";
  const lavage = variant === "light" ? "text-white" : "text-navy";
  const tag = variant === "light" ? "text-white/70" : "text-navy/70";

  const inner = (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className={mark} />
      <span className="leading-tight">
        <span className={`font-display font-extrabold tracking-tight ${title}`}>
          <span className={lavage}>Lavage </span>
          <span className="text-cyan">Nova</span>
        </span>
        {showTagline && (
          <span
            className={`mt-0.5 block text-[10px] font-semibold uppercase tracking-[0.18em] ${tag}`}
          >
            Lavage auto à domicile
          </span>
        )}
      </span>
    </span>
  );

  if (!href) return inner;
  return (
    <Link href={href} className="inline-flex shrink-0" aria-label="Lavage Nova — Accueil">
      {inner}
    </Link>
  );
}
