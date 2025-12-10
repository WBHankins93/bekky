import { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

interface NeonButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "purple" | "gold";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: ReactNode;
}

export default function NeonButton({
  variant = "purple",
  size = "md",
  href,
  children,
  className = "",
  ...props
}: NeonButtonProps) {
  const baseClasses = "neon-button";
  const variantClasses = variant === "gold" ? "neon-button-gold" : "";
  const sizeClasses = size === "sm" ? "neon-button-sm" : size === "lg" ? "neon-button-lg" : "";
  const classes = `${baseClasses} ${variantClasses} ${sizeClasses} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

