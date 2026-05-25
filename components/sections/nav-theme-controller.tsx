"use client";

import { useEffect } from "react";

const NAV_SELECTOR = "[data-site-nav]";
const NAV_THEME_ATTR = "data-nav-theme";
const NAV_THEME_DARK = "dark";
const NAV_SECTION_BG_TOKEN = "--section-nav-bg";
const NAV_DEFAULT_BG_TOKEN = "--nav-bg-color";
const NAV_BG_OPACITY_LIGHT_TOKEN = "--nav-bg-opacity-light";
const NAV_BG_OPACITY_DARK_TOKEN = "--nav-bg-opacity-dark";
const colorCache = new Map<string, string>();

function getDarkSections() {
  return Array.from(
    document.querySelectorAll<HTMLElement>(`[${NAV_THEME_ATTR}="${NAV_THEME_DARK}"]`),
  );
}

function getFirstVisibleSection(sections: Iterable<HTMLElement>) {
  return Array.from(sections).sort(
    (a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top,
  )[0];
}

function resolveCssColor(color: string): string {
  const cached = colorCache.get(color);
  if (cached) return cached;

  const probe = document.createElement("span");
  probe.style.color = color;
  probe.style.display = "none";
  document.body.append(probe);
  const resolved = window.getComputedStyle(probe).color;
  probe.remove();
  colorCache.set(color, resolved);
  return resolved;
}

function colorWithOpacity(color: string, opacity: number): string {
  const resolved = resolveCssColor(color).match(/\d+(\.\d+)?/g);
  if (!resolved || resolved.length < 3) return color;

  const [r, g, b] = resolved;
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

function readOpacity(styles: CSSStyleDeclaration, token: string, fallback: number): number {
  const value = Number.parseFloat(styles.getPropertyValue(token));
  return Number.isFinite(value) ? value : fallback;
}

export function NavThemeController() {
  useEffect(() => {
    const nav = document.querySelector<HTMLElement>(NAV_SELECTOR);
    if (!nav) return;

    const visibleDarkSections = new Set<HTMLElement>();
    let observer: IntersectionObserver | undefined;

    const applyTheme = () => {
      const themeTarget = getFirstVisibleSection(visibleDarkSections);
      const navStyles = window.getComputedStyle(nav);
      const isDark = Boolean(themeTarget);
      const sectionBackground = themeTarget
        ? window.getComputedStyle(themeTarget).getPropertyValue(NAV_SECTION_BG_TOKEN).trim()
        : navStyles.getPropertyValue(NAV_DEFAULT_BG_TOKEN).trim();
      const opacity = readOpacity(
        navStyles,
        isDark ? NAV_BG_OPACITY_DARK_TOKEN : NAV_BG_OPACITY_LIGHT_TOKEN,
        1,
      );

      nav.style.backgroundColor = colorWithOpacity(
        sectionBackground || navStyles.getPropertyValue(NAV_DEFAULT_BG_TOKEN).trim(),
        opacity,
      );
      nav.classList.toggle("nav-is-dark", isDark);
    };

    const observe = () => {
      observer?.disconnect();
      visibleDarkSections.clear();

      const navHeight = nav.offsetHeight || 64;
      const bottomMargin = Math.max(window.innerHeight - navHeight, 0);
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const section = entry.target as HTMLElement;
            if (entry.isIntersecting) visibleDarkSections.add(section);
            else visibleDarkSections.delete(section);
          });
          applyTheme();
        },
        {
          rootMargin: `0px 0px -${bottomMargin}px 0px`,
          threshold: 0,
        },
      );

      getDarkSections().forEach((section) => observer?.observe(section));
      applyTheme();
    };

    observe();
    window.addEventListener("resize", observe, { passive: true });
    return () => {
      observer?.disconnect();
      window.removeEventListener("resize", observe);
    };
  }, []);

  return null;
}
