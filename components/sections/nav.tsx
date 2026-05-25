import Link from "next/link";
import { NavThemeController } from "@/components/sections/nav-theme-controller";
import { CtaButton } from "@/components/ui/cta-button";
import { SectionLink } from "@/components/ui/section-link";
import { APP_CTA_HREF, BRAND_NAME, CTA_LABELS, NAV_LINKS } from "@/lib/landing-content";

export function Nav() {
  return (
    <>
      <NavThemeController />
      <a className="skip-link" href="#main-content">
        Перейти к основному содержанию
      </a>
      <nav className="site-nav" data-site-nav aria-label="Главная навигация">
        <div className="nav-inner">
          <Link href="/" className="nav-brand" aria-label={`${BRAND_NAME} — на главную`}>
            <span className="nav-logo" aria-hidden="true">
              <img src="/logo.svg" alt="" className="w-full h-full object-contain" />
            </span>
            <span className="hidden">{BRAND_NAME}</span>
          </Link>

          <ul className="nav-links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <SectionLink href={link.href} className="nav-link">
                  {link.label}
                </SectionLink>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <a href={APP_CTA_HREF} className="nav-link nav-login">
              {CTA_LABELS.login}
            </a>
            <CtaButton href={APP_CTA_HREF} variant="nav">
              {CTA_LABELS.primary}
            </CtaButton>
          </div>
        </div>
      </nav>
    </>
  );
}
