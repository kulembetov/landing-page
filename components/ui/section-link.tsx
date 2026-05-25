"use client";

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";

type SectionLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
  children: ReactNode;
};

function canHandleClick(event: MouseEvent<HTMLAnchorElement>) {
  return (
    !event.defaultPrevented &&
    event.button === 0 &&
    !event.metaKey &&
    !event.ctrlKey &&
    !event.shiftKey &&
    !event.altKey
  );
}

export function SectionLink({ href, onClick, children, ...props }: SectionLinkProps) {
  return (
    <a
      href={href}
      {...props}
      onClick={(event) => {
        onClick?.(event);
        if (!canHandleClick(event) || !href.startsWith("#") || href === "#") return;

        window.requestAnimationFrame(() => {
          window.history.replaceState(
            window.history.state,
            "",
            `${window.location.pathname}${window.location.search}`,
          );
        });
      }}
    >
      {children}
    </a>
  );
}
