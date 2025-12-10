import { HTMLAttributes, ReactNode } from "react";

interface NeonCardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "purple" | "gold";
  scanLine?: boolean;
  children: ReactNode;
}

export default function NeonCard({
  variant = "purple",
  scanLine = false,
  children,
  className = "",
  ...props
}: NeonCardProps) {
  const baseClasses = "neon-card";
  const variantClasses = variant === "gold" ? "neon-card-gold" : "";
  const scanLineClasses = scanLine ? "scan-line" : "";
  const classes = `${baseClasses} ${variantClasses} ${scanLineClasses} ${className}`.trim();

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

