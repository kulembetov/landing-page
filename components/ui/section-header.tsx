import type { ReactNode } from "react";

const SECTION_HEAD_MAX_W: Record<string, string> = {
  hero: "section-header-hero",
  revolution: "section-header-revolution",
  "tabs-showcase": "section-header-tabs-showcase",
  audience: "section-header-audience",
  b2b: "section-header-b2b",
  howit: "section-header-howit",
  value: "section-header-value",
};

type SectionHeaderVariant = "section" | "hero" | "value" | "testimonial";
type SectionHeaderTag = "h1" | "h2";

const TITLE: Record<SectionHeaderVariant, string> = {
  section: "section-title",
  hero: "section-title section-title-hero",
  value: "section-title section-title-value",
  testimonial: "section-title section-title-testimonial",
};

const SUB: Record<SectionHeaderVariant, string> = {
  section: "section-subtitle",
  hero: "section-subtitle section-subtitle-hero",
  value: "section-subtitle text-balance text-center",
  testimonial: "section-subtitle",
};

type SectionHeaderProps = {
  section: string;
  titleId: string;
  title: ReactNode;
  as?: SectionHeaderTag;
  variant?: SectionHeaderVariant;
  eyebrow?: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
};

export function SectionHeader({
  section,
  titleId,
  title,
  as: Heading = "h2",
  variant = "section",
  eyebrow,
  subtitle,
  children,
}: SectionHeaderProps) {
  const sectionClass = SECTION_HEAD_MAX_W[section] ?? "";
  return (
    <header className={sectionClass ? `section-header ${sectionClass}` : "section-header"}>
      {eyebrow ? <div>{eyebrow}</div> : null}
      <Heading id={titleId} className={TITLE[variant]}>
        {title}
      </Heading>
      {subtitle ? <p className={SUB[variant]}>{subtitle}</p> : null}
      {children}
    </header>
  );
}
