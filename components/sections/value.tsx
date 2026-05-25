import { CtaButton } from "@/components/ui/cta-button";
import { FeatureCard } from "@/components/ui/feature-card";
import { FadeUp } from "@/components/ui/fade-up";
import { SectionHeader } from "@/components/ui/section-header";
import { APP_CTA_HREF, CTA_LABELS, VALUE_COPY, VALUE_FEATURES } from "@/lib/landing-content";
import type { CSSProperties } from "react";

export function Value() {
  return (
    <section
      className="landing-section"
      id="value"
      aria-labelledby="value-title"
      data-nav-theme="dark"
      style={{ "--section-nav-bg": "var(--dark-card)" } as CSSProperties}
    >
      <div className="section-panel section-panel-dark section-panel-inset value-panel">
        <FadeUp>
          <SectionHeader
            section="value"
            titleId="value-title"
            variant="value"
            title={
              <>
                <span className="section-title-accent block text-center">
                  {VALUE_COPY.title[0]}
                </span>
                <span className="block text-center">
                  <span className="section-title-accent">{VALUE_COPY.title[1]}</span>
                </span>
                <span className="block text-center">{VALUE_COPY.title[2]}</span>
              </>
            }
            subtitle={VALUE_COPY.subtitle}
          />
        </FadeUp>

        <FadeUp delay={0.08}>
          <div className="feature-grid value-feature-grid">
            {VALUE_FEATURES.map((feature) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </FadeUp>

        <div className="flex justify-center mt-32">
          <CtaButton href={APP_CTA_HREF}>{CTA_LABELS.tryFree}</CtaButton>
        </div>
      </div>
    </section>
  );
}
