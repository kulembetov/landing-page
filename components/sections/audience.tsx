import { CtaButton } from "@/components/ui/cta-button";
import { FadeUp } from "@/components/ui/fade-up";
import { SectionHeader } from "@/components/ui/section-header";
import {
  APP_CTA_HREF,
  AUDIENCE_CARDS,
  AUDIENCE_COPY,
  BRAND_NAME,
  CTA_LABELS,
} from "@/lib/landing-content";

export function Audience() {
  return (
    <section
      className="landing-section landing-section-padded"
      id="audience"
      aria-labelledby="audience-title"
      data-metrika-scroll-goals="reach_block9"
    >
      <div className="audience-container">
        <FadeUp>
          <SectionHeader
            section="audience"
            titleId="audience-title"
            title={
              <>
                {AUDIENCE_COPY.titlePrefix}{" "}
                <span className="section-title-accent">{BRAND_NAME}</span>
              </>
            }
            subtitle={AUDIENCE_COPY.subtitle}
          />
        </FadeUp>
        <FadeUp delay={0.08}>
          <div className="audience-grid">
            {AUDIENCE_CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <article key={card.title} className="audience-card">
                  <span className="audience-card-icon" aria-hidden="true">
                    <Icon size={20} strokeWidth={1.9} />
                  </span>
                  <h3 className="audience-card-title">{card.title}</h3>
                  <p className="audience-card-lead">{card.lead}</p>
                  <div className="audience-tags">
                    {card.tags.map((tag) => (
                      <span key={tag} className="audience-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </FadeUp>
        <div className="flex justify-center mt-32">
          <CtaButton href={APP_CTA_HREF}>{CTA_LABELS.start}</CtaButton>
        </div>
      </div>
    </section>
  );
}
