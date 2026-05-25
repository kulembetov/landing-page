import { PlusIcon } from "@/components/ui/icons";
import { FadeUp } from "@/components/ui/fade-up";
import { SectionHeader } from "@/components/ui/section-header";
import { FAQ_COPY, FAQ_ITEMS } from "@/lib/landing-content";

export function FAQ() {
  return (
    <section id="faq" className="landing-section" aria-labelledby="faq-title">
      <div className="section-panel section-panel-light">
        <div className="faq-container">
          <FadeUp>
            <SectionHeader section="faq" titleId="faq-title" title={FAQ_COPY.title} />
          </FadeUp>
          <FadeUp delay={0.08}>
            <div className="faq-list">
              {FAQ_ITEMS.map((item) => (
                <details key={item.q} className="faq-item">
                  <summary className="faq-summary">
                    <span className="faq-question">{item.q}</span>
                    <span className="faq-icon" aria-hidden="true">
                      <PlusIcon />
                    </span>
                  </summary>
                  <p className="faq-answer">{item.a}</p>
                </details>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
