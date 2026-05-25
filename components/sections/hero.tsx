import { HeroCounters, HeroPrompt } from "@/components/sections/hero-client";
import { CtaButton } from "@/components/ui/cta-button";
import { FadeUp } from "@/components/ui/fade-up";
import { PlayCircleIcon } from "@/components/ui/icons";
import { SectionHeader } from "@/components/ui/section-header";
import {
  APP_CTA_HREF,
  CTA_LABELS,
  HERO_COPY,
  HERO_COUNTERS,
  HERO_PROMPTS,
  HERO_STATUSES,
} from "@/lib/landing-content";

export function Hero() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="hero-inner">
        <FadeUp mount>
          <SectionHeader
            section="hero"
            titleId="hero-title"
            as="h1"
            variant="hero"
            eyebrow={
              <span className="eyebrow-badge">
                <span className="hero-eyebrow-dot" aria-hidden="true" />
                {HERO_COPY.eyebrow}
              </span>
            }
            title={
              <>
                {HERO_COPY.title}
                <br />
                <span className="section-title-accent">{HERO_COPY.titleAccent}</span>
              </>
            }
            subtitle={HERO_COPY.subtitle}
          />
        </FadeUp>

        <FadeUp mount delay={0.2}>
          <HeroPrompt prompts={HERO_PROMPTS} statuses={HERO_STATUSES} />
        </FadeUp>

        <FadeUp mount delay={0.3} className="hero-actions">
          <CtaButton href={APP_CTA_HREF}>{CTA_LABELS.primary}</CtaButton>
          <CtaButton href="#howit" variant="ghost">
            <PlayCircleIcon />
            {CTA_LABELS.howItWorks}
          </CtaButton>
        </FadeUp>
      </div>

      <FadeUp mount delay={0.42} className="hero-trust">
        <HeroCounters counters={HERO_COUNTERS} />
      </FadeUp>
    </section>
  );
}
