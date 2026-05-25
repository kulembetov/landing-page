import { TransformTabs } from "@/components/sections/transform-tabs";
import { FadeUp } from "@/components/ui/fade-up";
import { SectionHeader } from "@/components/ui/section-header";
import { TRANSFORM_COPY } from "@/lib/landing-content";
import type { CSSProperties } from "react";

export function Transform() {
  return (
    <section
      className="transform transform-section"
      id="transform"
      aria-labelledby="transform-title"
      data-nav-theme="dark"
      data-metrika-scroll-goals="reach_block4"
      style={{ "--section-nav-bg": "var(--dark-screen)" } as CSSProperties}
    >
      <div className="transform-container">
        <FadeUp>
          <SectionHeader
            section="transform"
            titleId="transform-title"
            title={
              <>
                {TRANSFORM_COPY.title[0]}
                <br />
                <em className="section-title-accent">{TRANSFORM_COPY.title[1]}</em>
              </>
            }
            subtitle={TRANSFORM_COPY.subtitle}
          />
        </FadeUp>
        <FadeUp delay={0.08}>
          <TransformTabs />
        </FadeUp>
      </div>
    </section>
  );
}
