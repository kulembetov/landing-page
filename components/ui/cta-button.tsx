import type { AnchorHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionLink } from "@/components/ui/section-link";

type CtaButtonVariant = "primary" | "ghost" | "nav";
type CtaButtonSize = "sm" | "md" | "lg";

type CtaButtonProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "size"> & {
  href: string;
  variant?: CtaButtonVariant;
  size?: CtaButtonSize;
  fullWidth?: boolean;
  disabled?: boolean;
  children: ReactNode;
};

export function CtaButton({
  href,
  variant = "primary",
  size,
  fullWidth = false,
  disabled = false,
  className,
  children,
  ...props
}: CtaButtonProps) {
  const commonProps = {
    ...props,
    "aria-disabled": disabled || undefined,
    "data-full-width": fullWidth ? "true" : undefined,
    "data-size": variant === "nav" ? undefined : (size ?? "default"),
    "data-variant": variant,
    tabIndex: disabled ? -1 : props.tabIndex,
  };

  if (href.startsWith("#")) {
    return (
      <SectionLink
        href={href}
        className={className ? `cta-button ${className}` : "cta-button"}
        {...commonProps}
      >
        {children}
        <ArrowRight className="cta-icon" strokeWidth={1.9} aria-hidden="true" />
      </SectionLink>
    );
  }

  if (href.startsWith("/")) {
    return (
      <Link
        href={href}
        className={className ? `cta-button ${className}` : "cta-button"}
        {...commonProps}
      >
        {children}
        <ArrowRight className="cta-icon" strokeWidth={1.9} aria-hidden="true" />
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={className ? `cta-button ${className}` : "cta-button"}
      {...commonProps}
    >
      {children}
      <ArrowRight className="cta-icon" strokeWidth={1.9} aria-hidden="true" />
    </a>
  );
}
