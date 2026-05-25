import { BenefitsGallery } from "@/components/sections/benefits-gallery";
import { CtaButton } from "@/components/ui/cta-button";
import { FadeUp } from "@/components/ui/fade-up";
import { SectionHeader } from "@/components/ui/section-header";
import { APP_CTA_HREF, BENEFIT_TAGS, CTA_LABELS, REVOLUTION_COPY } from "@/lib/landing-content";

export function Benefits() {
  return (
    <section
      className="landing-section"
      id="revolution"
      aria-labelledby="revolution-title"
      data-metrika-scroll-goals="reach_block8"
    >
      <div className="section-panel section-panel-light section-panel-inset">
        <div className="section-container-plain">
          <FadeUp>
            <SectionHeader
              section="revolution"
              titleId="revolution-title"
              title={
                <>
                  <span className="block">{REVOLUTION_COPY.title[0]}</span>
                  <span className="block">{REVOLUTION_COPY.title[1]}</span>
                </>
              }
              subtitle={REVOLUTION_COPY.subtitle}
            />
          </FadeUp>

          <FadeUp delay={0.06}>
            <div className="benefit-tag-list" role="list" aria-label="Типы презентаций">
              {BENEFIT_TAGS.map((tag) => (
                <span key={tag} className="benefit-tag" role="listitem">
                  {tag}
                </span>
              ))}
            </div>
          </FadeUp>

          <BenefitsGallery />

          <div className="flex justify-center mt-32">
            <CtaButton href={APP_CTA_HREF} data-metrika-goal="start_eighth_block">
              {CTA_LABELS.createWithAi}
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}
