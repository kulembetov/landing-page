import { CtaButton } from "@/components/ui/cta-button";
import { FadeUp } from "@/components/ui/fade-up";
import { SectionHeader } from "@/components/ui/section-header";
import { SpotlightCarousel } from "@/components/sections/spotlight-carousel";
import { APP_CTA_HREF, CTA_LABELS, SPOTLIGHT_COPY, SPOTLIGHT_SLIDES } from "@/lib/landing-content";
import type { CSSProperties } from "react";

export function Spotlight() {
  return (
    <section
      className="landing-section"
      id="spotlight"
      aria-labelledby="spotlight-title"
      data-nav-theme="dark"
      style={{ "--section-nav-bg": "var(--dark-spotlight-card)" } as CSSProperties}
    >
      <div className="section-panel section-panel-dark section-panel-spotlight">
        <FadeUp>
          <SectionHeader
            section="spotlight"
            titleId="spotlight-title"
            title={
              <>
                <span className="block">{SPOTLIGHT_COPY.title[0]}</span>
                <span className="section-title-accent block">{SPOTLIGHT_COPY.title[1]}</span>
              </>
            }
            subtitle={SPOTLIGHT_COPY.subtitle}
          />
        </FadeUp>
        <FadeUp delay={0.08}>
          <SpotlightCarousel slides={SPOTLIGHT_SLIDES} />
        </FadeUp>

        <div className="flex justify-center mt-32">
          <CtaButton href={APP_CTA_HREF}>{CTA_LABELS.start}</CtaButton>
        </div>
      </div>
    </section>
  );
}
