import { NavThemeController } from "@/components/sections/nav-theme-controller";
import { CtaButton } from "@/components/ui/cta-button";
import { Logo } from "@/components/ui/logo";
import { SectionLink } from "@/components/ui/section-link";
import { APP_CTA_HREF, BRAND_NAME, CTA_LABELS, NAV_LINKS } from "@/lib/landing-content";

const NAV_METRIKA_GOALS_BY_HREF: Record<string, string> = {
  "#howit": "how_it_works",
  "#showcase": "pattern",
};

export function Nav() {
  return (
    <>
      <NavThemeController />
      <a className="skip-link" href="#main-content">
        Перейти к основному содержанию
      </a>
      <nav className="site-nav" data-site-nav aria-label="Главная навигация">
        <div className="nav-inner">
          <Logo
            variant="full"
            asLink
            className="nav-logo"
            aria-label={`${BRAND_NAME} — на главную`}
          />

          <ul className="nav-links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <SectionLink
                  href={link.href}
                  className="nav-link"
                  data-metrika-goal={NAV_METRIKA_GOALS_BY_HREF[link.href]}
                >
                  {link.label}
                </SectionLink>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <a href={APP_CTA_HREF} className="nav-link nav-login" data-metrika-goal="login">
              {CTA_LABELS.login}
            </a>
            <CtaButton href={APP_CTA_HREF} variant="nav" data-metrika-goal="start_header">
              {CTA_LABELS.primary}
            </CtaButton>
          </div>
        </div>
      </nav>
    </>
  );
}
