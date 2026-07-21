import Image from "next/image";
import Link from "next/link";

type Props = {
  href?: string;
  className?: string;
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
  /** On dark backgrounds, logo sits on a white rounded plate */
  variant?: "default" | "light";
  /** Show full logo (icon + wordmark) or icon-focused crop */
  mode?: "full" | "mark";
};

const SIZES = {
  sm: { h: 44, w: 120 },
  md: { h: 56, w: 150 },
  lg: { h: 88, w: 220 },
} as const;

export function LogoMark({
  className = "h-10 w-10",
}: {
  className?: string;
}) {
  return (
    <Image
      src="/brand/logo-lavage-nova.png"
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
  const plate =
    variant === "light"
      ? "rounded-2xl bg-white px-2 py-1.5 shadow-sm"
      : "";

  const inner = (
    <span className={`inline-flex flex-col items-start gap-0.5 ${className}`}>
      <span className={`inline-flex items-center ${plate}`}>
        <Image
          src="/brand/logo-lavage-nova.png"
          alt="Lavage Nova"
          width={dim.w}
          height={dim.h}
          className="h-auto w-auto object-contain"
          style={{ height: dim.h, width: "auto", maxWidth: dim.w }}
          priority={size !== "lg"}
        />
      </span>
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
