import { CtaButton } from "@/components/ui/cta-button";
import { StarIcon } from "@/components/ui/icons";
import { FadeUp } from "@/components/ui/fade-up";
import { SectionHeader } from "@/components/ui/section-header";
import { APP_CTA_HREF, CTA_LABELS, TESTIMONIALS, TESTIMONIALS_COPY } from "@/lib/landing-content";
import type { CSSProperties } from "react";

const Stars = () => (
  <div className="review-stars">
    {Array.from({ length: 5 }, (_, i) => (
      <StarIcon key={i} />
    ))}
  </div>
);

export function Testimonials() {
  return (
    <section
      className="landing-section"
      id="testimonials"
      aria-labelledby="testimonials-title"
      data-nav-theme="dark"
      style={{ "--section-nav-bg": "var(--dark-screen)" } as CSSProperties}
    >
      <div className="section-panel section-panel-screen">
        <FadeUp>
          <SectionHeader
            section="testimonials"
            titleId="testimonials-title"
            variant="testimonial"
            title={
              <>
                {TESTIMONIALS_COPY.title}
                <em className="section-title-accent"> {TESTIMONIALS_COPY.emphasis}</em>{" "}
                {TESTIMONIALS_COPY.suffix}
              </>
            }
          />
        </FadeUp>
        <FadeUp delay={0.08}>
          <div
            className="overflow-hidden marquee--reviews"
            style={{ "--marquee-duration": "110s" } as React.CSSProperties}
            aria-hidden="true"
          >
            <div className="marquee-track">
              {[...TESTIMONIALS, ...TESTIMONIALS].map((review, index) => (
                <article
                  key={index}
                  className="review-card"
                  aria-hidden={index >= TESTIMONIALS.length ? "true" : undefined}
                >
                  <Stars />
                  <p className="review-copy">{review.text}</p>
                  <div className="review-author">
                    <div className="review-name">{review.name}</div>
                    <div className="review-role">{review.role}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </FadeUp>
        <div className="flex justify-center mt-56">
          <CtaButton href={APP_CTA_HREF} data-metrika-goal="start_tenth_block">
            {CTA_LABELS.primary}
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
