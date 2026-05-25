import Link from "next/link";
import type { CSSProperties } from "react";
import { Logo } from "@/components/ui/logo";
import {
  BRAND_NAME,
  FOOTER_COLUMNS,
  FOOTER_SOCIAL_LINKS,
  type SocialLink,
} from "@/lib/landing-content";
import { SectionLink } from "@/components/ui/section-link";
import { siteSeoConfig } from "@/lib/seo-config";

function BrandIcon({ icon }: { icon: SocialLink["icon"] }) {
  return (
    <svg
      className="footer-social-icon"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d={icon.path} />
    </svg>
  );
}

export function Footer() {
  return (
    <footer
      className="footer-section"
      id="footer"
      data-nav-theme="dark"
      style={{ "--section-nav-bg": "var(--ink-1)" } as CSSProperties}
    >
      <div className="footer-container">
        <div className="footer-grid">
          <div className="min-w-0">
            <Logo
              variant="full"
              asLink
              className="footer-logo"
              aria-label={`${BRAND_NAME} — на главную`}
            />
            <p className="footer-tagline">
              Нейросеть для&nbsp;создания презентаций.
              <br />
              От&nbsp;идеи до&nbsp;PowerPoint за&nbsp;3&nbsp;минуты.
            </p>
            <div className="flex gap-8 mt-24">
              {FOOTER_SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="footer-social"
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BrandIcon icon={link.icon} />
                </a>
              ))}
            </div>
          </div>

          <nav className="footer-nav" aria-label="Навигация в подвале">
            {FOOTER_COLUMNS.map((column) => (
              <div key={column.title}>
                <h4 className="footer-heading">{column.title}</h4>
                <ul className="footer-list">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      {link.href.startsWith("mailto:") ? (
                        <a className="footer-link" href={link.href}>
                          {link.label}
                        </a>
                      ) : link.href.startsWith("#") ? (
                        <SectionLink className="footer-link" href={link.href}>
                          {link.label}
                        </SectionLink>
                      ) : (
                        <Link className="footer-link" href={link.href}>
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">
            © 2026 {siteSeoConfig.organization.legalName}&nbsp;· ИНН{" "}
            {siteSeoConfig.organization.taxId}&nbsp;· ОГРН{" "}
            {siteSeoConfig.organization.registrationNumber}
          </div>
          <div>
            <a className="footer-link" href={`mailto:${siteSeoConfig.organization.email}`}>
              {siteSeoConfig.organization.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
