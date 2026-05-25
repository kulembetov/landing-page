import { Check, Star } from "lucide-react";
import { CtaButton } from "@/components/ui/cta-button";
import { FadeUp } from "@/components/ui/fade-up";
import { SectionHeader } from "@/components/ui/section-header";
import { APP_CTA_HREF, BRAND_NAME, PRICING_COPY, PRICING_TIERS } from "@/lib/landing-content";

export function Pricing() {
  return (
    <section id="pricing" className="landing-section" aria-labelledby="pricing-title">
      <div className="section-panel section-panel-light">
        <div className="section-container">
          <FadeUp>
            <SectionHeader
              section="pricing"
              titleId="pricing-title"
              title={
                <>
                  {PRICING_COPY.titlePrefix} <em className="section-title-accent">{BRAND_NAME}</em>
                </>
              }
              subtitle={PRICING_COPY.subtitle}
            />
          </FadeUp>

          <FadeUp delay={0.08}>
            <div className="pricing-grid">
              {PRICING_TIERS.map((tier) => (
                <article
                  key={tier.name}
                  className="pricing-card"
                  data-featured={tier.featured ? "true" : undefined}
                  data-accent={tier.accent ? "true" : undefined}
                >
                  <header className="pricing-card-header">
                    <div className="pricing-card-top">
                      {tier.badge ? (
                        <span className="pricing-badge">
                          <Star size={12} fill="currentColor" strokeWidth={0} />
                          {tier.badge}
                        </span>
                      ) : null}
                    </div>
                    <h3 className="pricing-title">{tier.name}</h3>
                    <p className="pricing-desc">{tier.description}</p>
                  </header>
                  <div className="pricing-separator" />
                  <div className="pricing-price-box">
                    <span className="pricing-price">{tier.price}</span>
                    <span className="pricing-period">{tier.period}</span>
                  </div>
                  <CtaButton href={APP_CTA_HREF} size="sm" fullWidth className="pricing-cta">
                    {tier.cta}
                  </CtaButton>
                  <ul className="pricing-features">
                    {tier.features.map((feature) => (
                      <li key={feature} className="pricing-feature">
                        <Check size={20} strokeWidth={2} className="pricing-check" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
