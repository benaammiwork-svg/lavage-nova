import Image from "next/image";
import Link from "next/link";

type Props = {
  href?: string;
  className?: string;
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
  /** Text color on dark backgrounds */
  variant?: "default" | "light";
};

const SIZES = {
  sm: { h: 48, w: 140 },
  md: { h: 64, w: 180 },
  lg: { h: 96, w: 260 },
} as const;

/** Official transparent logo path (cache-busted filename when replaced) */
export const LOGO_SRC = "/brand/logo-lavage-nova.png";

export function LogoMark({
  className = "h-10 w-10",
}: {
  className?: string;
}) {
  return (
    <Image
      src={LOGO_SRC}
      alt=""
      width={80}
      height={80}
      className={`object-contain ${className}`}
      aria-hidden
    />
  );
}

export function Logo({
  href = "/",
  className = "",
  showTagline = false,
  size = "md",
  variant = "default",
}: Props) {
  const dim = SIZES[size];

  const inner = (
    <span className={`inline-flex flex-col items-start gap-0.5 ${className}`}>
      <Image
        src={LOGO_SRC}
        alt="Lavage Nova"
        width={dim.w}
        height={dim.h}
        className="h-auto w-auto object-contain"
        style={{ height: dim.h, width: "auto", maxWidth: dim.w }}
        priority={size !== "lg"}
      />
      {showTagline && (
        <span
          className={`ps-1 text-[10px] font-semibold uppercase tracking-[0.16em] ${
            variant === "light" ? "text-white/70" : "text-navy/60"
          }`}
        >
          Votre voiture, notre passion.
        </span>
      )}
    </span>
  );

  if (!href) return inner;
  return (
    <Link
      href={href}
      className="inline-flex shrink-0"
      aria-label="Lavage Nova — Accueil"
    >
      {inner}
    </Link>
  );
}
