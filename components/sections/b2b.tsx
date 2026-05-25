import { FeatureCard } from "@/components/ui/feature-card";
import { FadeUp } from "@/components/ui/fade-up";
import { SectionHeader } from "@/components/ui/section-header";
import { B2B_COPY, B2B_FEATURES } from "@/lib/landing-content";
import type { CSSProperties } from "react";

export function B2B() {
  return (
    <section
      className="landing-section"
      id="b2b"
      aria-labelledby="b2b-title"
      data-nav-theme="dark"
      style={{ "--section-nav-bg": "var(--dark-card)" } as CSSProperties}
    >
      <div className="section-panel section-panel-dark">
        <div className="section-container">
          <FadeUp>
            <SectionHeader
              section="b2b"
              titleId="b2b-title"
              eyebrow={
                <span className="eyebrow-badge eyebrow-badge-dark">
                  <span className="size-8 rounded-full bg-blue" aria-hidden="true" />
                  {B2B_COPY.eyebrow}
                </span>
              }
              title={
                <>
                  <span className="block">{B2B_COPY.title[0]}</span>
                  <span className="block">
                    <em className="section-title-accent">{B2B_COPY.title[1]}</em>
                  </span>
                  <span className="block">{B2B_COPY.title[2]}</span>
                </>
              }
              subtitle={B2B_COPY.subtitle}
            />
          </FadeUp>

          <FadeUp delay={0.08}>
            <div className="feature-grid">
              {B2B_FEATURES.map((feature) => (
                <FeatureCard
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
