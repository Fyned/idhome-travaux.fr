// ─────────────────────────────────────────────
// ID Home — Composant Button partagé
// ─────────────────────────────────────────────

import Link from "next/link";
import clsx from "clsx";

type ButtonVariant = "primary" | "outline" | "outline-white" | "ghost" | "white";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

interface ButtonAsButton extends ButtonBaseProps {
  as?: "button";
  href?: never;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
}

interface ButtonAsLink extends ButtonBaseProps {
  as: "link";
  href: string;
  type?: never;
  onClick?: never;
  disabled?: never;
  external?: boolean;
}

interface ButtonAsAnchor extends ButtonBaseProps {
  as: "anchor";
  href: string;
  type?: never;
  onClick?: never;
  disabled?: never;
}

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-id-orange hover:bg-id-orange-dark text-white cta-glow",
  outline:
    "border-2 border-id-charcoal text-id-charcoal hover:bg-id-charcoal hover:text-white",
  "outline-white":
    "border-2 border-white text-white hover:bg-white hover:text-id-charcoal",
  ghost:
    "text-id-charcoal hover:bg-gray-100",
  white:
    "bg-white text-id-charcoal hover:bg-gray-50 shadow-sm",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm gap-2",
  md: "px-6 py-3 text-base gap-2",
  lg: "px-8 py-4 text-lg gap-3",
};

export default function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    className,
    children,
    icon,
    iconPosition = "left",
  } = props;

  const classes = clsx(
    "inline-flex items-center justify-center font-heading font-semibold rounded-full transition-all duration-300",
    variantStyles[variant],
    sizeStyles[size],
    props.as !== "link" && props.as !== "anchor" && props.disabled && "opacity-50 cursor-not-allowed",
    className
  );

  const content = (
    <>
      {icon && iconPosition === "left" && icon}
      {children}
      {icon && iconPosition === "right" && icon}
    </>
  );

  // Lien interne Next.js
  if (props.as === "link") {
    return (
      <Link
        href={props.href}
        className={classes}
        {...(props.external && {
          target: "_blank",
          rel: "noopener noreferrer",
        })}
      >
        {content}
      </Link>
    );
  }

  // Lien HTML natif (tel:, mailto:, etc.)
  if (props.as === "anchor") {
    return (
      <a href={props.href} className={classes}>
        {content}
      </a>
    );
  }

  // Bouton standard
  return (
    <button
      type={props.type || "button"}
      onClick={props.onClick}
      disabled={props.disabled}
      className={classes}
    >
      {content}
    </button>
  );
}
